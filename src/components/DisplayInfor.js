import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props)
        //props
        //destructuring
        const { age, name } = this.props; //object
        return (
            <div>
                <div>
                    My Name is {name}
                </div>
                <div>
                    My age is {age}
                </div>
            </div>
        )
    }
}

export default DisplayInfor;