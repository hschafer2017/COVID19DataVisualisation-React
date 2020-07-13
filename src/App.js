import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Countries from './components/countryMap';
import CountryGrid from './components/perCountryGrid';
import CountrySearch from './components/countrySearch';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			countryData: [],
			oneCountryData: [],
			loaded: false,
			placeholder: "Loading..."
		};
	};

	componentDidMount() {
		Promise.all([
			fetch('https://api.covid19api.com/summary'),
			fetch('https://api.covid19api.com/total/country/united-states')
		])
		.then(([response, response1]) => Promise.all([response.json(), response1.json()]))
		.then(([response, response1]) => {
			this.setState({
				countryData: response.Countries,
				oneCountryData: response1
			});
		})
		.catch(console.log)
	};

	render () {
		return (
			<div>
				<Countries countryData={this.state.countryData} />
				<CountrySearch />
				<CountryGrid eachCountryData={this.state.oneCountryData} />
			</div>
		)
	}

};

export default App;

const app = document.getElementById('root');
render(<App />, app);