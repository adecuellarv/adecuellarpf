import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./json/en.json";
import spanish from "./json/es.json";

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources:{
        en: english,
        es: spanish
    },
    react:{
        useSuspense: false,
    }
});

export default i18next;