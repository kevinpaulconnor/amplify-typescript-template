var axios = require('axios');
import { APIGatewayProxyHandler } from 'aws-lambda';
import generateHoles from './shared/utilities';

exports.handler = async (event :APIGatewayProxyHandler) => {
    console.log(generateHoles());
	console.log(axios.get('https://https://cat-fact.herokuapp.com/facts'))
};