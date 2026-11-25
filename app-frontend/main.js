
window.onload = function() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState === 4) {
            let elem = document.getElementById("divUsers");
            if (this.status === 200) {
                let users = JSON.parse(this.responseText);
                elem.innerHTML = "";
                if (users.length === 0) {
                    elem.textContent = "No users found.";
                    return;
                }
                let list = document.createElement("ul");

                for (let i = 0; i < users.length; i++) {

                    let listItem = document.createElement("li");

                    listItem.textContent =
                        users[i].forename + " " + users[i].surname;

                    list.appendChild(listItem);
                }
                elem.appendChild(list);
            } else {
                elem.textContent = "Error loading users.";
                console.log("Request failed:", this.status);
            }
        }
    };
    request.open("GET", "http://localhost:82/", true);
    request.send();
};
