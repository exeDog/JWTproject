const JWT  = credentials => {
    fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
    })
        .then(response => response.json())
        .then(repsonse => console.log(repsonse))
        .catch(err => {throw err});
};


export default JWT;