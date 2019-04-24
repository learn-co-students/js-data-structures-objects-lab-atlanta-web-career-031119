// Write your solution in this file!

const driver = {} 


function updateDriverWithKeyAndValue(obj,key,value){

    let nebj = Object.assign({}, obj,{[key]:value});
   // return Object.assign({}, obj,{[key]: value});
   return nebj;
}


function deleteFromDriverByKey(obj,key){
 const newObj = Object.assign({}, obj);
 
 delete newObj[key];
 return newObj
 
}

  
    function destructivelyDeleteFromDriverByKey(driver, key){
      delete driver[key]; 
      return driver;  


    } 

    function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
        driver[key] = value;
      return driver 
    }




//   function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = { ...obj };
   
//     newObj[key] = value;
   
//     return newObj;
//   }
  


//  function destructivelyUpdateObject (obj, key, value) {
 //   obj[key] = value;
   
 //   return obj;
 // }
 //function nondestructivelyUpdateObject(obj, key, value) {
   // return Object.assign({}, obj, { [key]: value });
 // }
  