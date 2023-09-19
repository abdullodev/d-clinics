import { Fragment, useState } from "react";
import { Modal, Table } from "components";

const Pharmacies = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Table tableTitle="Список  аптек" openModal={setOpen} />

      <Modal open={open} setOpen={setOpen} title="Pharmacies">
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
        <h2>Pharmacies</h2>
      </Modal>
    </Fragment>
  );
};

export default Pharmacies;
