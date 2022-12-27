type ProjectItemProps = {
    id?: number;
    title: string;
    imageUrl: string;
    stack: string[];
    link: string;
};

const ProjectItem = ({id, title, imageUrl, stack, link}: ProjectItemProps) => {
  return (
    <div className='container'>
      <img src={imageUrl} className='object-cover h-40 w-80 cursor-pointer'/>
      <h4 className='text-lg md:text-xl font-semibold'>{title}</h4>
      <p className='flext flex-wrap gap-2 flex-row items-center justify-start text-xs'>
        {stack.map(item =>(
          <span className='inline-block px-1 py-1 border rounded font-semibold'>{item}</span>
        ))}
      </p>

    </div>
  )
}

export default ProjectItem;