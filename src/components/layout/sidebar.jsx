import 
{
    CSidebar,
    CSidebarHeader,
    CSidebarNav,
    CNavItem,
    CNavGroup,
    CSidebarBrand
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
    return (
        <CSidebar
        className="border-end"
        colorScheme="dark"
        position="fixed"
        unfoldable={showSidebar}
      >
        <CSidebarHeader className='border-bottom'>
          <CSidebarBrand to="/" className='text-decoration-none'>
            <h4 className="sidebar-brand-full mb-0">
              <div className="d-flex align-item-center">
                <CIcon icon={icon.cilFont} height={30}/>
                <nav className='ps-2'>ADMIN</nav>
              </div>
            </h4>
            <CIcon customClassName="sidebar-brand-narrow" icon={icon.cilFont} height={30} />
          </CSidebarBrand>
        </CSidebarHeader>

        <CSidebarNav className='flex'>
          <CNavItem >
            <Link to="/admin" className='nav-link'>
              <CIcon customClassName="nav-icon" icon={icon.cilSpeedometer} />
              Dashboard
            </Link>
          </CNavItem>

          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={icon.cilWifiSignal1} /> Product
              </>
            }
          >
            <CNavItem>
              <Link to="/admin/product" className='nav-link'>
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                List product
              </Link>      
            </CNavItem>
            <CNavItem>
              <Link to="/admin/product/add" className='nav-link'>
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Add new product
              </Link>      
            </CNavItem>
          </CNavGroup>

          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={icon.cilUser} /> User
              </>
            }
          >
            <CNavItem>
              <Link to="/admin/user" className='nav-link'>
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                List user
              </Link>      
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
    )
  }
  
export default Sidebar;
  