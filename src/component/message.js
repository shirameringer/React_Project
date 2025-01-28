import React from 'react';
import { useTranslation } from 'react-i18next';
function Message() {
    const { t } = useTranslation()
    return (
        <div className="container mt-5">
            <h1 className="text-danger">{t('Message')}</h1>
            <p className="text-black">{t('message.description')}</p>
            <button className="btn btn-outline-success">{t('message.button')}</button>
        </div>
    )
}
export default Message;