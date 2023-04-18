const students = [
    {name: "Matheus",age : 22},
    {name: "Matheus",age : 38},
    {name: "Matheus",age : 21},
    {name: "Matheus",age : 45},
    {name: "Matheus",age : 12},
    {name: "Matheus",age : 18},
    {name: "Matheus",age : 10},
];

let allstudentsAge = 0

students.forEach( (student, index,) => {
    allstudentsAge += student.age

})

 const averageAge =  allstudentsAge / students.length

console.log(`A media dos alunos ${averageAge.toFixed(0)}`)