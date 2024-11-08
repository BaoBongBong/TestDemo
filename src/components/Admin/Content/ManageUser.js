import ModalCreateUser from "./ModalCreateUser";

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
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;