function fiboEvenSum(n){

	const sum = (a, b) => a + b;
	
	let sumEven = 0;
	let first = 1;
	let last = 1;

	for(let i = 1; i < n; i++){
		
		let resultFib = sum(first, last);
		
		if(resultFib % 2 === 0) sumEven += resultFib;

		first = last;
		last = resultFib;
	}
	return sumEven;
}


console.log(fiboEvenSum(43));
