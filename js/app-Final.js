    var dataFilms= [];
    var like = [];
    var dislike = [];
    var pagina=1;

    $(document).ready(function(){
        $.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino", function(data){
            dataFilms = data;
            likePelicula(0);
        });
    });

    function likePelicula(pagina){
        //console.log(pagina)        
        if(dataFilms.length > pagina)
        {
            $(".imagen img").attr('src', dataFilms[pagina].poster);   
            $(".datos").html("<h1>" + dataFilms[pagina].show_title + "</h1>"+ "<h2>" + dataFilms[pagina].category + "</h2>" + "<p>" + dataFilms[pagina].summary + "</p>");
            like.push(dataFilms[pagina]);
        } else {
            $(".like").attr("disabled", 'disabled');
            $(".dislike").attr("disabled", 'disabled');
            $('#nofilms').foundation('reveal','open');
        }

    }

    function dislikePelicula(pagina){
        console.log(pagina)
        if(dataFilms.length > pagina)        {
            $(".imagen img").attr('src', dataFilms[pagina].poster);   
            $(".datos").html("<h1>" + dataFilms[pagina].show_title + "</h1>"+ "<h2>" + dataFilms[pagina].category + "</h2>" + "<p>" + dataFilms[pagina].summary + "</p>");
            dislike.push(dataFilms[pagina]);
        } else {
            $(".like").attr("disabled", 'disabled');
            $(".dislike").attr("disabled", 'disabled');
            $('#nofilms').foundation('reveal','open');
        }

    }

    function refreshPeliculas(pagina) {
        $.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino", function(data){
            dataFilms = data;
            likePelicula(0);
        });
        like.length=0;
        dislike.length=0;
        $('#refreshOptions').foundation('reveal','open');
    }