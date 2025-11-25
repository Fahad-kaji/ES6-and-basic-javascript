const person = {
    name : 'hero alom',
    age : 34,
    phone : '041254789654',
    address : {
        zilla : 'rajsahi',
        thana : 'bolbo na'
    },
    p : [1, 2, 3, 4],
    

}
// spreadObj
// const person1 = {...person};
// person1.email = 'heroalom@gmail.com';
// console.log(person1);


// objDestucturing 
// const {phone,address,name : amarNaam } = person;
// console.log(phone,address,amarNaam);

// const {name,...hello} = person;
// console.log(hello);

const {address:{zilla}} = person;
console.log(zilla);


