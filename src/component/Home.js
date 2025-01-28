import React from 'react';
import { useTranslation } from 'react-i18next';
function Home() {
  const { t } = useTranslation();
  return (
    <div className="container mt-5">
      <h1 className="text-danger">{t('Home')}</h1>
      <p className="text-black">{t('home.description')}</p>
    </div>
  )

}
export default Home;