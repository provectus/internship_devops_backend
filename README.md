## Backend applications for cool startup

## :floppy_disk: Setup - Backend

* Install dependencies using `npm i`
* Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add postgresql database & weather API access credentials (3815f2d2474d4bf0fd7527bd628f45cb) to env variables
* Run `start.sh` for a database migrations and dev server on port 5000


## Environment variables
Set postgresql url:

`DATABASE_URL=postgres://localhost:5432/database`

Set frontend url:

`FRONTEND_URL=http://localhost:3000`

Set api key for access to WEATHER API:

`WEATHER_API_KEY=3815f2d2474d4bf0fd7527bd628f45cb`

