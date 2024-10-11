import React from "react";

class DisplayInfor extends React.Component {
    render() {

        //props
        //destructuring
        const { listUser } = this.props; //object

        console.log(listUser)
        return (
            <div>
                {listUser.map((user, index) => {
                    console.log(user)
                    return (
                        <div key={user.id}>
                            <div>
                                My Name is {user.name}
                            </div>
                            <div>
                                My age is {user.age}
                            </div>
                        </div>
                    )
                })}
                {/* <div>
                    My Name is {name}
                </div>
                <div>
                    My age is {age}
                </div>
                <hr></hr>
                <div>
                    My Name is {name}
                </div>
                <div>
                    My age is {age}
                </div> */}
            </div>
        )
    }
}

export default DisplayInfor;