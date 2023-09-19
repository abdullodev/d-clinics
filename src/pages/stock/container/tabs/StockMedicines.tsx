import { Modal, Table } from "components";
import { Fragment, useState } from "react";

const StockMedicines = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Table tableTitle="Список  медикаментов" openModal={setOpen} />
      <Modal open={open} setOpen={setOpen}>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
        <h3>Dorilar</h3>
      </Modal>
    </Fragment>
  );
};

export default StockMedicines;
