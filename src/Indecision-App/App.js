import React from 'react';
import Options from "./Options";
import AddOption from "./AddOption";
import Action from "./Action";
import OptionModal from "./OptionModal";

class App extends React.Component{

  state = {
    dairies : this.props.dairies,
    duplicate : false,
    selectedOption : undefined
  }
  // constructor(props) {
  //   super(props);
  //   //this.handleAddOption = this.handleAddOption.bind(this);
  //   //this.handleRemoveAll = this.handleRemoveAll.bind(this);
  //   //this.handleRemoveItem = this.handleRemoveItem.bind(this);
  //   this.state = {
  //     dairies : props.dairies,
  //     duplicate : false
  //   }
  // }

  componentDidMount() {
    const dairies = JSON.parse(localStorage.getItem('dairies'));
    this.setState(()=>({dairies }))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.dairies !== this.state.dairies) {
      localStorage.setItem('dairies',JSON.stringify(this.state.dairies));
      console.log(localStorage);
    }
  }

  closeModal = () => this.setState(()=>({selectedOption : undefined}));

  handleAction = () => {
    const index = Math.floor(Math.random()*this.state.dairies.length);
    const selectedOption = this.state.dairies[index]
    this.setState(()=>({selectedOption}));
  }

  handleRemoveItem = item=>{
    const newDairies = this.state.dairies.filter(dairy=>dairy!==item);
    this.setState(()=>{return {dairies: newDairies,duplicate:false}})
  }

  handleAddOption = option => {
    //this.state.dairies.push(option);
    this.setState(prevState=>{
      if(!prevState.dairies.includes(option)){
        return{
          dairies: prevState.dairies.concat(option),
          duplicate: false
        }
      }
      return {duplicate: true}
    })
  }

  handleRemoveAll = ()=> this.setState({dairies : []});

  render() {
    return(
    <div className="App">
      <h1>My Application</h1>
      <Action disabled = {!this.state.dairies.length} handleAction = {this.handleAction}/>
      <Options options = {this.state.dairies} handleRemoveAll={this.handleRemoveAll}
               handleRemoveItem={this.handleRemoveItem}/>
      <AddOption options = {this.state.dairies} handleAddOption = {this.handleAddOption} />
      {this.state.duplicate&&<div style={{color:'red'}}>this item already exists in the list</div>}
      <OptionModal selectedOption={this.state.selectedOption} closeModal = {this.closeModal}></OptionModal>
    </div>
    )
  }
}

App.defaultProps = {dairies: ['milk','yogurt']};


export default App;