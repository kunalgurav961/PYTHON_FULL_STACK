from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return '<h1>Hello world</h1>'

@app.route('/home')
def home():
    name = "Disha"
    return render_template('home.html', name=name)

app.run(debug=True)