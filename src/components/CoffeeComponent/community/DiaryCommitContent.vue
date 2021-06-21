<template>
  <div class="DiaryCommitContent">
    <SubmitItem>
      <slot></slot>
    </SubmitItem>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SubmitItem from '@/components/TodoComponent/SubmitItem'

export default defineComponent({
  name: 'CommitComment',
  components: {
    SubmitItem
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
