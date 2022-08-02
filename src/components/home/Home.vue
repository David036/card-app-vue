<template>
  <div class="home-section">
    <div class="buttons">
      <button v-on:click="addCard">Add Card</button>
      <button v-on:click="filterCards">Filter Cards</button>
    </div>
    <div class="cards-section">
      <div class="card-item" id="app" v-for="item in cards">
        <RouterLink :to="'/carditem/' + item.id">{{ item.number }}</RouterLink>
        <button v-on:click="removeCard(item)" class="remove-button">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { functions, cards } from "../../context/index.js";

import "./style.scss";

export default {
  name: "home",
  data() {
    return {
      cards,
    };
  },

  methods: {
    addCard() {
      functions.addCard();
      this.cards = [...cards];
    },

    filterCards() {
      functions.filterCards();
      this.cards = [...cards];
    },

    removeCard(item) {
      functions.removeCard(item);
      this.cards = [...cards];
    },
  },
};
</script>

<style></style>
