import { createStore } from 'vuex';
//import axios from "axios";

export default createStore({
  state: {
    books: [],
  },
  mutations: {
    addBook(state, payload) {
      state.books.push(payload);
    },
    deleteBook(state, payload) {
      state.books = state.books.filter((book) => book.id != payload.id);
    },
    updateBook(state, payload) {
      let b = state.books.findIndex((book) => book.id == payload.id);
      state.books.splice(b, 1, payload);
    },
    setitems (state, payload) {
      state.books = payload
  }
  },
  actions: {
    addBook({ commit }, book) {
      commit('addBook', book);
    },
    deleteBook({ commit }, book) {
      commit('deleteBook', book);
    },
    updateBook({ commit }, book) {
      commit('updateBook', book);
    },
    setitems({ commit }, book) {
      //axios
      commit('setitems', book);
    },
  //   async addRandomNumber(context) {
  //     let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
  //     context.commit('addToCounter', data.data)
  // } 
  },
  getters: {
    getAllBooks(state) {
      return state.books;
    }
    // getAllBooksState(state) {
      
    //   let data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //  console.log(data);
    //  commit('SET_Items', data);
    //  return state.books;
    // },
  },
  modules: {},
});
