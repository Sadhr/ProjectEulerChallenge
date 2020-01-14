function largestPrimeFactor(number){
	
	let largestPrime;
	let primes = 1;


	for(let i = 1; i <= number; i++){
		if(number % i === 0){
			primes *= i;
			if(primes === number) largestPrime = i;
		}
	}

	return largestPrime;
}

console.log(largestPrimeFactor(600851475143));
