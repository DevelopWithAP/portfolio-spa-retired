import Journey from '../Journey/Journey';
import Projects from '../Projects/Projects'; 
import Search from '../Search/Search';

const Content = () => {
  return (
    <div className='container mx-auto text-center'>
      {<Journey />}
      {< Projects />}
      {<Search />}
    </div>
  );
};

export default Content;