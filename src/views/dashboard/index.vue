<template>
    <div class="hemoIndex">
        <div class="bar" id="chart1"></div>
    </div>
</template>
<script>
import 'echarts/lib/chart/bar';
export default {
    data() {
        return {
            items2: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            }
        };
    },
    methods: {
        init() {
            this.chart1 = this.$echarts.init(document.getElementById('chart1'));
            this.chart1.setOption(this.items2);
        }
    },
    mounted() {
        this.init();
    }
};
</script>
<style lang="scss" scoped>
.hemoIndex {
    .bar {
        width: 300px;
        height: 300px;
    }
}
</style>