/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  const BMI = weight / (height * height * 0.0001);

  // Stop making changes here!
  return BMI;
}

console.log(calculateBMI(58, 159));
// console.log("Hello");

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI > 18.5 && BMI < 25) {
    BMIState = "healthy";
  } else if (BMI > 25 && BMI < 30) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }
  // Stop making changes here!
  return BMIState;
}
console.log(getBMIState(22));
/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼
  if (
    (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) ||
    (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) ||
    (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) ||
    (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) ||
    (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) ||
    (age >= 65 && BMI >= 24 && BMI <= 29)
  ) {
    BMIState = "healthy";
  }

  // Stop making changes here!
  return BMIState;
}

console.log(getBMIStateByAge(22, 29));

export { calculateBMI, getBMIState, getBMIStateByAge };
