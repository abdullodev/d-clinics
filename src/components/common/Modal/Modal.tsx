import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { FC } from "react";
import {
  ModalActionStyled,
  ModalContentStyled,
  ModalHeaderStyled,
  ModalStyled,
} from "./Modal.style";
import { IModal } from "./Modal.type";

const Modal: FC<IModal> = ({ title, open, setOpen, children, FORM_ID }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalStyled
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <ModalHeaderStyled>
        {title || ""}
        <IconButton onClick={handleClose}>
          <CloseIcon className="icon" />
        </IconButton>
      </ModalHeaderStyled>
      <ModalContentStyled>{children}</ModalContentStyled>
      <ModalActionStyled>
        {FORM_ID && (
          <Button type="submit" form={FORM_ID} className="submit_btn">
            Сохранить
          </Button>
        )}
        <Button onClick={handleClose} className="close_btn">
          Отмена
        </Button>
      </ModalActionStyled>
    </ModalStyled>
  );
};

export default Modal;
