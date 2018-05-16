import React from 'react'
import axios from 'axios'

class ModifyContact extends React.Component{
constructor(props){
    super(props)
    this.state={
        name:'',
        tel:'',
        email:'',
    }
}

handleState= (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}



render(){
    return <div className="add-contact-container">
        <h1> Add Contact </h1>
        <form 
        style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <label> Contact Name </label>
        <input name="name" value={this.state.name} onChange={this.handleState}/>

        <label> Contact Telephone </label>
        <input name="tel" value= {this.state.tel} onChange={this.handleState}/>

        <label> Contact Name </label>
        <input name="email" value={this.state.email} onChange={this.handleState}/>

        <input type="button" value=" add contact "  onClick={()=>this.addContact(this.state)}/>
        </form>

        </div>
}

}

export default ModifyContact;


