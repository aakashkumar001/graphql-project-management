const express = require('express');
const colors = require('colors');
const cors = require('cors');

require("dotenv").config();

const { graphqlHTTP } = require('express-graphql');
const Schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

//connect to Database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql:process.env.NODE_ENV === 'development',
})
);

app.listen(port, console.log(`server running on port ${port}`));
