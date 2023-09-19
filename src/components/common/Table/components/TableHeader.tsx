import ControlledInput from "components/form/ControlledInput/ControlledInput";
import React from "react";
import {
  Actions,
  ButtonAdd,
  ButtonExport,
  Filter,
  TableHeaderStyled,
} from "./TableHeader.style";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddIcon from "@mui/icons-material/Add";
import ControlledAutocomplete from "components/form/ControlledAutocomplete/ControlledAutocomplete";

interface ITableHeader {
  filter?: React.ReactNode;
  openModal?: (val: boolean) => void;
  tableTitle?: string;
}
const TableHeader: React.FC<ITableHeader> = ({
  filter,
  openModal,
  tableTitle,
}) => {
  const { control } = useForm();

  const modalOpenHandler = () => {
    openModal?.(true);
  };

  return (
    <TableHeaderStyled>
      <header>{tableTitle}</header>
      {filter && (
        <Filter>
          <div className="filter_title">Фильтер</div>
          <div className="filter_contents">{filter}</div>
        </Filter>
      )}
      <Actions>
        <div className="show_records">
          <ControlledInput
            name="records"
            control={control}
            label={"Показать записи"}
            type="number"
          />
        </div>

        <div className="btns">
          <div className="search">
            <ControlledInput name="search" control={control} label={"Поиск:"} />
          </div>

          <ButtonExport variant="outlined">
            <GetAppIcon />
            Экспорт
          </ButtonExport>
          <ButtonAdd variant="outlined" onClick={modalOpenHandler}>
            <AddIcon />
            Добавить приход
          </ButtonAdd>
        </div>
      </Actions>
    </TableHeaderStyled>
  );
};

export default TableHeader;
