import { getLocation, logObject} from "./modules/data";

getLocation('Florida').then(console.log);


const searchBar = document.getElementById('search');
const form = document.querySelector('form');
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    const info = searchBar.value;
    logObject(info);
    searchBar.value = '';
})
