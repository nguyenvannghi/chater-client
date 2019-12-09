import { isEmpty } from 'lodash';

const getRoomsAction = async (data, query) => {
    try {
        let action = new Promise(resolve => resolve);
        action = query({ variables: data });
        await action.then(resp => {
            console.log(resp);
        });
    } catch (error) {
        console.log(error);
    }
};

export { getRoomsAction };
