import { act } from 'react'
import jsonServer, { user } from './staticJson.js'


// Task 1 of JS
const Map = jsonServer.map((e, i) => {
    console.log(` Role No is ${i + 1} and Hi I am ${e.name} `)
})

const Filter = jsonServer.filter((e) => {
    return e.isActive
})
console.log(Filter);

const Reduce = jsonServer.reduce((acc, value) => {
    return acc + value.age
}, 0)
console.log(Reduce)


// Callback

function greet(action) {
    action();
}
function sayHi() {
    console.log('Hi I am Noob !!')
}

greet(sayHi)

function Calculate(n, t) {
    return t(n);
}
function Num(num) {
    return num * 2;
    console.log(num * 2);
}

// Calculate(10, Num)
// let nk = Calculate(10, Num)
// console.log(nk)

// Task 2
// customMap


function customMap(num, task) {
    const result = [];

    for (let i = 0; i < num.length; i++) {
        const value = task(num[i])
        result.push(value)
    }
    return result;
}

// customMap([1,3,4,4,5,5,5,3,5,3],task)
function Dev(n) {
    return n;
}

const view = customMap([1, 2, 3, 4], Dev)

console.log(view);

// customFilter

function customFilter(arr, callBack) {
    const result = [];

    for (let i = 0; i <= arr.length; i++) {
        if (callBack(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

function filter(ele) {
    return ele;
}

let FilterView = customFilter([1, 2, 4, 5, 8, 10, 20, 90], filter)
console.log("Here is", FilterView);

// Create a login validator function:

// Accept email and password

// Reject empty strings, null, undefined

// Return meaningful messages
// Task 3

function LoginAuth(email, password, Callback) {
    let show = 'Valid Credentials !';
    let Error = 'Invalid !'
    if (email?.trim() && password?.trim()) {
        return Callback(show)
    }
    else {
        return Callback(Error)
    }
}

function Log(user) {
    return user;
}
let isLogin = LoginAuth('mfjeoife', 'kcpsjpocs', Log)

console.log(isLogin);

// Task 5
console.log(user)

let users = { ...user }
console.log(users)

// Recursion

// function countDown(num) {
//     if (num === 0) {
//         console.log('0')
//         return;
//     }

//     console.log(num)
//     countDown(num-1)
// }

// countDown(5);
// console.log('\n')
// function fun(n) {
//   if (n === 1) return;
//   console.log(n);
//   fun(n - 1);
// }

// fun(4);

console.log('\n')

// hoisting

// hello();

// function hello() {
//   console.log("Hi");
// }

// console.log(a); // undefined
// var a = 10;

// console.log(b); // ❌ ReferenceError
// let b = 20;


console.log('\n\n');

// Exectution Context
// console.log(a); // ?
// var a = 5;

// hello(); // ?

// function hello() {
//   console.log("Hello World");
// }


// 🔵 PHASE 3: Async JavaScript (VERY IMPORTANT)

// function fakeTime(callBack) {
//     setTimeout(() => {
//         let mes = true;
//         if (true) {
//             callBack('Success')
//         } else {
//             callBack('Error')
//         }
//     })
// }

// function Error(mess) {
//     return mess
// }

// let showTime = fakeTime(true,mess)


// fakeTime('Got it !!');

// Ek function bana:

// naam: doWork

// Ye function:

// ek callback accept kare

// setTimeout use kare (2 sec)

// 2 sec baad:

// callback ko call kare

// ek string bheje: "Work done"

// function doWork(callBack) {
//     setTimeout(() => {
//         callBack()
//     },2000)
// }
// function canWork() {
//     console.log("workDone");
// }

// doWork(canWork)

// Ek function bana:
// naam: fetchUser
// Ye function:
// callback accept kare
// setTimeout (2 sec)
// Andar:
// ek boolean variable bana (isLoggedIn)
// agar true ho:
// callback ko "User data loaded" bhej
// agar false ho:
// callback ko "Login failed" bhej
// 🔍 Rules
// Callback function:
// message ko console.log kare
// if (true) hardcode mat karna
// Boolean variable use karna
// function fetchUser(callBack) {
//     setTimeout(() => {
//         const isLoggedIn = false;
//         if (isLoggedIn) {
//             callBack('User Data Loaded')
//         } else {
//             callBack('Login Failed')
//         }
//     },2000)
// }

// function userCall(mes) {
//     console.log(mes)
// }

// fetchUser(userCall)


// Ek function bana:
// naam: stepOne
// callback accept kare
// stepOne:
// 1 sec baad callback ko call kare
// message bheje: "Step 1 complete"
// Callback ke andar:
// dusra function call kar
// naam: stepTwo
// stepTwo
// 1 sec baad console.log kare:
// "Step 2 complete"

// function stepOne(callBack) {
//     setTimeout(() => {
//         callBack('Step 1 Complete')
//     },1000)
// }

// function stepCall(mes) {
//     console.log(mes)
//     setTimeout(() => {
//        console.log('Step 2 Completed') 
//     },2000)
// }

// stepOne(stepCall)



// Ek function bana:
// naam: loginUser
// Ye function:
// 2 parameters lega:
// username
// callback
// Andar:
// setTimeout (2 sec)
// ek boolean bana: isValidUser
// Logic:
// agar isValidUser === true:
// callback ko:
// error = null
// data = "Login successful"
// agar false:
// callback ko:
// error = "Invalid credentials"
// data = null

// function loginUser(username, callBack) {
//     setTimeout(() => {
//         const isValidUser = false;
//         if (isValidUser) {
//             callBack(null,'Login Successful');
//         }
//         else {
//             callBack('InValid credentials',null);
//         }
//     },2000)
// }

// function callUser(error, data) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(data)
//     }
// }
// loginUser('Sunil', callUser)


// Ek function bana:
// naam: getProfile
// Ye function:
// callback accept kare
// setTimeout (2 sec)
// Andar:
// ek object bana:
// {
//   name: "Sunil",
//   age: 22,
//   isActive: true
// }
// Logic:
// Agar isActive === true:
// callck ko poora object bhej
// Agar false:
// callback ko "User inactive" bhej

// Callback ke andar:
// Agar object aaye
// name + age console.log kar
// Agar string aaye:
// sirf message console.log kar
console.log('\n\n');
// function getProfile(callBack) {
//     setTimeout(() => {
//         let obj = {
//             name: 'Sunnu',
//             age: 22,
//             isActive: true
//         }
//         if (obj.isActive === true) {
//             callBack(obj)
//         } else {
//             callBack('User Inactive')
//         }
//     },2000)
// }

// function showObj(data) {
//     if (typeof data === 'string') {
//         console.log(data)
//     }
//     else {
//         console.log(data.name + " " + data.age);
//     }
// }

// getProfile(showObj)


console.log('\n');

// async function Login(callBack_1) {
//    setTimeout(() => {
//         let isLoggedIn = false
//         if (isLoggedIn) {
//             callBack_1('Login Success', true)
//         } else {
//             callBack_1('Login Failed', false)
//         }
//    }, 1500)

// }
// function getProfile(callback_2) {
//     setTimeout(() => {
//         const obj = {
//             name: 'sunnu',
//             role:'admin'
//         }
//         console.log(obj)
//         callback_2(true, obj)
//     }, 1500);
// }


// function showDashboard(loginStatus,message) {
//     if (loginStatus) {
//         console.log(message.name, message.role)
//     } else {
//         console.log(message)
//     }
// }
// function forLogin(mess,bool) {
//     if (bool === true) {

//     getProfile(showDashboard);
//     } else {
//         showDashboard(bool, mess)
//     }
// }


// Login(forLogin)
// getProfile(forLogin)

console.log('\n\n\n\n\n\n');

// 1️⃣ Function: redLight
// callback accept kare
// setTimeout (1 sec)
// console.log kare: "🔴 RED"
// 1 sec baad callback ko call kare
// 2️⃣ Function: yellowLight
// callback accept kare
// setTimeout (1 sec)
// console.log kare: "🟡 YELLOW"
// 1 sec baad callback ko call kare
// 3️⃣ Function: greenLight
// callback accept kare
// setTimeout (1 sec
// console.log kare: "🟢 GREEN"
// iske baad koi callback call nahi karna
// function redLight(callBack) {
//     setTimeout(() => {
//         callBack('🔴 RED')
//         yellowLight();

//     }, 1000);
// }
// function yellowLight() {
//     setTimeout(() => {
//         console.log('🟡 YELLOW"');
//         greenLight()

//     }, 1000);
// }
// function greenLight() {
//     setTimeout(() => {
//         console.log('🟢 GREEN')
//     }, 1000);
// }

// function traffic(mess) {
//     console.log(mess);

// }

// redLight(traffic)
// yellowLight(traffic)
// greenLight(traffic)
console.log('\n\n\n\n');

// 1️⃣ placeOrder(callback)
// setTimeout (1 sec)
// console.log: "📝 Order Placed"
// 1 sec baad callback call karo
// 2️⃣ prepareFood(callback)
// setTimeout (1 sec)
// console.log: "👨‍🍳 Food Preparing"
// 1 sec baad callback call karo
// 3️⃣ outForDelivery(callback)
// setTimeout (1 sec)
// console.log: "🛵 Out for Delivery
// 1 sec baad callback call karo
// 4️⃣ delivered(
// setTimeout (1 sec)
// console.log: "📦 Delivered"
// No callback after this

function placeOrder(callBack) {
    setTimeout(() => {
        callBack('📝 Order Placed')
        prepareFood();
    }, 1000);
}

function prepareFood() {
    setTimeout(() => {
        console.log("👨‍🍳 Food Preparing")
        outForDelivery()
    }, 1000);
}
function outForDelivery() {
    setTimeout(() => {
        console.log('🛵 Out for Delivery')
        delivered();
    }, 1000);
}
function delivered() {
    setTimeout(() => {
        console.log('📦 Delivered')
    }, 1000);
}

function Onlinefood(mess) {
    console.log(mess);
}
// placeOrder(Onlinefood)

console.log('\n\n\n\n')


// function insertCard(call) {
// setTimeout(() => {
//     call("💳 Card Inserted");
//     checkBalance(call);
// }, 1000);
// }
// function checkBalance(call) {
//     setTimeout(() => {
//         let balance = 500;
//         let With = 1000;
//         if (balance >= With) {
//             call(true)
//         }
//         else {
//             call(false)
//         }
//     }, 1000);
// }

// function ATM(mess,bool) {
//     console.log(mess,bool);
    
// }
// insertCard(ATM)

// .

// 🛠 Functions to create
// 1️⃣ fillWater(callback)
// setTimeout (1 sec)
// console.log: "🚰 Water Filled"
// 1 sec baad callback call karo
// 2️⃣ washClothes(callback)
// setTimeout (1 sec)
// console.log: "🧼 Washing Clothes"
// 1 sec baad callback call karo
// 3️⃣ rinse(callback)
// setTimeout (1 sec)
// console.log: "💦 Rinsing"
// 1 sec baad callback call karo
// 4️⃣ spin(callback)
// setTimeout (1 sec)
// console.log: "🌀 Spinning"
// 1 sec baad callback call karo
// 5️⃣ done()
// console.log: "✅ Washing Completed"
// No callback


function fillWater(callBack) {
    setTimeout(() => {
        console.log("🚰 Water Filled");
        washClothes(callBack)
    }, 1000);
}
function washClothes(callBack) {
    setTimeout(() => {
        callBack('🧼 Washing Clothes')
        rinse(callBack)
    }, 1000);
}

function rinse(callBack) {
    setTimeout(() => {
        callBack('💦 Rinsing')
        spin(callBack);
    }, 1000);
}

function spin(callBack) {
    setTimeout(() => {
        callBack('🌀 Spinning');
        done(callBack);
    }, 1000);
}

function done(callBack) {
setTimeout(() => {
    callBack('✅ Washing Completed')
}, 1000);
}

function Control(mess) {
    console.log(mess);
}

fillWater(Control)


// Time match hua → ring
// Time match nahi hua → wait

function TimeManage(AlarmHour , callBack) {
    const now = new Date();
    const Time = now.getHours();

    if (Time === AlarmHour) {
        callBack('Ring')
    } else {
        callBack('wait')
    }
}

function Alarm(mess) {
    console.log(mess);
}


const AlarmH = new Date().getHours();

TimeManage(AlarmH,Alarm)