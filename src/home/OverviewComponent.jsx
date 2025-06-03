import React, { useState } from 'react'

import './css/Overview.css'

const AddTransactionView = (props) =>{
    const [amount, setAmount] = useState();
    const [ desc, setDesc] = useState();
    const [type,setType] = useState("EXPENSE");
    const addTransaction = () =>{
        props.addTransaction({
            amount:Number(amount),
            desc,
            type,
            id:Date.now(),
        });
       console
        props.toggleAddTxn()
    }
    return(
        <div className='AddTransactionContainer'>
<input  placeholder='Amount' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
<input type="text" placeholder='Description'  value={desc} onChange={(e) => setDesc(e.target.value)} />
<div className='RadioBox'>
    <input type="radio" id='expense' name='type' value='EXPENSE'  checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)}/>
    <label htmlFor="expense">Expense</label>
     <input type="radio" id='income' name='type' value='INCOME' checked={type === "INCOME"} onChange={(e) => setType(e.target.value)} />
    <label htmlFor="income">Income</label> 
</div>
<div className='Addtrc' onClick={addTransaction}> ADD Transaction</div>
        </div>
    )
}
const OverviewComponent = (props) => {
    const[isAddTxnVisible,toggleAddTxn] = useState(false);
  return (
    <div className='overviewContainer'><div className='Balance'> Balance: ${props.income- props.expense } 
    <div className='Addtrc' onClick={()=> toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "ADD"}</div>
    </div>
   {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction} />} 
   <div className='expenseContainer'>
<div className="expensebox expense">
    Expense <span>${props.expense}</span>
</div>
<div className="expensebox income">
    Income <span>${props.income}</span>
</div>
   </div>
    </div>
  )
}

export default OverviewComponent