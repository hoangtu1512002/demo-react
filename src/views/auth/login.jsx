import React, { useEffect, useState } from "react";
import { CForm, CFormInput, CFormLabel, CButton } from "@coreui/react";

import { useAuth } from "@/components/auth/AuthContext";

import axios from "@/api/axiosConfig";
import { useNavigate } from "react-router-dom";

const loginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { isLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const login = () => {
    axios
      .post("auth/login", formData)
      .then((res) => {
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        isLogin();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin")
    }
  }, [isAuthenticated]);

  return (
    <div className="login-form">
      <CForm className="form">
        <h4 className="login-title">Login</h4>

        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Username
        </CFormLabel>
        <CFormInput
          type="text"
          id="inputEmail3"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <CFormLabel
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label"
        >
          Password
        </CFormLabel>
        <CFormInput
          type="password"
          id="inputPassword3"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <CButton onClick={login} color="primary" type="button" className="mt-4">
          Login
        </CButton>
      </CForm>
    </div>
  );
};

export default loginForm;
