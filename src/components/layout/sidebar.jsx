import 
{
    CSidebar,
    CSidebarHeader,
    CSidebarNav,
    CNavItem,
    CNavGroup,
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
        visible={showSidebar}
      >
        <CSidebarHeader className='p-0 border-bottom'>
          <a href='#' className='text-decoration-none text-white py-3 text-center w-100 block'><h4 className='mb-0'>Admin</h4></a>
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
                <CIcon customClassName="nav-icon" icon={icon.cilPuzzle} /> Product
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
        </CSidebarNav>

      </CSidebar>
    )
  }
  
export default Sidebar;
  