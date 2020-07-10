<template>
    <div class="hemoIndex">
        <CountTo
            :startVal="startVal"
            :endVal="endVal"
            :duration="3000"
        ></CountTo>
        <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="bar" id="chart1"></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="bar" id="chart2"></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="bar" id="chart3"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import 'echarts/lib/chart/bar';
export default {
    data() {
        return {
            startVal: 0,

            endVal: 2017,
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
            this.chart2 = this.$echarts.init(document.getElementById('chart2'));
            this.chart3 = this.$echarts.init(document.getElementById('chart3'));
            this.chart1.setOption(this.items2);
            this.chart2.setOption(this.items2);
            this.chart3.setOption(this.items2);
        }
    },
    mounted() {
        this.init();
    }
};
</script>
<style lang="scss">
.hemoIndex {
    .bar {
        width: 100%;
        height: 300px;
        padding: 0 30px;
        box-sizing: border-box;
    }
}
</style>
