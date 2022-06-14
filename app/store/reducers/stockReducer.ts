const _ = require('lodash');
import { IStock } from "app/types"
import stockData from "@data/stockData"
import { StockAction, StockActionTypes } from "@store/types/stock";
import getRandomNumber from "@utils/getRandomNumber";

const initialState: IStock[] = stockData;

export const stockReducer = (state = initialState, action: StockAction): IStock[] => {
  switch (action.type) {
    case StockActionTypes.UPDATE:
      let сopyForUpdate: IStock[] = _.map(state, _.clone); 
      
      сopyForUpdate = сopyForUpdate.map((elem: IStock) => {
        const newPrice = getRandomNumber(Math.round(elem.currentPrice / 15));
        const isIncrease = getRandomNumber(1) === 1;
        const resultPrice = isIncrease ? newPrice : -newPrice; 
        const percentDifference = Number((((elem.currentPrice+resultPrice)-elem.currentPrice) / elem.currentPrice).toFixed(3)); 

        let newSellPrice = elem.sellPrice;
        const discountPrice = Math.abs(percentDifference) * newSellPrice;
        percentDifference > 0 ? newSellPrice += discountPrice : newSellPrice -= discountPrice; 

        return {...elem, prevPrice: elem.currentPrice, currentPrice: elem.currentPrice+resultPrice, sellPrice: Math.round(newSellPrice)}
      })    

      return сopyForUpdate;

    case StockActionTypes.BUY: 
      let сopyForBuy: IStock[] = _.map(state, _.clone); 

      сopyForBuy = сopyForBuy.map((elem) => {
        if(elem.company === action.payload.company){
          return {...elem, boughtPrice: action.payload.price, isBought: true, sellPrice: action.payload.price}
        }else{
          return elem
        }
      })
      return сopyForBuy;

    case StockActionTypes.SELL: 
    let сopyForSell: IStock[] = _.map(state, _.clone);

    сopyForSell = сopyForSell.map((elem) => {
        if(elem.company === action.payload){
          return {...elem, boughtPrice: 0, isBought: false, sellPrice: 0}
        }else{
          return elem
        }
      })
      return сopyForSell;  
      
    default: return state
  }
}