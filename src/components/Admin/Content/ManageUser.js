import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="users-content">
                <div>
                    <button>
                        add new user
                    </button>

                </div>
                <div> table user

                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;