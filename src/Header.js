/**
 * Created by jitel on 21.4.18.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Image, Input, Statistic, Label, Icon, Button, Item, Container} from 'semantic-ui-react'
import './Header.css'


class Header extends Component {

    render() {
        return (
            <header>
                <div className="Header">
                    <Menu stackable>
                        <Menu.Item>
                            <Link to='/'> <img width='150px' size='large' className="Logo" src='https://lh6.googleusercontent.com/4N1d0pL8NSGiYGjk6Njxilvw4ZmYogCtHyfyftGNYTSZ4IBRLSPqMQySfYoE8tDCzqz3fPXwSKg87A=w1280-h870'/></Link>
                        </Menu.Item>
                        <Menu.Item >
                                <Link className="Deposit" to='/deposit'> Deposit</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <div >
                                <Link className="Transfer" to='/transfer'> Tranfer</Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item>

                            <Link className="Withdrawal" to='/Withdrawal'> Withdrawal</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link className="History" to='/history'> History</Link>
                        </Menu.Item>
                    </Menu>
                </div>


            </header>
        )
    }
}

export default Header;