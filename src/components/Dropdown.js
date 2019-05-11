import React from 'react'
import {connect} from "react-redux";
import { getBankDetails } from '../store/actions/actionGenerators';
import "./Dropdown.css";
const mapDispatchToProps=(dispatch)=>{
    return {
        "changeCity":(cityName)=>dispatch(getBankDetails(cityName))
    }
}
export default connect(null,mapDispatchToProps)((props) => {
  return (
    <div className="Dropdown">
      <select className="select-css" onChange={(event)=>{
        console.log(event.target.value);  
        props.changeCity(event.target.value)}}>
      {props.cities.map((city,index)=>{
          return <option key={index}>{city}</option>
      })}
      </select>
    </div>
  )
})
