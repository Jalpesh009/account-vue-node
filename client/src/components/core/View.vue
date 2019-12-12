<template>
    <div id="core-view">
        <router-view />
    </div>
</template>

<script>
	export default {
		metaInfo () {
			return {
				title: 'CallAnswering'
			}
		}
	}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
