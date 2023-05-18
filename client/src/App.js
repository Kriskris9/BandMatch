import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Login from "../src/pages/Login";
import Signup from "../src/pages/SignUp";
import Users from "../src/pages/Users";
import Feed from "../src/pages/Feed";
import Profile from "../src/pages/Profile";
import Auth from "../src/utils/auth";
import SinglePost from "./components/SinglePost";
//COMMENT DEVELOPMENT TEST COMPONENTS FOR ROUTES--
import CommentFeed from "./components/CommentFeed";

const styles = {
  app: {
    backgroundColor: "#FAF9F6",
    margin: "0",
  },
};

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={styles.app}>
          <Header />
          <Routes>
            {Auth.loggedIn() ? (
              <>
                {/* REMEMBER TO ADD A 404 ROUTE!! */}
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                {/* THIS TEO ARE DEV ONLY TEST ROUTES-- FOR COMMENTS */}
                <Route path="/comments" element={<CommentFeed />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
              </>
            )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
