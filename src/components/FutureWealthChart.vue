<script setup lang="ts">
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
  } from "echarts/components";
  import VChart, { THEME_KEY } from "vue-echarts";
  import { ref, provide, PropType, computed } from "vue";
  
  const props = defineProps({
    value: { type: Object as PropType<FutureWealthResults[]>, required: true }
  })

  use([
    CanvasRenderer,
    TitleComponent,
    TooltipComponent,
    LegendComponent
  ]);
  
  provide(THEME_KEY, "light");
  
  const capitalData = computed(() => {
    return props.value.map(el => el.valueTotal);
  });
  const interestsData = computed(() => {
    return props.value.map(el => el.interestsTotal);
  });

  const option = ref({
    title: {
      text: "Évolution annuelle",
      left: "left"
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Valeur du placement',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: capitalData
    },
    {
      name: 'Part des intérêts',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: interestsData
    },
  ]
});
  </script>

<template>
    <v-chart class="chart" :option="option" />
</template>
  

  
  <style scoped>
  .chart {
    height: 400px;
  }
  </style>