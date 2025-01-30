import FriendList from "./components/FriendList"
import salman from "./assets/gambar.jpg"
import FormAddFriend from "./components/FormAddFriends"
import FormSplitBill from "./components/FormSplitBill"


const initialFriends = [
  {
    id: 223460,
    name: "salman",
    image: salman,
    balance: 19
  },
  {
    id: 223460,
    name: "komba",
    image: salman,
    balance: -7
  },
  {
    id: 223462,
    name: "kandar",
    image: salman,
    balance: 12
  },
  {
    id: 223461,
    name: "rizky",
    image: salman,
    balance: 0
  },

]

export default function App() {
  return (

    <div className="app bg-white">
      <div className="justify-center space-x-20 flex items-center ">
        <FriendList friends={initialFriends} />
        <FormSplitBill />


      </div>
    </div>

  )
}