
const promise = fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
console.log(promise);