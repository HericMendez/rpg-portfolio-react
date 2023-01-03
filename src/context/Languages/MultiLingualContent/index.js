import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";
import dictionary from "../Dictionary";


export default function MultiLingualContent({ contentID }) {
    const { language } = useContext(LanguageContext);
  
    return dictionary[language][contentID];
  }