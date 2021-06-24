import 'antd/dist/antd.css';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from './context/theme';
import { SelectionProvider } from './context/selection';
import client from './apollo';
import Layout from './components/layout';
import Routes from './routes';
function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Theme>
          <SelectionProvider>
            <Layout>
              <Routes />
            </Layout>
          </SelectionProvider>
        </Theme>
      </ApolloProvider>
    </Router>
  );
}

export default App;
