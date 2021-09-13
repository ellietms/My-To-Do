from app import todoDatbase

# create Model
class ToDos(todoDatbase.Model):
    id = todoDatbase.Column(todoDatbase.Integer, primary_key = True)
    name = todoDatbase.Column(todoDatbase.String(200), nullable = False, unique = True) 
    date_added = todoDatbase.Column(todoDatbase.DateTime, default = datetime.utcnow)

    def __repr__(self):
        return '<ToDos %r>' % self.name