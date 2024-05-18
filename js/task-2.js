// function calcAverageCalories(days) {
    
//     let totalCalories = 0;

//     for (const day of days) {
//         totalCalories += day.calories
//     }
    
//     if (days.length > 0) {
//         return totalCalories / days.length;
        
//     } else {
//         return 0;
//     }
    
    

// }


// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// console.log(
//   calcAverageCalories([
//     { day: 'Monday', calories: 2500 },
//     { day: 'Tuesday', calories: 2200 },
//     { day: 'Wednesday', calories: 2300 },
//     { day: 'Thursday', calories: 2400 },
//     { day: 'Friday', calories: 2100 },
//     { day: 'Saturday', calories: 2600 },
//     { day: 'Sunday', calories: 2700 }
// ])
// );