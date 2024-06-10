import React, { useState, useEffect } from 'react'
import axios from '@/api/axiosConfig.jsx';

import 
{
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton
} from '@coreui/react'

const App = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        image: '',
        category: '',
        description: ''
    })
    const [category, setCategory] = useState([])


    useEffect(() => {
        axios.get('/products/categories')
          .then(response => {
            setCategory(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = e.target.type === 'file' ? e.target.files[0] : value;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: newValue
        }));
    };

    const handleSubmit = () => {
        axios.post('/products', formData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


  return (
   <>
    <div className="card mt-4" style={{'width': '1500px'}}>
        <div className="card-header">
            <h4>Add new product</h4>
        </div>

        <div className="card-body">
            <CForm>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="title" className="col-sm-2 col-form-label">Product name</CFormLabel>
                    <CCol sm={12} >
                        <CFormInput type="text" name="title" value={formData.title} onChange={handleChange}/>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CFormLabel htmlFor="price" className="col-sm-2 col-form-label">Price</CFormLabel>
                    <CCol sm={12} >
                        <CFormInput type="text"  name="price" id="price" value={formData.price} onChange={handleChange}/>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">image</CFormLabel>
                    <CCol sm={12} >
                        <CFormInput type="file" name="image" id="image" onChange={handleChange}/>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">category</CFormLabel>
                    <CCol sm={12} >
                        <CFormSelect name='category' value={formData.category} onChange={handleChange}>
                        {category.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                        </CFormSelect>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CFormLabel htmlFor="image" className="col-sm-2 col-form-label">description</CFormLabel>
                    <CCol sm={12} >
                        <CFormTextarea
                        id="des"
                        name="description"
                        style={{ height: '100px' }}
                        value={formData.description} onChange={handleChange}
                        ></CFormTextarea>
                    </CCol>
                </CRow>

                <CButton color="primary" type="button" onClick={() => handleSubmit()}>Submit</CButton>
            </CForm>
        </div>
    </div>
   </>
  )
}

export default App;
