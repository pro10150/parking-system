from flask import current_app, jsonify, request, redirect
from app import create_app, db
from models import Articles, articles_schema, Parking, parkings_schema
from datetime import datetime, date
import os

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
    parkings = Parking.query.filter(
        Parking.departure == None, Parking.entry != None)
    results = parkings_schema.dump(parkings)
    # json.JSONEncoder.default = lambda self, obj: (
    #     obj.isoformat() if isinstance(obj, datetime.datetime) else None)
    print(len(results))
    if len(results) < 5:
        parking = Parking()
        date = datetime.utcnow
        db.session.add(parking)
        db.session.commit()
        parkings = Parking.query.filter(Parking.departure == None)
        results = parkings_schema.dump(parkings)
        results[-1]['status'] = 1
        return jsonify(results[-1])
    else:
        parking_array = {
            "status": 0
        }
        return jsonify(parking_array)


@app.route("/confirmEnter/<id>", methods=["GET"])
def confirmEnter(id):
    parkings = Parking.query.filter(
        Parking.departure == None, Parking.entry != None)
    results = parkings_schema.dump(parkings)
    if len(results) < 5:
        get_parking = Parking.query.get(id)
        if get_parking.entry == None:
            get_parking.entry = datetime.now()
            db.session.add(get_parking)
            db.session.commit()

            parking_array = {
                "status": 1,
                "id": id
            }
        else:
            parking_array = {
                "status": 0
            }
    else:
        parking_array = {
            "status": 0
        }
    return jsonify(parking_array)


@ app.route("/depart/<id>", methods=["PUT"])
def depart(id):
    get_parking = Parking.query.get(id)
    if get_parking.departure != 1:
        get_parking.departure = 1
        db.session.add(get_parking)
        db.session.commit()

        parking_array = {
            "status": 1
        }
    else:
        parking_array = {
            "status": 0
        }
    return jsonify(parking_array)


@ app.route("/detail/<id>", methods=["GET"])
def get(id):
    get_parking = Parking.query.get(id)
    # results = parkings_schema.dump(get_parking)
    # print(get_parking)
    if get_parking:
        parking_array = {"status": 1, "id": get_parking.id,
                         "entry": get_parking.entry, "departure": get_parking.departure}
    else:
        parking_array = {
            "status": 0
        }
    return jsonify(parking_array)


@app.route("/parking", methods=["GET"])
def parking():
    parkings = Parking.query.all()
    results = parkings_schema.dump(parkings)

    return jsonify(results)


@app.route("/available", methods=["GET"])
def available():
    parkings = Parking.query.filter(Parking.departure == None)
    results = parkings_schema.dump(parkings)
    parking_array = {
        "status": 1,
        "available": 5 - len(results)
    }
    return jsonify(parking_array)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4000))
    app.run(host='0.0.0.0', port=port, debug=True)
