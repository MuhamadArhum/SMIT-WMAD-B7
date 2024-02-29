# In this, we will learn about Break & Continue Statements in Python.
# Use of Break & Continue in For Loop.

# Define the Name of Students.
students = [ "Ali","Raza","Irfan","Hassan","Shah" ]


# Using FOR Loop.
for students in students:
    if students == "Hassan":
        continue       # Using Continue Statement.
    print(students)
    