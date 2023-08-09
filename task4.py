
import pandas as pd
import requests

df1 = pd.read_csv("employee_data.csv")
df2 = pd.read_csv("manager_data.csv")

merged_df = pd.merge(df1, df2, on='employee_name', how='inner')


merged_df["leave_dates"]= pd.to_datetime(merged_df["leave_dates"])



merged_df.rename(
    columns={"employee_name": "name"},
    inplace=True,
)
merged_df["name"] = merged_df["name"].str.replace("'", "")
merged_df["leave_type"] = merged_df["leave_type"].str.replace("'", "")
merged_df["manager_name"] = merged_df["manager_name"].str.replace("'", "")

merged_df["leave_dates"] = merged_df["leave_dates"].astype(str)



data1= merged_df.to_dict(orient='records')


url = 'http://localhost:8080/postemployeesdata'

headers = {'Content-type': 'multipart/form-data;'}
print(data1)
for i in range(0,len(data1)):
  
  response = requests.post(url, data=data1[i])

print("showing post status:")
print(response.status_code)
