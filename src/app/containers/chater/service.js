import { isEmpty } from 'lodash';

const createMessageAction = async (data, mutation) => {
    try {
        let action = new Promise(resolve => resolve);
        action = mutation({ variables: data });
        await action.then(resp => {
            if (!isEmpty(resp) && !isEmpty(resp.data)) {
                console.log(resp.data);
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export { createMessageAction };
