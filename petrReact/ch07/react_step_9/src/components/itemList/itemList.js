// itemList.js  react-step-9 (см. 7.64 Паттерны React)
import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
// чтобы наш компонент был независим пишем itemList
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
            const {id} = item;//объект который мы возвращаем на страницу

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
