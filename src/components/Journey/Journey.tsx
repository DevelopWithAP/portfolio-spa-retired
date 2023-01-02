import React from 'react';
import journey from '../../data/journey';
import JourneyItem from '../JourneyItem/JourneyItem';
import Title from '../Title/Title';

const Journey = () => {
  return (
    <>
    <Title children='Timeline'/>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 my-4">
      <li className="mb-10 ml-4">
        {journey.map(i => (
          <JourneyItem 
          key={i.id}
          title={i.title}
          year={i.year}
          information={i.information}
          />
        ))}
      </li>
    </ol>
    </>
  )
}

export default Journey