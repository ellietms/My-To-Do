from flask import request
from app import app, todoDatbase
from models import ToDos
from datetime import datetime


@app.route("/", methods = ['GET' , 'POST'])
def home():
    return "YOU are at HOME"

@app.route("/test", methods = ['GET'])
def view():
    return {"time": datetime.utcnow()}
    


@app.route('/My-Todolists', methods = ['GET','POST'])
def add_todo():
    if request.method == 'POST':
        all_data = request.form['to-do-list']
        final_data = ToDos(all_data)
        todoDatbase.session.add(final_data)
        todoDatbase.session.commit()
        print("DATA",final_data)
        return "Fetching DONE"
    else:
        return "Nothing has been fetched yet!"
