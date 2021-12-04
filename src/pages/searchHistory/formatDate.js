export const formatDate = jsonDate => {
  return new Date(jsonDate).toLocaleDateString(
    undefined,
    { month: "long", weekday: "long", day: "numeric", year: "numeric" }
  );
};