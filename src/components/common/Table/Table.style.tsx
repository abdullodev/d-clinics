import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
  -moz-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
  box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);

  & .MuiDataGrid-columnHeaders {
    background-color: #6f919f;
    color: #ffffff;
  }

  & .MuiDataGrid-virtualScrollerContent {
    max-height: 520px !important;
  }

  & .MuiDataGrid-row {
    &:nth-child(1) {
      .MuiDataGrid-cell {
        border-top: none;
      }
    }
    &:last-child {
      .MuiDataGrid-cell {
        border-bottom: none;
        border-collapse: collapse;
      }
    }
    .MuiDataGrid-cell {
      border: 1px solid #e2dfdf;
      border-collapse: collapse;
    }
  }
`;
