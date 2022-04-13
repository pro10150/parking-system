from app import db, ma
from datetime import datetime


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime(), default=datetime.utcnow)

    def __repr__(self):
        return "<Articles %r>" % self.title

# Generate marshmallow Schemas from your models


class Parking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    entry = db.Column(db.DateTime(), default=datetime.utcnow)
    departure = db.Column(
        db.Integer, nullable=True)

    def __repr__(self):
        return "<Articles %r>" % self.entry


class ArticlesShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "title", "body", "date")


class ParkingSchema(ma.Schema):
    class Meta:
        fields = ("id", "entry", "departure")


article_schema = ArticlesShema()
articles_schema = ArticlesShema(many=True)

parking_schema = ParkingSchema()
parkings_schema = ParkingSchema(many=True)
