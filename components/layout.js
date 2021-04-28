
import {Content} from 'carbon-components-react';
import LayoutHeader from './layoutHeader';

export default function Layout({children}) {
    return (
        <>
        <LayoutHeader />
        <Content>
            {children}
        </Content>
        </>
    );
}