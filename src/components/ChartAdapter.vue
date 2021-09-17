<template>
  <div class="cube-chart-adpater">
    <Statistic v-if="type === 'stat'" :title="title" :value="statValue"/>
    <ve-line-chart
      v-if="type === 'line'"
      :data="chartData"
      :settings="lineSettings"
      :height="height"
    />
    <ve-bar-chart
      v-if="type === 'bar'"
      :data="chartData"
      :settings="barSettings"
      :height="height"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Statistic from './Statistic.vue'

export default {
  name: 'ChartAdpater',
  components: {
    Statistic
  },
  props: {
    title: String,
    resultSet: {
      type: Object,
      required: true
    },
    type: String, // 图表类型
    height: Number
  },
  data () {
    return {
      chartData: [], // 图表数据
      lineSettings: {}, // 折线图配置项
      barSettings: {} // 柱状图配置项
    }
  },
  computed: {
    // 系列名称
    seriesNames () {
      return this.resultSet.seriesNames()
    },
    // 度量
    metrics () {
      if (this.loading) return ['']
      return this.seriesNames.map(x => x.key.split(',').shift())
    },
    // 规范化的查询结果
    chartPivot () {
      if (this.loading) return []
      return this.resultSet.chartPivot()
    },
    // 统计指标数值
    statValue () {
      return parseFloat(this.chartPivot[0][this.metrics[0]])
    }
  },
  mounted () {
    let dimensionsData = []
    const measuresData = []
    this.seriesNames.forEach(e => {
      const data = this.chartPivot.map(v => v[e.key])
      measuresData.push({ name: e.key.split(',').shift(), data })
      dimensionsData = this.chartPivot.map(v => dayjs(v.x).format('YYYY-MM'))
    })
    // 构建 ve-charts 数据项
    const chartData = {
      dimensions: {
        name: 'DateTime',
        data: dimensionsData
      },
      measures: measuresData
    }
    this.chartData = chartData
    console.log(this.chartData)
    this.lineSettings = {
      smooth: true
    }
    // this.barSettings = {
    //   stack: {
    //     sum: this.metrics
    //   }
    // }
  }
}
</script>

<style>
</style>
