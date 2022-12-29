import Introduction from './components/Introduction/Introduction';
import Content from './components/Content/Content';
import Layout from './components/Layout/Layout';
import ThemeButton from './components/ThemeButton/ThemeButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ThemeButton />
      <div className='bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Layout introduction={<Introduction/>} footer={<Footer />} children={<Content />} />
        </div>
      </div>
    </>
  );
};

export default App;
