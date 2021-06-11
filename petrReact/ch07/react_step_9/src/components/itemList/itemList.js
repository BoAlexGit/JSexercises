// itemList.js  react-step-9 (см. 7.64 Паттерны React)
import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }
// video-course 064/07:20 что происходит (повторение)
    componentDidMount() {
        const {getData} = this.props;
// чтобы наш компонент был независим мы charList поменяем на общее itemList
// следовательно уберём привязку к отдельным параметрам персонажа
       getData()// video-course 064/03:41
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }
// video-course 064/12:30
    renderItems(arr) {
        return arr.map((item) => {
<<<<<<< HEAD
            const {id} = item;
            /* video-course 064/13:30*/
=======
            const {id} = item;//объект который мы возвращаем на страницу

>>>>>>> 2af8ad849d2bca7fbb169e1d3a2cd7730b564444
            const label = this.props.renderItem(item);

            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);


        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
