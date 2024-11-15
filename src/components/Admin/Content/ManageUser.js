import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-success"
                        onClick={() => setShowModalCreateUser(true)}>
                        <FaPlusCircle />
                        add new user
                    </button>

                </div>
                <div className="table-user-container">
                    table user

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}
export default ManageUser;