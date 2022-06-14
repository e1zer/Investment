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

import { useAction } from '@hooks/useAction';

interface IModal {
  isOpenModal: boolean,
  setIsOpenModal: Dispatch<SetStateAction<boolean>>,
}

const IncreaseModal: NextPage<IModal> = ({isOpenModal, setIsOpenModal}) => {
  const maxDeposite = 450;
  const minDeposite = 10;
  const {increaseBalance} = useAction();
  
  const [payment, setPayment] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  
  const handleClose = () => {
    setIsOpenModal(false);
    setIsError(false); 
  };

  const handleBuy = () => {
    if(String(payment).length === 0 || payment <= minDeposite || payment >= maxDeposite){
      setIsError(true)
    }else{
      increaseBalance(Math.round(payment))
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
        <DialogTitle id="alert-dialog-title">Balance replenishment</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" mb={3}>
            You are about to replenish the balance. Specify the replenishment amount. Minimum deposit {minDeposite}$, maximum deposit {maxDeposite}$
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
          {isError && <Alert style={{marginTop: '1rem'}} severity="error">Empty field or top-up amount does not meet the limits</Alert>}        
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={handleClose}>Cancle</Button>
          <Button variant='outlined' onClick={handleBuy} autoFocus>Top up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default IncreaseModal;