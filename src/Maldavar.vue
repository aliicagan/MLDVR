<template>
  <div id="wrapper">
    <Sidebar />
    <div id="main-content">
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>