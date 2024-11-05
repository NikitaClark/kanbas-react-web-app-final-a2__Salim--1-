import React from "react";

export default function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];

  // Using the filter function to get specific subsets of numbers
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2.join(" ")} <br />
      evenNumbers = {evenNumbers.join(" ")} <br />
      oddNumbers = {oddNumbers.join(" ")} <hr />
    </div>
  );
}
