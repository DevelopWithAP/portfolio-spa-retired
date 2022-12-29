import { ReactNode } from 'react';
import Content from '../Content/Content';

type LayoutProps = {
    introduction: ReactNode;
    children?: ReactNode;
    footer: ReactNode;
};

const Layout = ({ introduction, children, footer }: LayoutProps) => {
    return (
        <>
            {introduction}
            {children = <Content/> }
            {footer}
        </>
    );
};

export default Layout;