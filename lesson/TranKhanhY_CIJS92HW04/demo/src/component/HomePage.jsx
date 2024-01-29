import React, { useState } from 'react'

export default function HomePage() {
    // let value = 0
    // const value, setValue] = useState(10)
    // const changeValue = () => {
    //     let newValue = value
    //     newValue ++
    //     setValue(newValue)
    // }
    // console.log(value)

    const [input, setInput] = useState("");
    const [data, setData] = useState(["task1", "task2"]);
    const changeInput = (event) => {
        setInput(event.target.value);
    }
    const submit = () => {
        // clone lại phần data để có thể push vào
        let newData = [...data];
        // Nếu giá trị rỗng
        if (input.trim().length === 0) {
            alert('Hãy nhập vào ô input!');
        } else {
            // Check giá trị input đã tồn tại hay chưa
            if (newData.includes(input)) {
                alert("Already exist!");
            } else {
                newData.push(input);
                setData(newData);
                // Clear the input value after submission
                setInput("");
            }
        }

    }
    const deleteItem = (item) => {
        // clone lại data
        let newData = [...data];
        // tìm vị trí của phần tử trong mảng
        let indexItem = newData.findIndex((it) => {
            return it == item
        });
        newData.splice(indexItem, 1);
        setData(newData);
    }
    // Hàm render content
    const renderContent = () => {
        let arrJSX = [];
        for (let i = 0; i < data.length; i++) {
            arrJSX.push(
                <div style={{ display: 'flex' }}>
                    <h3>{data[i]} </h3>
                    <button onClick={() => { deleteItem(data[i]) }}>delete</button>
                </div>
            )
        };
        return arrJSX;
    }
    return (
        <div>
            {/* <button onClick={() => {changeValue()}}>on click 1</button>
        <br />
        <h1>{value}</h1> */}
            <h1>Task List</h1>
            <input value={input} onChange={changeInput} id='input_text' type="text" />
            <button onClick={() => { submit() }}>submit</button>
            {renderContent()}
        </div>
    )
}
