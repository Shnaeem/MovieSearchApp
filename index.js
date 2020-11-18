import dotenv from './node_modules/dotenv';
import { appendMovies, clearMovies, setMessage } from './ui';
dotenv.config();

(() =>{
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById('search-pane-input').value;

        clearMovies();
        setMessage('searching for movies, please wait...')

        search(searchTerm)
        .then((response) => {
                if(response.Response === 'True'){
                appendMovies(response.Search); 
                setMessage();
            } else{
                setMessage('Could not find any matches, Please refine your search term')
            }
        }).catch((error) => {
            setMessage('unexpected error occured, Please try again later');
            console.log(error);
        })
    }

    window.addEventListener('load', () => {
        document.getElementById('search-pane-button')
        .addEventListener('click', handleSearchButtonClick);
    })
})