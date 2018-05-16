import React from 'react';
import { Route} from 'react-router-dom'
import Contacts from './Contact'
import AddContact from './AddContact';
import ModifyContact from './ModifyContact';
class Routes extends React.Component{
    render(){
        return <div>
            <Route exact path="/contacts" component={Contacts} />
            <Route extact path="/Add_contact" component={AddContact}/>
            <Route exact path="Modify_contact" component={ModifyContact}/>

            </div>
    }
}

export default Routes;