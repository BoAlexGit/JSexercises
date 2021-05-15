/* 059 (<К>)Работа с формами в React react_step_5 */
import React, {Component} from 'react';

import './post-status-filter.css';


export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ];
    }
    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type='button'
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
/*import React from 'react';

import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className='btn btn-info'>Все</button>
            <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;

 */
