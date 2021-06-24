// itemList.js react_step_9_hoc (см. 7.67<K>Компоненты высшего порядка )
import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
//import PropTypes from 'prop-types';
import gotService from '../../services/gotService'; // чтоб сработала getAllCharacters
//import {render} from "react-dom";
//import renderItem from '../pages/booksPages';

// поскольку class ItemList не содержит ни какого state = {} его правильнее переделать
// в функцию стрелки
//class ItemList extends Component {
const ItemList = (label) => { //перейти на функцию не получилось
    return class extends Component {
        renderItems(arr) {
            return arr.map((item) => {
                const {id} = item;

                const label = this.props.renderItem(item);

                return (
                    <li
                        key={id}
                        className="list-group-item"
                        onClick={() => this.props.onItemSelected(id)}>
                        {label}
                    </li>
                )
            })
        }

        render() {
            const {data} = this.props;
            const items = this.renderItems(data);


            return (
                <ul className="item-list list-group">
                    {items}
                </ul>
            );
        }

    }
}
/********************************************************************************************
// video-course 066/04:00 прописываем свойство которое просто принимает в себя объект
// и этот объект позволяет установить пропсы по умолчанию если они вдруг не переданы
// если передать пустую функцию то ошибки не будет
ItemList.deffaultProps = {
    onItemSelected: () => {}
}
// video-course 066/13:25
ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    //getData: PropTypes.arrayOf(PropTypes.object) //просто для примера
}

******************************************************************************/
// лучше функцию withData()  вынести в отдельный компонент и сделать её ущё более универсальной
const withData = (View, getData) => {
     return class extends Component{ // безымянный класс
         state = {
             data: null
         }

         componentDidMount() {
             // функция приходит теперь как параметр (video-course 067/09:40)
             //const {getData} = this.props;  // video-course 067/07:20

             getData()
                 .then( (data) => {
                     this.setState({
                         data
                     })
                 })
         }
         render() {
             const {data} = this.state;

             if (!data) {
                 return <Spinner/>
             }
             return <View {...this.props} data = {data}/> /*video-course 067/07:20*/
         }
     }
}
// и теперь нам необходимо создать новый экземпляр функции getAllChracters
const {getAllCharacters} = new gotService();

export default withData(ItemList(), getAllCharacters);
