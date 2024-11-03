// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Cancel from "./components/Cancel"
// import Layout from './Layout'
// import { Routes, Route } from 'react-router-dom';


// function App() {

//   return (
//     <>
//      {/* <Layout/> */}
//      <Routes>
//       <Route path="/" element={<Layout><Cancel /></Layout>} />
//     </Routes>

//     </>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import OrganizationDetails from './pages/Recruitment/OrganizationDetails';
import JobDetails from "./pages/Recruitment/JobDetails"
import OtherInformation from './pages/Recruitment/OtherInformation';
import Requisitions from './pages/Recruitment/Requisitions';
import Overview from './pages/Recruitment/Overview';
import ApproveRequests from './pages/Recruitment/ApproveRequests';
import HiringProcess from './pages/Recruitment/HiringProcess';
import AddHiring from './pages/Recruitment/AddHiring';
import RequisitionDetails from './pages/Recruitment/Status';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Overview /> </Layout>} />
      <Route path="/projects" element={<Layout><OrganizationDetails /></Layout>} />
      <Route path="/jobdetails" element={<Layout><JobDetails /></Layout>} />
      <Route path="/otherinformation" element={<Layout><OtherInformation /></Layout>} />
      <Route path="/requisitions" element={<Layout><Requisitions /></Layout>} />
      <Route path="/approverequest" element={<Layout><ApproveRequests /> </Layout>} />
      <Route path="/hiringprocess" element={<Layout><HiringProcess /> </Layout>} />
      <Route path="/addhiring" element={<Layout><AddHiring /> </Layout>} />
      <Route path="/status/:jobTitle" element={<Layout><RequisitionDetails /></Layout>} />

    </Routes>
  );
}

export default App;
