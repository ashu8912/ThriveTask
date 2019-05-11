import React from 'react'
import "./SearchBar.css";
export default class SearchBar extends React.Component {

 
render()
  {  
  return (
    <div className="SearchBar">
      <input type="text" placeholder="search bank by address" className="Input" onChange={(event)=>this.props.changeHandler(event)}/>
    </div>
  )
}
}
