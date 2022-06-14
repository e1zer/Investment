export interface IStock { 
  company: string,
  description: string,
  currentPrice: number,
  prevPrice: number,
  boughtPrice: number,
  isBought: boolean,
  sellPrice: number,
  img: any
}

export interface IProfile { 
  balance: number,
  purchasedShares: number,
  amountOfPurchases: number,
  сontributedMoney: number,
  salesIncome: number
}