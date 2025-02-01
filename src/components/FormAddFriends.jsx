import { useState } from "react"

export default function FormAddFriend({ adfriends }) {

    const [name, setName] = useState('');

    return (
        <div className="bg-slate-500 w-96 px-10 py-10 flex h-54 shadow-lg shadow-slate-500 -mt-20 rounded-md">
            <form action="" className="flex flex-row w-48 ">
                <div className="flex flex-col">
                    <label htmlFor="">Nama</label>
                    <label htmlFor="" className="mt-7">Gambar</label>
                </div>
                <div className="flex flex-col bg-slate-500 ml-10">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className=" border border-none focus:outline-none p-1 rounded-md" />
                    <input type="text" className="mt-6 border border-none focus:outline-none p-1 rounded-md" />
                    <button className="w-full bg-slate-50 mt-6 p-2 rounded-md">tambahkan</button>
                </div>

            </form>
        </div>

    )

}