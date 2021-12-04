export const formatTime = jsonDate => {
  return new Date(jsonDate).toLocaleTimeString(
    undefined,
    { hour: '2-digit', minute: '2-digit' }
  )
};