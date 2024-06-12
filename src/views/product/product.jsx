import React, { useState, useEffect } from "react";
import {
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
  CModalFooter,
  CBadge,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

import axios from "@/api/axiosConfig.jsx";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const showModal = (productId) => {
    setProductId(productId);
    setVisible(!visible);
  };

  const deleteProduct = () => {
    axios
      .delete("products/" + productId)
      .then((res) => {
        setProductId(null);
        setVisible(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <div className="w-100 mb-2 d-flex align-items-center justify-content-between">
            <h4 className="p-2 mb-0">List Product</h4>
            <Link to="/admin/product/add">
              <CButton color="primary" className="fs-6 fw-bold">
                Add new product
              </CButton>
            </Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col" width="60%">
                  Product
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  width="8%"
                  className="text-center"
                >
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {products.map((product) => {
                return (
                  <CTableRow key={product.id}>
                    <CTableHeaderCell scope="row">
                      {product.id}
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CImage
                        rounded
                        thumbnail
                        src={product.image}
                        width={40}
                        height={40}
                      />{" "}
                      {product.title}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="secondary">{product.price} $</CBadge>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton color="success" className="text-white">
                        <Link className="text-decoration-none text-white" to={'/admin/product/edit/' + product.id}><CIcon icon={icon.cilPencil}></CIcon></Link>
                      </CButton>

                      <CButton
                        color="danger"
                        className="ms-2"
                        onClick={() => showModal(product.id)}
                      >
                        <CIcon icon={icon.cilTrash}></CIcon>
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                );
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

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
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={() => deleteProduct()}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Product;
