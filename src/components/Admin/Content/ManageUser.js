import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FaPlusCircle } from "react-icons/fa";
import TableUser from "./TableUser";

import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiServies'

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([

    ]);
    //componentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

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
                        Add New User
                    </button>

                </div>
                <div className="table-user-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;