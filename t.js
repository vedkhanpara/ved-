function checkPassword() {

    const password =
        document.getElementById("password").value;

    let score = 0;
    let feedback = [];

    if (password.length >= 8) {
        score += 20;
    } else {
        feedback.push("Minimum 8 characters required");
    }

    if (/[A-Z]/.test(password)) {
        score += 20;
    } else {
        feedback.push("Add uppercase letter");
    }

    if (/[a-z]/.test(password)) {
        score += 20;
    } else {
        feedback.push("Add lowercase letter");
    }

    if (/[0-9]/.test(password)) {
        score += 20;
    } else {
        feedback.push("Add number");
    }

    if (/[!@#$%^&*]/.test(password)) {
        score += 20;
    } else {
        feedback.push("Add special character");
    }

    let strength;

    if (score <= 40) {
        strength = "Weak";
    }
    else if (score <= 70) {
        strength = "Medium";
    }
    else if (score <= 90) {
        strength = "Strong";
    }
    else {
        strength = "Very Strong";
    }

    document.getElementById("result").innerHTML =
        `
    <h3>${strength}</h3>
    <p>Score: ${score}/100</p>
    <p>${feedback.join("<br>")}</p>
    `;

    document.getElementById("bar").style.width =
        score + "%";
}