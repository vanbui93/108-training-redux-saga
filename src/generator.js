console.log("learning generator function");

function* helloGeneratorFunction() {
  // câu lệnh 1
 yield 2019  //dừng !!!
 // câu lệnh 2
 return "Tự học lập trình redux saga"
}

const result = helloGeneratorFunction();   //ilterators (giống 1 array)
console.log('result 1',result.next());
console.log('result 2',result.next());
