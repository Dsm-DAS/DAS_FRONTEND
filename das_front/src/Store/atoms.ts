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