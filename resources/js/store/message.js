const state = {
    content: ''
};

const mutations = {
    setContent (state, { content, timeout}) {
        stete.content = msContentScript;

        if (typeof timeout === 'underfined') {
            timeout = 3000;
        }

        setTimeout(() => (state.content = ''), timeout);
    }
};

export default {
    namespaced: true,
    state, 
    mutations
};