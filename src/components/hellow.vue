<template>
	 <div transition="bar" class="mainautow hellowVue">
        hellow!!!!!!!!!!!!!!!!!!!
        <router-view></router-view>
        <a v-link="{ name: 'heson' }">去看看儿子</a>
    </div>
</template>
<style>
	.hellowVue{padding-left:10px; padding-right:10px;}
</style>