<style scoped>
table {
  text-align: center;
}
table td,
table th {
  padding: .25em 1em;
}
</style>

<template>
  <div id="app">
    <fieldset>
      <legend>Persons</legend>
      <div
        v-for="(item, index) in persons"
        :key="index"
      >
        <input
          v-model="item.name"
          type="text"
          placeholder="name"
        >
        <input
          v-model="item.price "
          type="number"
          placeholder="price"
        >
        <button @click="persons.splice(index, 1)">
          -
        </button>
      </div>
      <button @click="persons.push({ name: '', price: null })">
        + New Person
      </button>
    </fieldset>
    <fieldset>
      <legend>Public</legend>
      <input
        v-model="expressFee"
        type="text"
        placeholder="Express Fee"
      >
      <input
        v-model="packageFee"
        type="text"
        placeholder="Package Fee"
      >
      <hr>
      <input
        v-model="totalFee"
        type="text"
        placeholder="Total Fee"
      >
    </fieldset>
    <!-- <button @click="compute">
      Compute
    </button>-->
    <table>
      <thead>
        <tr>
          <th>Person</th>
          <th>Price</th>
          <th>Public Fee</th>
          <th>Total Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in result"
          :key="index"
        >
          <td v-text="item.name" />
          <td v-text="item.price" />
          <td v-text="item.publicFee" />
          <td>{{ item.price + item.publicFee }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {
          name: "",
          price: null
        },
        {
          name: "",
          price: null
        }
      ],
      expressFee: null,
      packageFee: null,
      totalFee: null
    };
  },
  computed: {
    result() {
      const publicFee = Number(this.expressFee) + Number(this.packageFee);
      const original = this.persons.reduce(
        (total, item) => (total += Number(item.price)),
        0
      );
      const discount = (this.totalFee - publicFee) / original;
      return this.persons.map(item => ({
        name: item.name,
        price: +(item.price * discount).toFixed(2),
        publicFee: +(publicFee / this.persons.length).toFixed(2)
      }));
    }
  }
};
</script>
