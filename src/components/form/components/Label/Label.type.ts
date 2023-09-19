import { ValidationRule } from "react-hook-form";

export interface ILabelType {
  htmlFor?: string;
  required?: string | ValidationRule<boolean> | undefined;
  children?: string | undefined;
}
