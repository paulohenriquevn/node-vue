# Run apllication

Vue, Express, Node, Mongo with Docker-compose setup for local development.

### Steps to Run

1. Clone this repository

`git clone git@github.com:paulohenriquevn/node-vue.git`

2. Navigate into the directory vue-node

`cd vue-node`

3. Build Docker Images

`docker-compose build`

4. Run the stack

`docker-compose up`

Your app should be running on (if using native docker).:

http://localhost:8080

# Load data

1. Connect to the mongo database `localhost:27017`
2. Create database `financeiro`
3. Create collection `clients`
4. Execute script

```
/backend/src/database/populate.mongodb
```
# APIs

## List all clients

```
GET http://localhost:3333/client
```

## Filter clients by name

```
GET http://localhost:3333/client?name=Jose
```

## Sort client by name

```
GET http://localhost:3333/client?sort=name
```

## Paginate client by name

```
GET http://localhost:3333/client?page=1&limit=15
```