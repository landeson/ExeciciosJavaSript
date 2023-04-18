

const people = [
    {
        numberOfchildren: 2,
        salary: 2000
    },
    {
        numberOfchildren: 5,
        salary: 3000
    },
    {
        numberOfchildren: 0,
        salary: 2500
    },
    {
        numberOfchildren: 2,
        salary: 1000
    },
    {
        numberOfchildren: 3,
        salary: 2300
    },
    {
        numberOfchildren: 1,
        salary: 200
    },
    {
        numberOfchildren: 0,
        salary: -2000
    },
]
  
 function findAdverageAndHighestSalary(peopleInformation) {
    let i = 0;
    let = averageSalary = 0
    let = averageChildren = 0
    let = highestSalary = 0

    while (peopleInformation[i].salary > 0){
        averageSalary = averageSalary + peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfchildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
 }
  
 console.log(`Media de salario R$${(averageSalary / i).toFixed(0)}`)
 console.log(`Media de filhos ${(averageChildren / i).toFixed(0)}`)
 console.log(`Maior salario R$ ${highestSalary}`)
 }

 findAdverageAndHighestSalary(people)



