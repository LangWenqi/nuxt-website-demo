import { SET_TOKEN } from '@/store/constants/user';
const mutations = {
    [SET_TOKEN] (state, token) {
        state.token = token;
    }
};
export default mutations;
