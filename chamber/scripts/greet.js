var day = new Date();
const banner_text = "🤝🏼 Come join us for the chamber meet and greet on Wednesday at 7:00 p.m.";

if (day.getDay() > 0 && day.getDay() < 5){
    document.getElementById("banner").textContent = banner_text;
}

