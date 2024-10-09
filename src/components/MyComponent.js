import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'NNN',
        address: 'HCM',
        age: '26'
    }

    handleClick(event) {
        // console.log(">>Click me my button")
        console.log(">>My name is ", this.state.name)
    }
    handleMouseOver(event) {
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onMouseOver={this.handleMouseOver}>Hover Me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;