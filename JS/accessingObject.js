const person = {
    name : 'babul',
    age : 24,
    contact:{
        phone : '01254698745',
        email : 'babul@gmail.com'
    },
    education : {
        schoolName : 'andorkilla high school',
        roll : 3245,
        subject : [
            { name : 'bangla', mark : 34 },
            { name : 'english', mark : 35 },
            { name : 'math', mark : 33.5}
        ]
    }
};

console.log(person.education.subject[1].mark);

