import React, { Suspense }  from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { Routes, Route } from 'react-router-dom'

import routes from '@/routes/routes.jsx'

const Content = () => {
  return (
    <CContainer className="px-4" lg>
        <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
                { routes.map((route, index) => {
                    const Page = route.element
                    return <Route key={index} path={route.path} element={<Page />} />
                }) }
            </Routes>
        </Suspense>
    </CContainer>
  )
}

export default Content;
