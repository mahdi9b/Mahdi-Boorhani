import json
import os
os.path.abspath("E:\اموزش html\فایل html\with_python")
information=""
class User ():
    def __init__(self,username,age,password) -> None:
        self.user_name=username
        self.password=password
        self.age=age
    def information(self):
        information={"user name":self.user_name,"password":self.password,"age":self.age}
        with open("../","w+") as f:
            json.dump(information,f)
            
while True:
    user=input("enter your name:")
    if 5>len(user)>16:
        print("limit is 16 char and at lest 5 char")
        continue
    else:
        print("__________________________________________________________")
        break
while True:
    password = input("enter your password:")
    if len(password) <8:
        print('your password must have 8 char')

    elif password.isnumeric():
        print('your password must have one word')

    elif password.isalpha():
        print('your password must have one number')

    elif password.islower():
        print('your password must have one upper word')

    else:
        print("__________________________________________________________")
        break
while True:
    age=input("enter your age")
    try:
        int(age)
    except:
        print("you must use number")
        continue
    else:
        print("information saves")
        break
player=User(user,age,password)
player.information()