def largestPrimeFactor(number):
    largestPrime = 0
    primes = 1

    i = 1

    while(i <= number):
        if(number % i == 0):
            primes *= i
            if(primes == number):
                largestPrime = i

        i += 1

    return largestPrime


print(largestPrimeFactor(6008))
