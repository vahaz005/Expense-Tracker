import React, { useState } from 'react';
import"./BudgetTracker.css"
function BudgetTracker() {
  const [monthlyBudget, setMonthlyBudget] = useState(0);

  // Other components and functions will go here

  return (
    <div className="Mydiv" style={{marginTop:"60px", marginLeft:"-670px"}}>
        <h1 style={{color:"orange" , background:"black" , borderRadius:"5px" , height:"56px" , 
      width:"409px"}}>
            :Set Monthly Budget:
        </h1>
      
      <p style={{fontSize:"25px",
    fontWeight:"bold"}}>Your Monthly Budget: <p style={{color:"green"}}>${monthlyBudget}</p></p>
      <label htmlFor="budgetInput" style={{fontSize:"25px" , fontWeight:"bold"}}>Enter Monthly Budget:</label>
      <br>
      </br>
<input style={{border:"2px solid ", borderRadius:"3px"}}

  type="number"
  id="budgetInput"
  value={monthlyBudget}
  onChange={(e) => setMonthlyBudget(Number(e.target.value))}

/>

 
    </div>
  );
}

export default BudgetTracker;