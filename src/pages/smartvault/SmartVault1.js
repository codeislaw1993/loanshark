import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import {
    Row, Col
} from 'reactstrap';

import { Radio } from "../../components/Radio/Radio";

class SmartVault1 extends React.Component {
    constructor() {
        super();
        this.setSelected = this.setSelected.bind(this);
        this.state = {
            selected: ' ',
        }
    }

    setSelected(value) {
        this.setState({ selected: value });
    }

    render() {
        return (
            <div>
                <h3 className={"fw-bold"}>Start using Smart Vault</h3>
                {
                    !this.props.myAccount ?
                    <Row>
                        <Col sm={6}>
                            <p className={"fw-bold"}>Please connect your wallet first.</p>
                        </Col>
                    </Row>
                    :
                    this.props.myProtection[0] <= 0 ?
                        <Row>
                            <Col sm={6}>
                                <p className={"fw-bold"}>Choose the way to protect your loan automatically</p>
                                <Radio
                                    value="topup"
                                    selected={this.state.selected}
                                    text="Top-up"
                                    disabled="disabled"
                                    onChange={this.setSelected}
                                />
                                <NavLink
                                    to={"/app/main/smartVault2"}
                                >
                                    <Radio
                                        value="repay"
                                        selected={this.state.selected}
                                        text="Repay"
                                        disabled=""
                                        onChange={this.setSelected}
                                    />
                                </NavLink>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col sm={6}>
                                <p className={"fw-bold"}>You have already protected by the Smart Vault. <br/> If you want to set a new Smart Vault, please withdraw the original one.</p>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        myAccount: store.loanshark.myAccount,
        myBtcLpAmount: store.backd.myBtcLpAmount,
        priceOfBtc: store.loanshark.priceOfBtc,
        myBTCContract: store.loanshark.myBTCContract,
        myProtection: store.backd.myProtection
    };
}

export default connect(mapStateToProps)(SmartVault1);
