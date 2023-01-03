import { createContext } from "react";
import dictionary from "../Dictionary";

export const LanguageContext = createContext(dictionary.portuguese);