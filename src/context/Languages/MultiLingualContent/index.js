import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";
import { dictionary } from "../LanguageContext";

export default function MultiLingualContent({ contentID }) {
  const { language } = useContext(LanguageContext);
  return dictionary[language][contentID];
}
