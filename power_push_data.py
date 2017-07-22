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
    #conn=psycopg2.connect("host='localhost' dbname='postgres' user='postgres' password='postgres' port='5432'")
    conn=psycopg2.connect("host='dbinstance.cgwf2c1tkupl.us-west-2.rds.amazonaws.com' dbname='postgres' user='testuser' password='12345678' port='5432'")
    print "Connection established"
except:
    print "Unable to connect to the database."

def push_data():    
    cur = conn.cursor()
    cur.execute("""INSERT into sample_data
                            VALUES (CURRENT_DATE,CURRENT_TIME,random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                    random(),random(),random(),random(),random(),random(),random(),random(),random(),
                                    random(),random(),random(),random(),random(),random(),random(),random(),random(),random());""")
    conn.commit()

def fetch():
    cur = conn.cursor()
    cur.execute("""SELECT * from audit;""")
    a = cur.fetchall()
    data = [tuple(str(item) for item in t) for t in a]
    print(data)
    
    with open('C:\Users\Nitiksha Modi\Desktop\Power\power_update.csv','wb') as out:
        csv_out=csv.writer(out)
        csv_out.writerow(["AC1_B1_SUBSTN_LT_EM1_ACT_PWR","AC1_B1_SUBSTN_LT_EM1_PWR_R","AC1_B1_SUBSTN_LT_EM1_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM1_ACT_PWR_B","AC1_B1_SUBSTN_LT_EM1_CURR","AC1_B1_SUBSTN_LT_EM1_ENERGY",
      "AC1_B1_SUBSTN_LT_EM1_FREQ","AC1_B1_SUBSTN_LT_EM1_PF","AC1_B1_SUBSTN_LT_EM1_VOLT",
      "AC1_B1_SUBSTN_LT_EM2_ACT_PWR","AC1_B1_SUBSTN_LT_EM2_ACT_PWR_B","AC1_B1_SUBSTN_LT_EM2_CURR",
      "AC1_B1_SUBSTN_LT_EM2_ENERGY","AC1_B1_SUBSTN_LT_EM2_FREQ","AC1_B1_SUBSTN_LT_EM2_PF",
      "AC1_B1_SUBSTN_LT_EM2_PWR","AC1_B1_SUBSTN_LT_EM2_PWR_R","AC1_B1_SUBSTN_LT_EM2_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM2_VOLT","AC1_B1_SUBSTN_LT_EM3_ACT_PWR","AC1_B1_SUBSTN_LT_EM3_ACT_PWR_B",
      "AC1_B1_SUBSTN_LT_EM3_CURR","AC1_B1_SUBSTN_LT_EM3_ENERGY","AC1_B1_SUBSTN_LT_EM3_FREQ",
      "AC1_B1_SUBSTN_LT_EM3_PWR","AC1_B1_SUBSTN_LT_EM3_PWR_R","AC1_B1_SUBSTN_LT_EM3_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM3_VOLT","time","date"])
        for row in data:
            csv_out.writerow(row)
    conn.commit()

def fetch2():
    cur = conn.cursor()
    cur.execute("""SELECT * FROM sample_data ORDER BY date,time DESC LIMIT 5;""")
    a = cur.fetchall()
    data = [tuple(str(item) for item in t) for t in a]
    print(data)
    
    with open('C:\Users\Nitiksha Modi\Desktop\Power\power_update.csv','wb') as out:
        csv_out=csv.writer(out)
        csv_out.writerow(["date","time","AC1_B1_SUBSTN_LT_EM1_ACT_PWR","AC1_B1_SUBSTN_LT_EM1_PWR_R","AC1_B1_SUBSTN_LT_EM1_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM1_ACT_PWR_B","AC1_B1_SUBSTN_LT_EM1_CURR","AC1_B1_SUBSTN_LT_EM1_ENERGY",
      "AC1_B1_SUBSTN_LT_EM1_FREQ","AC1_B1_SUBSTN_LT_EM1_PF","AC1_B1_SUBSTN_LT_EM1_VOLT",
      "AC1_B1_SUBSTN_LT_EM2_ACT_PWR","AC1_B1_SUBSTN_LT_EM2_ACT_PWR_B","AC1_B1_SUBSTN_LT_EM2_CURR",
      "AC1_B1_SUBSTN_LT_EM2_ENERGY","AC1_B1_SUBSTN_LT_EM2_FREQ","AC1_B1_SUBSTN_LT_EM2_PF",
      "AC1_B1_SUBSTN_LT_EM2_PWR","AC1_B1_SUBSTN_LT_EM2_PWR_R","AC1_B1_SUBSTN_LT_EM2_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM2_VOLT","AC1_B1_SUBSTN_LT_EM3_ACT_PWR","AC1_B1_SUBSTN_LT_EM3_ACT_PWR_B",
      "AC1_B1_SUBSTN_LT_EM3_CURR","AC1_B1_SUBSTN_LT_EM3_ENERGY","AC1_B1_SUBSTN_LT_EM3_FREQ",
      "AC1_B1_SUBSTN_LT_EM3_PWR","AC1_B1_SUBSTN_LT_EM3_PWR_R","AC1_B1_SUBSTN_LT_EM3_PWR_Y",
      "AC1_B1_SUBSTN_LT_EM3_VOLT"])
        for row in data:
            csv_out.writerow(row)
    conn.commit()

# Start the scheduler
sched = BlockingScheduler()

# Schedule job_function to be called every five seconds
sched.add_job(push_data, 'interval', seconds=5)
sched.add_job(fetch, 'interval', seconds = 5)
#sched.add_job(

sched.start()

