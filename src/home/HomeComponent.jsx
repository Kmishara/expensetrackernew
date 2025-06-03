import React, { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import Transaction from "./Transaction";


const HomeComponent = (props) => {
    const [transaction, updateTransaction] = useState([]);
    const [expense,updateExpense] = useState(0);
    const [income,updateIncome] = useState(0);
    const addTransaction = (payload)=>{
        const TransactionArray = [...transaction];
        TransactionArray.push(payload);
        updateTransaction(TransactionArray)
    }
    const calculationBalance = () =>{
      let exp = 0;
      let inc = 0;
      transaction.map((payload) =>{
        payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        :(inc = inc+payload.amount);
      });
      updateExpense(exp);
      updateIncome(inc);
    };
    useEffect(()=>calculationBalance(),[transaction])
  return (
    <div className="homeContainer">
      
      <OverviewComponent addTransaction={addTransaction} 
      expense = {expense}
      income = {income}
      />
       <Transaction transaction={transaction}/>
     
    </div>
  );
};

export default HomeComponent;
