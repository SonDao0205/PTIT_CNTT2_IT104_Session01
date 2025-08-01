let obj = {};
const createObj = (name,age=18,role=`user`) => {
    obj = {
        name: name,
        age: age,
        role:role
    }
    console.log(obj);
    
}

createObj("dev")
createObj("dev",20,`manager`)