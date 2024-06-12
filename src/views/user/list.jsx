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

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <CCard>
        <CCardHeader>
          <div className="w-100 mb-2 d-flex align-items-center justify-content-between">
            <h4 className="p-2 mb-0">List User</h4>
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col" width="60%">
                  Email
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Username</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {users.map((user) => {
                return (
                  <CTableRow key={user.id}>
                    <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>

                    <CTableDataCell>{user.email}</CTableDataCell>

                    <CTableDataCell>{user.username}</CTableDataCell>
                  </CTableRow>
                );
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  );
};

export default User;
