from flask import Flask, request
from app import app, todoDatbase
from models  import ToDos


@app.route('/My-Todolists', methods = ['GET','POST'])
def add_todo():
    project_path = request.form['to-do-list']
    print("DATA",project_path)
    
