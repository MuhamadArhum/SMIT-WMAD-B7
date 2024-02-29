# In this, we will build a Python Calculator using if -else statements.
# Calcultor is performing 5 Operation.
#  Sum, Substraction, Multiplication, Division, Modulus.


first = input("Enter First Number") # Taking 1 Input.
operator =input("Enter Operator( + , - , * , / , % )") # Chosing Operator.
second = input("Enter 2nd Number") #Taking 2nd Input.

first = int(first)   #Convert into integars
second = int(second) #Convert into integars

if operator =="+":    # Sum Operator.
    print(first + second)
elif operator == "-": # Substraction Operator.
    print(first - second)

elif operator == "*": # Multiplication Operator.
    print(first * second)

elif operator == "/": #Division Operator.
    print(first / second)

elif operator == "%": # Modulus Operator.
    print(first % second)

else:                 # When Facing Error then Print Invalid.
    print("Invalid Operation")
