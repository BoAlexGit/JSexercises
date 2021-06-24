// pages/bookItem.js  react-step-9 (см. 7.64 Паттерны React)
// bookItem.js  react-step-9 (см. 7.65 Навигация в приложении с помощью React Router)
// описывает какие поля будут на этой странице
import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render () {
        return (
            <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}
