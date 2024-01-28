import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'cb16937457msh25ea905d9e6f1c9p17a0f4jsn4ec885506f61',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data;
    }
    catch (error) {
        console.log(error)
    }
}
