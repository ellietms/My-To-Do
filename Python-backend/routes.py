from flask import request, jsonify, redirect
import os
from app import app, todoDatbase
from models import ToDos
from datetime import datetime


@app.route("/all_data", methods= ['GET'])
def showData():
    all_data = todoDatbase.session.query(ToDos).all()
    return jsonify({"todos": [each_data.to_json() for each_data in all_data]})


@app.route("/my-to-do-lists/", methods=['POST'])
def home():
    print("********************************")
    all_data_from_class_model_ToDos = ToDos.query.all()
    for eachData in all_data_from_class_model_ToDos:
        print("ALL DATA" , eachData.to_json())
    print("*******************************")
    if request.method == 'POST':
        new_data = request.form.to_dict(flat=False)['toDoList'][0]
        print("REQUES", new_data)
        new_class_model_for_newData_postReq = ToDos(name = new_data)
        todoDatbase.session.add(new_class_model_for_newData_postReq)
        todoDatbase.session.commit()
        return redirect('http://localhost:3000/my-to-do-lists/')
        
    else:
        return "SOMETHING WENT WRONG"

if __name__ == "__main__":
    app.run(debug=True,  use_reloader=True)
