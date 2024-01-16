/*S65578 izzat registration*/
function validateRegistration() {
    var reviewText = document.getElementById("submit1").value;
    document.getElementById("submit1").value = "";

    alert("Welcome to BookWormies!");
    window.open("homepage.html");
}

/*S65533 aisyah amanina book selection*/
function loadContent(genre) { 
    document.getElementById("genre-content").innerHTML="";

    var actionBooks = [
        {id:"A1", title:"RENEGADES", author:"Marissa Meyer", cover:"renegade-action1.jpg"},
        {id:"A2", title:"HOUR OF THE ASSASSIN", author:"Matthew Quirk", cover:"hota-action2.jpg"},
        {id:"A3", title:"DIVERGENT", author:"Veronica Roth", cover:"divergent-action3.jpg"},
        {id:"A4", title:"THE GATE-KEEPER", author:"James Bryne", cover:"gk-action4.jpg"}
    ]

    var mysteryBooks = [
        {id:"M1", title:"NEMESIS", author:"Brendan Reichs", cover:"nemesis-mystery1.jpg"},
        {id:"M2", title:"ONE OF US IS LYING", author:"Karen M. McManus", cover:"oouil-mystery2.jpg"},
        {id:"M3", title:"S.T.A.G.S", author:"M. A. Bennett", cover:"stags-mystery3.jpg"},
        {id:"M4", title:"WATCHING YOU", author:"Lisa Jewell", cover:"wy-mystery4.jpg"}
    ]

    var genreTitle = document.getElementById("genre-title");
    var genreContent = document.getElementById("genre-content");
    var shelfContainer = document.getElementById("shelf-container");

    switch (genre) {
        case 'action':
            generateContent("A C T I O N", actionBooks);
            break;
        case 'mystery':
            generateContent("M Y S T E R Y", mysteryBooks);
            break;
    }

    function generateContent(genreTitleText, books) {

        genreTitle.innerHTML = `<h1>${genreTitleText}</h1>`;

        books.forEach(function(book) {
            var bookAttr = document.createElement("div");
            bookAttr.className = "book-card";

            bookAttr.innerHTML =`
            <a href="bookdetailspage.html")"><img src="${book.cover}" alt="${book.title} Cover" style="max-width: 80%;"></img>
            <h4>${book.title}</h4>
            <p>by ${book.author}</p></a>
            `;
            genreContent.appendChild(bookAttr);

        });

        shelfContainer.style.backgroundImage = 'url(bookshelf.jpg)';
    }
}

/*S65533 aisyah amanina star rating*/
let stars = document.getElementsByClassName("star");
 
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}
 
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

/*S65533 aisyah amanina submit book review*/
function submitReview() {
    var reviewText = document.getElementById("submit-review").value;
    document.getElementById("reviewInput").value = "";

    gfg(0);

    alert("Your review has been submitted!");
}

/*S65533 aisyah amanina rsvp form*/
function validate() {
    var reviewText = document.getElementById("submit").value;
    document.getElementById("submit").value = "";

    alert("Your spot has been reserved!");
}