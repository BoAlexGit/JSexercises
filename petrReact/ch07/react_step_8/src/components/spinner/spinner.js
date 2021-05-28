// React_step_7 - кнопка переключения случайного персонажа (см. 7.61)
// Спинер для загрузки данных о персонаже video-course 061/22:30
import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-spin"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
    )
}

export default Spinner;