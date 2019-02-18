import React, {Component} from 'react';
import './login.scss';
import {connect} from "react-redux";

class Login extends Component {
    state = {
        isVisible: false
    }

    showedToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        if (this.state.isVisible) {
            return (
                <div className="registerBlock">
                    <div className="registerHeader">
                        <img className="errorIcon"/>
                        <p className="registerHeaderText">Error 228 : User is undefined</p>
                    </div>
                    <form className="registerForm" onSubmit={this.handleSubmit}>

                        <p className="registerFormItem">Name: <input className="registerInput" type="text" name="nickname"/></p>
                        <p className="registerFormItem">Password: <input className="registerInput" type="password" name="password"/></p>
                        <button className="registerButton" type="submit">Register</button>
                    </form>
                </div>
                // <div>
                //     <form>
                //         <input type="text" name="name" /><br/>
                //         <input type="text" name="password"/><br/>
                //         <button type="submit">Login</button>
                //     </form>
                // </div>
            );
        } else {
            return null;
        }
    }
}

export default connect()(Login);