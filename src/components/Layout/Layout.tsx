import { ReactNode } from 'react';
import Content from '../Content/Content';

type LayoutProps = {
    introduction: ReactNode;
    children?: ReactNode;
    footer: ReactNode;
};

const Layout = ({ introduction, children, footer }: LayoutProps) => {
    return (
        <div className='max-w-5xl w-11/12 mx-auto'>
            {introduction}
            {children = <Content/> }
            {footer}
        </div>
    );
};

export default Layout;