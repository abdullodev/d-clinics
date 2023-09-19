import styled from "styled-components";
import { Button } from "@mui/material";

export const TableHeaderStyled = styled.div`
  header {
    padding: 20px;
    padding-bottom: 40px;
    text-align: center;
    font-size: 22px;
    color: #516377;
    font-weight: 500;
  }
`;
export const Filter = styled.div`
  padding: 35px 20px 60px 20px;
  border-top: 1px solid rgba(103, 119, 136, 0.37);
  border-bottom: 1px solid rgba(103, 119, 136, 0.37);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  flex-direction: column;

  & .filter_title {
    color: #516377;
    font-size: 16px;
    font-weight: 500;
  }
  & .filter_contents {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 20px 20px 20px;

  .btns {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;
  }
`;

export const ButtonExport = styled(Button)`
  background-color: #e5edfc !important;
  color: #5a8dee !important;
  font-size: 15px !important;
  text-transform: inherit !important;
  border: none !important;
`;
export const ButtonAdd = styled(Button)`
  background-color: #5a8dee !important;
  color: #ffffff !important;
  font-size: 15px !important;
  text-transform: inherit !important;
  border: none !important;
`;
