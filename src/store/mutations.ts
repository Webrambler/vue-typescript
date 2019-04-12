export default {
  ADD_HISTORYLIST(state: any, str: string) {
    state.searchHistoryList.push(str)
  },
  DELETE_HISTORYLIST(state: any, str: string) {
    let index = state.searchHistoryList.indexOf(str)
    state.searchHistoryList.splice(index, 1)
  },
  CLEAR_HISTORYLIST(state: any) {
    state.searchHistoryList = []
  }
}