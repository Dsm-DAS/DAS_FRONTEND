export const TypeChanger = (type: string) => {
  switch (type) {
    case "전공동아리":
      return "MAIN";
    case "창체동아리":
      return "SUB";
    case "자율동아리":
      return "FREE";
  }
};
