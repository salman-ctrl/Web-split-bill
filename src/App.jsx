import FriendList from "./components/FriendList"
import salman from "./assets/gambar.jpg"
import FormAddFriend from "./components/FormAddFriends"


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

    <div className="app">
      <div className="justify-center flex items-center flex-col">
        <FriendList friends={initialFriends} />

      </div>
    </div>

  )
}