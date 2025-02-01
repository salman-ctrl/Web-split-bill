
const FormSplitBill = () => {
    const newLocal = <input type="text" className="outline-none px-2 py-1 rounded-md" />;
    return (
        <div className="bg-slate-500 rounded-md h-96 w-96 ml-10 shadow-lg shadow-gray-400 -mt-52">
            <h1 className="px-5 py-3 text-xl font-bold">Patungan Bareng Budi</h1>
            <div className="flex flex-row justify-around items-center h-56 ">
                <div className="flex flex-col space-y-6">
                    <label htmlFor="">Total Biaya</label>
                    <label htmlFor="">Pengeluaran Kamu</label>
                    <label htmlFor="">Pengeluaran Budi</label>
                    <label htmlFor="">Ditalangin Sama</label>
                </div>
                <div className="flex flex-col space-y-5 pt-20 w-32 [&>*]:focus:outline-none">
                    {newLocal}
                    <input type="text" className="outline-none px-2 py-1 rounded-md" />
                    <input type="text" className="outline-none px-2 py-1 rounded-md" />
                    <select name="" id="" value="none" className="outline-none px-2 pt-1 rounded-md">
                        <option value="" >Pilih</option>
                        <option value="user">kamu</option>
                        <option value="user">X</option>
                        <option value="user">Y</option>
                    </select>
                    <button className="bg-white py-2 rounded-md">tambah</button>
                </div>
            </div>
        </div>
    )

}

export default FormSplitBill;