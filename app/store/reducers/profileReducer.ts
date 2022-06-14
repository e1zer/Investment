import { IProfile } from "app/types"
import profileData from "@data/profileData"
import { ProfileAction, ProfileActionTypes } from "@store/types/profile";

const initialState: IProfile = profileData;

export const profileReducer = (state = initialState, action: ProfileAction): IProfile=> {
  switch (action.type){
    case ProfileActionTypes.INCREASE_BALANCE:
      return {...state, 
        balance: state.balance+action.payload,
        сontributedMoney: state.сontributedMoney+action.payload
      }   
    
    case ProfileActionTypes.BUY_STOCK:
      return {...state,  
        balance: state.balance-action.payload, 
        purchasedShares: state.purchasedShares + 1, 
        amountOfPurchases: state.amountOfPurchases + action.payload 
      }  
    
    case ProfileActionTypes.SELL_STOCK:
      return {...state, 
        balance: state.balance+action.payload.sellPrice,
        salesIncome: state.salesIncome+(action.payload.sellPrice-action.payload.boughtPrice)
      }
    
    default: return state;
  }
}