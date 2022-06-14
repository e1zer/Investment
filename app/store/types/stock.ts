export interface IBuy {
  company: string, 
  price: number
}

export enum StockActionTypes { 
  UPDATE = 'UPDATE',
  BUY = 'BUY',
  SELL = 'SELL'
}

interface UpdateAction {
  type: StockActionTypes.UPDATE,
}

interface BuyAction {
  type: StockActionTypes.BUY,
  payload: IBuy
}

interface SellAction {
  type: StockActionTypes.SELL,
  payload: string
}

export type StockAction = UpdateAction | BuyAction | SellAction;


