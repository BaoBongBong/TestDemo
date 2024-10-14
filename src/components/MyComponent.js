import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Bao", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        //bad code
        // let listUserNew = this.state.listUser;
        // listUserNew.unshift(userObj);
        // this.setState({
        //     listUser: listUserNew
        // })

        //cach 2
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    //JSX
    render() {
        const test = true

        return (
            <>
                {test}
                <br />
                <div>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /> <br />
                    <DisplayInfor
                        listUser={this.state.listUser}
                    />
                </div>
            </>
        );
    }
}

export default MyComponent;