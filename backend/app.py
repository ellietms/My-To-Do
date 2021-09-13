from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired



from sqlalchemy import create_engine

app = Flask(__name__)
# Add database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///toDos.db'
# Secret Key
app.config['SECRET_KEY'] = 'my to-do secret key'
# initialize database
todoDatbase = SQLAlchemy(app)

# create Model
class ToDos(todoDatbase.Model):
    id = todoDatbase.Column(todoDatbase.Integer, primary_key = True)
    name = todoDatbase.Column(todoDatbase.String(200), nullable = False, unique = True) 
    date_added = todoDatbase.Column(todoDatbase.DateTime, default = datetime.utcnow)

    def __repr__(self):
        return '<ToDos %r>' % self.name


# Form with flask
# class UserToDo(FlaskForm):
#     name = StringField('name', validators=[DataRequired()])
#     submit = SubmitField('Submit')


@app.route("/todo/add", methods = ['GET', 'POST'])
def add_todo():
    return "WORKING"



    
def run():
    todoDatbase.create_all()    
    
    

if __name__ == "__main__":
    app.run(debug=True)
