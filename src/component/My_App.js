import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts'
import Home from './Home';
import Services from './Services';
import Message from './message';
import { useTranslation } from 'react-i18next';
import '../i18n';

function My_App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">Aboute</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contacts">Contacts</Link>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('he')}>עברית</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/message" element={<Message />}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default My_App;

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation(); // שימוש ב-i18next לשינוי שפה
  const [language, setLanguage] = useState(i18n.language); // שמירת השפה הנוכחית

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // שינוי השפה ב-i18next
    setLanguage(lang); // עדכון המצב בקונטקסט
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}