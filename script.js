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