import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { GetPosts } from "./__generated__/getPosts";
import "./App.css";
import logo from "./logo.svg";

const GET_POSTS = gql`
  query GetPosts {
    hello {
      id
      title
      user {
        id
        name
      }
    }
  }
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Query<GetPosts> query={GET_POSTS}>
          {({ loading, error, data }) => {
            if (loading) {
              return "Loading...";
            }
            if (error) {
              return "Error!";
            }
            return (
              <p className="App-intro">
                {data!.hello.map(p => {
                  return <li key={p.id!}>{p.title}</li>;
                })}
              </p>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
