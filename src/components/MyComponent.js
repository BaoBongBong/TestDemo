import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'NNN',
        address: 'HCM',
        age: '26'
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;