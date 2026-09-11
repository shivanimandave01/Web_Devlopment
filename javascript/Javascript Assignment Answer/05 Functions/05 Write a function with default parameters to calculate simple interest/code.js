let calculateSimpleInterest = (principal, rate = 0.05, time = 1) => {
    let simpleInterest = principal * rate * time;
    return simpleInterest;
};

console.log(calculateSimpleInterest(1000)); 
