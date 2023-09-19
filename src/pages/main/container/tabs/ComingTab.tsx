import { ControlledAutocomplete, Modal, Table } from "components";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import MainModalForm from "../components/MainModalForm";

const ComingTab = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { control } = useForm();

  const filter = (
    <Fragment>
      <ControlledAutocomplete
        name="name1"
        control={control}
        defaultValue={"Name"}
        disableClearable
      />
      <ControlledAutocomplete name="name2" control={control} />
      <ControlledAutocomplete name="name3" control={control} />
      <ControlledAutocomplete name="name4" control={control} />
      <ControlledAutocomplete name="name5" control={control} />
      <ControlledAutocomplete name="name6" control={control} />
    </Fragment>
  );

  return (
    <Fragment>
      <Table
        filter={filter}
        openModal={setOpen}
        tableTitle="Список оприходованных медикаментов"
      />
      <Modal
        open={open}
        setOpen={setOpen}
        title="Оприходование медикамента : Парацетамол"
      >
        <MainModalForm />
      </Modal>
    </Fragment>
  );
};

export default ComingTab;
