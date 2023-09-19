import { Control, FieldValues, RegisterOptions } from "react-hook-form";

export type IControlledType<T> = T & {
  defaultValue?: string | undefined;
  label?: string | undefined;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, any>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  control: Control<FieldValues, any>;
  onChange?: (value: any[]) => void;
};
