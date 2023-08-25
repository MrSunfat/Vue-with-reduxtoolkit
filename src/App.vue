<script setup lang="ts">
import { addTask, removeTodo } from "./storesReduxTool/store";
import { useDispath, useSelector } from "./plugins/helpers";

import HelloWorld from "./components/HelloWorld.vue";

const dispatch = useDispath();
const todos = useSelector((state: { todos: any; }) => state.todos);

const update = () => {
    dispatch(addTask("Hello world"));
};

const remove = () => {
  dispatch(removeTodo())
}
</script>

<template>
    <div>
        <img alt="Vue logo" src="" />
        <button @click="update">update state</button>
        <button @click="remove">remove state</button>
        <ul>
            <li v-for="(item, idx) in todos.todoList" :key="idx">{{ item }}</li>
        </ul>
        <hello-world msg="ldldl"></hello-world>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>