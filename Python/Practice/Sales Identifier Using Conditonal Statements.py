# In this, we will doing Practice on Conditional Statements(if,elif,else)
# 
sale = int (input("Enter Today's Sale: "))

if sale >= 10000:
    print ("Congratulations. Have a Nice Day")
elif sale < 10000 and  sale > 5000:
    print("Good Sales")
else:
    print("Don't Worry. Keep Hardworking")
