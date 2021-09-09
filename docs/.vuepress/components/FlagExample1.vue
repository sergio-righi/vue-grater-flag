<template>
  <div>
    <g-flag :value="item" v-for="item in items" :key="item.id" width="30" />
  </div>
</template>

<script>
import countries from "@/utils/data";
export default {
  computed: {
    items() {
      return countries.map(item => item.src);
    }
  }
};
</script>
