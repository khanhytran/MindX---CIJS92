import React, { useState } from 'react'
import './style.css'

export default function TodoListApp() {
    const [dataInput, setDataInput] = useState("")
    const [edit, setEdit] = useState({
        id:"",
        status: false
    })
    const [data, setData] = useState([
        {
            id: "1",
            taskName: "React JS",
            status: false,
        },
        {
            id: "2",
            taskName: "API",
            status: true,
        }

    ])
    // Hàm checked
    const changeCheck = (event, id) => {
        let newData = [...data]
        let findIndex = newData.findIndex((item) => {
            return id == item.id
        })
        newData[findIndex].status = event.target.checked
        setData(newData)
    }
    // Hàm Update
    const update = (id) => {
        let newData = [...data]
        let findIndex = newData.findIndex((item) => {
            return id == item.id
        })
        setDataInput(newData[findIndex].taskName)
        setEdit({
            id:id,
            status: true
        })
    }
    // Hàm Save sau khi edit
    const save = () => {
        let newData = [...data]
        let findIndex = newData.findIndex((item) => {
            return edit.id == item.id
        })
        newData[findIndex].taskName = dataInput
        setData(newData)
        setDataInput("")
    }

    // Hàm render
    const renderTask = (filterType) => {
        return data.map((item) => {
            if (filterType == 'all' || (filterType == 'active' && !item.status) || (filterType == 'completed' && item.status)) {
                let stylecss = 'activeTask'
                if (item.status) {
                    stylecss = 'completedTask'
                }
                return <div className={stylecss} key={item.id}>
                    <div>
                        <input checked={item.status} type="checkbox" onChange={() => { changeCheck(event, item.id) }} />
                        <span>{item.taskName}</span>
                    </div>
                    <div>
                        <button className='delete'>delete</button>
                        <button onClick={() => { update(item.id) }}>update</button>
                    </div>
                </div>
            }
        })
    }
    // Hàm lấy data input
    const handleChange = (e) => {
        setDataInput(e.target.value)
    }
    // Hàm add task
    const addTask = () => {
        let newData = [...data]
        let findIndex = newData.findIndex((item) => {
            return dataInput == item.taskName
        })
        // Nếu giá trị rỗng
        if (dataInput.trim().length === 0) {
            alert('Hãy nhập vào ô input!');
        } else {
            if (findIndex == -1) {
                newData.push({
                    id: Math.floor(Math.random() * 100),
                    taskName: dataInput,
                    status: false,
                })
            } else {
                alert("Task đã tồn tại")
            }
        }
        setData(newData)
        setDataInput("")
        setEdit(true)
    }

    return (
        <div className='app'>
            <div className="content">
                <h1>TO DO LIST</h1>
                <input onChange={handleChange} value={dataInput} type="text" placeholder='Enter new task' />
                <div>
                    <div className='tab'>
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="btn-tab active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="btn-tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Active</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="btn-tab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Completed</button>
                            </li>
                        </ul>
                        {
                            edit.status ? <button className='btn' onClick={() => { save() }}>Save</button> : <button className='btn' onClick={() => { addTask() }}>Add task</button>
                        }
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>{renderTask("all")}</div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>{renderTask("active")}</div>
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>{renderTask("completed")}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
