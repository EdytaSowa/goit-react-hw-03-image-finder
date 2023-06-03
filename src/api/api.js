import axios from "axios";

const MY_KEY = '30898532-07677536b584d5a486c7433f6';
const axios.defaults.baseURL ='https://pixabay.com/api/'

// 'https://${basicURL}/?q=${query}=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12'

export const getFetchData = async (query) => {

    const response = axios.get(`/q=?query=${query}${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    
    // console.log(response.data.hits);
        return response.data.hits;

}
