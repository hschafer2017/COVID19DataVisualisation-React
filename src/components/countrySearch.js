import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import countryOptions from './countryOptions';

class CountrySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryValue : ""
        };
    };

    handleSelectChange = (e, {value}) => 
        this.setState({
            countryValue:value
        });

    render () {
        const { value } = this.state.countryValue;
        return (
            <Dropdown
              placeholder='Select Country'
              search
              selection
              options={countryOptions}
              value={value}
              onChange={this.handleSelectChange}
            />
        )
    };
};

export default CountrySearch;