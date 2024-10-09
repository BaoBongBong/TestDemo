import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'NNN',
        address: 'HCM',
        age: '26'
    }

    handleClick(event) {
        console.log(">>Click me my button")

        //merge state => react class
        this.setState({
            name: "Bao",
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleMouseOver(event) {
        // console.log(event.pageX)
    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnchange(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;