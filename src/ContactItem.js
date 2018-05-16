import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class ContactItem extends React.Component {
    deleteContact=(value)=>{
        axios.delete(`/contact/${value}`)
    }
    render(){
    const item = this.props.item
    return <div style={{border:"3px solid grey"}}>
    <h3> contact name: {item.name} </h3>
            <h3> contact number :{item.tel}</h3>
            <h3> contact mail : {item.email}</h3>
            <div>
            <Link to="/Add_contact" >
                <input type="button" value="modify"/>
            </Link>

            <input type="button" value="supprimer" onClick={()=>this.deleteContact(item._id)}/>
            </div>

            </div>
    }
}


export default ContactItem