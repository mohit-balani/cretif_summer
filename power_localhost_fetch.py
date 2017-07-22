import psycopg2
from random import random
from time import sleep
from apscheduler.schedulers.blocking import BlockingScheduler
from datetime import datetime
from decimal import Decimal
import csv
import logging
logging.basicConfig()

# Try to connect
try:
    conn=psycopg2.connect("host='localhost' dbname='postgres' user='postgres' password='postgres' port='5432'")
    #conn=psycopg2.connect("host='dbinstance.cgwf2c1tkupl.us-west-2.rds.amazonaws.com' dbname='postgres' user='testuser' password='12345678' port='5432'")
    print "Connection established"
except:
    print "Unable to connect to the database."

def push_data():    
    cur = conn.cursor()
    cur.execute("""INSERT into sample
                            VALUES (random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                    random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                    random(),random(),random(),random(),random(),random(),random());""")
    conn.commit()

def fetch():
    cur = conn.cursor()
    cur.execute("""SELECT * from audit;""")
    a = cur.fetchall()
    data = [tuple(str(item) for item in t) for t in a]
    print(data)
    
    with open('C:\Users\Nitiksha Modi\Desktop\Power\power_update.csv','wb') as out:
        csv_out=csv.writer(out)
        for row in data:
            csv_out.writerow(row)
    conn.commit()

    
# Start the scheduler
sched = BlockingScheduler()

# Schedule job_function to be called every two hours
sched.add_job(push_data, 'interval', seconds=5)
sched.add_job(fetch, 'interval', seconds = 5)

sched.start()

