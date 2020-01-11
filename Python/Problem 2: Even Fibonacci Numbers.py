def fiboEvenSum(n):
    sumEven = 0
    first = 1
    last = 1
    i = 1
    
    while(i < n):
        resultFib = first + last

        if(resultFib % 2 == 0):
            sumEven += resultFib

        first = last
        last = resultFib
        
        i += 1

    return sumEven


print(fiboEvenSum(43))

