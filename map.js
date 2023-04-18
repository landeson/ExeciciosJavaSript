const numbers = [1,2,3,4]
const students = [
    {name: "Rodolfo", age: 24},
    {name: "Matheus", age: 39},
    {name: "Eduardo", age: 30},
    {name: "Lucas", age: 13},
    {name: "Gustavo", age: 18},
    {name: "leonardo", age: 28},
    {name: "Miguel", age: 23},
];

   


const newArray2 = numbers.map( number => number * 3 )
    


const newStudents = students.map((student) => {
  
     const newStudent = {
        name: student.name + ' da silva',
        age: student.age - 5
     }

    return newStudent
}) 

console.log(newStudents)