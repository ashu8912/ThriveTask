import React from 'react';
import {connect} from "react-redux";
import Pagination from 'semantic-ui-react-button-pagination';
import './App.css';
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import BankDataTable from "./components/BankDataTable";
import { getBankDetails } from './store/actions/actionGenerators';

class App extends React.Component{
  state={
    offset:0,
    searchText:""
  }
  componentDidMount(){
    //this.fetchBanks("MUMBAI");
    this.props.fetchBankDetails("MUMBAI");
  }
  componentDidUpdate(prevProps,prevState)
  {
    if(this.state.pageCount!==prevState.pageCount && this.props.selectedCityData)
    {
      this.setState({pageCount:Math.ceil(this.props.selectedCityData/10)});
    }
  }
  handleClick=(e,props,offset)=>{
   this.setState({offset});
  }
  searchTextHandler=(event)=>{
   this.setState({searchText:event.target.value});
  }
  render()
  {
    console.log(this.state.pageCount);
  return (
    <div>
     <h1 style={{textAlign:"center"}}>Bank Branches</h1> 
     <div className="row Filters">
     <Dropdown cities={["MUMBAI","DELHI","BANGALORE","CHENNAI","KOLKATA"]}/>
     <SearchBar changeHandler={this.searchTextHandler}/>
     {this.props.selectedCityData && <div><Pagination
      offset={this.state.offset}
      limit={10}
      total={Math.floor(this.props.selectedCityData.length/10)}
      color={"teal"}
      onClick={(event,props,offset) => this.handleClick(event,props,offset)}
    /></div>}
     </div>
     <BankDataTable data={this.props.selectedCityData} startIndex={this.state.offset} searchText={this.state.searchText}/>
     
    </div>
  );
  }
}
const mapStateToProps=(state)=>{
  return {
    "selectedCityData":state.banks[state.banks.selectedCity],
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    "fetchBankDetails":(cityName)=>dispatch(getBankDetails(cityName))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
