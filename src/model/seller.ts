// model/seller.ts
export class Seller {
  sellerId: number;
  sellerName: string;

  constructor(sellerId: number, sellerName: string) {
    this.sellerId = sellerId;
    this.sellerName = sellerName;
  }
}
