function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}




const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));


/*An array of Promises.
Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.*/


Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values)
    document.body.innerHTML = values;
})