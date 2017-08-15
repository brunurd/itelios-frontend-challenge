function getJson(fileName, callback) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }

    else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var jsonData;

            try {
                jsonData = JSON.parse(xmlhttp.responseText);
            }

            catch(e) {
                eval("jsonData = (" + xmlhttp.responseText + ");");
            }

            callback.apply(this,[jsonData]);
        }
    }

    xmlhttp.open('GET', fileName, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(null);
}
