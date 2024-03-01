import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloClient, createHttpLink } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import { store } from "./features/state/store.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "http://localhost:2000",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("idToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: "no-cache",
  //     errorPolicy: "ignore",
  //     connectToDevTools: true,
  //   },
  //   query: {
  //     fetchPolicy: "no-cache",
  //     errorPolicy: "all",
  //     connectToDevTools: true,
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="687670036280-enlis0p2j444cker0tbvent7ab7udp5t.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
