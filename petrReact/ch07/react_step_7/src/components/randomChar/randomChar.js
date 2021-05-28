// React_step_7 - кнопка переключения случайного персонажа (см. 7.61)
import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../error/errorMessage';


export default class RandomChar extends Component {
    constructor() { //т.е. когда будет создан class RandomChar в нём будет вызван метод updateChar()
        super();
        this.updateChar();
    }
    gotService = new gotService();
    state = { //каждые несколько секунд будет перезаписываться сосотояние нашего компонента
        // и без этого нам никуда нужно получить все данные которые будет получать наше App
        // причём без хитростей стрелочных функций т.к. свойства следущее  обсалютно не зависит
        // от предыдущего video-course 61/06:37
        char : {},
        loading: true,
        error: false
    };

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false

        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar() {
        // video-course 061/05:00
        const id = Math.floor(Math.random()*140 + 25);
         //const id = 130000; // чтобы создать ошибку video-course 061/32:33
        this.gotService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);//обработка ошибок // video-course 061/32:02
    }

    render() {

        const {char, loading, error} = this.state; // данные из state
        const errorMessage = error ? <ErrorMessage/> : null;
        // video-course 061/24:33
        // video-course 061/30:00
        const spinner = loading ? <Spinner/> : null;
        // video-course 061/36:00
        const content = !(loading || error) ? <View char={char} /> : null;


        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
// video-course 061/26:00
const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}