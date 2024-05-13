const findTheOldest = function(arrObj) {
   let newObj = arrObj.reduce(function(obj,elem){
    let age;

    if (!elem.yearOfDeath){
        age = (new Date()).getFullYear() - elem.yearOfBirth;
    }else{
        age = elem.yearOfDeath - elem.yearOfBirth;
    }

    obj[elem.name] = age;
    
    return obj;
        
   },{});

   
   
   let max = -1;
   let maxKey;
   for (const [key, value] of Object.entries(newObj)) {
     if(value> max) {
        max = value;
        maxKey = key;
     };
  }
  let objRes = {};
  objRes['name'] = maxKey
  
  return objRes;

   
};


// Do not edit below this line
module.exports = findTheOldest;
