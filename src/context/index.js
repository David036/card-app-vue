export let cards = [];
export const functions = {
  addCard() {
    const id = "id" + Math.random().toString(16).slice(2);
    const cardInfo = { id: id, number: Math.floor(Math.random() * 1000) };
    cards.push(cardInfo);
  },

  removeCard(item) {
    const newCards = cards.filter((element) => element.id !== item.id);
    cards = [...newCards];
    console.log("Remove from card item");
  },

  filterCards() {
    cards.sort((a, b) => b.number - a.number);
  },

  findItem(id) {
    return cards.find((item) => item.id == id);
  },
};