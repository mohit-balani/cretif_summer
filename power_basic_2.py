import psycopg2
from random import random
from time import sleep

# Try to connect
try:
    conn=psycopg2.connect("host='localhost' dbname='postgres' user='postgres' password='postgres' port='5432'")
    print "Connection established"
except:
    print "I am unable to connect to the database."
    
cur = conn.cursor()
while(True):
            cur.execute("""INSERT into sample
                        VALUES (random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                random(),random(),random(),random(),random(),random(),random());""")
            conn.commit()
            sleep(5)


