var axios = require('axios');
import { APIGatewayProxyHandler } from 'aws-lambda';
import generateHoles from './shared/utilities';

exports.handler = async (event :APIGatewayProxyHandler) => {
    console.log(generateHoles());
	let catFacts = await axios.get('https://https://cat-fact.herokuapp.com/facts')
	console.log(catFacts);
};