import { Modal, Table } from "components";
import { Fragment, useState } from "react";

const Dealer = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Table tableTitle="Список дилеров" openModal={setOpen} />
      <Modal open={open} setOpen={setOpen}>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
        <h3>Dealer</h3>
      </Modal>
    </Fragment>
  );
};

export default Dealer;
