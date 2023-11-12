## NodeJS Boilerplate - ExpressJS

This boilerplate can be used for easy prototyping of new projects.

1. Install with `npm install`
2. Start server with `nodemon server`
3. Query the GET with `curl http://localhost:3001/`
4. To query the GET with API call, first get a developer API key from the (National Park Service)[https://www.nps.gov/subjects/developer/get-started.htm]
5. Then you can either
    a. Store this in a .env file within the root as `MYAPIKEY={{your key}}` and make requests through curl or Postman
    b. Use the included Postman collection, and pass the key in along with your request as a Header
    c. Include the key with your curl, like `curl  -H X-Api-Key={{your key}} http://localhost:3001/parks | jq .`

A Postman collection with these requests are also included in the repo.