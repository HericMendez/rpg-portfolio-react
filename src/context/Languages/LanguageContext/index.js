import { createContext } from "react";
import portuguese from "../Dictionaries/portuguese";
import english from "../Dictionaries/english";

export const dictionary = {
  portuguese: portuguese,
  english: english,
};

export const LanguageContext = createContext(dictionary.portuguese);
