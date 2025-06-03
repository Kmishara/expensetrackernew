import React, { useEffect, useState } from 'react'
import './css/Transaction.css'
const TransactionCell = (props)=>{
  
  return(
  <div className={`cell ${props.payload?.type === "EXPENSE" ? "expense" : "income"}`}>
  <span>{props.payload.desc}</span>
  <span>{props.payload.amount}</span>
  </div>
  )
}
const Transaction = (props) => {
  const [searchText,updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transaction);
  const filterData = (searchText)=>{
    if(!searchText || !searchText.trim().length){
      updateTxn(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload)=>payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
  );
  updateTxn(txn);
  }
  useEffect(()=>filterData(searchText),[props.transaction]);
  return (
    <div className='transaction-container'>Transaction
      <input 
      value={searchText}
      type="text" placeholder='search' 
      onChange={(e)=>{ updateSearchText(e.target.value);filterData(e.target.value);}}
      />
      {filteredTransaction ?.length ? filteredTransaction .map((payload)=>( <TransactionCell
        payload ={payload}/>
      )):""}
    </div>
  )
}

export default Transaction