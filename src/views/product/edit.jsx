import React, { useState, useEffect } from "react";
import axios from "@/api/axiosConfig.jsx";
import {
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton,
  CImage,
} from "@coreui/react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: null,
    category: "",
    description: "",
  });

  const [category, setCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/products/categories")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/products/" + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      // Đọc URL của ảnh và cập nhật vào state product
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result,
        }));
      };
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    axios
      .put("/products/" + id, product)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0 py-2">Edit product</h4>
        </div>

        <div className="card-body">
          <CForm>
            <CRow className="mb-3">
              <CFormLabel htmlFor="title" className="col-sm-2 col-form-label">
                Product name
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="price" className="col-sm-2 col-form-label">
                Price
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">
                image
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleChange}
                />
              </CCol>
            </CRow>
            <CImage rounded src={product.image} width={160} height={160} />

            <CRow className="mb-3">
              <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">
                category
              </CFormLabel>
              <CCol sm={12}>
                <CFormSelect
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                >
                  {category.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </CFormSelect>
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">
                description
              </CFormLabel>
              <CCol sm={12}>
                <CFormTextarea
                  id="des"
                  name="description"
                  style={{ height: "100px" }}
                  value={product.description}
                  onChange={handleChange}
                ></CFormTextarea>
              </CCol>
            </CRow>

            <CButton color="primary" onClick={handleSubmit} type="button">
              Submit
            </CButton>
          </CForm>
        </div>
      </div>
    </>
  );
};

export default Edit;
