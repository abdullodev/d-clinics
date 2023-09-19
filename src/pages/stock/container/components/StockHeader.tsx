import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const StockHeader = () => {
  return (
    <div className="content-details">
      <div className="details-title">Склад : Главный</div>
      <Grid container>
        <Grid item sm={3}>
          <div className="details-text">
            <Typography>Наименование </Typography>
            <Typography> : Главный</Typography>
          </div>
          <div className="details-text">
            <Typography>Сотрудники </Typography>
            <Typography>
              :Камрон Хамроевич Олимов <br />
              Элвира Адамовна Рустамова
            </Typography>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="details-text">
            <Typography>Этаж </Typography> <Typography> : 1</Typography>
          </div>
          <div className="details-text">
            <Typography>Комната </Typography> <Typography> : 101</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StockHeader;
