const list = [
    {name: "Rodolfo", vip: true},
    {name: "Matheus",vip: false},
    {name: "Eduardo", vip: true},
    {name: "Lucas", vip: true},
    {name: "Gustavo", vip: false},
    {name: "leonardo", vip: true},
    {name: "Miguel", vip: false},
];
const justVip = list.filter(( client ) =>{
     return client.vip
})

console.log(justVip)