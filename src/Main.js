/**
 * Created by jitel on 21.4.18.
 */
import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Transfer from './Transfer'
import Withdrawal from './Withdrawal'

import {main} from 'semantic-ui-react'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {
    render() {
        return (
            <main color="green">
                <Switch >
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Transfer' component={Transfer}/>
                    <Route exact path='/Deposit' component={Home}/>
                    <Route exact path='/Withdrawal' component={Withdrawal}/>
                </Switch>
            </main>
        )
    }
}


export default Main