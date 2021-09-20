from flask import Flask
from flask_sqlalchemy import SQLAlchemy



# this create an object ( a flask application object )
app = Flask(__name__)
# Add database
# this set database to use
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///toDos.db'
# Secret Key
app.config['SECRET_KEY'] = 'my to-do secret key'
# initialize database
todoDatbase = SQLAlchemy(app)

from routes import *

if __name__ == "__main__":
    # todoDatbase.drop_all()
    todoDatbase.create_all()
