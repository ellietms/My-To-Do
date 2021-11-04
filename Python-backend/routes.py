from flask import request, jsonify, redirect
import os
from flask.globals import session
from app import app, todoDatbase
from models import ToDos
from datetime import datetime

@app.route("/my-to-do-lists/", methods=['POST', 'GET'])
def home():
    print("********************************")
    all_data_from_class_model_ToDos = ToDos.query.all()
    for eachData in all_data_from_class_model_ToDos:
        print("ALL DATA" , eachData.to_json())
    print("*******************************")
    if request.method == 'POST':
        new_data = request.form.to_dict(flat=False)['toDoList'][0]
        print("New Data POST", new_data)
        new_class_model_for_newData_postReq = ToDos(name = new_data)
        todoDatbase.session.add(new_class_model_for_newData_postReq)
        todoDatbase.session.commit()
    elif request.method == 'GET':
        all_data = todoDatbase.session.query(ToDos).all()
        return jsonify({"todos": [each_data.to_json() for each_data in all_data]})
        
    else:
        return "SOMETHING WENT WRONG"
    
    
@app.route('/my-to-do-lists/<int:index>', methods= ['GET'])
def show_chosen_data(index):
    print("////////////////////////////////")
     # first way filter
    chosen_data_1= ToDos.query.get(index)
    #  second way filter
    chosen_data_2 = ToDos.query.filter(ToDos.id == index).first()
    #  Third way filter
    chosen_data_3 = todoDatbase.session.query(ToDos).filter(ToDos.id == index).first()
    # 4th way filter
    chosen_data_4 = ToDos.query.filter_by(id = index).first()
    
    print("-------RESULT1---------",chosen_data_1.to_json())
    print("-------RESULT2---------",chosen_data_2.to_json())
    print("-------RESULT3---------",chosen_data_3.to_json())
    print("-------RESULT4---------",chosen_data_4.to_json())
    
    return  jsonify({"todos": chosen_data_1.to_json()})

    # Manual filter
    
    # all_data_json = [each_data.to_json() for each_data in all_data]
    # chosen_data = [chosen_data for chosen_data in all_data_json if chosen_data['id'] != index]
   



@app.route("/my-to-do-lists/<int:index>", methods = ['DELETE'])    
def remove_chosen_data(index):
    chosen_data_to_delete = ToDos.query.get(index)
    print("Data for deleting",chosen_data_to_delete.to_json())
    todoDatbase.session.delete(chosen_data_to_delete)
    todoDatbase.session.commit()
    all_updated_data = ToDos.query.all()            
    for eachData in all_updated_data:
            print("ALL DATA" , eachData.to_json())
    return redirect('http://localhost:3000/my-to-do-lists/')   
    
    



if __name__ == "__main__":
    app.run(debug=True,  use_reloader=True)
