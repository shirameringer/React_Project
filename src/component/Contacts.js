import React from 'react';
import Message from './message';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h1 className="text-danger">{t('Contacts')}</h1>
      <form>
        <div className="mb-3">
          <label className="form-label text-black">{t('contacts.name')}</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label text-black">{t('contacts.email')}</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label text-black">{t('contacts.address')}</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label text-black">{t('contacts.telephone')}</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-outline-success">{t('contacts.submit')}</button>
      </form>
    </div>
  );
}

export default Contacts;
