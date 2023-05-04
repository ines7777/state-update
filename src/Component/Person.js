import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Person extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         fullName:"",
         bio:"",
         imgSrc:"",
         profession:"",
         count:0,
         timer:0,
         interval:null
      }
    }

    increment =()=>{
        this.setState({count: this.state.count +1})
    }

    decrement =()=>{
        this.setState({count: this.state.count -1})
    }

    componentDidMount(){
        this.setState({
            fullName:"inesch",
            bio:"this is my bio",
            imgSrc:"femme.jpg",
            profession:"web developer",
            interval:setInterval(()=>{
                 this.setState({timer: this.state.timer +1})
            },1000)
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    render(){
        return(
           <div>
              {/* <h1 style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.fullName}</h1>
               <h1 style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.bio}</h1>
               {this.state.imgSrc}
               <h1 style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.profession}</h1>*/} 
               {/*<button onClick={this.increment}>+</button>
               <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
            <h1 style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.timer}</h1>*/}

      <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={this.state.imgSrc} width="100px" />
      <Card.Body>
        <Card.Title>Card </Card.Title>
        <Card.Text>
        <p style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.fullName}</p>
        </Card.Text>
        <Card.Text>
        <p style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.bio}</p>
        </Card.Text>
        <Card.Text>
        <p style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.profession}</p>
        </Card.Text>
        <Card.Text>
        <p style={{color:"red", fontFamily:"sans-serif", fontWeight:"bolder"}}>{this.state.timer}</p>
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

           </div>
        )
    }
    
}

export default Person;