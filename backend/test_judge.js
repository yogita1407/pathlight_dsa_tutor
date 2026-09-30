import { judge } from "./src/judge.js";

const codeCpp = `int largestValue(vector<int> nums) { return nums[100]; }`;
const tests = [
  { args: [[3, 1, 8, 2]], expected: 8 },
  { args: [[-5, -1, -9]], expected: -1 }
];

console.log("CPP RUNTIME ERROR:", judge("cpp", codeCpp, "largestValue", tests));
