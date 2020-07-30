import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:'991598415610-givj3nloh4a4opg39idei0tqna1d7vck.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
        
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return<div>I don't know if I am signed in</div>
        } else if (this.state.isSignedIn) {
            return<div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render () {
        return(
        <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;