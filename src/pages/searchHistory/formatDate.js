export const formatDate = jsonDate => {
  return new Date(jsonDate).toLocaleDateString(
    "en",
    { month: "long", weekday: "long", day: "numeric", year: "numeric" }
  );
};