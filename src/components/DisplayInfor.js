import React from "react";
import './displayinfor.scss'
class DisplayInfor extends React.Component {

    state = {
        isshowListUser: true
    }



    hanldeShowHide = () => {
        this.setState({
            isshowListUser: !this.state.isshowListUser
        })
    }

    render() {

        //props
        //destructuring
        const { listUser } = this.props; //object

        // console.log(listUser)
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.hanldeShowHide() }}>
                        {this.state.isshowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isshowListUser &&
                    <div>
                        {listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My Name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;