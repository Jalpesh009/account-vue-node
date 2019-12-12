<template>
  <div>
    <h4 class="header-title mt-0 mb-3"><slot/></h4>
    <div class="text-center">
      <ul class="list-inline pt-2 pb-2">
        <li class="list-inline-item pr-2">
          <h5 style="color: #85b1fb;"><i class="fa fa-circle mr-1"/>Operator</h5>
        </li>
        <li class="list-inline-item pr-2">
          <h5 style="color: #10c469;"><i class="fa fa-circle mr-1"/>User</h5>
        </li>
        <li class="list-inline-item pr-2">
          <h5 style="color: #ff5b5b;"><i class="fa fa-circle mr-1"/>Missed</h5>
        </li>
      </ul>
    </div>
    <div class="b_legend_container">
      <div class="b_legend_wrapper">
        <div
          v-for="(item, index) in legendX"
          :key="index + 'X'"
          :style="'left: '+ legendXGenerator[index] + '%'"
          class="linesX"
        >
          <span class="x_mark">{{ item }}</span>
        </div>
        <div
          v-for="(item, index) in legendY"
          :key="index + 'Y'"
          :style="'bottom: '+ legendYGenerator[index] + '%'"
          class="linesY"
        >
          <span class="y_mark">{{ item }}</span>
        </div>
      </div>
      <div id="sparkline1" class="sparkline_grid">
          <canvas width="605" height="224" style="display: inline-block; width: 605.328px; height: 224px; vertical-align: top;"/>
        </div>
    </div>

  </div>
</template>

