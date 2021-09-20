from flask import request, jsonify
from app import app, todoDatbase
from models import ToDos
from datetime import datetime


@app.route("/my-to-do-lists", methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        result = todoDatbase.session.query(ToDos).all()
        return jsonify({"todos": [each_data.to_json() for each_data in result]})
    elif request.method == 'POST':
        return "Nothing"
    else:
        return "This is Error"    



# @app.route('/add-new-todo', methods=['GET', 'POST'])
# def add_todo():
#     if request.method == 'POST':
#         return print("NAME FROM BKND", ToDos(request.form["to-do-list"]))
#         # all_data = request.form['to-do-list']
#         # final_data = ToDos(all_data)
#         # todoDatbase.session.add(final_data)
#         # todoDatbase.session.commit()
#         # print("DATA", final_data)
#         # return "Fetching DONE"
#     else:
#         return "Nothing has been fetched yet!"
