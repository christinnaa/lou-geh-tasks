export default {
  change_status({ commit }, { key }) {
    // ACTIONS
    var temp = {
      key: key,
      status: 'In Progress',
    }
    commit('status_change', temp)
  },
  store_notes({ commit }, { notes }) {
    commit('store_notes_list', notes)
  },
}
