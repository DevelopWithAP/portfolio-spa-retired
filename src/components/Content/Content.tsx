import Journey from '../Journey/Journey';
import Projects from '../Projects/Projects'; 

const Content = () => {
  return (
    <div className='container mx-auto text-center'>
      {<Journey />}
      {< Projects />}
    </div>
  );
};

export default Content;