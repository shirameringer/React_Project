import React from 'react';
import { useTranslation } from 'react-i18next';
function Services(){
    const {t}=useTranslation();
return(
    <p>{t('services.title')}</p>
)

}
export default Services;