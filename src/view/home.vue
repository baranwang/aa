<style scoped>
table {
  text-align: center;
}
table td,
table th {
  padding: 0.25em 1em;
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
          <td>{{ item.price | currency }}</td>
          <td>{{ item.publicFee | currency }}</td>
          <td>{{ item.price + item.publicFee | currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  filters: {
    /**
     * @param {number} value
     */
    currency: (value) => value.toLocaleString("zh-CN", {
      style: "currency",
      currency: "CNY"
    })
  },
  data() {
    return {
      persons: [{
        name: "",
        price: null
      },{
        name: "",
        price: null
      }],
      expressFee: this.$route.query.expressFee | null,
      packageFee: this.$route.query.packageFee | null,
      totalFee: this.$route.query.totalFee | null
    };
  },
  computed: {
    result() {
      const publicFee = Number(this.expressFee) + Number(this.packageFee);
      const original = this.persons.reduce((total, item) => (total += Number(item.price)), 0);
      const discount = (Number(this.totalFee) - publicFee) / original;
      return this.persons.map(item => ({
        name: item.name,
        price: +(item.price * discount).toFixed(2),
        publicFee: +(publicFee / this.persons.length).toFixed(2)
      }));
    }
  },
  watch: {
    result() {
      const {
        persons,
        expressFee,
        packageFee,
        totalFee
      } = this;
      this.$router.push({
        params: {
          data: btoa(JSON.stringify({ persons, expressFee, packageFee, totalFee }))
        }
      }).catch(() => {});
    }
  },
  mounted() {
    const { data } = this.$route.params;
    if (typeof data === "string") {
      try {
        const {
          persons,
          expressFee,
          packageFee,
          totalFee
        } = JSON.parse(atob(data));
        this.persons = persons;
        this.expressFee = expressFee;
        this.packageFee = packageFee;
        this.totalFee = totalFee;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
  }
};
</script>
