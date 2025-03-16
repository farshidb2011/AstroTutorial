<script setup>

import { ref } from 'vue';

const counter = ref(0);


const increment = () => {    
    counter.value += 1;
}
</script>

<template>
    <button @click="increment">Increment</button>
    <h1>Counter is {{ counter }}</h1>
</template>