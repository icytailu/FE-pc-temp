import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

import "./assets/stylus/index.styl";

// 引入全局组件注册
import componentRegister from "./utils/componentsImport";

// 引入第三方组件
import "./libs/eleComponentRegist";

// 引入全局方法
import "./utils/addPrototypeMethods";

// 全局Vue过滤器
import * as filterObj from "./utils/vueFilter";
Object.keys(filterObj).forEach(key => Vue.filter(key, filterObj[key]));

Vue.config.productionTip = false;

new Vue({
  componentRegister,
  router,
  render: h => h(App),
  created() {}
}).$mount("#app");
