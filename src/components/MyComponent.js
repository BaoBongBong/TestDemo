import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ['a', 'b', 'c']
        return (
            <div>
                <UserInfor></UserInfor>
                <br /> <br />
                <DisplayInfor name="Hoi Dan IT" age="30"></DisplayInfor>
                <DisplayInfor name="Bao" age="21" myInfor={myInfor}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;