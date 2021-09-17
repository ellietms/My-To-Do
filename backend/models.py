# from dataclasses import dataclass
from app import todoDatbase
from datetime import datetime

# create Model

# @dataclass
class ToDos(todoDatbase.Model):
    id = todoDatbase.Column(todoDatbase.Integer, primary_key = True)
    name = todoDatbase.Column(todoDatbase.String(200), nullable = False, unique = True) 
    date_added = todoDatbase.Column(todoDatbase.DateTime, default = datetime.utcnow)
    
    def to_json(self):
        return {
            "id" :self.id,
            "name":self.name,
            "date_added": self.date_added
        }

