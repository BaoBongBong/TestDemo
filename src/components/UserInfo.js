import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'NNN',
        address: 'HCM',
        age: '26'
    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>My name is {this.state.name} I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchange(event)}
                        value={this.state.name}
                    />
                    <label>Your age</label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                        value={this.state.age}
                    />
                    <button>Submit</button>
                </form></div>
        )
    }
}
export default UserInfor;