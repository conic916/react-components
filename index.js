'use strict'
//tablica
var movies = [{
        id: 1, // dodanie key, aby moc odswiezac zmiany poszczegolnych el, a nie wszystkich
        title: 'Harry potter',
        desc: ' data wydania w kinach : 24 listopada 2010 r.',
    },
    {
        id: 2,
        title: 'X-men',
        desc: 'premiera miala miejsce : 12 lipca 2000 roku.',
    },
    {
        id: 3,
        title: 'Avengers',
        desc: 'Data premiery : 24 kwietnia 2019',
    },
    {
        id: 4,
        title: 'Bekarty wojny',
        desc: 'Film o zydowskiej zemscie na nazistow, data premiery odbyla sie w 2009r.',
    }
];

// stworzenie klas : createClass. + dodanie metody renderowania + informacje o danej klasie
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                content: this.props.movie.title
            }),
            React.createElement(MovieDesc, {
                content: this.props.movie.desc
            })
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        content: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h3', {}, this.props.content)
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        content: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.content)
    }
});

var MovieList = React.createClass({
    propTypes: {
        content: React.PropTypes.array.isRequired,
    },
    render: function () {
        var moviesElements = this.props.content.map(function (movie) {
            return React.createElement(Movie, {
                movie: movie,
                key: movie.id
            })
        });

        return React.createElement('ul', {}, moviesElements)
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Top filmow'),
    React.createElement(MovieList, {
        content: movies
    })
);

ReactDOM.render(element, document.getElementById('app'));


// // proptypes - atrybut; okresla zachowanie komponentu , typ danych, do reactEl, dla drugiego parametru
// // tej metody createElement : react.createElement('nazwa klasy elementu', {atrybuty}, elementy)

// var GalleryItem = React.createClass({
//     propTypes: {
//         image: React.PropTypes.object.isRequired,
//     },

// // stworzenie klasy dla naszego komponentu
// // render jest parametrem, metoda ktora wykona sie przy probie stworzenia el.
// //zwraca obiekt ReactElement

//     render: function(){
//         return (
//             React.createElement('div', {},
//             React.createElement('h2', {}, this.props.image.name),
//             React.createElement('img', {src: this.props.image.src}) )
//         )
//     }
// })

//proptypes - obiekt = ma jedna wlasciwosci image, i musi to byc obiekt,