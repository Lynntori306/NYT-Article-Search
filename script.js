$("div.form-group").text();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=EJBRr5XsjhnaGa8fZ87bNs1mfrv2sRYj";

$
.ajax({

    url: queryURL,
    method: "GET"

}).then(function(response) {
    
