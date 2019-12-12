<template>
<div>
  <div class="row" style="padding: 0 10px;">
    <div class="col-12">
      <TrainingPhrases :training-phrase-inputs="trainingPhraseInputs" @remove-phrase-input="removeItemFromPhrase($event)" />
    </div>
  </div>
	<GridLayout
		:layout="layout"
		:col-num="12"
		:is-draggable="false"
		:is-resizable="false"
		:is-mirrored="false"
		:vertical-compact="true"
		:margin="[10, 10]"
		:use-css-transforms="true"
	>
		<GridItem
			:x="layout[0].x"
			:y="layout[0].y"
			:w="layout[0].w"
			:h="layout[0].h"
			:i="layout[0].i"
		>
      <div class="card-box" >
        <b-dropdown variant="link" class="float-right" right text="Right align" no-caret toggle-class="text-decoration-none">
          <template v-slot:button-content>
          <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i class="mdi mdi-dots-vertical"/>
          </a>
          </template>
          <!--<div class="dropdown-menu dropdown-menu-right">-->
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Action</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Another action</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Something else</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Separated link</b-dropdown-item>
          <!--</div>-->
        </b-dropdown>

        <Chart
          :legend-x="['Mn', 'Tu', 'We', 'Th', 'Fr', 'Su', 'Sn']"
          :legend-y="[' 0', 15, 30]"
        >
          Calls in the last 7 days
        </Chart>

      </div>
		</GridItem>
		<GridItem
			:x="layout[1].x"
			:y="layout[1].y"
			:w="layout[1].w"
			:h="layout[1].h"
			:i="layout[1].i"
		>
			<Statistics :avg-opr-answer-time="9.68" :avg-user-answer-time="11.12" :missed-calls="3" :calls-today="10"/>
		</GridItem>
		<GridItem
			:x="layout[2].x"
			:y="layout[2].y"
			:w="layout[2].w"
			:h="layout[2].h"
			:i="layout[2].i"
		>
			<LatestCalls/>
		</GridItem>
		<GridItem
			:x="layout[3].x"
			:y="layout[3].y"
			:w="layout[3].w"
			:h="layout[3].h"
			:i="layout[3].i"
		>
			<Dialer/>
		</GridItem>
	</GridLayout>
</div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'
import Statistics from '../components/Dashboard/Statistics'
import TrainingPhrases from '../components/Dashboard/TrainingPhrases.vue'
import LatestCalls from '../components/Dashboard/LatestCalls'
import Dialer from '../components/Dashboard/Dialer'
import Chart from '../components/Dashboard/Chart'
import VueApexCharts from 'vue-apexcharts'
import JQuery from 'jquery'
import 'jquery-sparkline'
let $ = JQuery

