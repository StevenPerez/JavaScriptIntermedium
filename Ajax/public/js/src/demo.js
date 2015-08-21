
function sum(num1, num2) {

  return new Promise(function(resolve, reject){
    try {
      var total = num1 + num2;
      resolve(total);
    } catch (err)
    {
      reject(err);
    }
  });

}

console.log('A');

sum(2, 3)
.then(function(result){
  var b = result + 2;
  console.log(result);
  return b;
})
.then(function(b){
  console.log(b);
})
.catch(function(err){
  console.log(err);
});

console.log('B');