<template>
  <div class="container">
    <div class="welcome"><h1>Welcome to the To-Do App!</h1></div>

    <div v-show="message">{{ message }}</div>

    <div>
      <div>
        <div>
          <input
            type="text"
            id="name"
            v-model="model.name"
            placeholder="Title"
          />
        </div>
        <div>
          <input type="checkbox" id="isCompleted" v-model="model.isCompleted" />
          <label for="isCompleted">Completed?</label>
        </div>
      </div>
      <div>
        <button type="submit" @click="addToDo()">
          Add ToDo
        </button>
      </div>
    </div>

    <section>
      <ol>
        <li v-for="toDo of toDos" :key="toDo.name">
          {{ toDo.name }}, {{ toDo.isCompleted ? "Completed" : "Not Done" }}
        </li>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import ToDoModel from "@/models/ToDoModel";
  import store from "@/store";

  @Component({
    components: {},
  })
  export default class ToDoWithStore extends Vue {
    private message: string;
    private toDos: Array<ToDoModel>;

    private model: ToDoModel;

    constructor() {
      super();

      this.message = "";
      this.toDos = [];
      this.model = new ToDoModel();
    }

    get ToDos(): ToDoModel[] {
      const todos = this.$store.state.toDos; //this.todos;
      return todos;
    }

    async addToDo() {
      this.message = `Adding "${this.model.name}" to ToDo List ...`;
      if (this.toDos.some((x) => x.name == this.model.name)) {
        this.message = `ToDo item "${this.model.name}" already exists in your list`;
        return;
      }
      // this.todos.push(this.model);
      await this.$store.dispatch("addToDo", this.model);
      try {
        this.message = "ToDo added successfully to your list";
        setTimeout(() => {
          this.message = "";
          console.log(this.toDos);
        }, 1500);
        this.model = new ToDoModel();
      } catch (error) {
        console.error(error);
      }
    }
  }
</script>

<style scoped></style>
