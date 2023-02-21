const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function funChallenge(input) {
  let a = 10;//O(1)
  a = 50 + 3;//O(1)

  for (let i = 0; i < input.length; i++) {//O(n)
    anotherFunction();//O(n)
    let stranger = true;//O(n)
    a++;//O(n)
  }
  return a;//O(1)
}
const a = funChallenge(arr);
console.log(a);//Big O(3+3n)-->O(n)

function anotherFunChallenge(input) {
    let a = 5;
    let b = 10;
    let c = 50;
    for (let i = 0; i < input; i++) {//O(n)
      let x = i + 1;
      let y = i + 2;
      let z = i + 3;
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;
      let q = j * 2;
    }
    let whoAmI = "I don't know";
  }//Big O(4+5n)-->O(n)