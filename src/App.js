import React, {useState} from 'react';
import './App.css';
import { ExpensesForm } from './components/ExpensesForm';
import { ExpensesList } from './components/ExpensesList';


function App() {
  //const id2=0;

 var  initialExpenses= [
    {charge:'rent', amount:1600},
    {charge:'Car payment', amount:2000 }
  ];

  // useState hooks 
  var [expenses, setExpenses]=useState(initialExpenses)
  console.log(expenses);
  const [charge, setCharge] = useState(" ")

  const [amount, setAmount] = useState(" ")


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
    console.log('list cleared');
    
  }
  var handleDelete= id=>{
    console.log('item deleted')

  }

  var handleEdit= id=>{
    console.log(`id delete: ${id}`);
    
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
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      clearItems ={clearItems}/>
      </main>

      <h1>
        total spending :<span className='total'>
          Rs. {expenses.reduce((acc,curr)=>{
            return acc+= parseInt(curr.amount);
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
