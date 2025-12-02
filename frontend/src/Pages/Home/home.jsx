import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../../components/header/Header'; 
import './Home.css'
function home() {
    const location = useLocation();
    const navigate = useNavigate();
  return (<>
    <div> <Header/> 
    </div>
    </>
  )
}

export default home