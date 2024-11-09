import { myaxios } from "./helper";
export const signin=(user) => {
    return myaxios.post("/user/savedata",user)
    .then((response)=>response.data)
}