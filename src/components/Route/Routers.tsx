import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcuManagement from '../../pages/ECU Management/EcuManagement';
import SoftModule from '../../pages/Software Module/SoftModule';

import Deployment from '../../pages/Deployment/Deployment';

import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Routers = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    // <div>Routes</div>
    <Router>
      <Header selectedOption={selectedOption}/>
      <Sidebar onOptionSelect={handleOptionSelect}/>
      {/* <EditProfile/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Routes>
        <Route path='/ecumanagement' element={<EcuManagement />} />
        <Route path='/softwaremodule' element={<SoftModule />} />
        <Route path='/deployment' element={<Deployment />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Routers;