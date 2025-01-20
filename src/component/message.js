import React from 'react';
import { useTranslation } from 'react-i18next';
function Message() {
    const {t}=useTranslation()
    return (
        <>

            <p>"Thank you for joining our company! We are excited to have you with us and look forward to working together."
            </p>
        </>
    )
}
export default Message;