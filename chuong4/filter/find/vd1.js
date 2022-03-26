console.log('hello world HTML 1')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'Tuan', age: 22},
    { name: 'Dung', age: 19},
    { name: 'Rose', age: 22},
    { name: 'Lusan', age: 32}
]
//filter, find
//mutate

let filter = arr.filter((item, index) =>{
    //console.log('>>> check filter item:', item, 'index:', index )
    return item && item.age === 22;
});

console.log(filter)