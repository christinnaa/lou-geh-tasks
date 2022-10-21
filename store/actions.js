export default {
  change_status({ commit }, { key, status }) {
    // ACTIONS
    var temp = {
      key: key,
      status: status.status,
      class: status.class,
    }
    commit('status_change', temp)
    commit('openCard', null)
  },
  open_card({ commit }, { index }) {
    commit('openCard', index)
  },
  store_notes({ commit }, { notes }) {
    commit('store_notes_list', notes)
  },
}
