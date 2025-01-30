function multiplyByTwo(number) { 
  return number * 2;
}

console.log(multiplyByTwo(5));

const numbers = [10, 5, 8, 20, 3];
function findMax(arr) { 
 return Math.max(...arr)
}

console.log(findMax(numbers));


const user = { name: 'John', age: 30 };

function updateUserInfo (obj, name) { 
  return obj.name = name;
}

function getUserInfo(obj) { 
  return obj.name;
}

updateUserInfo(user, 'Alice');
console.log(getUserInfo(user));