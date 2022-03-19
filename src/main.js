import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const storageOptions = {
	namespace: "vuejs__",
	name: "ls",
	storage: "local",
};

createApp(App).use(store).use(router).mount('#app');

// save every change in the Vue X store to local storage
store.subscribe((mutation, state) => {
	if (state) {
		localStorage.setItem("state", JSON.stringify(state));
	}
});

