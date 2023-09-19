import { Fragment, useState } from "react";
import { Modal, Table } from "components";

const Documents = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Table tableTitle="Список документов" openModal={setOpen} />
      <Modal open={open} setOpen={setOpen} title="Список документов">
        <h3>Documents</h3>
        <h3>Documents</h3>
        <h3>Documents</h3>
        <h3>Documents</h3>
        <h3>Documents</h3>
        <h3>Documents</h3>
        <h3>Documents</h3>
      </Modal>
    </Fragment>
  );
};

export default Documents;
