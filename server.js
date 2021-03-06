const Koa = require('koa');
const mount = require("koa-mount");
const {graphqlHTTP} = require("koa-graphql");
const schema = require('./graphql/schema');
const initDB = require('./database');

const app = new Koa();

initDB();

app.listen(9000);

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})))

app.on('error', err => {
    log.error('server error', err)
});