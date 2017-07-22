import matplotlib.pyplot as plt
import psycopg2

# Try to connect

try:
    conn=psycopg2.connect("host='dbinstance.cgwf2c1tkupl.us-west-2.rds.amazonaws.com' dbname='postgres' user='testuser' password='12345678' port='5432'")
except:
    print "I am unable to connect to the database."

cur = conn.cursor()

# Fetch data from database 
try:
    cur.execute("""SELECT age from students""")
    a=cur.fetchall()
    print a
    cur.execute("""SELECT id from students""")
    b= cur.fetchall()
    print b
except:
    print "I can't SELECT from bar"

#Plot the graph
try:
    plt.plot(a,b)
    plt.show()
except:
    print "error in showing graph"

        

"""rows = cur.fetchall()
print "\nRows: \n"
for row in rows:
    print "   ", row"""
    

