from flask import Flask
import sqlalchemy

app = Flask(__name__)

engine = sqlalchemy.create_engine('mysql://root:EllieSql92@server')
engine.execute("CREATE DATABASE todoList")
engine.execute("USE todoList")


@app.route("/")
def home():
    return "WORKING"



if __name__ == "__main__":
    app.run(debug=True)
