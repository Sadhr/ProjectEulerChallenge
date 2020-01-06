def multiplesOf3and5(num):
	sum = 0
	i = 1
	while i < num:
		mul3 = i % 3
		mul5 = i % 5
		if mul3 == 0 or mul5 == 0:
			sum += i
		i += 1
	return sum

print(multiplesOf3and5(1000))
