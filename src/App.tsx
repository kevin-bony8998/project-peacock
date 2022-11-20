import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, DefaultOptions } from '@apollo/client';
import IntroHeader from './organisms/introSection';
import ScrollComponent from './atoms/scrollComponent';
import WorkExperience from './organisms/workExperience';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/g2zuw3q23wed/environments/master',
  cache: new InMemoryCache(),
  headers: {
    'Authorization': 'Bearer VDxcuRxK1UdkIvnIunsD9mGBSowar2fMNYROyqDlOVE'
  },
  defaultOptions: defaultOptions
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="intro-section">
          <IntroHeader />
        </div>
        <div className="scroll-component">
          <ScrollComponent />
        </div>
        <div className="work-experience">
          <WorkExperience />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
