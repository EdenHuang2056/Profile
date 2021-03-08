function avg(data){
    var Sum = 0;
    var Avg = 0;
    var Peo = 0;
    var PeoList = data.employees;
    for(i=0; i<data.count; i++){
        Peo = Peo + 1
    };
    for(j=0; j<Peo; j++){
        eachSalary = PeoList[j].salary;
        Sum += eachSalary;
    }
    j+=1;
    Avg = Sum / Peo;
    document.write(Avg)
}

avg({
"count":3,
"employees":[
{
"name":"John",
"salary":30000
},
{
"name":"Bob",
"salary":60000
},
{
"name":"Jenny",
"salary":50000
}
] 
});