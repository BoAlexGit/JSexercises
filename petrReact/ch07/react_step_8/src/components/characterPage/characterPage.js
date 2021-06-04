// react_step_8 - Жизненный цикл компонентов (см. 7.62-63)
// отдельный компонент вверху справа "Characters"
import React, {Component} from 'react';
//import {Col, Row, Container} from 'reactstrap';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../error';

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId = {this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}