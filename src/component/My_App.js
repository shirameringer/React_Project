import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts'
import Home from './Home';
import Services from './Services';
import Message from './message';
import { useTranslation } from 'react-i18next';
import '../i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

function My_App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* <Link className="navbar-brand text-danger fw-bold" to="/">My App</Link> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <button 
              className="btn btn-outline-success me-2" 
              onClick={() => changeLanguage('en')}>
              English
            </button>
            <button 
              className="btn btn-outline-danger" 
              onClick={() => changeLanguage('he')}>
              עברית
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
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