import matplotlib.pyplot as plt
import psycopg2
import sys
from psycopg2.extensions import AsIs
from psycopg2 import sql

# Try to connect

try:
    conn=psycopg2.connect("host='dbinstance.cgwf2c1tkupl.us-west-2.rds.amazonaws.com' dbname='postgres' user='testuser' password='12345678' port='5432'")
    #conn=psycopg2.connect("host='localhost' dbname='postgres' user='postgres' password='postgres' port='5432'")
    print "Connection established"
except:
    print "I am unable to connect to the database."



# Fetch data from database:
try:
    cur = conn.cursor()
    s = str(sys.argv)
    s = s.split()
    
    col1 = s[1][1:-2]
    col2 = s[2][1:-2]
    start_date = s[3][1:-2]
    end_date = s[4][1:-2]
    
    cur.execute(
    sql.SQL("""SELECT {} FROM sample_data WHERE {} >= %s AND {} <= %s""")
        .format(sql.Identifier(col1), sql.Identifier('date'), sql.Identifier('date')),
        [start_date, end_date])
    #"AC1_B1_SUBSTN_LT_EM1_ENERGY" 
    a=cur.fetchall()
    
    cur.execute(
    sql.SQL("""SELECT {} FROM sample_data WHERE {} >= %s AND {} <= %s""")
        .format(sql.Identifier(col2), sql.Identifier('date'), sql.Identifier('date')),
        [start_date, end_date])    
    #"AC1_B1_SUBSTN_LT_EM1_ACT_PWR_B"
    b= cur.fetchall()

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
    

