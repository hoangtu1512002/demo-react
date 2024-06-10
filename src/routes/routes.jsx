import React from 'react'

const Dashboard = React.lazy(() => import('@/views/dashboard/dashboard'))
const Product = React.lazy(() => import('@/views/product/product'))
const NewProduct = React.lazy(() => import('@/views/product/add'))

const routes = 
[
    { path: '/admin', name: 'Dashboard', element: Dashboard },
    { path: '/admin/product', name: 'Product', element: Product },
    { path: '/admin/product/add', name: 'Product', element: NewProduct },
]

export default routes