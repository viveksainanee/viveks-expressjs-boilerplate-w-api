const express = require('express');
const axios = require('axios');
require('dotenv').config();

// Be sure to update the .env file with your API key
const NPS_API_KEY = process.env.MYAPIKEY

const router = express.Router();

const api = axios.create({
  baseURL: 'https://developer.nps.gov/api/v1/',
  headers: {
    "X-Api-Key": NPS_API_KEY
  }
});

/** GET parks */

router.get('/', async function(req, res, next) {
  try {
  const parkCodeParam = req.query.parkCode || ""
  const npsResponse = await api.get(`parks?parkCode=${parkCodeParam}`);
  const resp =  npsResponse.data.data.map(park => {
    return {
      "fullName": park.fullName,
      "parkCode": park.parkCode,
      "description": park.description,
      "states": park.states
    }
    })  

  return res.json(resp);
  } catch (err){
    return res.status(err.response.status).send({
      status: err.response.status,
      data: err.response.data
    })
  }
});

/** GET alerts */

router.get('/alerts', async function(req, res, next) {
  try {
  const parkCodeParam = req.query.parkCode || ""
  const npsResponse = await api.get(`alerts?parkCode=${parkCodeParam}`);
  resp =  npsResponse.data.data.map(parkAlert => {
    return {
      "title": parkAlert.title,
      "parkCode": parkAlert.parkCode,
      "description": parkAlert.description,
      "category": parkAlert.category,
    }
    })  

  return res.json(resp);
  } catch (err){
    return err    
  }
});

module.exports = router;

