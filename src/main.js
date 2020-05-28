import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$countDown=60;
Vue.prototype.$kaishi= function(){
  var docElm = document.documentElement;  
    //W3C   
    if (docElm.requestFullscreen) {  
        docElm.requestFullscreen();  
    }  
        //FireFox   
    else if (docElm.mozRequestFullScreen) {  
        docElm.mozRequestFullScreen();  
    }  
        //Chrome等   
    else if (docElm.webkitRequestFullScreen) {  
        docElm.webkitRequestFullScreen();  
    }  
        //IE11   
    else if (elem.msRequestFullscreen) {  
        elem.msRequestFullscreen();  
    }
}

Vue.prototype.$guanbi=function(){
    if (document.exitFullscreen) {  
        document.exitFullscreen();  
    }  
    else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
    }  
    else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
    }  
    else if (document.msExitFullscreen) {  
        document.msExitFullscreen();  
    }  
}

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
