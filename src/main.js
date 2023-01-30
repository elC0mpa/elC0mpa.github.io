import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "highlight.js/styles/agate.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);

import "@/assets/scss/main.scss";

createApp(App).use(store).use(hljsVuePlugin).use(router).mount("#app");
