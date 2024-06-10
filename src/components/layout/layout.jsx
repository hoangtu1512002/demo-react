import { useState } from 'react';

import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

const Layout = () => {
    const [sidebarWidth, setSidebarWidth] = useState(true);

    const handleShowSidebar = () => {
        setSidebarWidth(!sidebarWidth)
    }

    return (
        <div>
            <Sidebar showSidebar={sidebarWidth} />
            <Header onHeaderClick={handleShowSidebar}/>
            <Content />
        </div>
    )
}

export default Layout;
