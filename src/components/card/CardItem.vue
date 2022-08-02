<template>
  <div class="cardPage">
    <RouterLink class="backButton" to="/">Back</RouterLink>
    <RouterLink v-on:click="deleteThisCard" class="removeButton" to="/"
      >Remove</RouterLink
    >
    <h1>Card {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import { functions } from "../../context/index.js";

import "./style.scss";

export default {
  data() {
    const card = functions.findItem(this.$route.params.id);
    return {
      card,
    };
  },

  methods: {
    deleteThisCard() {
      functions.removeCard(this.card);
    },
  },
};
</script>
