export const dateGetTime = (dateISO: string): string => {
  const date = new Date(dateISO);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
