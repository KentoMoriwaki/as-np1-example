import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000"
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
