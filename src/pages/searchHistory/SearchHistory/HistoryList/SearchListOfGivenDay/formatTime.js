import { defaultLanguageCode } from "common";

export const formatTime = jsonDate => {
  return new Date(jsonDate).toLocaleTimeString(
    defaultLanguageCode,
    { hour: '2-digit', minute: '2-digit' }
  );
};