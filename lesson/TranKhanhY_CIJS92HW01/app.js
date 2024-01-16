// TRẮC NGHIỆM

/*/ TRẢ LỜI:

Câu 1: FALSE
Câu 2: TRUE 
Câu 3: TRUE
Câu 4: {foo: 1, bar: 2}
Câu 5: 'The quick brown fox jumps over the lazy dog.’
Câu 6: undefined
Câu 7: Error
Câu 8: [1, 23, 4]
Câu 9:
Câu 10: a = 3, b = 12
Câu 11: Error
Câu 12: [2, 2, 6, 4, 10]
Câu 13: 16


/*/ 
// THỰC HÀNH
// Bải 1: Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Sử dụng function để đảo ngược một string
// let originalString = "abcdef";
// let reversedString = reverseString(originalString);

// console.log(reversedString);


// Bài 2: Viết một function xoá các phần từ trùng lặp trong một mảng các số
// function removeDuplicates(arr) {
//     // Sử dụng Set để lọc các giá trị duy nhất
//     const uniqueArray = [...new Set(arr)];
//     return uniqueArray;
// }

// // Check
// const numbers = [1, 2, 3, 5, 4, 2, 6, 4];
// const result = removeDuplicates(numbers);

// console.log(result);

// Bài 3: Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

// function findMostFrequentElement(arr) {
//     // Đếm số lần xuất hiện của từng phần tử
//     const countMap = new Map();

//     arr.forEach(element => {
//         countMap.set(element, (countMap.get(element) || 0) + 1);
//     });

//     // Tìm phần tử xuất hiện nhiều nhất
//     let mostFrequentElement;
//     let maxCount = 0;

//     countMap.forEach((count, element) => {
//         if (count > maxCount) {
//             mostFrequentElement = element;
//             maxCount = count;
//         }
//     });

//     return { element: mostFrequentElement, count: maxCount };
// }

// // Check
// const numbers = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
// const result = findMostFrequentElement(numbers);

// console.log(`value: ${result.element} count: ${result.count}`);


import {contactsData} from './data.js';

const data = contactsData;
const parent = document.getElementById('parent');

const displayData = (data) => {
    const sortContact = (contacts) => {
        return contacts.sort((a, b) => a.name.localeCompare(b.name));
    };
    const sortedData = sortContact(data);
    const html = sortedData.map(el => (
        `
        <li>
            <div>
                ${el.name} 
            </div>
            <div>
                ${el.phone} 
            </div>
        </li>
        `
    ));
    parent.innerHTML = html.join(' ');

    
};

displayData(data);

// ADD CONTACT
document.querySelector(".addContact").onclick = function () {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const phone = phoneInput.value;

    const newContact = { name, phone };
    data.push(newContact);
    displayData(data);
}


// SEARCH
document.querySelector(".search").onclick = function () {
    // Lấy giá trị từ ô input tìm kiếm
    const keyword = document.getElementById('keyword').value.toLowerCase();
    if (keyword == ''){
        displayData(data)
    }else{
        // Lọc dữ liệu theo từ khóa
    const result = data.filter((item) => {
        return item.name.toLowerCase().includes(keyword) || item.phone.includes(keyword);
    });

    // Hiển thị kết quả hoặc xử lý dữ liệu kết quả theo ý muốn
    displayData(result)
    }
};

// REMOVE DUPLICATE
document.querySelector(".remove").onclick = function () {
    const list = data.filter((contact, index, self) => {
        const isDuplicate = self.findIndex((i) => i.phone === contact.phone) === index;
        return isDuplicate;
    });
    displayData(list);
};