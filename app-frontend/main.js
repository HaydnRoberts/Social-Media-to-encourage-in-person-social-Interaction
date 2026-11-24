window.onload = function() {
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            let elem = document.getElementById("divUsers");
            let users = JSON.parse(this.responseText);
            

            let text = "";
            let len = users.length;
            for(let i = 0; i < len; i++){
                if (i != 0){
                    text += ", ";
                }
                text += users[i].surname;
            }
            elem.innerHTML = text;
        }
    };
    
    request.open("GET", "http://localhost:82/", true);
    request.send();
}
