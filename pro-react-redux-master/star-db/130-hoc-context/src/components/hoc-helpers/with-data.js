/*файл: ~/home/alex/js/react/star-db/src/components/hoc-helpers/with-data.js */
import React, { Component } from 'react';

import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
