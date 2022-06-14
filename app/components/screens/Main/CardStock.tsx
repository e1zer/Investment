import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { IStock } from "app/types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import BuyModal from "@UI/modal/BuyModal";

import cn from "classnames";
import styles from "./Main.module.scss";

interface ICard{
  stock: IStock
  percentDifference: number
}

const CardStock: NextPage<ICard> = ({stock, percentDifference}) => {  
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return(
    <>
      <Box>
        <Card sx={{ maxWidth: 410 }}>
          <Image src={stock.img} alt="Company logotype" width={410} height={220} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {stock.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stock.description} 
            </Typography>

            <Grid container spacing={2} columns={16} mt={1}>
              <Grid item xs={8}>
                <div className={styles.box}>
                  <p className={styles.box_title}>Past price</p>
                  <p className={styles.box_value}>{stock.prevPrice}</p>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className={styles.box}>
                  <p
                    className={cn(
                      styles.box_title,
                      stock.currentPrice > stock.prevPrice
                        ? styles.box_promotion
                        : styles.box_fall
                    )}
                  >
                    {`Current price (${percentDifference > 0 ? "+" : ""}${percentDifference}%)`}
                  </p>
                  <p className={styles.box_value}>{stock.currentPrice}</p>
                </div>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ marginTop: "1rem" }}>
            <Button size="small" variant="outlined" disabled={stock.isBought} onClick={() => setIsOpenModal(true)}>Buy</Button>
            <Button size="small" variant="outlined" disabled={!stock.isBought} onClick={() => router.push('/profile')}>Sell</Button>
          </CardActions>
        </Card>
        <BuyModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} company={stock.company}/>
      </Box>
    </>
  )
};

export default CardStock;
