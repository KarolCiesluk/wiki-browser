import { defaultLanguageCode } from "common";

export const formatDate = jsonDate => {
  return new Date(jsonDate).toLocaleDateString(
    defaultLanguageCode,
    { month: "long", weekday: "long", day: "numeric", year: "numeric" }
  );
};