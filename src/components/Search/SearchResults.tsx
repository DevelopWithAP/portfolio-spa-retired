import { Project } from '../../Models/Project';
import ProjectInfoItem from '../ProjectItem/ProjectItem';

type SearchResultProps = {
    data: Project[];
    query: string;
};

const SearchResults = ({ data, query }: SearchResultProps): JSX.Element => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2'>
            {data.filter((result: Project) => {
                if (query === '') {
                    return;
                } else if (result.stack.map((entry: string) => entry.toLowerCase().replace('.js', '')).includes(query.toLowerCase())) {
                    return result;
                }
            })
                .map((result: Project) => (
                    <ProjectInfoItem
                        key={result.id}
                        id={result.id}
                        title={result.title}
                        imageUrl={result.imageUrl}
                        stack={result.stack}
                        link={result.link}
                        challenge={result.challenge}
                        solution={result.solution}
                        features={result.features}
                    />
                ))
            }
        </div>
    );
};

export default SearchResults;
