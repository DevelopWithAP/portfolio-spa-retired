import { ReactNode } from 'react';
import Content from '../Content/Content';

type LayoutProps = {
    introduction: ReactNode;
    children?: ReactNode;
    footer: ReactNode;
};

const Layout = ({ introduction, children, footer }: LayoutProps) => {
    return (
        <div className='container mx-auto'>
            {introduction}
            {<Content />}
            {footer}
        </div>
    );
};

export default Layout;