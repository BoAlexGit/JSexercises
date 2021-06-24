// pages/bookPage.js  react_step_9_hoc(7.67  <K>Компоненты высшего порядка )
// описывает какие поля будут на этой странице
import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';// video-course 065/25:50

export class BooksPage extends Component { // HOC
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        /* ссылки video-course 065/20:00 */
        return (
            <ItemList
                /* ссылки video-course 065/23:10 */
            onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }
}
export default withRouter(BooksPage); // HOC