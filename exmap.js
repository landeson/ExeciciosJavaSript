const list = [
    {name: "Rodolfo", vip: true},
    {name: "Matheus",vip: false},
    {name: "Eduardo", vip: true},
    {name: "Lucas", vip: true},
    {name: "Gustavo", vip: false},
    {name: "leonardo", vip: true},
    {name: "Miguel", vip: false},
];

const newlist = list.map((client) =>{

    const newlist = {

        name: client.name,
        vip: client. vip,
        sector: client.vip ? 'Black' : 'Green'  
    
    
    }

    return newlist

})

console.log(newlist)

const student = [
    {name: "Matheus", testGrande: 7},
    {name: "Gustavo", testGrande: 3},
    {name: "Fabricio", testGrande: 10},
    {name: "Kauan", testGrande: 10},
    {name: "Leonardo", testGrande: 6},
    {name: "Julio", testGrande: 5},
    {name: "Lucas", testGrande: 15},
];

const NewStudents = student.map((alunos) => {
    
    const NewStudents = {
         name: alunos.name,
         finalResult: alunos.finalResult,
         finalResult: alunos.testGrande >= 7  ? 'approvad' : 'disapproved'
         

    }

    return NewStudents

})

console.log(NewStudents)