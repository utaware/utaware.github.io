<template>
  <ul class="rail-standard-list">
    <li class="rail-standard-list-item"
      v-for="(item, index) in options"
      :style="{ 'backgroundColor': `var(--color-${item.type})` }"
      :key="index">
      <span class="content">{{ item.text }}</span>
      <span class="tip">{{ tips[index] + unit }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tips: Array<string | number>,
  unit?: string
}>(), {
  unit: '',
})

const options = [
  { text: 'GOOD', type: 'success' },
  { text: 'NEEDS IMPROVEMENT', type: 'warning' },
  { text: 'POOR', type: 'danger' }
]
</script>

<style scoped lang="scss">
.rail-standard-list {
  display: flex;
  list-style: none;
  &-item {
    position: relative;
    display: flex;
    width: 12em;
    height: 3em;
    justify-content: center;
    align-items: center;
    .tip {
      position: absolute;
      left: -0.8em;
      bottom: -1.6em;
      color: var(--theme-color);
    }
  }
}
</style>