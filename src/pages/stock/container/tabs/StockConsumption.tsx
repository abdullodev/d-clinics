import { Modal, Table } from "components";
import React, { Fragment, useState } from "react";

const StockConsumption = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Table tableTitle="Список выданных медикаментов" openModal={setOpen} />
      <Modal open={open} setOpen={setOpen}>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
        <h3>Salom</h3>
      </Modal>
    </Fragment>
  );
};

export default StockConsumption;
