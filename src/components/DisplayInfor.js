import React, { useEffect, useState } from "react";
import './displayinfor.scss';
// import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     // constructor(props) {
//     //     console.log(">>> call component: 1")
//     //     super(props);
//     //     this.state = {
//     //         isshowListUser: true
//     //     }
//     // }
//     // state = {
//     //     isshowListUser: true
//     // }

//     // componentDidMount() {
//     //     console.log('>>>>> call me component did mount')

//     //     setTimeout(() => {
//     //         document.title = 'Eric&Hoi Dan IT'
//     //     }, 3000)
//     // }
//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log("call me component did update", this.props, prevProps)
//     //     if (this.props.listUser !== prevProps.listUser) {
//     //         if (this.props.listUser.length === 5) {
//     //             alert('you got 5 user')
//     //         }
//     //     }
//     // }

//     // hanldeShowHide = () => {
//     //     this.setState({
//     //         isshowListUser: !this.state.isshowListUser
//     //     })
//     // }

//     render() {
//         console.log('call me render: ')
//         //props
//         //destructuring
//         const { listUser } = this.props; //object

//         // console.log(listUser)
//         return (
//             <>
//                 <div className="display-infor-container">
//                     {/* <img src={logo} />
//                     <div>
//                         <span onClick={() => { this.hanldeShowHide() }}>
//                             {this.state.isshowListUser === true ? "Hide list user" : "Show list user"}
//                         </span>
//                     </div> */}
//                     {true &&
//                         <div>
//                             {listUser.map((user, index) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>
//                                             <div>My Name is {user.name}</div>
//                                             <div>My age is {user.age}</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => this.props.hanldeDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('>>>Call me render')
    useEffect(
        () => {
            if (listUser.length === 0) {
                alert('You deleted all user!')
            }
            console.log('>>>call me useEffect')
        }, [listUser]
    )

    return (
        <>
            <div className="display-infor-container">
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {/* <img src={logo} />
                    <div>
                        <span onClick={() => { this.hanldeShowHide() }}>
                            {this.state.isshowListUser === true ? "Hide list user" : "Show list user"}
                        </span>
                    </div> */}
                {isShowHideListUser &&
                    <div>
                        {listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My Name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.hanldeDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}
export default DisplayInfor;