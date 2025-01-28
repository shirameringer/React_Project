import React from 'react';
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation()
  return (
    <div className="container mt-5">
      <h1 className="text-danger">{t('About')}</h1>
      <p className="text-black">{t('about.description')}</p>
      <button className="btn btn-outline-success">{t('about.button')}</button>
    </div>
  )

}
export default About;