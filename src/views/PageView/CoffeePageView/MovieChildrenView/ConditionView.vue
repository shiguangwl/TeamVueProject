<template>
  <div class="ConditionView">
    <div class="ConditionComponentBox">
      <ConditionComponent></ConditionComponent>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import ConditionComponent from '@/components/CoffeeComponent/community/MovieComponent/index/MovieCondition/ConditionComponent'

export default defineComponent({
  name: 'ConditionView',
  components: {
    ConditionComponent
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
