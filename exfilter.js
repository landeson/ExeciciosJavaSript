const list = [20,3,234,12,17,541,6,87,275,1000];

const newlist = list.filter(number =>{
    if (number % 2 === 0 && number % 5 === 0 ) return true
    else return false
})



const compaines = [
    {name: 'Samsung',markeValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {name: 'Microsoft',markeValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    {name: 'Intel',markeValue: 117, CEO: 'Briar Krzanich', foundedOn: 1968 },
    {name: 'Facebook',markeValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    {name: 'Spotify',markeValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    {name: 'Apple',markeValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];


const Newcompaines = compaines.filter((company) => {
    if (company.markeValue > 200 && company.foundedOn > 1975) return true
    else return false
})

console.log(Newcompaines)









