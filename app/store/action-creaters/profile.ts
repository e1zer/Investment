import { ProfileAction, ProfileActionTypes } from "@store/types/profile";
import { ISellStock } from "@store/types/profile";

export const increaseBalance = (payload: number): ProfileAction => {
  return {type: ProfileActionTypes.INCREASE_BALANCE, payload}
}

export const buyStockProfile = (payload: number): ProfileAction => {
  return {type: ProfileActionTypes.BUY_STOCK, payload}
}

export const sellStockProfile = (payload: ISellStock): ProfileAction => {
  return {type: ProfileActionTypes.SELL_STOCK, payload}
}