console.log('Hello world HTML')

const arr1 = [1, 10000, 21, 30, 4]

arr1.sort((item1, item2) => {
    console.log(item1, item2)
    return item1 - item2;
});

console.log(arr1)