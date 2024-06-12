import { useState } from 'react';

import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

const Layout = () => {
    const [sidebarWidth, setSidebarWidth] = useState(false);

    const handleShowSidebar = () => {
        setSidebarWidth(!sidebarWidth)
    }

    return (
        <>
            <Sidebar showSidebar={sidebarWidth} />
            <Header onHeaderClick={handleShowSidebar}/>
            <Content />
        </>
    )
}

export default Layout;
