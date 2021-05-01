const express = require('express');
const database = require("./db.js");
// const insertToDatabase = require('./insert.js')
const ExpressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const cors = require('cors');
const app = express();
const local = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

/*
// Proxy to AWS:
app.use(cors());
app.use(
  createProxyMiddleware('/',{
    target: 'https://api-dev.citedrive.com',
    changeOrigin: true,
    secure: true,
    // ws: true, // proxy websockets
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));


app.listen(5000, () => {
     console.log("Cloud GraphQL server: 🏃 at http://localhost:5000/graphql");
 });
*/

// Connection to local graphql-server
local.use(cors());
local.use("/graphql", ExpressGraphQL({ schema: schema.schema, graphiql: true}));

local.listen(4000, () => {
    console.log("Local GraphQL server: 🏃 at http://localhost:4000/graphql");
});
