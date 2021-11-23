import * as Yup from "yup";

import inputValueName from "common/inputValueName";
import { errorText } from "./errorText";

export const validationSchema = Yup.object({
  [inputValueName]: Yup.string().trim()
    .required(errorText)
    .nullable()
});