<template>
  <div class="DataViewPage">
    <el-calendar>
      <template #dateCell="{data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔算法第三方啥地方士大夫大师傅埃尔文发生肺癌的大额算法第三方瓦房店阿发额问问第三方啊️' : '' }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DataViewPage',
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
