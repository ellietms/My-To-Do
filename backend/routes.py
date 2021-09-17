from flask import request, jsonify
from app import app, todoDatbase
from models import ToDos
from datetime import datetime


@app.route("/api", methods=['GET'])
def home():
    result = todoDatbase.session.query(ToDos).all()
    return jsonify({"todos": [x.to_json() for x in result]})

    # print([(x.to_json()) for x in result])
    # return "hi"


@app.route("/test", methods=['GET'])
def view():
    return [{"name": "buy ice cream"}]


@app.route('/My-Todolists', methods=['GET', 'POST'])
def add_todo():
    if request.method == 'POST':
        all_data = request.form['to-do-list']
        final_data = ToDos(all_data)
        todoDatbase.session.add(final_data)
        todoDatbase.session.commit()
        print("DATA", final_data)
        return "Fetching DONE"
    else:
        return "Nothing has been fetched yet!"
