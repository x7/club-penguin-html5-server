export async function login(username, password) {
    try {
        const request = await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        if(request.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        alert("error")
    }
}

function validateUsername() {

}

function validatePassword() {

}