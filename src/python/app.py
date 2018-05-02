#!flask/bin/python
from flask import Flask, jsonify
import garageController as garageController

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/api/toggleGarageDoor', methods=['GET'])
def get_tasks():
	
    return jsonify({'door-status': garageController.GarageController()})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
