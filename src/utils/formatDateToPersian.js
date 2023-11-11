const formatDateToPersian = (utcDateString) => {
  const year = utcDateString.slice(0, 4);
  const month = utcDateString.slice(4, 6);
  const day = utcDateString.slice(6, 8);
  const date = new Date(`${year}-${month}-${day}`);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    era: "long",
  };

  let formattedDate = new Intl.DateTimeFormat("fa", options).format(date);
  const persianDate = formattedDate.replace("هجری شمسی", "");
  return persianDate;
};

export default formatDateToPersian;
