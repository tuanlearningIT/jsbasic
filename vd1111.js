
let arr = [
    {
    firstname: 'Nguyen',
    lastname: 'Tuan',
    age: 22,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }},
    {firstname: 'Tran',
    lastname: 'Trang',
    age: 19,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }},
    {firstname: 'Tran',
    lastname: 'Cham',
    age: 19,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }},
    {firstname: 'Tran',
    lastname: 'Dung',
    age: 22,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
    }

]

let find = arr.filter((item, index) =>{
    return item && item.age === 22 ;
})
console.log(find)