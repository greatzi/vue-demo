export const getters = {
  count: function (state) {
    state.count += 100
    return state.count
  }
}
