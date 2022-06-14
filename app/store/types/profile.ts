export interface ISellStock {
  boughtPrice: number,
  sellPrice: number
}

export enum ProfileActionTypes {
  INCREASE_BALANCE = 'INCREASE_BALANCE',
  BUY_STOCK = 'BUY_STOCK',
  SELL_STOCK = 'SELL_STOCK',
}

interface INCREASE_BALANCE {
  type: ProfileActionTypes.INCREASE_BALANCE,
  payload: number
}

interface BUY_STOCK {
  type: ProfileActionTypes.BUY_STOCK,
  payload: number
}

interface SELL_STOCK {
  type: ProfileActionTypes.SELL_STOCK,
  payload: ISellStock
}

export type ProfileAction = INCREASE_BALANCE | BUY_STOCK | SELL_STOCK;
