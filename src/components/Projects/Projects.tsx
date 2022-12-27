import data from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map(p => 
           <ProjectItem
           key={p.id}
           id={p.id} 
           title={p.title}
           imageUrl={p.imageUrl}
           link={p.link}
           stack={p.stack}
           />   
        )}
      </div>
    </div>
  );
};

export default Projects;