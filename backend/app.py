from flask import Flask , request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from routes import *

app = Flask(__name__)
# Add database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///toDos.db'
# Secret Key
app.config['SECRET_KEY'] = 'my to-do secret key'
# initialize database
todoDatbase = SQLAlchemy(app)



if __name__ == "__main__":
    todoDatbase.create_all()
    app.run(debug=True)
