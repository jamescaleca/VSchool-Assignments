employees = []

let fullTime = "Full Time"
function Employee(name, jobTitle, salary, status = fullTime) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status;
    
    printEmployeeForm = function(person) {
        var employeeIndex = employees.indexOf(person)
        console.log(employees[employeeIndex])
    }
}


var Katuna = new Employee("Katuna", "V School Student", "12/hr")
employees.push(Katuna)
var Ruggity = new Employee("Ruggity", "V School Student Assistant", "3000/hr", "Part Time")
employees.push(Ruggity)
var Sherlock = new Employee("Sherlock", "Chaser of Hair Ties", "30K", "Contract")
employees.push(Sherlock)

printEmployeeForm(Sherlock)