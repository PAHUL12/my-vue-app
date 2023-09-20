<template>
    <!-- 1. Template Syntax -->
    <div>
      <!-- a. Text Interpolation -->
      <p>{{ message }}</p>
      
      <!-- b. Raw HTML -->
      <div v-html="rawHtml"></div>
      
      <!-- c. Attribute Bindings -->
      <div v-bind:id="dynamicId"></div>
      
      <!-- d. JavaScript expressions inside syntax -->
      <p>{{ reversedMessage }}</p>
    </div>
    
    <!-- 2. Methods -->
    <button @click="sayHello">Click Me</button>
    
    <!-- 5. Class and Style Bindings -->
    <div v-bind:class="classObject"></div>
    <div v-bind:style="styleObject"></div>
    
    <!-- 6. List Rendering -->
    <ul>
      <!-- a. v-for with an Object -->
      <li v-for="(value, name) in object">{{ name }}: {{ value }}</li>
      
      <!-- b. v-for with a Range -->
      <li v-for="n in 5">{{ n }}</li>
      
      <!-- c. v-for on <template> -->
      <template v-for="item in items">
        <li>{{ item.text }}</li>
      </template>
      
      <!-- d. v-for with v-if -->
      <li v-for="item in items" v-if="item.show">{{ item.text }}</li>
      
      <!-- e. v-for with a Component -->
      <item-component v-for="item in items" :key="item.id" :item="item"></item-component>
    </ul>
    
    <!-- 7. Event Handling -->
    <button v-on:click="clickHandler">Click Me</button>
    
    <!-- 8. Form Input Bindings -->
    <input v-model="inputText">
    <input type="checkbox" v-model="checked">
    <input type="radio" v-model="picked">
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
    </select>
    <textarea v-model="message"></textarea>
    
    <!-- 9. Watchers are in the script section -->
    
    <!-- 10. Components -->
    <custom-component :customProp="prop" @customEvent="handleEvent">
      <template v-slot:default>
        Default slot content
      </template>
    </custom-component>
  </template>
  
  <script setup>
    import { ref, computed, watch } from 'vue'
  
    // 1. Template Syntax
    let message = ref("Hello, Vue!")
    let rawHtml = ref("<strong>Vue 3 is cool!</strong>")
    let dynamicId = ref("my-id")
    let reversedMessage = computed(() => message.value.split('').reverse().join(''))
    
    // 2. Methods
    function sayHello() {
      alert('Hello!')
    }
    
    // 3. Reactivity Fundamentals
    let reactiveValue = ref("I'm reactive!")
    
    // 4. Computed Properties
    let computedValue = computed(() => `Computed: ${reactiveValue.value}`)
    
    // 5. Class and Style Bindings
    let classObject = ref({ active: true, 'text-danger': false })
    let styleObject = ref({ color: 'red' })
    
    // 6. List Rendering
    let items = ref([{ text: "One", show: true, id: 1 }, { text: "Two", show: false, id: 2 }])
    let object = ref({ firstName: 'John', lastName: 'Doe' })
    
    // 7. Event Handling
    function clickHandler() {
      alert('Button clicked!')
    }
    
    // 8. Form Input Bindings
    let inputText = ref("")
    let checked = ref(false)
    let picked = ref("")
    let selected = ref("A")
    
    // 9. Watchers
    watch(reactiveValue, (newVal, oldVal) => {
      console.log(`reactiveValue changed from ${oldVal} to ${newVal}`)
    })
  </script>
  
  <script>
    export default {
      // 10. Components
      props: {
        customProp: {
          type: String,
          required: true
        }
      },
      emits: ['customEvent'],
      setup(props, { emit }) {
        function handleEvent() {
          emit('customEvent', 'Data from child')
        }
        return { handleEvent }
      }
    }
  </script>
  
  <style scoped>
  /* Example styles */
  div {
    padding: 10px;
  }
  p {
    color: blue;
  }
  button {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 5px 10px;
  }
  </style>
  