import React from 'react';
import './Politics.scss';

function openPdf(url) {
  window.open(url, '_blank'); // Открыть PDF в новой вкладке
}

export default function Politics() {
    return(
        <div className="container_politics">
            <div>
                <div className='INN_politics'>© 2024 LETSGOFAR.EU</div>
                <div>ИНН: 770207614730</div>
            </div>
            <div onClick={() => openPdf('/path_to_privacy_policy.pdf')}>
                Политика конфиденциальности
            </div>
            <div onClick={() => openPdf('/path_to_terms_of_use.pdf')}>
                Условия использования
            </div>
            <div onClick={() => openPdf('/path_to_offer_agreement.pdf')}>
                Договор-оферта
            </div>
        </div>
    );
}
