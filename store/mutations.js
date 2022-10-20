import state from './state'
export default {
  status_change(state, data) {
    console.log(data)
    // state.card_status = status;

    // FIND BY INDEX
    state.notes[data.key].status = data.status
  },
  store_notes_list(state, notes) {
    state.notes = notes
  },
}
