import React from 'react'
import { connect } from 'react-redux'

import { startLogin } from '../actions/authActions'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">React Boilerplate</h1>
                    <p>Tagline for app</p>
                    <button
                        className="button"
                        onClick={this.props.startLogin}
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)