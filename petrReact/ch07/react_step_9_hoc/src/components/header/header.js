// header.js  react-step-9 (см. 7.64 Паттерны React)
// header.js  react-step-9 (см. 7.65 Навигация в приложении с помощью React Router)
import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </h3>
            {/* ссылки video-course 065/06:50 */}
            <ul className="header-list">
                <li>
                    {/* компонент Link-умная ссылка video-course 065/08:55,
                     относительные пути video-course 065/29:10 */}
                    <Link to='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses/'>Houses</Link>
                </li>
                <li>
                    <Link to='/books/'>Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;


/*********************************************************************************************/
