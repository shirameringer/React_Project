import React from 'react';
import { useTranslation } from 'react-i18next';
function About(){
    const {t}=useTranslation()
return(
    <p>{t('about.description')}</p>

    
)

}
export default About;