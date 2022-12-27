import { ReactNode } from 'react';
import Content from '../Content/Content';

type LayoutProps = {
    introduction: ReactNode;
    children?: ReactNode;
    footer: ReactNode;
};

const Layout = ({ introduction, children, footer }: LayoutProps) => {
    return (
        <div className="container mx-auto rounded-xl shadow border p-2 m-5">
            {introduction}
            {<Content />}
            {footer}
        </div>
    );
};

export default Layout;