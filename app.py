from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)
app.config.from_object('config')

@app.route("/")
def index():
    return redirect(url_for("get"))

@app.route("/get", methods=["GET", "POST"])
def get():
    view = request.get_json()
    print(view)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=1250)