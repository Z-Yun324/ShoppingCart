import { MockMethod } from "vite-plugin-mock";

// 用户信息数据：模拟返回用户数据列表
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token", // 这个是模拟的 token，后续根据 token 来获取用户信息
    },
    {
      userId: 2,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token", // 另一个用户的 token
    },
  ];
}

const mockApiList = [
  // 用户登录接口
  {
    url: "/api/user/login", // 请求地址
    method: "POST", // 请求方式
    response: ({ body }) => {
      // 获取请求体携带过来的用户名与密码
      const { username, password } = body;

      // 调用获取用户信息函数，用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );

      // 如果没有找到对应的用户，则返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: "帳號或密碼不正確" } };
      }

      // 如果找到用户，则返回成功的 token 信息
      const token = checkUser.token;
      return { code: 200, data: { token } };
    },
  },

  //获取用户信息接口
  {
    url: "/api/user/info", // 请求地址
    method: "get", // 请求方式
    response: (request) => {
      // 获取请求头携带的 token
      const token = request.headers.token;

      // 根据 token 查找用户信息
      const checkUser = createUserList().find((item) => item.token === token);

      // 如果没有找到对应的用户，则返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: "获取用户信息失败" } };
      }

      // 如果找到用户，返回该用户的信息
      return { code: 200, data: { checkUser } };
    },
  },
] as MockMethod[];

export default mockApiList.map((item: any) => {
  return {
    ...item,
    url: `${item.url}`,
  };
});
