import axios from 'axios';


const ROOT_URL = `https://api.coinmarketcap.com/v2/listings/`;


export const FETCH_COIN = 'FETCH_COIN';

export function fetchCoin(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}