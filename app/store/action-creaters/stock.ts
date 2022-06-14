import { StockAction, StockActionTypes } from "@store/types/stock";
import { IBuy } from "@store/types/stock";

export const updateStock = (): StockAction => {
  return {type: StockActionTypes.UPDATE}
}

export const buyStock = (payload: IBuy): StockAction => {
  return {type: StockActionTypes.BUY, payload}
}

export const sellStock = (payload: string): StockAction => {
  return {type: StockActionTypes.SELL, payload}
}