import React from 'react'

import 
{
  CRow,
  CCol,
  CWidgetStatsB
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import axios from '@/api/axiosConfig.jsx';

const Dashboard = () => {
  return (
   <>
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsB
          className="mb-3"
          progress={{ color: 'success', value: 75 }}
          text="Widget helper text"
          title="Widget title"
          value="89.9%"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsB
          className="mb-3"
          color="primary"
          inverse
          progress={{ value: 75 }}
          text="Widget helper text"
          title="Widget title"
          value="89.9%"
        />
      </CCol>
    </CRow>
   </>
  )
}

export default Dashboard;
