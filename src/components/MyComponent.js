import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: "Hoi Dan IT", age: "16" },
//             { id: 2, name: "Eric", age: "26" },
//             { id: 3, name: "Bao", age: "69" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         //bad code
//         // let listUserNew = this.state.listUser;
//         // listUserNew.unshift(userObj);
//         // this.setState({
//         //     listUser: listUserNew
//         // })

//         //cach 2
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }

//     hanldeDeleteUser = (userId) => {
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     //JSX
//     render() {

//         return (
//             <>
//                 <br />
//                 <div>
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /> <br />
//                     <DisplayInfor
//                         listUser={this.state.listUser}
//                         hanldeDeleteUser={this.hanldeDeleteUser}
//                     />
//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [{ id: 1, name: "Hoi Dan IT", age: "16" },
        { id: 2, name: "Eric", age: "26" },
        { id: 3, name: "Bao", age: "69" },]
    );

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const hanldeDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone)
    }

    return (
        <>
            <br />
            <div>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUser={listUser}
                    hanldeDeleteUser={hanldeDeleteUser}
                />
            </div>
        </>
    )
}
export default MyComponent;