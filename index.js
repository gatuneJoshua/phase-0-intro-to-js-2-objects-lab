// Write your solution in this file!

const employee = {
    name : "Sam",
    streetAddress : "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key] : value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}

const deleteFromEmployeeByKey=(employee, key, value)=>{
    const newObj = {...employee}
    newObj[key] = value;
    delete newObj.key;
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey=(employee,key)=>{
    delete employee[key];
    return employee;
}