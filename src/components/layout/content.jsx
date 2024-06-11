import React, { Suspense }  from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div className="wrapper">
        <div className="wrapper-content p-4">
          <Suspense fallback={<CSpinner color="primary" />}>
            <Outlet/>
          </Suspense>
        </div>
    </div>
  )
}

export default Content;
