
import json
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import pandas as pd
import sys 

df = pd.read_csv('heart_cleveland_upload.csv')
data = df.iloc[:, :-1].values
label = df.iloc[:, -1].values

# Create Logistic model
LogisticRegressionModel = LogisticRegression(max_iter=3000)

# Split the data into Training data and Test data
training_data, test_data, training_label, test_label = train_test_split(
    data, label, random_state=0, test_size=0.3)

# Training the model using the training data
LogisticRegressionModel.fit(training_data, training_label)

newInput = [[float(json.loads(sys.argv[1])), 
             float(json.loads(sys.argv[2])), 
             float(json.loads(sys.argv[3])),
             float(json.loads(sys.argv[4])),
             float(json.loads(sys.argv[5])),
             float(json.loads(sys.argv[6])),
             float(json.loads(sys.argv[7])),
             float(json.loads(sys.argv[8])),
             float(json.loads(sys.argv[9])),
             float(json.loads(sys.argv[10])),
             float(json.loads(sys.argv[11])),
             float(json.loads(sys.argv[12])),
             float(json.loads(sys.argv[13]))]]

new_label = LogisticRegressionModel.predict(newInput)
print(new_label)








# def add_two(a, b):
#     sum = 0
#     for i in range(a, b):
#         sum += i
#     print(sum)


# x = "".split("/")
# if __name__ == "__main__":
#     my_list = []
#     j = json.loads(sys.argv[1])
#     k = json.loads(sys.argv[2])
#     my_list.append(j)
#     my_list.append(k)
#     print(my_list)
 