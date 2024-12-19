// model/items.ts
export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  isNew: boolean; // 将 isNew 改为非可选属性
  tags: string[];
  quantity: number = 1;

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    isNew: boolean = false, // 仍然保持默认值
    tags: string[] = [],
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.isNew = isNew;
    this.tags = tags;
    this.quantity = quantity;
  }
}

export class ItemCategory {
  categoryName: string;
  categoryId: number;
  items: Item[];

  constructor(categoryName: string, categoryId: number, items: Item[]) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.items = items;
  }
}
