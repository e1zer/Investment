import React, { Dispatch, SetStateAction, useState } from 'react';
import { NextPage } from "next";

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
  company: string,
  sellPrice: number,
  boughtPrice: number
}

const SellModal: NextPage<IModal> = ({isOpenModal, setIsOpenModal, company, sellPrice, boughtPrice}) => {
  const { sellStock, sellStockProfile } = useAction();

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleSell = () => {
    sellStock(company);  
    sellStockProfile({boughtPrice, sellPrice});
    setIsOpenModal(false);
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
          Sell an {company} Share for {sellPrice}$
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" mb={3}>
            You are about to sell a share of {company}. Confirm your action and sell the share
          </DialogContentText>  
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={handleClose}>Cancle</Button>
          <Button variant='outlined' onClick={handleSell} autoFocus>Yes, Sell</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SellModal;