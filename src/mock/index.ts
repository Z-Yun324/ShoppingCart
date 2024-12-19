import Mock from "mockjs";

// 全局保存生成的商品，根據 ID 去重
const globalItemMap = new Map<number, any>();

Mock.mock("/item/categories", "get", () => {
  const categories = Mock.mock({
    "categories|3-5": [
      {
        "categoryId|+1": 1, // 自增ID
        categoryName: "@word", // 隨機單詞作為分類名稱
        "items|5-10": [
          {
            "id|+1": 1, // 自增ID，商品全局唯一
            name: "@ctitle(5, 10)", // 隨機生成5到10個字的商品名稱
            price: "@float(10, 100, 2, 2)", // 隨機價格，兩位小數
            description: "@csentence(10, 20)", // 隨機商品描述
            image: "@image('150x150', '#4A90E2', '#fff', 'Mock Image')", // 隨機生成圖片
            isNew: "@boolean", // 隨機生成新品標籤
            tags: [], // 商品标签初始化为空数组
            quantity: 0,
          },
        ],
      },
    ],
  });

  // 模拟商品属于多个分类，并为每个商品更新标签
  categories.categories.forEach((category: any) => {
    category.items.forEach((item: any) => {
      // 为每个商品添加分类 ID 以方便追踪
      item.categoryId = category.categoryId;

      if (globalItemMap.has(item.id)) {
        // 如果商品已存在，更新其 tags
        const existingItem = globalItemMap.get(item.id);
        const updatedTags = new Set([
          ...existingItem.tags,
          category.categoryName,
        ]); // 去重
        existingItem.tags = Array.from(updatedTags); // 更新 tags 并转为数组
      } else {
        // 如果是新商品，添加到全局 Map 并初始化 tags
        item.tags = [category.categoryName];
        globalItemMap.set(item.id, item);
      }
    });
  });

  // 更新每个分类的 items，确保数据正确性
  categories.categories.forEach((category: any) => {
    category.items = category.items.map((item: any) =>
      globalItemMap.get(item.id)
    );
  });

  return categories;
});
// 模擬 /api/items/{id} 接口，根據商品 id 返回對應商品詳細資料
Mock.mock(/\/api\/items\/\d+/, "get", (options) => {
  // 從 URL 中提取商品 id
  const itemId = options.url.match(/\/api\/items\/(\d+)/)[1];

  // 從全局的 Map 中查找該商品
  const item = globalItemMap.get(Number(itemId));

  if (item) {
    // 返回找到的商品資料
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      isNew: item.isNew,
      quantity: item.quantity,
    };
  } else {
    // 如果找不到該商品，返回 404 錯誤
    return {
      code: 404,
      message: "Item not found",
    };
  }
});
