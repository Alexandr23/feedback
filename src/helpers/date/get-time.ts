const padStart2 = (value: any): string => {
  return String(value).padStart(2, "0");
};

export const dateGetTime = (dateISO: string): string => {
  const date = new Date(dateISO);
  const hours = padStart2(date.getHours());
  const minutes = padStart2(date.getMinutes());
  const seconds = padStart2(date.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};
