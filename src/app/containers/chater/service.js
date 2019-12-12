const createMessageAction = async (data, mutation) => {
    try {
        let action = new Promise(resolve => resolve);
        action = mutation({ variables: data });
        return await action;
    } catch (error) {
        console.log(error);
    }
};

export { createMessageAction };
