import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardExampleCard from '../components/Card';
import axios from "axios";
import Head from 'next/head';

import {Card, Button, Icon} from 'semantic-ui-react';

class CampaignIndex extends Component {
	constructor(props) {
    	super();
    	this.fetchData = this.fetchData.bind(this);
    	this.coinExtra = this.coinExtra.bind(this);
    	this.state = {coins: []};
    	
	}
	
	componentDidMount() {
		let url = 'https://api.coinmarketcap.com/v2/ticker/?limit=20';		
		this.fetchData(url).then(
			data => {
				console.log(data.data.data);
				this.setState({coins: data.data})
				console.log(data.data.data['1']);
				console.log('this.state in promise');
				console.log(this.state);
			}
		);
		console.log('this.state');
		console.log(this.state);

	}

	fetchData (url){
		return axios.get(url);
			
    }

    async getInitialProps(){

	}

	coinExtra(coin){
		const extra = (
		  <a>
		    <Icon name='archive' />
		    Market Cap: {this.state.coins.data[coin].quotes.USD.market_cap} 
		  </a>
		);
		return extra;
	}

	renderCoins() {
		if(this.state.coins){
			let coins = [];
			
			for(var coin in this.state.coins.data){	
				var psudo_obj = {};
				psudo_obj = this.state.coins.data[coin];
				psudo_obj.header = this.state.coins.data[coin].name;
				psudo_obj.description = '$ ' + psudo_obj.quotes.USD.price;
				psudo_obj.extra = this.coinExtra(coin);

				coins.push(psudo_obj);
			}

			console.log('coins');
			console.log(coins);
			return <Card.Group items={coins} />;

		}
		
	}

	render(){
		return (
			<Layout>
				<div>
					<h1>Coin Prices</h1>
					{/*<p>{this.state.coins.id}ddd</p>*/}
			
					{this.renderCoins()}
				</div>
			</Layout>
		);
	}
}

export default CampaignIndex;