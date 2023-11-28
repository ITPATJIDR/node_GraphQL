const gql = require("graphql-tag")

const schema = gql`
  type User {
    id: Int
    username: String
  }

  type AuthResponse {
    token: String
    user: User
  }

  type Todo {
    id: Int
    text: String
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    register(username: String!, password: String!): AuthResponse
    login(username: String!, password: String!): AuthResponse
    createTodo(text: String!): Todo
  }
`

module.exports = schema


