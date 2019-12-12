import { SET_TOKEN } from '@/store/constants/user';

const actions = {
    setToken ({ state, commit }, { token }) {
        return new Promise((resolve, reject) => {
          commit(SET_TOKEN, token);
        });
    }
};

export default actions;
