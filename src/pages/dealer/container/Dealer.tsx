import { ControlledAutocomplete, Modal, Table } from "components";
import { Fragment, useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

const Dealer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { control } = useForm();

  return (
    <Fragment>
      <Table tableTitle="Список дилеров" openModal={setOpen} />
      <Modal open={open} setOpen={setOpen} title="Diller">
        <form>
          <Box className="modal-box-content">
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"КОД ДОКУМЕНТА"}
                />
              </Grid>
              <Grid item sm={4}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"КОД  СПИСОК МЕДИКАМЕНТОВ"}
                />
              </Grid>
              <Grid item sm={4}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"ДИЛЕР"}
                />
              </Grid>
            </Grid>
          </Box>

          <Box className="modal-box-content">
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"МЕДИКАМЕНТ"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"СКЛАД"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"КОЛИЧЕСТВО"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"КОЛИЧЕСТВО ВЗЯТОГО"}
                />
              </Grid>

              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"ЕДИНИЦА ИЗМЕРЕНИЯ"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"ЕДИНИЦА ИЗМЕРЕНИЯ ВЗЯТОГО"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"ДАТА РЕГИСТРАЦИИ"}
                />
              </Grid>
              <Grid item sm={6}>
                <ControlledAutocomplete
                  control={control}
                  name="name1"
                  label={"ДАТА ОПРИХОДОВАНИЕ"}
                />
              </Grid>
            </Grid>
          </Box>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Dealer;
