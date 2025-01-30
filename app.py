from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="testdb",
    port=3306
)

@app.route("/users", methods=["GET"])
def get_users():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    results = cursor.fetchall()
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True, port=5000)