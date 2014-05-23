function euler2() {
	x = 2;
	y = [1, 2];
	sum = 0;

	while ((y[x - 2] + y[x-1]) <= 4E6) {
	 	y.push(y[x - 2] + y[x - 1]);
		x++;
	};

	for (i = 0; i < x; i++) {
		if (y[i] % 2 === 0) {
			sum = sum + y[i]
		}		
	}
	return sum;
}