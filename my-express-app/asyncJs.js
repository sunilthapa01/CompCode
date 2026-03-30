
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Sunnu" });
//         }, 1000);
//     })
// }

// function fetchPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     id: 101, title: "JS Grinding !", userId
//                 },
//                 {id:102,title:"Learning Process",userId}
//             ])
//         }, 1000);
//     })
// }

function Async(callBack) {

    setTimeout(() => {
        console.log("Done");
        
    },2000)
}

function send(mes) {
    return mes
}

Async(send)