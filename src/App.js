import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Countries from './components/countryMap';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			countryData: [],
			loaded: false,
			placeholder: "Loading..."
		};
	};

	componentDidMount() {
		fetch('https://api.covid19api.com/summary')
		.then(response => {
			if (response.status > 400) {
				return response;
			};
			return response.json();
		})
		.then(countriesData => {
			this.setState({
				countryData: countriesData.Countries
			});
		})
		.catch(console.log)
	};

	render () {
		return (
			<Countries countryData={this.state.countryData} />
		)
	}

};

export default App;

const app = document.getElementById('root');
render(<App />, app);