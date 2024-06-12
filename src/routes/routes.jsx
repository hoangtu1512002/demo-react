import React from 'react'
import ProtectedRoute from '@/components/auth//ProtectedRoute';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('@/App'))
const Dashboard = React.lazy(() => import('@/views/dashboard/dashboard'))
const Product = React.lazy(() => import('@/views/product/product'))
const NewProduct = React.lazy(() => import('@/views/product/add'))
const EditProduct = React.lazy(() => import('@/views/product/edit'))
const User = React.lazy(() => import('@/views/user/list'))


const Home = React.lazy(() => import('@/views/home/home'))


const AdminLogin = React.lazy(() => import('@/views/auth/login'))

const routes = createBrowserRouter
(
    [
        {
            path: '/',
            name: 'Home',
            element: <Home />
        },

        {
            path: '/admin',
            name: 'Admin',
            element: <ProtectedRoute element={<App />} />,
            children: 
            [
                { path: '', element: <Dashboard /> },
                { path: 'product', element: <Product /> },
                { path: 'product/add', element: <NewProduct /> },
                { path: 'product/edit/:id', element: <EditProduct /> },
                { path: 'user', element: <User /> },
            ]
        },

        {
            path: '/admin/login',
            name: 'Admin login',
            element: <AdminLogin />
        }
    ]
)
export default routes