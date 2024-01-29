import React, { useState } from 'react'
import './style.css'

export default function HomePage() {
    const[dataInput, setdataInput] = useState({
        name:"",
        phoneNumber:"",
        address:"",
        email:"",
        dob:"",
    })
    // state err
    const[err, setErr] = useState({})

    let changeValue = (event) => {
        const {name,value}=event.target
        setdataInput({
            ...dataInput, [name]:value,
        })
    }

    const validate = () => {
        let tempErr = {}
        if(dataInput.name.trim().length == 0) tempErr.name="Họ & tên không được để trống"
        if(dataInput.phoneNumber.trim().length == 0) tempErr.phoneNumber="Số điện thoại không được để trống"
        if(dataInput.address.trim().length == 0) tempErr.address="Địa chỉ không được để trống"
        if(dataInput.email.trim().length == 0) tempErr.email="Email không được để trống"
        if(dataInput.dob.trim().length == 0) tempErr.dob="Ngày sinh không được để trống"
        // Set State
        setErr(tempErr)
        return Object.keys(tempErr).length == 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()) alert(JSON.stringify(dataInput))
    }
    
  return (
    <div className='content'>
        <div className='contentForm'>
            <h1>Thông tin cá nhân</h1>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' placeholder='Họ & Tên' onChange={changeValue}/>
                {err.name && <p className='err'>{err.name}</p>}
                <input name='phoneNumber' type='number' placeholder='Số điện thoại' onChange={changeValue} />
                {err.phoneNumber && <p className='err'>{err.phoneNumber}</p>}
                <input name='address' type='text' placeholder='Địa chỉ' onChange={changeValue}/>
                {err.address && <p className='err'>{err.address}</p>}
                <input name='email' type='email' placeholder='Email' onChange={changeValue}/>
                {err.email && <p className='err'>{err.email}</p>}
                <input name='dob' type='date' placeholder='DD-MM-YYY' onChange={changeValue}/>
                {err.dob && <p className='err'>{err.dob}</p>}
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}
