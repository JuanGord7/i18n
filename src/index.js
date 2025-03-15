import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";
import './styles.css';

// Mapear los mensajes disponibles
const messages = {
  es: localeEsMessages,
  en: localeEnMessages,
};

const App = () => {
  const browserLanguage = navigator.language.split("-")[0];
  const defaultLocale = messages[browserLanguage] ? browserLanguage : "en";
  const [locale, setLocale] = useState(defaultLocale);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "en" ? "es" : "en"));
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      
      <JobsList locale={locale} />
      <button onClick={toggleLocale}>
        <FormattedMessage id={locale === "en" ? "SwitchToSpanish" : "SwitchToEnglish"} />
      </button>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));