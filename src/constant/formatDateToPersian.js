import { fa } from "date-fns/locale";
import { compareAsc, format, newDate } from "date-fns-jalali";

const formatDateToPersian = (utcDateString) => {
  const year = utcDateString.slice(0, 4);
  const month = utcDateString.slice(4, 6);
  const day = utcDateString.slice(6, 8);

  // Create a new Date object using the extracted values
  const date = new Date(`${year}-${month}-${day}`);

  // Define the desired date options for formatting
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: "persian",
  };

  // Format the date using the desired options
  const formattedDate = date.toLocaleDateString("fa-IR", options);
  return formattedDate;
};

export default formatDateToPersian;
