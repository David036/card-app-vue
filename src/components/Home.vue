<script>
import "./style.scss";

export default {
  name: "home",
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    addCard() {
      this.cards.push({ number: Math.floor(Math.random() * 1000) });
    },
    removeCard(index) {
      this.cards.splice(index, 1);
    },
    filterCards() {
      this.cards.sort((a, b) => b.number - a.number);
    },
  },
};
</script>

<template>
  <div class="home-section">
    <div class="buttons">
      <button v-on:click="addCard">Add Card</button>
      <button v-on:click="filterCards(item)">Filter Cards</button>
    </div>
    <div class="cards-section">
      <div class="card-item" id="app" v-for="(item, index) in cards">
        <span>
          {{ item.number }}
        </span>
        <button v-on:click="removeCard(index)" class="remove-button">X</button>
      </div>
    </div>
  </div>
</template>
<style></style>
