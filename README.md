## Backend applications for cool startup

## :floppy_disk: Setup - Backend

* Change to `/server` directory
* Install dependencies using `npm i`
* Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add postgresql database & weather API access credentials to .env file
* Run `nodemon server` for a dev server on port 5000


## :computer: Code Examples - Backend

* [Static method used](https://javascript.info/static-properties-methods) to add city to database list of cities.

```javascript
  // callback function - if error return it to callback. If no error then return rows (empty set)
  static insert (city, callback) {
    db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
```