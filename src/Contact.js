import React from 'react'
import axios from 'axios'
import ContactItem from './ContactItem'

class Contacts extends React.Component{
constructor(props){
    super(props)
    this.state={
        contacts:[]
    }
}
    componentDidMount(){
        axios.get('/contacts').then(
            res=> this.setState({
                contacts : res.data
            })
        )
    }

    render(){
        return <div className='contacts-container'>
         <h1> this is the contact page </h1>
           <div style={{display:'flex'}}>
        {this.state.contacts.map((el,i)=> {
            return <div style={{border:"3px solid grey"}}>
                <ContactItem item={el} />
           
           {/* <h3> contact name: {el.name} </h3>
            <h3> contact number :{el.tel}</h3>
            <h3> contact mail : {el.email}</h3>
        */}
        </div>
        })}
        </div>
        </div>
    }
}

export default Contacts;