export default {
	components: {
    TrainingPhrases,
		VueApexCharts,
		GridLayout,
		GridItem,
		Statistics,
		LatestCalls,
		Dialer,
    Chart
	},
	data () {
		return {
      trainingPhraseInputs: ['Phrase 1', 'Phrase 2'],
			layout: [
				{ 'x': 0, 'y': 0, 'w': 8, 'h': 3, 'i': '0' },
				{ 'x': 8, 'y': 0, 'w': 4, 'h': 3, 'i': '1' },
				{ 'x': 0, 'y': 1, 'w': 9, 'h': 3, 'i': '2' },
				{ 'x': 9, 'y': 1, 'w': 3, 'h': 3, 'i': '3' },
        // { 'x': 0, 'y': 0, 'w': 12, 'h': 0.4, 'i': '4' }
			],
			options: {
				chart: {
					id: 'callsChart',
					type: 'line',
					zoom: {
						enabled: true
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},

				title: {
					text: 'Calls in the last 7 days',
					align: 'left',
					style: {
						fontSize: '16px',
						color: '#263238'
					}
				},
				markers: {
					size: 0
				},
				xaxis: {
					type: 'datetime'
				},
				yaxis: [
					{
						min: 1000000,
						max: 500000000,
						tickAmount: 4,
						logarithmic: true,
						seriesName: 'Operator',
						labels: {
							formatter: this.labelFormatter
						}
					},
					{
						min: 1000000,
						max: 500000000,
						opposite: true,
						tickAmount: 4,
						seriesName: 'User',
						labels: {
							formatter: this.labelFormatter
						}
					},
					{
						min: 1000000,
						max: 500000000,
						opposite: true,
						tickAmount: 4,
						seriesName: 'Missed',
						labels: {
							formatter: this.labelFormatter
						}
					}
				]
			},
			series: [
				{
					name: 'Operator',
					data: [
						{	x: 1994, y: 2543763 }, { x: 1995, y: 4486659 }, { x: 1996, y: 7758386 },
						{ x: 1997, y: 12099221 }, { x: 1998, y: 18850762 }, { x: 1999, y: 28153765 },
						{ x: 2000, y: 41479495 }, { x: 2001, y: 50229224 }, { x: 2002, y: 66506501 },
						{ x: 2003, y: 78143598 }, { x: 2004, y: 91332777 }, { x: 2005, y: 103010128 },
						{ x: 2006, y: 116291681 }, { x: 2007, y: 137322698 }, { x: 2008, y: 157506752 },
						{ x: 2009, y: 176640381 }, { x: 2010, y: 202320297 }, { x: 2011, y: 223195735 },
						{ x: 2012, y: 249473624 }, { x: 2013, y: 272842810 }, { x: 2014, y: 295638556 },
						{ x: 2015, y: 318599615 }, { x: 2016, y: 342497123 }
					]
				},
				{
					name: 'User',
					data: [
						{	x: 1994, y: 2543763 }, { x: 1995, y: 4486659 }, { x: 1996, y: 7758386 },
						{ x: 1997, y: 12099221 }, { x: 1998, y: 18850762 }, { x: 1999, y: 28153765 },
						{ x: 2000, y: 41479495 }, { x: 2001, y: 50229224 }, { x: 2002, y: 66506501 },
						{ x: 2003, y: 78143598 }, { x: 2004, y: 91332777 }, { x: 2005, y: 103010128 },
						{ x: 2006, y: 116291681 }, { x: 2007, y: 137322698 }, { x: 2008, y: 157506752 },
						{ x: 2009, y: 176640381 }, { x: 2010, y: 202320297 }, { x: 2011, y: 223195735 },
						{ x: 2012, y: 249473624 }, { x: 2013, y: 272842810 }, { x: 2014, y: 295638556 },
						{ x: 2015, y: 318599615 }, { x: 2016, y: 342497123 }
					]
				},
				{
					name: 'Missed',
					data: [
						{	x: 1994, y: 2543763 }, { x: 1995, y: 4486659 }, { x: 1996, y: 7758386 },
						{ x: 1997, y: 12099221 }, { x: 1998, y: 18850762 }, { x: 1999, y: 28153765 },
						{ x: 2000, y: 41479495 }, { x: 2001, y: 50229224 }, { x: 2002, y: 66506501 },
						{ x: 2003, y: 78143598 }, { x: 2004, y: 91332777 }, { x: 2005, y: 103010128 },
						{ x: 2006, y: 116291681 }, { x: 2007, y: 137322698 }, { x: 2008, y: 157506752 },
						{ x: 2009, y: 176640381 }, { x: 2010, y: 202320297 }, { x: 2011, y: 223195735 },
						{ x: 2012, y: 249473624 }, { x: 2013, y: 272842810 }, { x: 2014, y: 295638556 },
						{ x: 2015, y: 318599615 }, { x: 2016, y: 342497123 }
					]
				}
			]
		}
	},
	mounted: function () {
	  console.log(this.$route)
		// $('.apexcharts-zoom-out-icon').click()
		setTimeout(() => {
			$('.apexcharts-zoom-in-icon').click()
			$('.apexcharts-zoom-out-icon').click()
		}, 1)
	},
	created() {
		window.addEventListener('resize', this.resizeHandler)
		// this.layout[1] = { 'x': 0, 'y': 3, 'w': 10, 'h': 3, 'i': '1' }
	},
	methods: {
		complete (index) {
			this.list[index] = !this.list[index]
		},
		labelFormatter (value) {
			let val = Math.abs(value)
			if (val >= 1000000) {
				val = (val / 1000000).toFixed(1) + ' M'
			}
			return val
		},
		resizeHandler (e) {
			console.log(window.innerWidth)
		},
    removeItemFromPhrase(payload) {
      this.trainingPhraseInputs.splice(payload, 1)
    }
	}
}

</script>
<style scoped>
.statistics-item {
  width: 150px !important;
}
.card-box {
  max-height: 100% !important;
  height: 100%;
}

</style>
