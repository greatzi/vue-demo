export const actions = {
    addAction(context) {
        context.commit('add', 10)
    },
    reduceAction(context) {
        context.commit('reduce', 10)
    }
}