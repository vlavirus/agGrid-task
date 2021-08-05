export const transformDate = (date: string | Date) => {
  const bufferDate = new Date(date);
  const transformedDate = [
    `0${bufferDate.getDate()}`,
    `0${bufferDate.getMonth() + 1}`,
    `${bufferDate.getFullYear()}`,
    `0${bufferDate.getHours()}`,
    `0${bufferDate.getMinutes()}`,
  ].map((component) => component.slice(-2));

  return `${transformedDate.slice(0, 3).join('.')} ${transformedDate.slice(3).join(':')}`;
};
