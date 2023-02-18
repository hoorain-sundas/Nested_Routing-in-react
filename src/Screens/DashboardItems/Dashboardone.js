import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import BasicRouting from './basic_routing';
import NestedRouting from './nested_routing';
import DynamicRouting from './dynamic_routing';

const Dashboardone = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className='bg-info text-center'>
        <ul className='list-style-none mt-5 p-3'>
            <li className='d-inline m-2 me-5 fs-4'>
            <button onClick={()=>navigate("basic_routing")} className='border-0 bg-info text-white'>Basic Routing</button></li>
            <li className='d-inline ms-5 m-2 fs-4'>
            <button onClick={()=>navigate("dynamic_routing")} className='border-0 bg-info text-white'>Dyamic Routing</button></li>
            <li className='d-inline ms-5 m-2 fs-4'>
            <button onClick={()=>navigate("nested_routing")} className='border-0 bg-info text-white'>Nested Routing</button></li>
        </ul>
        </div>
      
        <Routes>
            
            <Route path="basic_routing" element={<BasicRouting />} />
            <Route path="dynamic_routing" element={<DynamicRouting />} />
            <Route path="nested_routing" element={<NestedRouting />} />
            </Routes>

    </div>
  )
}

export default Dashboardone
