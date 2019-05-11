import React from 'react'
import "./BankDataTable.css";
import Spinner from './Spinner';
export default (props) => {
   let tableBodyData=[];
   if(props.data)
   {console.log("inside");
   console.log(props.startIndex);
       for(let i=props.startIndex;i<props.startIndex+10;i++)
       {
          if(props.data[i].address.toLowerCase().indexOf(props.searchText.toLowerCase())!==-1)
          { 
          tableBodyData.push(
            (<tr key={i}><td>{props.data[i].ifsc}</td>
            <td>{props.data[i].bank_id}</td>
            <td>{props.data[i].branch}</td>
            <td>{props.data[i].address}</td>
            <td>{props.data[i].bank_name}</td></tr>))
       }
    }
       console.log(tableBodyData);
   }else{
       return (<Spinner/>)
   }
   
  return (
    <div>
      <table id="customers">
      <thead>
      <tr><th>IFSC</th>
      <th>BANK_ID</th>
      <th>BRANCH</th>
      <th>ADDRESS</th>
      <th>BANK_NAME</th>
      </tr>
      </thead>
      <tbody>
      {tableBodyData && tableBodyData.map((bank,index)=>{
          console.log(bank);
          return bank
      })}
      </tbody>
      </table>
    </div>
  )
}
