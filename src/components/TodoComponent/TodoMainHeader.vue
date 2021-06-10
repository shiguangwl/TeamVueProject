<template>
  <div class="TodoMianHeader">
    <SearchComponent></SearchComponent>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SearchComponent from '@/components/SearchComponent'
export default defineComponent({
  name: 'TodoMianHeader',
  components: {
    SearchComponent
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .TodoMianHeader{
    display: flex;
    height: 50px;
  }
</style>
