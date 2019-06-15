import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import appData from './dataProducts';
window.vueInstance = new Vue({
	el: '#rootContainer',
	data: {
		local: {
			pageDisplay: 'Products'
		},
		appData: appData
	},
	computed: {
		products() {
			return this.appData.products;
		},
		params() {
			if (this.local.pageDisplay == 'Products') {
				return {
					products: this.products
				}
			} else {
				return {
					cartInfo: {}
				}
			}
		}
	},
	components: {
		Header,
		Products,
		Cart
	}
});