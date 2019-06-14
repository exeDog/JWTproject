const JWT  = credentials => {
    fetch('./login')
        .then(response => response.json())
        .then(repsonse => console.log(repsonse))
        .catch(err => {throw err});
};


export default JWT;