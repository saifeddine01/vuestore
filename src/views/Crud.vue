<template>
  <div class="mt-4 container">
    <div class="row">
      <div class="col-4">
        <form>
          <h4>Vuex Crud</h4>
          <div class="mb-3 mt-3">
            <input
              v-model="book"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>

          <button
            v-if="!update"
            type="button"
            class="btn btn-success"
            @click="addBook"
          >
            Add
          </button>
          <button
            v-if="update"
            type="button"
            class="btn btn-success"
            @click="updateBook()"
          >
            Update
          </button>
        </form>
      </div>

      <div class="col-8">
        <div class="row">
          <div v-for="book in books" :key="book" class="col-6 mt-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Title: {{ book.title }}</h5>
                <p class="card-text">ID: {{ book.id }}</p>

                <button
                  @click="
                    update = true;
                    tmpBook = book;
                    this.book = tmpBook.title;
                  "
                  class="btn btn-primary mr-2"
                >
                  Update
                </button>
                <button @click="deleteBook(book)" class="btn btn-danger md-6">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import axios from 'axios';
export default {
  name: 'Crud',
  setup() {
    const store = useStore();
    const book = ref('');
    const update = ref(false);
    const tmpBook = ref({});
    function addBook() {
      store.dispatch('addBook', {
        title: book.value,
        id: uuidv4(),
      });
      book.value = '';
       console.log('allBooks->', allBooks);
    }
    function updateBook() {
      store.dispatch('updateBook', {
        title: book.value,
        id: tmpBook.value.id,
      });
      update.value = false;
      book.value = '';
       console.log('allBooks->', allBooks);
    }
    function deleteBook(book) {
      store.dispatch('deleteBook', book);
       console.log('allBooks->', allBooks);
    }

  function getBooksjson(){
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
       console.log('res data->', res.data);
       res.data.forEach(element => {
         store.dispatch('addBook', 
        element
      );
       });
        
      }
      )
  }
   const allBooks = store.getters.getAllBooks;
   
  
    console.log('allBooks->', getBooksjson());
      console.log('allBooks->', allBooks);
  
  return {
      book,
      books: computed(() => store.getters.getAllBooks),
      addBook,
      deleteBook,
      updateBook,
      getBooksjson,
      update,
      tmpBook,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
