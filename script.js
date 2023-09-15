
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
            let html = "'<tr><th>TITLE</th><th>Publisher(s)</th><th>PUBLISH DATE</th></tr>'";
            if (data.entries) {
                data.entries.forEach(entry => {
                    html += `
                   <tr>
                    <td>${entry.title}</td>
                    <td>${entry.publishers}</td>
                    <td>${entry.publish_date
                    }</td>
                   </tr>`;
                });
            } else {
                html = "<div>No entries found.</div>";
            }
            document.getElementById("booklist").innerHTML = html;
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}




//https://www.dbooks.org/api/recent


