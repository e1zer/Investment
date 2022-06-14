import React, { Dispatch, SetStateAction, useState } from 'react';
import { NextPage } from "next";

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useTypedSelector } from "@hooks/useTypedSelector";
import { useAction } from '@hooks/useAction';

interface IModal {
  isOpenModal: boolean,
  setIsOpenModal: Dispatch<SetStateAction<boolean>>,
  company: string
}

const BuyModal: NextPage<IModal> = ({isOpenModal, setIsOpenModal, company}) => {
  const {balance} = useTypedSelector(state => state.profileReducer)
  const {buyStock, buyStockProfile} = useAction();
  

  const [payment, setPayment] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  
  const handleClose = () => {
    setIsOpenModal(false);
    setIsError(false); 
  };

  const handleBuy = () => {
    if(String(payment).length === 0 || balance < payment || payment < 10){
      setIsError(true)
    }else{
      buyStock({company, price: payment});
      buyStockProfile(payment)
      setPayment(0);
      setIsError(false)
      setIsOpenModal(false);
    }
  };

  return (
    <div>
      <Dialog
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Buying an {company} Share
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" mb={3}>
            You are about to buy a share of {company}. Specify the amount and confirm the payment
          </DialogContentText>
          <TextField
            id="outlined-number"
            label="Specify the amount, $"
            value={payment}
            onChange={(e) => setPayment(Number(e.target.value))} 
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {isError && <Alert style={{marginTop: '1rem'}} severity="error">Insufficient funds or empty field. Minimum purchase amount 10$</Alert>}        
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={handleClose}>Cancle</Button>
          <Button variant='outlined' onClick={handleBuy} autoFocus>Yes, I buy</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BuyModal;