import React from 'react'

type TitleProps = {
    children: React.ReactNode;
};

const Title = ({children}: TitleProps) => {
  return (
    <header className='text-2xl font-bold text-stone-900 dark:text-stone-400 my-4 mx-2'>
        {children}
    </header>
  )
}

export default Title