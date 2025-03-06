/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  height = height / 100; 
  const BMI = (weight / height**2); ;
   
  // Stop making changes here!
  return BMI;
}

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
// if(BMI >= 25.0 && BMI <30.0)
//    BMIState = "overweight";
//   else if (BMI>= 18.5 && BMI<25.0 )
//     BMIState = "healthy";
//   else (BMI<18.5 )
//     {BMIState = "underweight";}

if(BMI< 18.5){
  BMIState = "underweight";
  //checks if it is between 18.5 and 24.9
} else if (BMI >= 18.5 && BMI <= 25.0){
  BMIState = "healthy";
  //checks if it is between 25 and 29.9
} else if (BMI >= 25.0 && BMI <= 30.0){
  BMIState = "overweight";
}

  // Stop making changes here!
  return BMIState;
}

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
if(BMI >= 19 && BMI<=24 )
{
  if (age>=19 && age<= 24){
    BMIState = "healthy";
  }
}

if(BMI>= 20 && BMI<=25 )
  {
    if (age>=25 && age<= 34){
      BMIState = "healthy";
    }
  }

  if(BMI >= 21 && BMI<=26 )
    {
      if (age>=35 && age<= 44){
        BMIState = "healthy";
      }
    }

    if(BMI >= 22 && BMI<=27 )
      {
        if (age>=45 && age<= 54){
          BMIState = "healthy";
        }
      }

      if(BMI >= 23 && BMI<=28 )
        {
          if (age>=55 && age<= 64){
            BMIState = "healthy";
          }
        }

        if(BMI >= 24 && BMI<=29 )
          {
            if (age>=65){
              BMIState = "healthy";
            }
          }
        
  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
