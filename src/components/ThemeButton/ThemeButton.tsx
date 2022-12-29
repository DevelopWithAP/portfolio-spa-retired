import { useEffect, useState } from 'react';
import Moon from './Moon';
import Sun from './Sun';

const ThemeButton = () => {
    const [theme, setTheme] = useState<string>('');
    
    useEffect(() => {
        if (window.matchMedia('prefers-color-scheme: dark').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <button type='button' onClick={handleThemeSwitch} className='absolute p-2 z-10 right-20 top-4 bg-slate-900 dark:bg-stone-300 p-1 rounded'>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeButton;