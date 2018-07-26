<template>
	<div>
		<vue-header v-show="false"></vue-header>
		<vue-body>
			<p v-if="show">
				<router-link to="/">Home</router-link>
				<router-link to="results">To Results</router-link>
			</p>
		</vue-body>
	</div>
</template>

<script>
	import Header from '../src/Header.vue'
	import Body from '../src/Body.vue'

	export default {
		components: {
			'vue-header': Header,
			'vue-body': Body
		},
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style scoped>
	a {
		text-align: center;
		opacity: 1;
		text-decoration: none;
		transition-duration: .5s;
	}

	a:hover {
		color: #ff5000;
		opacity: 1;
	}
	* {
		color: #ff7600;
		-webkit-font-smoothing: antialiased;
	}

</style>