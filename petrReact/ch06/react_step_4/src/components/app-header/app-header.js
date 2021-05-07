/*import React from 'react';

import './app-header.css'

const AppHeader = () => {
    return (
        <div className="app-header d-flex">
            <h1>My_BoAlex</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </div>
    )
}

export default AppHeader;

 */
/* Вложение стиля при наведении на надпись изменяет цвет */
import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
     h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'yellow'}
        :hover {
            color: blue;
        }
   }
   h2 {
        font-size: 1.2rem;
        :hover {
            color: red;
        }
   }
`

const AppHeader = () => {
    return (
        <Header as = 'a'>
            <h1>My_BoAlex</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;