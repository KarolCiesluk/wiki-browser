export const formatJsonDate = jsonDate => {
  return new Date(jsonDate).toLocaleDateString(
    undefined,
    { month: "long", weekday: "long", day: "numeric", year: "numeric" }
  );
};