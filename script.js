
function fetchBooks() {
    fetch("https://openlibrary.org/works/OL45804W/editions.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
            console.log(data.entries);
            let html = "";
            if (data.entries) {
                data.entries.forEach(entry => {
                    html += `<div>${entry.key}</div>`;
                });
            } else {
                html = "<div>No entries found.</div>";
            }
            document.getElementById("booklist").innerHTML = html;
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}




//https://www.dbooks.org/api/recent


