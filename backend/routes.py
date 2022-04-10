from flask import current_app, jsonify, request, redirect
from app import create_app, db
from models import Articles, articles_schema, Parking, parkings_schema
from datetime import datetime

# Create an application instance
app = create_app()

# Define a route to fetch the avaialable articles


@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

    articles = Articles.query.all()
    results = articles_schema.dump(articles)

    return jsonify(results)


@app.route("/enter", methods=["GET"])
def enter():
    parkings = Parking.query.filter(Parking.departure == None)
    results = parkings_schema.dump(parkings)
    if len(results) <= 5:
        parking = Parking()
        date = datetime.utcnow
        db.session.add(parking)
        db.session.commit()
        parkings = Parking.query.filter(Parking.departure == None)
        results = parkings_schema.dump(parkings)
        return redirect("http://localhost:3000", code=301)
    else:
        return "<p>parking spot at full capacity</p>"


@app.route("/depart/<id>", methods=["PUT"])
def depart(id):
    get_parking = Parking.query.get(id)
    if get_parking.departure != 1:
        get_parking.departure = 1
        db.session.add(get_parking)
        db.session.commit()

        return "<p> Updated </p>"
    else:
        return "<p>The parking is already departed</p>"


@app.route("/parking", methods=["GET"])
def parking():
    parkings = Parking.query.all()
    results = parkings_schema.dump(parkings)

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
