function sum(x, y){
    try {
        if (typeof x !== "number" | typeof y !== "number") {
            throw new Error("Incorrect data type. Please use numbers only.")
        } else {
            return x + y;
        }
    }
    catch(err) {
        console.log(err)
    }
}

try {
    throw sum("1", "2")
}
catch(err) {
    console.log("Error: Please use numbers only")
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if (username !== "sam" | password !== "123abc") {
            throw new Error("Invalid credentials")
        }
    }
    catch(err) {
        console.log(err)
    }
}

try {
    throw login(user.username, user.password)
}
catch(err) {
    console.log("Login successful")
}