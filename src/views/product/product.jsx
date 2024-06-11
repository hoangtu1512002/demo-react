import React, { useState, useEffect } from 'react'
import 
{
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CImage,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import axios from '@/api/axiosConfig.jsx';
import { Link } from 'react-router-dom';


const Product = () => {

  const [products, setProducts] = useState([])
  const [visible, setVisible] = useState(false)
  const [productId, setProductId] = useState(null)


  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  
  const showModal = (productId) => {
    setProductId(productId)
    setVisible(!visible)
  }

  const deleteProduct = () => {
    axios.delete('products/' + productId)
    .then(res => {
      setProductId(null)
      setVisible(false)
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <div className="card mt-4">
        <div className="card-header d-flex justify-content-between align-items-center">
            <h4>List product</h4>
            <CButton color="primary">
              <Link to="/admin/product/add" className='text-decoration-none text-white fs-6 block'>Add new product</Link>
            </CButton>
        </div>
        <div className="card-body">
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">id</CTableHeaderCell>
                <CTableHeaderCell scope="col">title</CTableHeaderCell>
                <CTableHeaderCell scope="col">price</CTableHeaderCell>
                <CTableHeaderCell scope="col">image</CTableHeaderCell>
                <CTableHeaderCell scope="col">action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              { products.map(product => {
                return (
                  <CTableRow key={product.id}>
                    <CTableHeaderCell scope="row">{ product.id }</CTableHeaderCell>
                    <CTableDataCell>{ product.title }</CTableDataCell>
                    <CTableDataCell>{ product.price }</CTableDataCell>
                    <CTableDataCell>
                      <CImage rounded thumbnail src={product.image} width={60} height={60} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="success">
                        <CIcon icon={icon.cilPencil}></CIcon>
                      </CButton>

                      <CButton color="danger" className='ms-2' onClick={() => showModal(product.id)}>
                        <CIcon icon={icon.cilTrash}></CIcon>
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                )
              }) }
            </CTableBody>
          </CTable>
        </div>
      </div>

    <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="delConfirm"
      >
        <CModalHeader>
          <CModalTitle id="delConfirm">delete product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this product?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary">Close</CButton>
          <CButton color="primary" onClick={() => deleteProduct()}>Delete</CButton>
        </CModalFooter>
    </CModal>
  </>
  )
}

export default Product;
