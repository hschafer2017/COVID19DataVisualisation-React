import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import countryOptions from './countryOptions';


const CountrySearch = () => (
  <Dropdown
    placeholder='Select Country'
    search
    selection
    options={countryOptions}
  />
)

export default CountrySearch;