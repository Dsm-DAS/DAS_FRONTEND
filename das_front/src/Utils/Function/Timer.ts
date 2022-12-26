import moment from "moment";
import "moment/locale/ko";

export const CreatedDate = (created_at: string) => {
  const Make = created_at.slice(0, 10);
  const Make2 = created_at.slice(11, 19);
  return moment(`${Make} ${Make2}`, "YYYY-MM-DD HH:mm:ss").fromNow();
};

export const Deadline = (end_at: string = "2022-12-18") => {
  const date1 = moment();
  const date2 = moment(end_at);
  date1.format();
  date2.format();

  return date2.diff(date1, "days") + 1;
};
