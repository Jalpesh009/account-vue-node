<template>
<div>
  <a href="#" @click.prevent="handleRoute('/calls')" v-for="item in callsData" :key="item.id" class="call-item clearfix">
    <ul class="list-unstyled list-inline mb-0 float-md-left">
      <li class="list-inline-item pt-2"><img :src="item.image" class="rounded-circle avatar-sm" alt="profile-image"></li>
      <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">{{ item.name }}</span> - <span class="color-light-blue">{{ item.intent }}</span><br><span class="color-grey">{{ item.number }}</span></li>
    </ul>
    <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
      <li class="list-inline-item caller-timestamp pb-2">{{ item.time }}</li>
      <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator"/></li>
      <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator"/></li>
      <li @click="$router.push({ path: 'calls', query: { call: item.id } })" class="list-inline-item action-icon color-green m_cursore"><i class="fas fas fa-phone"/><div class="indicator"/></li>
    </ul>
  </a>
</div>
</template>

<script>
  export default {
    name: 'LatestCallsItems',
    props: {
      callsData: {
        type: Array
      }
    },
    methods: {
      handleRoute(path) {
        this.$router.push(path);
      },
    }
  }
</script>

<style scoped>
.m_cursore {
  cursor: pointer;
}
</style>
