const form = document.passengerData

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const fName = form.firstName.value
    form.firstName.value = ""
    const lName = form.lastName.value
    form.lastName.value = ""
    const age = form.age.value;
    form.age.value = ""
    const gender = form.gender.value;
    const destination = form.destination.value;
    form.destination.value = "none"

    //checkboxes
    const checkedDiet = []
    for (let i = 0; i < form.dietRestrict.length; i++) {
        if(form.dietRestrict[i].checked) {
            checkedDiet.push(form.dietRestrict[i].value)
        }
    }
    form.dietRestrict.value = "none"


    alert(` First name: ${fName}\n Last name: ${lName}\n Age: ${age}\n Gender: ${gender}\n Destination: ${destination}\n Dietary Restrictions: ${checkedDiet}`)
    
})