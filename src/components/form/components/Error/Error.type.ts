import { FieldError } from "react-hook-form";

export interface IErrorType {
  // error?: { type: string; message: string; ref: { name: string } } | undefined;
  error: FieldError | undefined;
}
