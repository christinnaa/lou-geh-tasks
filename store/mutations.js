import state from './state'
export default {
  status_change(state, data) {
    console.log(data)
    // state.card_status = status;

    // FIND BY INDEX
    state.notes[data.key].status = data.status
    state.notes[data.key].class = data.class
    state.current_card = data.key
  },
  openCard(state, index) {
    state.current_card = index
  },
  store_notes_list(state, notes) {
    state.notes = notes
  },
}
