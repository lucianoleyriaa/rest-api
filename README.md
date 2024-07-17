# Getting Started
- Clone this github repository: `git clone https://github.com/lucianoleyriaa/rest-api.git`
- Run `npm install` to install all dependencies
- In the root of the project, create a `.env` file based on the `.env.template` file.
- To execute the app run `sh start.sh` or `docker compose up`

## Notes
- In the link `http://localhost:[port]/api/docs` you can find the documentation.  
- This project uses `node-cache` to store user data. As a result, if you stop the Docker container, all data will be lost.
- Use the command `npm run test` to run unit tests.