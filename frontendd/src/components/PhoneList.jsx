import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, { useSWRConfig } from "swr";

const PhoneList = () => {
    const { mutate } = useSWRConfig();
    const fetcher = async () => {
        const response = await axios.get('http://localhost:5000/gallery_phone');
        return response.data;
    };

    const { data } = useSWR('gallery_phone', fetcher);
    if (!data) return <h2>Sedang menghubungkan ke database...</h2>;

    const deletePhone = async (phoneId) => {
        await axios.delete(`http://localhost:5000/gallery_phone/${phoneId}`);
        mutate('gallery_phone');
    };

    return (
        <div className='flex flex-col mt-5'>
            <div className="w-full">
                <Link to="/add" className='bg-green-500  hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Add New</Link>
                <div className="relative shadow roundend-lg mt-3">
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                            <tr>
                                <th className='py-3 px-1 text-center'>No</th>
                                <th className='py-3 px-6'>Nama HP</th>
                                <th className='py-3 px-6'>Merek HP</th>
                                <th className='py-3 px-6'>Warna HP</th>
                                <th className='py-3 px-6'>RAM</th>
                                <th className='py-3 px-6'>ROM</th>
                                <th className='py-3 px-6'>Processor</th>
                                <th className='py-3 px-6'>Harga</th>
                                <th className='py-3 px-1 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((phone, index) => {
                                return <tr className='bg-white border-b' key={phone.id}>
                                    <td className='py-3 px-1 text-center'>{index + 1}</td>
                                    <td className='py-3 px-6 font-medium text-gray-900'>{phone.nama_hp}</td>
                                    <td className='py-3 px-6'>{phone.merek_hp}</td>
                                    <td className='py-3 px-6'>{phone.warna_hp}</td>
                                    <td className='py-3 px-6'>{phone.RAM}</td>
                                    <td className='py-3 px-6'>{phone.ROM}</td>
                                    <td className='py-3 px-6'>{phone.processor}</td>
                                    <td className='py-3 px-6'>{phone.harga}</td>
                                    <td className='py-3 px-1 text-center'>
                                        <Link to={`/edit/${phone.id}`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>Edit</Link>
                                        <button onClick={() => deletePhone(phone.id)} className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white'>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PhoneList