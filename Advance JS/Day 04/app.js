const TOPMOVIES_APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const parentRow = document.querySelector("#parentRow");
const input = document.querySelector("#input")

const getMovies = async (url) => {
    const responce = await fetch(url);
    const data = await responce.json();
    showMovies(data.results)
}

getMovies(TOPMOVIES_APIURL)

function showMovies(movies) {
    parentRow.innerHTML = ''
    movies.forEach(
        (d, i) => {
            const box = document.createElement("div");
            
            box.classList.add("my-col","col-2")
          
            box.innerHTML = ` <img src=${IMGPATH + d.poster_path} class="card-img-top"
                    alt="...">
                <div class="overlay position-absolute">
                    <div class=" d-flex justify-content-between px-2">
                        <h4>${d.title}</h4>
                        <span class="">${d.vote_average
                } </span>
                    </div>
                    <span>Overview:</span>
                    <p>
                        Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius
                        is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now
                        lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake,
                        Lucius must look to his past to find strength and honor to return the glory of Rome to its
                        people.
                    </p>
`

            parentRow.appendChild(box)


        }
    );

}

input.addEventListener(
    'keyup',
    (e) => {
        if (input.value != "") {
            getMovies(SEARCHAPI + e.target.value)

        } else {
            getMovies(TOPMOVIES_APIURL)


        }
    }
)




