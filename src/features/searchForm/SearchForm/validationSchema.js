import * as Yup from "yup";

import { errorText } from "./errorText";
import { inputValueName } from "./inputValueName";

export const validationSchema = Yup.object({
  [inputValueName]: Yup.string().trim()
    .required(errorText),
});