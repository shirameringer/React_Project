import React from 'react';
import Message from './message';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <form>
      <label>{t('contacts.name')}</label>
      <input type="text" />
      <label>{t('contacts.email')}</label>
      <input type="email" />
      <label>{t('contacts.address')}</label>
      <input type="text" />
      <label>{t('contacts.telephone')}</label>
      <input type="text" />
      <button type="submit">{t('contacts.submit')}</button>
    </form>
  );
}

export default Contacts;
