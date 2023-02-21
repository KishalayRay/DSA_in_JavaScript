const nemo = [
  "nemo",
  "bruce",
  "dory",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100).fill("nemo");
const findNemo = (array) => {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo");
    }
  }
};
findNemo(large); //O(n)---->linear Time

function compressFirstBox(boxes) {
  console.log(boxes[0]);
} //O(1)

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);//O(1)
  console.log(boxes[1]); //O(1)
}
logFirstTwoBoxes(boxes)//O(2) -- O(1)-constant time
