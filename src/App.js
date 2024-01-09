import React, { useState } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Header from "./Mycomponents/Header";
import BudgetTracker from './Mycomponents/BudgetTracker';
import Expense from './Mycomponents/Expense';
import"./App.css"
import "./Mycomponents/app_icon_256.png";




  function App() {
    
  return (
   <>
 
 <Header/>
 <div className="mydiv1" style={{display:"flex" , 
 flexDirection:"column" ,justifyContent:"center" , alignContent:"center",textAlign:"center"
 ,marginTop:"200px" , alignItems:"center"}}>
  <h1 style={{color:"black"}}>
  Manage your expenses at ease with 
  </h1>
  <h2 style={{color:"orange"}}>Spend Wise</h2>
  <p style={{color:"black" ,  width:"450px" , fontWeight:"bold"}}>Gain control over your financial journey, track spending effortlessly, and achieve your financial goals with our intuitive and user-friendly platform. Take charge of your budget, whether it's monthly, daily, or one-time expenses. Experience the simplicity of financial management with SpendWise where organizing your expenses becomes a seamless and empowering task."</p>
  <div className="Myhappy"  style={{display:"flex" , gap:"100px", marginLeft:"600px" }} >
    <BudgetTracker/>
    <br>
    </br>
    <Expense/>
  </div>



 </div>
 
   
   </>
 
  );
}

export default App;
