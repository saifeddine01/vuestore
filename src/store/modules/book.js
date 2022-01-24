import {GET_ALL_BOOOKS,SET_ITEMS,ADD_BOOK,UPDATE_BOOK,DELETE_BOOK} from '../mutation-types'
import { reactive } from "vue";
export default {
    namespaces: true,
  state: reactive({
    books: [],
  }),
  mutations: {
    [ADD_BOOK] :(state, payload) =>
      state.books.push(payload)
    ,
    [DELETE_BOOK] : (state, payload) =>
      state.books = state.books.filter((book) => book.id != payload.id)
    ,
    [UPDATE_BOOK] : (state, payload) =>{
      let b = state.books.findIndex((book) => book.id == payload.id)
      state.books.splice(b, 1, payload)
    },
    [SET_ITEMS] :  (state, payload) => state.books = payload
    },

  actions: {
    ADD_BOOK : ({ commit }, book) =>
      commit('ADD_BOOK', book)
    ,
    DELETE_BOOK : ({ commit }, book) =>
      commit('DELETE_BOOK', book)
    ,
    UPDATE_BOOK : ({ commit }, book) =>
      commit('UPDATE_BOOK', book)
    ,
    SET_ITEMS : ({ commit }, book) =>
      //axios
      commit('SET_ITEMS', book)
    ,
  },
  getters: {

    [GET_ALL_BOOOKS]:(state) =>state.books
      /*
    getAllBooks(state) {
      return state.books;
    }
    */

  },

}
