import React, { Component } from 'react';
import { render } from 'react-dom';
import { Dropdown } from 'semantic-ui-react';
import './App.css';
import Countries from './components/countryMap';
import CountryGrid from './components/perCountryGrid';
import countryOptions from './components/countryOptions';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			countryData: [],
			oneCountryData: [],
			countryValue: "",
			loaded: false,
			placeholder: "Loading..."
		};
	};

	componentDidMount() {
		fetch('https://api.covid19api.com/summary')
		.then(response => response.json())
		.then(response => {
			this.setState({
				countryData: response.Countries,
			});
		})
		.catch(console.log)
	};

	handleSelectChange = (e, {value}) => {
		this.setState({
            countryValue: value
		});
		fetch(`https://api.covid19api.com/total/country/${value}`)
		.then(countryResponse => countryResponse.json())
		.then(countryResponse => {
			this.setState({
				oneCountryData: countryResponse
			})
		})
		.catch(console.log)
	};

	render () {
		const { value } = this.state.countryValue;
		return (
			<div>
				<Countries countryData={this.state.countryData} />
				<Dropdown
					placeholder='Select Country'
					search
					selection
					options={countryOptions}
					value={value}
					onChange={this.handleSelectChange}
            	/>
				<CountryGrid eachCountryData={this.state.oneCountryData} />
			</div>
		)
	}

};

export default App;

const app = document.getElementById('root');
render(<App />, app);