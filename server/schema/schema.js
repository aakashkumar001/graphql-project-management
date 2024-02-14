const Project = require('../models/Project');
const Client = require('../models/Client');

const { 
   GraphQLObjectType,
   GraphQLID,
   GraphQLString,
   GraphQLSchema,
   GraphQLList,
   GraphQLNonNull,
   GraphQLEnumType,
} = require("graphql");

//Project Type

