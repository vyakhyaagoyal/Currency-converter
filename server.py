from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore
import json

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/get_data', methods=['GET'])
def get_data():
    with open('data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

# json_data="https://api.currencyapi.com/v3/latest?apikey=cur_live_Om7AJYzd6oxFMe5h3qnMJZtWYPOp6CT0ClePOxoK";

# # Function to find value by country code
# def get_country_value(country_code, data):
#     for item in data:
#         if item["code"] == country_code:
#             return item["value"]
#     return None  # Return None if not found

# # Example Usage
# search_code = "${toCurr}"
# result = get_country_value(search_code, json_data)

# #print(f"Value for country code '{search_code}': {result}")
