// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

//  Resposta 1
let employee = {
    code: 10,
    name: `John`
};

// Resposta 2
let employee2 : {code: number, name: string} = {
    code: 10,
    name: `John`
}

// Resposta 3
interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 200,
    name: `John`
}

// Resposta 4
const employeeObj = {} as employee;
employeeObj.code = 10;
employeeObj.name = `John`;

const employeeObj2: employee = {
    code: 10,
    name: `John`
}

