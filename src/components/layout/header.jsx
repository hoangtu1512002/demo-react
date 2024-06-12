
import 
{
    CHeader,
    CContainer,
    CHeaderToggler,
    CAvatar,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider 
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import { useAuth } from "@/components/auth/AuthContext";

import Avatar1 from '@/assets/images/avatars/1.jpg'

const Header = ({ onHeaderClick }) => {
    const { logout } = useAuth();

    const handleClick = () => {
        onHeaderClick();
    };

    const handleLogout = () => {
        logout()
    }

    return (
        <CHeader position="sticky" className="header py-3">
            <CContainer fluid className='d-flex justify-content-between align-center'>
                <CHeaderToggler className='p-0 ms-2' style={{ marginInlineStart: '-14px' }} onClick={ handleClick }>
                    <CIcon icon={icon.cilMenu} size="lg" />
                </CHeaderToggler>
                <CDropdown className='pe-4 list-unstyled'  variant="nav-item">
                    <CDropdownToggle color="secondary">
                        <CAvatar src={Avatar1} className='me-2'/>
                        <span>Lisa</span>
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem className='ps-2' href="#"><CIcon icon={icon.cilUser} size="sm" /> Profile</CDropdownItem>
                        <CDropdownItem className='ps-2' href="#"><CIcon icon={icon.cilSettings} size="sm" /> Setting</CDropdownItem>
                        <CDropdownItem className='ps-2' href="#"><CIcon icon={icon.cilCommentSquare} size="sm" /> Message</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem className='ps-2' href="#" onClick={handleLogout}><CIcon icon={icon.cilChevronRight} size="sm" /> Logout</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </CContainer>
        </CHeader>
    )
}

export default Header;
