
import pandas as pd
import requests

df1 = pd.read_csv("employee_data.csv")
df2 = pd.read_csv("manager_data.csv")

merged_df = pd.merge(df1, df2, on='employee_name', how='inner')
merged_df.drop([ "leave_duration","leave_type","manager_name","team_name"], axis = 1, inplace = True)
merged_df["leave_dates"]= pd.to_datetime(merged_df["leave_dates"])


merged_df["toDate"]=None
merged_df["phone"]=None
merged_df["selectedFile"]=None
merged_df["email"]=None

# RE-NAMING COLUMNS
merged_df.rename(
    columns={"employee_name": "name", "leave_dates": "fromDate"},
    inplace=True,
)
merged_df["name"] = merged_df["name"].str.replace("'", "")

merged_df["fromDate"] = merged_df["fromDate"].astype(str)



data1= merged_df.to_dict(orient='records')


url = 'http://localhost:8080/postemployees'

headers = {'Content-type': 'multipart/form-data;'}
print(data1)
for i in range(0,len(data1)):
  
  response = requests.post(url, data=data1[i])

print("showing post status:")
print(response.status_code)
