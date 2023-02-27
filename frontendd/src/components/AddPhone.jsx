import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPhone = () => {
    const [name, setName] = useState("");
    const [merek, setMerek] = useState("");
    const [warna, setWarna] = useState("");
    const [ram, setRam] = useState("");
    const [rom, setRom] = useState("");
    const [processor, setProcessor] = useState("")
    const [harga, setHarga] = useState("")
    const navigate = useNavigate();

    const savePhone = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/gallery_phone", {
            nama_hp: name,
            merek_hp: merek,
            warna_hp: warna,
            RAM: ram,
            ROM: rom,
            processor: processor,
            harga: harga
        });
        navigate("/");
    };

    return (
        <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
            <span><a href='/' className="material-symbols-outlined">arrow_back</a></span>
            <form onSubmit={savePhone} className='my-10'>
                <div className="flex flex-col">
                <div className="mb-5">
                        <label className="font-bold text-slate-700">Nama Hanphone</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Nama HP' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Merek Handphone</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Merek HP' value={merek} onChange={(e) => setMerek(e.target.value)} />
                    </div>

                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Warna Handphone</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Warna HP' value={warna} onChange={(e) => setWarna(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">RAM</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='RAM' value={ram} onChange={(e) => setRam(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">ROM</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='ROM' value={rom} onChange={(e) => setRom(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Processor</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Processor' value={processor} onChange={(e) => setProcessor(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Harga</label>
                        <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Harga' value={harga} onChange={(e) => setHarga(e.target.value)} />
                    </div>
                    <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddPhone