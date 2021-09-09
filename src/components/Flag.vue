<template>
  <img v-if="src" :src="require('flag/' + src + '.svg')" />
</template>

<script>
import countries from "@/utils/data";
import { normalize } from "@/utils/string";
export default {
  name: "g-flag",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    src() {
      if (!this.value) return;
      let item = null;
      if (this.value.match(/[a-zA-Z]{2,3}[-_][a-zA-Z]{2}/g)) {
        item = countries.find(item =>
          item.locale
            .map(item => item.toLowerCase())
            .includes(this.value.toLowerCase().replace(/_/g, "-"))
        );
      } else {
        const value = this.normalize(this.value);
        item = countries.find(item => {
          if (Array.isArray(item.name)) {
            return item.name.find(subitem => this.normalize(subitem) === value);
          } else {
            return this.normalize(item.name) === value || item.src === value;
          }
        });
      }
      return item ? item.src : null;
    }
  },
  mounted() {
    console.log(countries.map(item => `"${item.name}"`).join(", "));
  },
  methods: {
    normalize(value) {
      if (!value) return;
      return normalize(value);
    }
  }
};
</script>
