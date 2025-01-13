import moment from "moment";

const fileFormate = (url = "") => {
  const fileExtesion = url.split(".").pop();
  if (
    fileExtesion === "mp4" ||
    fileExtesion === "webm" ||
    fileExtesion === "ogg"
  )
    return "video";

  if (
    fileExtesion === "mp3" ||
    fileExtesion === "wav" ||
    fileExtesion === "ogg"
  )
    return "audio";

  if (
    fileExtesion === "jpg" ||
    fileExtesion === "jpeg" ||
    fileExtesion === "png" ||
    fileExtesion === "svg" ||
    fileExtesion === "gif"
  )
    return "image";

  return "file";
};

const transformImage = (url = "", width = 100) => url;

const getLast7Days = () => {
  const currenDate = moment();

  const last7Days = [];

  for (let i = 0; i < 7; i++) {
    const dayDate =currenDate.clone().subtract(i, "days");
    const dayName =dayDate.format("ddd");
    last7Days.unshift(dayName);
  }

  return last7Days;
};

export { fileFormate, transformImage, getLast7Days };
