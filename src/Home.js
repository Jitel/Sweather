/**
 * Created by jitel on 21.4.18.
 */
import React, {Component} from "react";
import {Image, Input, Statistic, Label, Icon, Button, Header} from "semantic-ui-react";
import "./Home.css";
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Rectangle-4">
                    <div className="Label">
                        <h2 className="Wallet">Wallet</h2>
                        <div>
                            <input font-size="2em" className="Rectangle-2-Copy-10" list='languages'
                                   placeholder='0xa5b28931b3ee0cb7766dc95fa89c027a69d924e9'/>
                            <datalist className="xa5b28931b3ee0cb776" id='languages'>
                                <optionc value='0xa5b28931b3ee0cb7766dc95fa89c027a69d924e9'/>
                            </datalist>
                        </div>
                    </div>
                </div>
                <div className="podo">
                    <p className="layer">
                        0
                    </p>
                    <p className="-copy">
                        0
                    </p>
                </div>
                <div>
                    <h2 className='ETHER-ON-CHAIN'>
                        ether
                        <p className="dodo">on-chain</p>
                    </h2>
                    <h2 className='ETHER-OFF-CHAIN'>
                        ether
                        <p className="dodo">off-chain</p>
                    </h2>
                        <div className="NEW-BUTTON">
                            <div><input className='AMOUNT Rectangle-3' placeholder="Amount"/>
                            <button  color='yellow' className='Rectangle DEPOSIT'>Deposit</button></div>
                        </div>
                </div>

            </div>

        );
    }


}
export default Home