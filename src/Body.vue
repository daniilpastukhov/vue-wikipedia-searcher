<template>
	<div>
		<div class="container-fluid">
			<div class="row align-items-center justify-content-center">
				<div class="col-6">
					<transition name="fade">
						<div v-if="search_inactive">
							<h3>
								<a href="#">Wikipedia Searcher</a>
							</h3>
							<a href="https://en.wikipedia.org/wiki/Special:Random" class="btn" target="_blank">
								Random article
							</a>
						</div>
					</transition>
					<div class="clearfix"></div>
					<form @submit.prevent="searchWiki()" :class="{ search_input_up: search_transform_up, search_input_down: search_transform_down }">
						<input type="text" placeholder="Search" id="search_input" v-model="search_text" />
						<input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
					</form>
					<button class="btn" id="btn-back" @click="search_inactive=true; search_active=false; search_transform_down=true; search_transform_up=false;"
					    :class="{ search_input_up: search_transform_up, search_input_down: search_transform_down }">Back</button>
					<button class="btn" @click="info=null" :class="{ search_input_up: search_transform_up, search_input_down: search_transform_down }">Clear</button>
					<div v-if="search_active">
						<div class="results-box">
							<ul>
								<li v-for="(item, index) in info[1]" :key="item.id">
									<h3>{{ item }}</h3>
									<p>{{ info[2][index] }}</p>
									<a :href="info[3][index]">Wikipedia</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				search_text: '',
				info: null,
				search_inactive: true,
				search_active: false,
				search_transform_up: false,
				search_transform_down: false
			};
		},
		methods: {
			searchWiki() {
				fetch('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + this.search_text)
					.then((response) => {
						if (response.ok) {
							return response.json()
						}
						throw new Error("Error")
					})
					.then((json) => {
						this.info = json
					})
				this.search_inactive = false;
				this.search_transform_up = true;
				this.search_active = true;
			}
		}
	}
</script>

<style scoped>
	* {
		color: #ff7600;
		-webkit-font-smoothing: antialiased;
		margin: 0;
		padding: 0;
	}

	ul {
		list-style-type: none;
	}

	p {
		padding: 10px;
	}

	form {
		text-align: center;
	}

	h3 {
		padding: 8px;
	}

	.row {
		min-height: 100vh;
		/*background: rgb(78, 0, 255);
		background: -webkit-linear-gradient(top, rgb(20, 0, 172), rgb(133, 0, 203));
		background: -o-linear-gradient(top, rgb(20, 0, 172), rgb(133, 0, 203));
		background: -moz-linear-gradient(top, rgb(20, 0, 172), rgb(133, 0, 203));
		background: linear-gradient(to bottom, rgb(20, 0, 172), rgb(133, 0, 203));*/
		background-color: #000;
		text-align: center;
	}

	body {
		text-align: center;
		font-size: 16px;
		font-size: 1.6rem;
		font-family: sans-serif;
	}

	h3,
	h3>a:hover {
		text-align: center;
		color: #ff7600;
	}

	a {
		text-align: center;
		opacity: 1;
		text-decoration: none;
	}

	a:hover {
		color: #ff5000;
		opacity: 1;
	}

	.btn {
		background-color: rgba(109, 0, 217, 0.1);
		border-radius: 25px;
		border: 1px solid rgb(255, 123, 0);
		padding: 0px 10px;
		transition-duration: .5s;
	}

	.btn:hover {
		background-color: rgb(255, 123, 0);
		transition-duration: .5s;
		border: 1px solid #ff7600;
		color: #000;
	}

	#search_input {
		margin-top: 1rem;
		border-radius: 15px;
		border: 0;
		text-align: center;
		background-color: rgba(255, 118, 0, 0.85);
		color: #000;
		height: 30px;
		transition-duration: .5s;
	}

	.search_input_up {
		transition-duration: .5s;
	}

	.search_input_down {
		transition-duration: .5s !important;
	}

	#search_input:hover {
		background-color: rgba(255, 118, 0, 0.9);
		transition-duration: .5s;
	}

	#search_input:focus {
		outline: none;
		background-color: rgba(255, 118, 0, 0.9);
		transition: transform .5s;
	}

	::-webkit-input-placeholder {
		color: #000;
	}

	:-ms-input-placeholder {
		color: #000;
	}

	::-moz-placeholder {
		color: #000;
		opacity: 1;
	}

	:-moz-placeholder {
		color: #000;
		opacity: 1;
	}

	.box {
		overflow-y: scroll;
		width: 400px;
		max-height: 200px;
	}

	#btn-back {
		margin: 10px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.results-box ul li {
		margin: 10px;
	}

	.results-box ul li h3 {
		padding-bottom: 0;
		color:rgb(255, 190, 39);
	}

	.results-box ul li p {
		padding-top: 0;
		padding-bottom: 0;
		color: rgb(255, 174, 0);
	}

	.results-box ul li a {
		color: #ff5e00;
		transition-duration: .5s;
	}

	.results-box ul li a:hover {
		transition-duration: .5s;
		color:#ff5000;
	}
</style>