// model/items.ts
export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  isNew?: boolean;
  tags: string[];

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    isNew: boolean = false,
    tags: string[] = []
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.isNew = isNew;
    this.tags = tags;
  }
}

export default class ItemCategory {
  categoryName: string;
  categoryId: number;
  items: Array<Item>;

  constructor(categoryName: string, categoryId: number, items: Array<Item>) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.items = items;
  }
}
