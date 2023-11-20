export const stringToDate = (inputDate: string) => {
  const dateObject = new Date(inputDate);

  const formattedDate = `${String(dateObject.getFullYear()).slice(-2)}.${String(
    dateObject.getMonth() + 1,
  ).padStart(2, "0")}.${String(dateObject.getDate()).padStart(2, "0")}`;

  return formattedDate;
};

export const getDaysDifference = (durationStart: string) => {
  const startDate = new Date(durationStart);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
};
