import styled from "styled-components";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const ModalStyled = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px);
  }
  & .MuiPaper-root {
    width: 820px !important;
    max-width: 820px;
    min-height: 400px;
    max-height: 660px;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
    -moz-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
    box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    position: relative;
  }
`;

export const ModalHeaderStyled = styled(DialogTitle)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  padding-bottom: 10px !important;
  color: rgba(103, 119, 136, 1);
  font-size: 18px;
  font-weight: 500;

  & .MuiIconButton-root {
    position: absolute;
    top: 0px;
    right: 0;
    width: 25px;
    height: 25px;
    border-radius: 6px;
    background-color: #f9f4f4;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
    -moz-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
    box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);

    .icon {
      color: #dd4848;
      font-weight: 600;
      font-size: 18px;
    }

    &:hover {
      background-color: #f9f4f4;
    }
  }
`;

export const ModalContentStyled = styled(DialogContent)`
  /* margin-top: 30px; */
`;

export const ModalActionStyled = styled(DialogContent)`
  padding: 0 !important;
  display: flex;
  height: 45px;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;

  & .MuiButton-root {
    height: 27px;
    padding: 7px 20px !important;
    text-transform: inherit;
    border-radius: 5px;
    color: #ffffff;
    font-size: 12px;

    &.submit_btn {
      background-color: #28a745;
      &:hover {
        background-color: #18662a;
      }
    }
    &.close_btn {
      background-color: #bbbbbb;
      &:hover {
        background-color: #787777;
      }
    }
  }
`;
