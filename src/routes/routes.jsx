import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const App = React.lazy(() => import('@/App'))
const Dashboard = React.lazy(() => import('@/views/dashboard/dashboard'))
const Product = React.lazy(() => import('@/views/product/product'))
const NewProduct = React.lazy(() => import('@/views/product/add'))

const routes = createBrowserRouter
(
    [
        {
            path: '/admin',
            name: 'Admin',
            element: <App />,
            children: 
            [
                { path: '', name: 'Dashboard', element: <Dashboard /> },
                { path: 'product', name: 'Product', element: <Product /> },
                { path: 'product/add', name: 'Product', element: <NewProduct /> },
            ]
        }
    ]
)

export default routes