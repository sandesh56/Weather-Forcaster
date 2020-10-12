
export default function Forcast(props) {
    return (
        <div className="forcast">
            {
                props.city && props.country && <p className="weather__key"> {props.t('Location')}:
	 		<span className="forcast_text"> {props.city}, {props.country}</span>
                </p>
            }
            {
                props.temp && <p className="weather__key"> {props.t('Temperature')}:
	 		<span className="forcast_text"> {props.temp} 	</span>
                </p>
            }
            {
                props.humidity && <p className="weather__key"> {props.t('Humidity')}:
	 		<span className="forcast_text"> {props.humidity} </span>
                </p>
            }
            {
                props.description && <p className="weather__key"> {props.t('Conditions')}:
	 		<span className="forcast_text"> {props.description} </span>
                </p>
            }
            {
                props.error && <p className="forcast__error">{props.error}</p>
            }
        </div>
    )
}
