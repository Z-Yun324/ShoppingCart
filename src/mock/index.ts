import Mock from "mockjs";

// 假資料定義
Mock.mock("/item/categories", "get", {
  "categories|3-5": [
    // 模擬3-5個分類
    {
      "categoryId|+1": 1, // 自增ID
      categoryName: "@word", // 隨機單詞作為分類名稱
      "items|5-10": [
        // 每個分類包含5-10個商品
        {
          "id|+1": 1, // 自增ID
          name: "@ctitle(5, 10)", // 隨機生成5到10個字的商品名稱
          price: "@float(10, 100, 2, 2)", // 隨機價格，兩位小數
          description: "@csentence(10, 20)", // 隨機商品描述
          image: "@image('150x150', '#4A90E2', '#fff', 'Mock Image')", // 隨機生成圖片
          isNew: "@boolean", // 隨機生成新品標籤
          tags: ["tag1", "tag2"], // 固定標籤範例
        },
      ],
    },
  ],
});
