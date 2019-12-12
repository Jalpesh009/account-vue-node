<template>
  <!-- Start Content-->
  <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="card-box">
            <div class="dropdown float-right">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                    <i class="mdi mdi-dots-vertical"/>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                </div>
            </div>
            <h4 class="header-title mt-0 mb-3">Calls in the last 7 days</h4>
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
              <div id="sparkline1">
                <canvas width="605" height="224" style="display: inline-block; width: 605.328px; height: 224px; vertical-align: top;"/>
              </div>

          </div>
        </div> <!-- Col-lg-8 -->
        <div class="col-lg-4">
          <div class="card-box">
            <h4 class="header-title mb-2">Billing</h4>
            <div class="table-responsive">
                <table class="table table-striped table-sp color-dark mb-0">
                    <tbody>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Recharged this month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Spent this month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Package cost per month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Average call cost</td>
                    </tr>
                    </tbody>
                </table>
              </div>
          </div>
        </div> <!-- Col-lg-4 -->
        </div> <!-- end row -->

          <div class="row">
            <div class="col-lg-8">
              <div class="card-box">
                <h4 class="header-title mt-0 mb-3">Statistics</h4>
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-operator" class="circle mb-2 d-flex justify-content-center align-items-center">9.68s</div>
                    <p>Average answer time</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-user" class="circle mb-2 d-flex justify-content-center align-items-center">11.12s</div>
                    <p>Average answer time</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-missed" class="circle mb-2 d-flex justify-content-center align-items-center">3</div>
                    <p>Missed calls</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-today" class="circle mb-2 d-flex justify-content-center align-items-center">18</div>
                    <p>Calls today</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-this-month" class="circle mb-2 d-flex justify-content-center align-items-center">24</div>
                    <p>Calls this month</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-last-month" class="circle mb-2 d-flex justify-content-center align-items-center">67</div>
                    <p>Calls last month</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-costs-this-month" class="circle mb-2 d-flex justify-content-center align-items-center">655.00</div>
                    <p>Costs this month ($)</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div id="statistics-costs-last-month" class="circle mb-2 d-flex justify-content-center align-items-center">3456.00</div>
                    <p>Costs last month ($)</p>
                  </div>
                </div>
              </div>
            </div> <!-- Col-lg-8 -->
              </div> <!-- end row -->

  </div> <!-- container-fluid -->
</template>

<script>
  import $ from 'jquery'
  import 'jquery-sparkline'
export default {
    data: () => ({

    }),
  mounted() {
    $(document).ready(function() {
      var e; var r = function() {
 $('#sparkline1').sparkline([5, 7, 12, 10, 16, 12, 8],
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
            highlightSpotColor: 'rgba(0,0,0,.2)' }),
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
