import { atom } from "recoil";

export const EmailCheckAtom = atom({
  key: "EmailCheckKey",
  default: true,
});

export const EmailAtom = atom({
  key: "EmailKey",
  default: "",
});

export const PasswordAtom = atom({
  key: "PasswordKey",
  default: "",
});

export const SearchAtom = atom({
  key: "SearchContent",
  default: "",
});

export const SetAtom = atom({
  key: "SetKey",
  default: false,
});

export const SetPwAtom = atom({
  key: "SetPwKey",
  default: false,
});

export const fileImageAtom = atom({
  key: "fileImageKey",
  default: "",
});
