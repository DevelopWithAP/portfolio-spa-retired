import { useState, ChangeEvent } from 'react';
import Title from '../Title/Title';
import SearchResults from './SearchResults';
import * as projects from '../../data/projects';

const PROPS = 'Filter By Tech';

const Search = () => {
    const data = JSON.parse(JSON.stringify(projects.default));

    const [query, setQuery] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <Title children={PROPS} />
            <div className='flex items-center justify-center flex-col'>
                <form className="w-full max-w-sm">
                    <div className="flex items-center border rounded border-slate-500 py-2">
                        <input className="appearance-none bg-transparent dark:text-slate-400 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="input" placeholder="Search Tech..." onChange={handleChange} />
                    </div>
                </form>
                <SearchResults data={data} query={query} />
            </div>
        </>
    );
};

export default Search;
