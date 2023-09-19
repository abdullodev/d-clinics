import { Modal, Table } from "components";
import React, { Fragment, useState } from "react";

const StockComing = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Table
        tableTitle="Список оприходованных медикаментов"
        openModal={setOpen}
      />
      <Modal open={open} setOpen={setOpen}>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
        <h3>Hello</h3>
      </Modal>
    </Fragment>
  );
};

export default StockComing;
