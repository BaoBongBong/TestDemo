import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Bao", age: "69" },
        ]
    }

    //JSX
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <br /> <br />
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;