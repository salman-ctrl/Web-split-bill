import PropTypes from "prop-types";
import Friend from "./Friend";
import FormAddFriend from "./FormAddFriends";

const FriendList = ({ friends }) => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-24">
            <ul className="w-full max-h-[90vh] flex flex-col items-center space-y-2 overflow-auto">
                {friends.map(friend => (
                    <Friend friend={friend} key={friend.id} />
                ))}
            </ul>
            <FormAddFriend />
            <button className="bg-blue-500 text-white px-4 py-2 -mt-14 ml-32 rounded">Tambah Teman</button>
        </div>
    );
};

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
