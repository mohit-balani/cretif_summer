import matplotlib.pyplot as plt
import psycopg2
from decimal import Decimal

# Try to connect
try:
    conn=psycopg2.connect("host='localhost' dbname='postgres' user='postgres' password='postgres' port='5432'")
    print "Connection established"

    # Fetch data from database
    try:
        cur = conn.cursor()
        cur.execute("""SELECT "col1" FROM test""")
        a=cur.fetchall()
        print a
        results = [tuple(str(item) for item in t) for t in a]
        print(results)
        
        '''cur.execute("""SELECT "AC1_B1_SUBSTN_LT_EM1_PWR_R.PresentValue" FROM sample""")   
        "AC1_B1_SUBSTN_LT_EM1_ACT_PWR_B"
        b= cur.fetchall()

        #Plot the graph
        try:
            plt.plot(a,b)  
            plt.show()
        except:
            print "Error in showing graph"'''
        
    except:
        print "I can't SELECT from bar"

except:
    print "I am unable to connect to the database."


"""rows = cur.fetchall()
print "\nRows: \n"
for row in rows:
    print "   ", row"""
