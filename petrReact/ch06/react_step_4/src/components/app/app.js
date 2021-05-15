/* 058 Практика. Создаем собственные события и работаем с иммутабильностью react_step_4 */
import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
/* преобразуем const App = () => {. . .} в class, чтобы можно было
управлять стэйтами   */
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3},
                {label: 'I need a something...', important: false, id: 3}
            ]
        };
// определение методов класса
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
// Создаём нужные методы класса 12:38
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
// Создаём новый массив т.к. напрямую старый менять нельзя 15:25
            const before = data.slice(0, index);// до удаляемого элемента
            const after = data.slice(index + 1);// после удаляемого элемента

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }
// Функция добавления поста 21:30 обычно делается на сервере
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
// return const App помещаем в render lstn:
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data} /*добавим this.state.... */
                    onDelete={ this.deleteItem}/> {/*добавим метод для удаления */}
                <PostAddForm
                    onAdd={this.addItem}/>{/*добавим метод для добавления */}
            </div>
        )
    }
}

/* styled-component позволяет работать уже с готовыми компонентами см. =>057 react_step_35 .  .  ./25:15
import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;
// теперь как-бы унаследуем styled-component
//используются `` скобки бэктик
const StyledAppBlock = styled(AppBlock)` 
    background-color: yellow;
`;


const App = () => {
// эти данные мы якобы получаем с сервера (иммитация)
    const data = [
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'That is so good', important: false, id: 2},
        {label: 'I need a break...', important: false, id: 3}
    ]
    return (
        <StyledAppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </StyledAppBlock>
    )
}

export default App;

 */