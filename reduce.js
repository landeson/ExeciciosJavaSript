const compaines = [
    {name: 'Samsung',markeValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {name: 'Microsoft',markeValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    {name: 'Intel',markeValue: 117, CEO: 'Briar Krzanich', foundedOn: 1968 },
    {name: 'Facebook',markeValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    {name: 'Spotify',markeValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    {name: 'Apple',markeValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];







const sum = compaines.reduce(((acc, current) => acc + current.markeValue), 0)


console.log(sum)






