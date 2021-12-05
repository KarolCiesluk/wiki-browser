export const formatTime = jsonDate => {
  return new Date(jsonDate).toLocaleTimeString(
    "en",
    { hour: '2-digit', minute: '2-digit' }
  )
};