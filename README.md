# BLOG SERVER

## Set up postgres db (locally via docker image)

* Get docker image: `docker pull postgres`
* Start image: `docker run -p 5432:5432 --name blog-postgres -d postgres`
* Get docker container bash: `docker exec -it [CONTAINER_ID] /bin/bash`
* Login to postgres server: `psql -U postgres`
* Create user for app: `create user [USER] with encrypted password [PASSWORD];`
* Grant access for app user: `grant [ACTION] on database [DB_NAME] to [USER];`

* Create db: `CREATE DATABASE [DB_NAME]];`
* Connect to db: `\connect blog`

* Create table for app: `CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title VARCHAR(50) NOT NULL, content VARCHAR(50) NOT NULL registration_date TIMESTAMP);`

## Run app

* `deno run --allow-net --allow-env index.js`

## Architecture

* Layerd structure (controller - service - repository)
* Controllers: all APIs are defined here
* Services: business logic
* Repository: all db operations are defined here
* Entry point: `index.js` (all middlewares are registered here)
* DB properties: `db/database.js`

## Debug with VS Code

* lauch.json

## TODO

* Tests
* Migrate to TypeScript

## Source
 * [Creating your first REST API with Deno and Postgres](https://blog.logrocket.com/creating-your-first-rest-api-with-deno-and-postgres/)