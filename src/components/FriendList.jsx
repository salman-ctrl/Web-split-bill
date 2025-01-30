import PropTypes from "prop-types";
import Friend from "./Friend";
import FormAddFriend from "./FormAddFriends";
const FriendList = ({ friends }) => {
    return (
        <div className="h-screen flex backdrop-brightness-100 flex-col">
            <ul className="w-full h-full items-center justify-center  flex flex-col">
                {friends.map(friend => (
                    <Friend friend={friend} key={friend.id} />
                ))}

            </ul>
            <FormAddFriend />

        </div>

    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            Image: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,

        }).isRequired,
    )
};

export default FriendList;