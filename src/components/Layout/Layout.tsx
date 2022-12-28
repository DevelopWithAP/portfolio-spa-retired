import { ReactNode } from 'react';
import Content from '../Content/Content';

type LayoutProps = {
    introduction: ReactNode;
    children?: ReactNode;
    footer: ReactNode;
};

const Layout = ({ introduction, children, footer }: LayoutProps) => {
    return (
        <div className='container mx-auto border rounded px-2 py-2 my-1'>
            {introduction}
            {children = <Content/>}
            {footer}
        </div>
    );
};

export default Layout;