var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const newPeopleArray = [
    {
        firstName: "Victor",
        lastName: "Wooten",
        age: 57
    },
    {
        firstName: "Baard",
        lastName: "Kolstad",
        age: 29
    }
]

function sortedOfAge(arr){
    const newArr = []
    arr.sort((a, b) => a.lastName.localeCompare(b.lastName))
    arr.filter(person => { 
        if(person.age >= 18){
            newArr.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
        }
    })
    return newArr;
}

console.log(sortedOfAge(peopleArray));

function addArray(arr){
    arr.forEach(person => peopleArray.push(person))
    return peopleArray
}
console.log(addArray(newPeopleArray));

const peopleNoEndYOrA = []

function yAndAFilter(arr) {
    arr.filter(person => {
        if(person.lastName[-1] !== "y" | person.lastName[-1] !== "a") {
            peopleNoEndYOrA.push(person)
        }
    })
    return peopleNoEndYOrA;
}

console.log(yAndAFilter(peopleArray))