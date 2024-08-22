export const formattDateToNavbar = (date) => {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Cambia a true si quieres un formato AM/PM
  });

  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  return `${formattedDate} • ${formattedTime}`;
};
