import './css/common.css'; //加载公共样式

import Vue from "vue";
//import $ from 'zepto.js';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import app from './components/app.vue';
import hellow from './components/hellow.vue';
import bye from './components/bye.vue';


Vue.config.debug = true;

var App = Vue.extend(app);

var router = new VueRouter();
//alert($("name"))
router.map({
    '/bye':{
        name:'bye',
        component:bye,
        //component:require("components/bye.vue")
    },
    '/hellow': {
        name:'hellow',
        component: hellow
    }
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');