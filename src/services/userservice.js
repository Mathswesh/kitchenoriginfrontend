import { myaxios } from "./helper";

// cart api
export const cartpost = (cartmodel) => {
    return myaxios.post("/cart",cartmodel)
    .then((response)=>response.data)
}

// caterar api
export const caterarpost = (addcaterer) => {
    return myaxios.post("/caterar",addcaterer)
    .then((response)=>response.data)
}

// delivary api
export const deliverypost = (delivery)=>{
    return myaxios.post("/delivery", delivery)
    .then((response)=>response.data)
}



// delivarystaff api
export const deliverystaffpost = (deliverystaff)=>{
    return myaxios.post("/deliverystaff", deliverystaff)
    .then((response)=>response.data)
}



// dish.jsx 
export const dishmodelpost = (dishmodel) => {
    return myaxios.post("/dish",dishmodel)
    .then((response)=>response.data)
}


// order.jsx
export const orderpost = (dishmodel) => {
    return myaxios.post("/order",dishmodel)
    .then((response)=> response.data)
}

// payment api
export const paymentpost = (paymentmodel) => {
    return myaxios.post("/payment",paymentmodel)
    .then((response)=> response.data)
}

// review api
export const reviewpost = (review) => {
    return myaxios.post("/review",review)
    .then((response)=>response.data)
}

// role api
export const rolepost = (role) => {
    return myaxios.post("/role",role)
}

// user api
export const userpost=(user) => {
    return myaxios.post("/user/createuser",user)
    .then((response)=>response.data)
}
export const userpostlogin=() => {
    return myaxios.get("/user/login")
}
