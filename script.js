promise
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
});
    
// "Consuming Code" (Must wait for a fulfilled Promise) Here is how to use a Promise:
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.table("got the user");
        reject(new Error("User not logged in"))
    }, 2000);
});

myPromise.than(user => {
    console.table(user);
})
.catch(err => console.table(err));


// Example promise
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
        if (req.status == 200) {
        myResolve(req.response);
        } else {
        myReject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
function(value) {myDisplayer(value);},
function(error) {myDisplayer(error);}
);

// New Example
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("now will have the data updata");
            resolve({ userEmail: email });
        }, 5000);
    }); 
}

function getUserVideo(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Video1", "Video2", "video3"]);
        }, 2000);
    })
}

function VideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["title of the video"]);
        }, 2000);
    })
}

// const user = loginUser("clementa134gmaik.com", 98765432, user => {
//     console.table(user);
//     getUserVideo(user.userEmail, videos => {
//         console.table(videos);
//         VideoDetails(videos[2], title => {
//             console.table(title);
//         });
//     });
// });


loginUser("flash34gmaik.com", "worktogether")
.then(user => getUserVideo(user. email))
.then(video => VideoDetails(video[0]))
.then(detail => (detail));

// another perference for writing the code declaration
const user = loginUser("flash34gmaik.com", "worktogether");
const video = VideoDetails(user.email);

console.log("Finish")

const posts = [
    {title: 'Post one', body: 'this is Post one'},
    {title: 'Post two', body: 'this is Post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post, callback) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
    posts.push(post);

    const error = false;

    if(!error) {
        resolve();
    } else {
        reject('Error: Something went wrong');
    }
}, 2000);
   });
}

createPost({ title: 'post Three', body: 'This is post'}).then(getPosts).catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

