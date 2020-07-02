import React, {useState,useEffect} from 'react';
import './App.css';
import { ExpensesForm } from './components/ExpensesForm';
import { ExpensesList } from './components/ExpensesList';

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {

  
  // useState hooks 
  var [expenses, setExpenses]=useState(initialExpenses)
  console.log(expenses);
  const [charge, setCharge] = useState(" ")

  const [amount, setAmount] = useState(" ")
  
  //useEffect
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  


  // functions  

  var handleCharge= e =>{
    console.log(`charge: ${e.target.value}`);
    
    setCharge(e.target.value)
  }
   
  var handleAmount= e=>{ 
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value)
  } 

  
  var handleSubmit = e =>{
   e.preventDefault();
   if(charge!='' && amount > 0){
     var singleExpense ={charge: charge , amount: amount }
     setExpenses([...expenses,singleExpense])
     setCharge(' ')
     setAmount(' ')
   }
   else{
     alert('ENTRY MISSING!!!!!')
   }
    
  }

  var clearItems = ()=>{
    setExpenses([])
    
  }
  

  return (
    <>
      <h1 className='heading' > BUDGET CALCULATER </h1>
      <main className='App'>
      <ExpensesForm charge={charge} amount={amount}
      handleAmount={handleAmount}
      handleSubmit={handleSubmit}
      handleCharge={handleCharge} />
      <ExpensesList expenses= {expenses} 
      
      clearItems ={clearItems}/>
      </main>

      <h1>
        total spending :
        <span className="total">
          Rs. 
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
