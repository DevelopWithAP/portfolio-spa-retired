import Introduction from './components/Introduction/Introduction';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <Layout introduction={<Introduction/>} footer={<Footer/>}/>
  );
};

export default App;
