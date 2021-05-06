import './App.css';
import React from "react";

class App extends React.Component {
  
 
  state =   {fullName:'Sirine Ben Gabsia',
    bio: '25 years old.',
    imgSrc:  "/123.jpg" ,
    profession: 'full stack developper.',
    show : false,
    time: 0,
  };
  handleClick=e=>{
    e.preventDefault();
    this.setState({...this.state,
      show:!this.state.show})
  }
  increment=()=>this.setState({time: this.state.time +1});
  componentDidMount() {
    setInterval(this.increment,1000)
    
  }
  render() {
  return (
    <>
     <button style={{width:"150px",margin: "30px 600px 30px  ", backgroundColor: "red",borderRadius: "12px", color: "white"}} onClick={this.handleClick}> ClickMe </button>
     {this.state.show===true?
      <div style={{textAlign: "center", padding: "20", fontSize:"30px", }}>
      <p>My name is {this.state.fullName}</p>
      <p>I am a  {this.state.profession}</p>
      <p>I am  {this.state.bio}</p>
      <img style={{ width: "300px", borderRadius:"50%",  border: "1px solid #ddd"}} alt={this.state.imgAlt} src={this.state.imgSrc} />
      <h3>{this.state.time}</h3>
    </div>:<div></div>}
    </>

  );
}
}
export default App;
