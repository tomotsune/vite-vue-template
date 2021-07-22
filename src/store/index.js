import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    actions: {
        add(context, value) {
            if (context.state.count % 2)
                context.commit('add', value)
        }
    },
    mutations: {
        add(state, value) {
            state.count += value
        }
    }
})

export default store