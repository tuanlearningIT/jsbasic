console.log(`Hello World HTML`)
// key: value
let obj = {
    name: 'tuan', 
    address: ' ha noi',
    email: '',
    gender: '',
    // a: function(){
    //     console.log('hello world inside function')
    //     return '';
    // }
};
let b = 'name';
//obj[b] = 'Hary';

obj.name = 'trang';
console.log('what is your name:',`my name 's :`, obj['name'], obj)
console.log('where are you form', `i'm form :`, obj['address'])
console.log('type of a:', typeof a, 'type of b:', typeof b)
// console.log('call function: ', obj.a())