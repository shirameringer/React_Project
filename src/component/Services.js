import React from 'react';
import { useTranslation } from 'react-i18next';
function Services() {
  const { t } = useTranslation();
  return (
    <div className="container mt-5">
      <h1 className="text-danger">{t('Services')}</h1>
      <p className="text-black">{t('services.description')}</p>
      <button className="btn btn-outline-success">{t('services.button')}</button>
    </div>
  )

}
export default Services;