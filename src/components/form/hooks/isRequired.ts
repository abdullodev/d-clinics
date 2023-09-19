import { ValidationRule } from "react-hook-form";

const isRequired = (
  required?: string | ValidationRule<boolean> | undefined
) => {
  if (!required) {
    return false;
  } else if (typeof required === "boolean") {
    return required;
  } else if (typeof required === "object") {
    return required?.value;
  } else return !!required;
};

export default isRequired;
