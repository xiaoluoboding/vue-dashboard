<template>
  <div class="cube-statistic">
    <div class="cube-statistic-title">
      <span>{{title}}</span>
    </div>
    <div class="cube-statistic-content">
      <span class="cube-statistic-content__value">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  props: {
    title: String,
    value: Number
  }
}
</script>

<style lang="scss" scoped>
.cube-statistic {
  &-title {
    margin-bottom: 12px;
    color: rgba(0,0,0,0.45);
    font-size: 20px;
  }
  &-content {
    &__value {
      color: rgba(0,0,0,0.85);
      font-size: 32px;
    }
  }
}
</style>
