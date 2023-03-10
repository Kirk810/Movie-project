import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './ui-components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Outlet></Outlet>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
