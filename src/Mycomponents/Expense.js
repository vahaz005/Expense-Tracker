import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React,{Component, useRef, useState} from "react";
import monthlyBudget from "./BudgetTracker";
import { toBeEmpty } from "@testing-library/jest-dom/matchers";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState('');
  const [totalExpense , settotalExpense] = useState(0);
  const [newExpense , setnewExpense] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState();
  


  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddExpense = () => {
    if(totalExpense>=monthlyBudget){
      alert('limit exceded');
      
    } else
  
    if (description && frequency && amount) {
      const temp = {
        
        description,
        frequency,
        amount: parseFloat(amount)
      };

      setnewExpense([...newExpense, temp]);

    
      setDescription('');
      setFrequency('monthly');
      setAmount('');
     
    } else {
      alert('Please fill out all fields.');
    }
    const handleAddExpense = () => {
      const expenseAmount = parseFloat(amount);

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter a valid amount for the expense.');
    return;
  }

  if ( expenseAmount > monthlyBudget) {
    alert('Adding this expense would exceed the budget. Please adjust.');
  } else 
    
      if (description && frequency && amount) {
        const temp = {
          
          description,
          frequency,
          amount: expenseAmount
        };
  
        setnewExpense([...newExpense, temp]);
  
      
        setDescription('');
        setFrequency('monthly');
        setAmount('');
       
      } else {
        alert('Please fill out all fields.');
      }
    
      
      
 
    }
  };
  const handletotalexpense = () =>{
    let a =0;
    newExpense.forEach(element => {
        
        a = a+element.amount;
    });
   
settotalExpense(a);
  }
 

  const pdfref = useRef();
  const downloadPDF =()=> {
    const input = pdfref.current;
    html2canvas(input).then((canvas =>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p' , 'mm' , 'a4' , true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/ imgHeight);
      const imgX = (pdfWidth - imgWidth*ratio) /2;
      const imgY = 30;
      pdf.addImage(imgData , 'PNG' ,imgX , imgY , imgWidth*ratio , imgHeight*ratio);
      pdf.save('Expense.pdf')
    }))
  

}

  return (
    <>
    <div style={{marginTop:"60px"}}>
      <h1 style={{color:"orange" , background:"black" , borderRadius:"5px" , height:"56px"}}>:Add Expenses:</h1>

      
      <label htmlFor="description"style={{fontSize:"25px" , 
    fontWeight:"bold"}}>Description:</label>
      <br>
      </br>
      <input style={{border:"2px solid ", borderRadius:"3px"}} type="text" id="description" value={description} onChange={handleDescriptionChange}/>
      <br>
      </br>
      <label htmlFor="frequency" style={{fontSize:"25px" , 
    fontWeight:"bold"}}>Frequency:</label>
      <br>
      </br>
      <select  style={{border:"2px solid ", borderRadius:"3px"}} id="frequency" value={frequency} onChange={handleFrequencyChange}>
        <option value="monthly">Monthly</option>
        <option value="daily">Daily</option>
        <option value="one-time">One-Time</option>
      </select>
      <br>
      </br>
      <label htmlFor="amount" style={{fontSize:"25px" , 
    fontWeight:"bold"}}>Amount:</label>
      
      <br>
      </br>
      <input style={{border:"2px solid ", borderRadius:"3px"}} type="number" id="amount" value={amount} onChange={handleAmountChange} />
      
      <button  style={{border:"none" ,background:"orange" , color:"black" , borderRadius:"5px"}} onClick={handleAddExpense }>Add Expense</button>
      <br>
      </br>
      
     
      
        
        
      
    </div>
    <div style={{marginTop:"60px"}} ref={pdfref}>
    <h1 style={{color:"orange" , background:"black" ,width:"201px" , height:"56px" , borderRadius:"5px"}}>:Expenses:</h1>
    <ul >
        {newExpense.map((newExpense) => (
          <li >
            {`${newExpense.description} (${newExpense.frequency}): $${newExpense.amount}`}
          </li>
        ))}
      </ul>
      
      
     <button style={{border:"none" ,background:"orange" , color:"black" , borderRadius:"5px"}} onClick={handletotalexpense}>
        Calculate total Expenses
     </button>
      <h4>
        totalExpense: ${totalExpense}
      </h4>
    </div>
    <div 
    >
        <button  style={{background:"orange" , outline:"none" , borderRadius:"5px" , border:'none' , marginTop:"73px" , width:"84px" ,
      height:"42px"}} onClick={downloadPDF}> 
        getpdf
      </button>
    </div>
    

    </>
  );
}


export default Expense;

