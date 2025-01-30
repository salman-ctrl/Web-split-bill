import PropTypes from "prop-types"



const Friend = ({ friend }) => {
    return (
        <li className="flex w-96 items-center space-x-10 p-4 justify-between hover:bg-gray-300 rounded-md transition-all duration-400 ease-in-out   ">
            <img className="w-16 h-14 rounded-full" src={friend.image} alt={friend.name} />
            <div>
                <h3 className="font-semibold">{friend.name}</h3>
                {friend.balance < 0 && (
                    <p className="text-red-400">
                        Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="text-green-400">
                        {friend.name} berhutang Rp {Math.abs(friend.balance)} ke kamu
                    </p>
                )}
                {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
            </div>
            <button className=" bg-blue-500 text-red-100   py-2 px-4 rounded-lg">Pilih</button>
        </li>

    );
};

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }).isRequired,
};
export default Friend