<script>
import JQuery from 'jquery'
import 'jquery-sparkline'
let $ = JQuery
export default {
  name: 'Chart',
  props: {
    legendX: {
      type: Array,
      default: () => ['Mn', 'Tu', 'We', 'Th', 'Fr', 'Su', 'Sn']
    },
    legendY: {
      type: Array,
      default: () => [10, 20, 30]
    }
  },
  computed: {
    legendXGenerator() {
      let totalLength = this.legendX.length - 1
      let gutter = Math.floor((100 / totalLength) * 100000) / 100000
      let gutterArray = []
      let counter = 0
      for (let i = 1; i <= totalLength; i++) {
        gutterArray.push(Math.floor(counter * 100000) / 100000)
        totalLength === i ? gutterArray.push(100) : ''
        counter += gutter
      }
      return gutterArray
    },
    legendYGenerator() {
      let totalLength = this.legendY.length - 1
      let gutter = Math.floor((100 / totalLength) * 100000) / 100000
      let gutterArray = []
      let counter = 0
      for (let i = 1; i <= totalLength; i++) {
        gutterArray.push(Math.floor(counter * 100000) / 100000)
        totalLength === i ? gutterArray.push(100) : ''
        counter += gutter
      }
      return gutterArray
    }
  },
  mounted() {
    $(document).ready(function() {
      var e; var r = function() {
        $('#sparkline1').sparkline([5, 7, 30, 10, 16, 12, 8],
          { type: 'line',
            width: '100%',
            height: '224',
            lineColor: '#85b1fb',
            fillColor: 'rgba(124, 209, 235, 0.3)',
            spotColor: '#85b1fb',
            minSpotColor: '#85b1fb',
            maxSpotColor: '#85b1fb',
            chartRangeMin: 0,
            chartRangeMax: 30,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)' })
          $('#sparkline1').sparkline([4, 16, 7, 16, 13, 11, 9],
            { type: 'line',
              width: '100%',
              height: '224',
              lineColor: '#10c469',
              fillColor: 'rgba(195, 240, 217,0.3)',
              composite: !0,
              spotColor: '#10c469',
              minSpotColor: '#10c469',
              maxSpotColor: '#10c469',
              chartRangeMin: 0,
              chartRangeMax: 30,
              highlightLineColor: 'rgba(0,0,0,.1)',
              highlightSpotColor: 'rgba(0,0,0,.2)' }),
          $('#sparkline1').sparkline([5, 4, 6, 3, 5, 2, 3],
            { type: 'line',
              width: '100%',
              height: '224',
              lineColor: '#ff5b5b',
              fillColor: 'rgba(255, 214, 214,0.3)',
              composite: !0,
              spotColor: '#ff5b5b',
              minSpotColor: '#ff5b5b',
              maxSpotColor: '#ff5b5b',
              chartRangeMin: 0,
              chartRangeMax: 30,
              highlightLineColor: 'rgba(0,0,0,.1)',
              highlightSpotColor: 'rgba(0,0,0,.2)' }),
          $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
            { type: 'bar', height: '165', barWidth: '10', barSpacing: '3', barColor: '#71b6f9' }),
          $('#sparkline3').sparkline([20, 40, 30], { type: 'pie', width: '165', height: '165', sliceColors: ['#f5f5f5', '#188ae2', '#ff8acc'] }),
          $('#sparkline4').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], { type: 'line', width: '100%', height: '165', chartRangeMax: 50, lineColor: '#10c469', fillColor: 'transparent', highlightLineColor: 'rgba(0,0,0,.1)', highlightSpotColor: 'rgba(0,0,0,.2)' }),
          $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], { type: 'line', width: '100%', height: '165', chartRangeMax: 40, lineColor: '#188ae2', fillColor: 'transparent', composite: !0, highlightLineColor: 'rgba(0,0,0,1)', highlightSpotColor: 'rgba(0,0,0,1)' }),
          $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], { type: 'bar', height: '165', barWidth: '10', barSpacing: '3', barColor: '#10c469' }),
          $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], { type: 'line', width: '100%', height: '165', lineColor: '#435966', fillColor: 'transparent', composite: !0, highlightLineColor: 'rgba(0,0,0,.1)', highlightSpotColor: 'rgba(0,0,0,.2)' })
      }
      var l = function() { var r; var l = -1; var a = -1; var o = 0; var t = []; $('html').mousemove(function(i) { var e = i.pageX; var r = i.pageY; l > -1 && (o += Math.max(Math.abs(e - l), Math.abs(r - a))), l = e, a = r }); var h = function() { var i = (new Date()).getTime(); if (r && r != i) { var e = Math.round(o / (i - r) * 1e3); t.push(e), t.length > 30 && t.splice(0, 1), o = 0, $('#sparkline5').sparkline(t, { tooltipSuffix: ' pixels per second', type: 'line', width: '100%', height: '165', chartRangeMax: 50, lineColor: '#f9c851', fillColor: 'rgba(249, 200, 81, 0.3)', highlightLineColor: 'rgba(24,147,126,.1)', highlightSpotColor: 'rgba(24,147,126,.2)' }) }r = i, setTimeout(h, 500) }; setTimeout(h, 500) }; r(), l(), $(window).resize(function(i) { clearTimeout(e), e = setTimeout(function() { r(), l() }, 300) })
    })
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.b_legend_container
  position: relative
.b_legend_wrapper
  position: absolute
  width: calc(100% - 4px)
  height: calc(100% - 6px)
  top: 0
  bottom: 0
  right: 1px
  left: 1px
  margin: auto
  //box-shadow: 0 1px 0 rgba(#000, 0.1) inset, 0 -1px 0 rgba(#000, 0.1) inset
  /*outline: 1px solid rgba(#000, 0.1)*/
.linesX
  position: absolute
  bottom: -5px
  height: calc(100% + 10px)
  width: 1px
  background-color: rgba(#000, 0.1)
.linesY
  position: absolute
  left: -5px
  width: calc(100% + 10px)
  height: 1px
  background-color: rgba(#000, 0.1)
.sparkline_grid
  position: relative
  z-index: 2
.x_mark, .y_mark
  display: block
  position: absolute
  bottom: -20px
  left: -3px
.y_mark
  bottom: -10px
  left: -19px
</style>