var loggedIn = false;
export function login(username, password){
    return fetch("/auth/login", {
        credentials: "same-origin",
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            email: username,
            password: password
        }) // body data type must match "Content-Type" header
    })
    .then(response => {
        if (response.ok){
            loggedIn = true
        }
        return response.json()
    }) // parses response to JSON
    
}
export function logout(){
    return fetch("/auth/logout", {credentials: "same-origin"}).then(response =>{
        if(response.ok){
            loggedIn = false
        }
    })
    
}
export function signup(username, password){
    return fetch("/auth/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            email: username,
            password: password
        }) // body data type must match "Content-Type" header
    })
    .then(response => {
        if(response.ok){
            return 
        }
      throw new Error ("Could not create account.")
    }) // parses response to JSON

}
export function isLoggedIn(){
    return loggedIn
}