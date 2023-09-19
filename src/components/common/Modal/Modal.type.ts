export interface IModal {
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  FORM_ID?: string;
  size?: string | undefined;
}
