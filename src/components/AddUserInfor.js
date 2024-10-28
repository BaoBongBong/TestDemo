import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name: '',
//         address: '',
//         age: ''
//     }

//     handleOnchange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>My name is {this.state.name} I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name</label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnchange(event)}
//                         value={this.state.name}
//                     />
//                     <label>Your age</label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnchangeAge(event)}
//                         value={this.state.age}
//                     />
//                     <button>Submit</button>
//                 </form></div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const handleOnchange = (event) => {
        setName(event.target.value)
    }

    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div>My name is {name} I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name</label>
                <input
                    type="text"
                    onChange={(event) => handleOnchange(event)}
                    value={name}
                />
                <label>Your age</label>
                <input
                    type="text"
                    onChange={(event) => handleOnchangeAge(event)}
                    value={age}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;