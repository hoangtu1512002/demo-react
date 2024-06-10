
import 
{
    CHeader,
    CContainer,
    CHeaderToggler
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const Header = ({ onHeaderClick }) => {

    const handleClick = () => {
        onHeaderClick();
    };

    return (
        <header>
            <CHeader position="sticky" className="py-3">
                <CContainer fluid>
                    <CHeaderToggler className='p-0 ms-2' style={{ marginInlineStart: '-14px' }} onClick={ handleClick }>
                        <CIcon icon={icon.cilMenu} size="lg" />
                    </CHeaderToggler>
                </CContainer>
            </CHeader>
        </header>
    )
}

export default Header;
