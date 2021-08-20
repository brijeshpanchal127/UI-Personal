import { ADD_FETCHED_DATA } from '../reducers/actions/types';
import { apiError } from '../reducers/actions/api.action';
import { apiAction } from './api.service';
import { addFetchedData } from '../reducers/actions/jargon.action';
//import { apiUrl } from '../../config/dev';

class JargonService {
    fetchJargons() {
        return apiAction({
            //url: apiUrl,
            url: 'https://www.techiediaries.com/api/data.json',
            onSuccess: addFetchedData,
            onFailure: (error) => {
                console.log("Error fetching data: " + error);
                return apiError("error fetching data");
            },
            label: ADD_FETCHED_DATA
        });
    }
}

export default new JargonService();
