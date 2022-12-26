import { IClubType } from "../../interfaces/Enums";

export const ClubTypeFunc = (type: IClubType) => {
  switch (type) {
    case "MAIN":
      return "전공동아리";
    case "SUB":
      return "창체동아리";
    case "FREE":
      return "자율 동아리";
  }
};
