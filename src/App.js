import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from './Component/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       show:false
    }
  }

  toggleVisibility=()=>{
    this.setState({show: !this.state.show})
  }
  

  render(){
    return (
       <div className='App'>
         <button variant="outline-warning" onClick={this.toggleVisibility}>show</button>{' '}
         {this.state.show ? <Person/> : <></>}
         
       </div>
    )
      
  }
}

export default App;
