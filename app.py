from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for flash messages

@app.route('/')
def registration_form():
    return render_template('registration.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    # Get form data
    full_name = request.form.get('fullName')
    user_name = request.form.get('userName')
    email = request.form.get('email')
    password = request.form.get('password')
    confirm_password = request.form.get('confirmPassword')
    phone = request.form.get('phone')
    gender = request.form.get('gender')

    # Validations
    if ' ' in full_name:
        flash("Full Name cannot contain spaces.", "error")
        return redirect('/')
    if len(password) < 8:
        flash("Password must be at least 8 characters long.", "error")
        return redirect('/')
    if ' ' in password:
        flash("Password cannot contain spaces.", "error")
        return redirect('/')
    if password != confirm_password:
        flash("Password and Confirm Password must match.", "error")
        return redirect('/')
    if not gender:
        flash("Please select your gender.", "error")
        return redirect('/')

    # Success message
    flash("Registration successful!", "success")
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
