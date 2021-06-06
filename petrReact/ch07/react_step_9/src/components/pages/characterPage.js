// characterPage.js  react-step-9 (см. 7.64 Паттерны React)
import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: null,
        error: false
    }

    onItemSelected = (id) => {
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
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
// функция renderItem берёт объект (item === {name, gender} )  и возвращает => только то что нужно
// video-course 064/13:21
// рядом с именем будет пол персонажа в скобках
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    }
}