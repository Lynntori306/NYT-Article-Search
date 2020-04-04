$(document).ready(function () {
    $("#submit").on("click", function () {
        let userSearch = $("#exampleFormControlInput1").val();
        console.log(userSearch);
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + "&api-key=EJBRr5XsjhnaGa8fZ87bNs1mfrv2sRYj";

        $
            .ajax({

                url: queryURL,
                method: "GET"

            }).then(function (response) {
                console.log(response);
            });    


    });        






});