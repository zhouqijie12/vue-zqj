<template>
	 <div class="mainautow">
                <h1 id="name">姓名：{{name}}</h1>
                <h2>{{age}}</h2>
                    <header>
                        <a v-link="{ name: 'hellow' }">hellow</a>
                        <a v-link="{ name: 'bye' }">bye</a>
                    </header>
                <router-view></router-view>
	</div>

</template>
<script>
    //es6
    export default {
         data () {
            return {
                name:"guowenfh",
                age:"2q1"
            }
        }
    }
</script>

<style>
	body{
		background-color: #098;

	}


	h1{
		background-color: #eee;
		color: red;
		font-size:16px;

	}
	h1:hover{
		height:100px;
	}

	h2{
		background-color: #999;
		font-size:16px;
	}

</style>