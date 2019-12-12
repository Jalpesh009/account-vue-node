<template>
  <div>
    <h4 class="header-title mb-2">Choose your plan</h4>
    <div class="table-responsive">
        <table class="table table-striped mb-0 plans">
            <thead>
            <tr class="tbl-b no-border">
                <th/>
                <th>OE-20</th>
                <th>OE-50</th>
                <th>OE-100</th>
                <th>OE-300</th>
                <th>OE-650</th>
                <th>OE-1000</th>
                <th>OE-1500</th>
                <th>OE-2500</th>
                <th>OE-5000</th>
            </tr>
            </thead>
            <tbody>
            <tr class="tbl-b">
              <th scope="row" class="tbl-0">Package cost<br>per month</th>
              <td>$59</td>
              <td>$95</td>
              <td>$149</td>
              <td>$285</td>
              <td>$599</td>
              <td>$899</td>
              <td>$1299</td>
              <td>$2175</td>
              <td>$4299</td>
            </tr>
            <tr>
              <th scope="row" class="tbl-0">Cost per minute</th>
              <td>$2.90</td>
              <td>$1.90</td>
              <td>$1.50</td>
              <td>$0.95</td>
              <td>$0.92</td>
              <td>$0.90</td>
              <td>$0.88</td>
              <td>$0.87</td>
              <td>$0.86</td>
            </tr>
            <tr>
              <th scope="row" class="tbl-0">SMS cost</th>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
              <td>$0.11</td>
            </tr>
            <tr>
              <th scope="row" class="tbl-0">Transfer cost<br>(untimed)</th>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
              <td>$0.90</td>
            </tr>
            <tr>
              <th scope="row" class="tbl-0">Users included</th>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr class="success">
              <th scope="row" rowspan="2" class="tbl-0">Package fee*<br><span class="text-xs">(Package cost minus credit for previous package)</span></th>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
              <td><i class="fas fa-check"/></td>
            </tr>
            <tr>
              <td><button id="plan1" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(0)">Select</button></td>
              <td><button id="plan2" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(1)">Select</button></td>
              <td><button id="plan3" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(2)">Select</button></td>
              <td><button id="plan4" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(3)">Select</button></td>
              <td><button id="plan5" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(4)">Select</button></td>
              <td><button id="plan6" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(5)">Select</button></td>
              <td><button id="plan7" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(6)">Select</button></td>
              <td><button id="plan8" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(7)">Select</button></td>
              <td><button id="plan9" type="button" class="btn btn-success waves-effect width-sm waves-light" @click="() => selectPlan(8)">Select</button></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoosePlan',
  props: {
  },
  methods: {
    selectPlan (planId) {
      const data = [111.83, 147.83, 201.83, 337.83, 651.83, 951.83, 1351.83, 2227.83, 4351.83]
      this.$emit('change', data[planId])
    }
  }
}
</script>
