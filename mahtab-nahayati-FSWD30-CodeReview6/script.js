


	class media {
	constructor (title, author, genre, publisher, type, imageUrl, rating) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.type = type;
		this.imageUrl = imageUrl;
		this.rating = rating;

	}

	// Function to create card with content
	createCard(){
		var mediapage = document.getElementById('mediapage');
		var mediaCard = document.createElement('div');
		mediaCard.className = "col-lg-3 col-sm-12 "
		mediaCard.innerHTML = `
		<div class="card">
			<div class="card-title px-2">
				<span class="text-muted">Type:</span><strong>${this.type}</strong>
			</div>
        	<img src=${this.imageUrl} alt="Image" style="object-fit:contain">
    		<h5 class="px-2"><strong>${this.title}</strong></h5>
        	<p class="px-2"><span class="text-muted ">Author:</span> <strong>${this.author}</strong></p>
            <p class="px-2"><span class="text-muted">Published by:</span> <strong>${this.publisher}</strong></p>
            <p class="px-2"><span class="text-muted">Genre:</span> <strong>${this.genre}</strong></p>
            <p class="px-2"><span class="text-muted">Rating:</span> <strong>${stars(this.rating)}</strong></p>
        </div> 
        `;
    	mediapage.appendChild(mediaCard);
    }
}

// Stored Data
var content = [ new media ("Dylan", "Bob Dylan", "rock", "self published", "Music", "img/dylan.jpg", 4),
				new media ("City Lights", "Charlie Chaplin", "romantic comedy", "United Artists", "Film", "img/citylight.jpg", 2),
				new media ("Lawrence of Arabia", "T.E.Lawrence", "historical drama", "Columbia Pictures", "Film", "img/lawrenceofarabia.jpg", 5),
				new media ("Diamond Life", "Sade", "smooth soul", "Epic", "Music", "img/diamondlife.jpg", 5),
				new media ("Woodwalkers", "Katja Brandis", "belletristik", "bild", "Book", "img/woodwalker.jpg", 5),
				new media ("Foundation", "Isaac Asimov", "fantasy science fiction", "Heyne", "Book", "img/foundation.jpg", 3),
				new media ("The Sandman", "Neil Gaiman", "fantasy", "Vertigo", "Book", "img/sandman.jpg", 2),
				new media ("Modesty Blaise", "Peter O'Donnell", "mystery", "Titan Books", "Book", "img/modestyblaise.jpg", 3)
];

// Display stored data with create card function
for (var i = 0; i < content.length; i++) {
	content[i].createCard();
}

// Event listener for adding item to mediathek
document.getElementById("title-form").addEventListener("submit", function(e){
	// Get values from the form
	var title = document.getElementById("title").value,
	author = document.getElementById("author").value,
	selectType = document.getElementById("selectType").value,
	selectGenre = document.getElementById("selectGenre").value,
	publisher = document.getElementById("publisher").value,
	image = document.getElementById("image").value,
	rating = Number(document.getElementById("rating").value);

	// Check that fields aren't  empty 
	if (title ==="" || author ==="" || selectType ==="disabled" || selectGenre ==="disabled" || publisher === "" || image ==="" || rating ===""){
		alert("Fill in al lthe fields!");
		e.preventDefault();
	}else {
		// Check  rating is 1-5
		if (rating < 1 || rating > 5) {
			alert("Enter rating between 1-5!");
			e.preventDefault();
		}else {
			// Check if any of those  authors then  error
			if (author === "Danielle Steel" ||  author === "Roland Emmerich"){
				alert("I do not want to save this")
				e.preventDefault();
			} else {
				// Create new mediathek and push to content array
				var newmedia = new Collection (title, author, selectGenre, publisher, selectType,'"'+image+'"', rating);
				// content.push(newContent);
				newmedia.createCard();
				// Clear input fields
				alert("Item Added to Mediathek");
				clearFields();
			}
		}
		e.preventDefault();
	}
})


//  function to empty input fields after a new input
function clearFields(){
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("selectType").value = "disabled";
	document.getElementById("selectGenre").value = "disabled";
	document.getElementById("publisher").value = "";
	document.getElementById("image").value = "";
	document.getElementById("rating").value = "";
}

// Function to show stars  rating 1-5
function stars(rating) {
	var fullStar = "";
	for(var i = 0; i < rating; i++){
		fullStar += "<span class='fa fa-star checked'></span>";
	}
	var emptyStar = "";
	for(var j = 0; j < (5-rating); j++){
		emptyStar += "<span class='fa fa-star'></span>"
	}
	var myStars = fullStar + emptyStar;
	
	return(myStars);
}
