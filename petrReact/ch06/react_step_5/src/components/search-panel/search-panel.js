/* 059 (<К>)Работа с формами в React react_step_5 */
import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e){
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}

/*import React from 'react';

import './search-panel.css'

const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    )
}

export default SearchPanel;

 */