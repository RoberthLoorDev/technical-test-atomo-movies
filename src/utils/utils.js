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

export const formattDateForEachMovie = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${month} ${day}${daySuffix(day)} ${year}`;
};

//formater full url of the movie posters
export const formattUrlPosterMovie = (backdropPath, wsize) => {
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = wsize;
  return `${baseURL}${size}${backdropPath}`;
};

//formatt time movie in header info movie
export const formattMovieDuration = (minutos) => {
  const hours = Math.floor(minutos / 60);
  const remainingMinutes = minutos % 60;
  return `${hours} h ${remainingMinutes} min`;
};

//extract year from date
export const getYear = (date) => {
  const newDate = new Date(date);
  return newDate.getFullYear();
};

//formatt gender
export const formatGenresHomeMovie = (genres) => {
  return genres.map((genre) => genre.name).join(" · ");
};
