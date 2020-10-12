import Form from "../component/Form";
import { useState, useEffect } from 'react';
import Forcast from '../component/Forcast';
import Titles from '../component/titleComponent';
import Head from 'next/head';
import Navbar from '../component/navBar';
import Router from 'next/router';
import { i18n, withTranslation } from '../i18n';


//weather api key
const API_KEY = 'e0d6031c3ca38abac390a53ad63cf598';

function App({ t }) {

	//declaring state 
	const [Temp, setTemp] = useState(undefined);
	const [Country, setCountry] = useState(undefined);
	const [City, setCity] = useState(undefined);
	const [Humidity, setHumidity] = useState(undefined);
	const [Description, setDescription] = useState(undefined)


	//event Triggered Function passed as props
	const getWeather = async (e) => {
		e.preventDefault();
		if (!localStorage.getItem('token')) {
			Router.push('/login')

		}
		const city = e.target.elements.city.value;
		console.log(city);
		const country = e.target.elements.country.value;
		console.log(country);
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		console.log(data);

		//Just making sure if user submits with empty box system doesno't Crash.
		if (city && country) {
			setTemp(data.main.temp);
			setCountry(data.sys.country);
			setCity(data.name);
			setHumidity(data.main.humidity);
			setDescription(data.weather[0].description)
		} else {
			setTemp(undefined);
			setCountry(undefined);
			setCity(undefined);
			setHumidity(undefined);
			setDescription(undefined)
		}

	}


	return (
		<div>
			<Head>
				<Navbar />
			</Head>
			<div className="row">
				<button
					type='button'
					onClick={() => {
						i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
						// console.log(i18n.language)
					}}
				>
					{t(i18n.language === 'en' ? 'German' : 'English')}

				</button>
			</div>
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-md-5 title-container">
								<Titles />
							</div>
							<div className="col-md-7 form-container">
								<Form getWeather={getWeather}
									t={t} />
								<Forcast temp={Temp}
									country={Country}
									city={City}
									humidity={Humidity}
									description={Description}
									t={t}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);

}
export default withTranslation('common')(App)
