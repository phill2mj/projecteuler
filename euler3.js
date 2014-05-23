function euler3 (n) {

	function factors(x) {
		f = [];
		for (i = 1; i <= x / 2; i++) {
			if (x % i == 0) {
				f.push(i)
			};
		}
		return f
	};
	
	function isPrime(x) {
		z = x;
		y = factors(x);
		i = 0
		while (i < y.length) {
			if (y[i] !== 1 && y[i] !== z) return false;
			i++
		};
		return true
	};

	y = factors(n);
	z = 0;
	for (i = 0; i < y.length; i++) {
		console.log(y[i]);
		if (isPrime(y[i])) {
			z = y[i]
		}
	};
	
	return z
};