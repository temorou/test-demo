const {run} = require('nine-nine-six');

before(function() {
	return new Promise(function (resolve, reject) {
		if(global.window){
			resolve()
			return
		}
		run({
			url:'http://localhost:8080',
			chromeUrl:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
		},function (res) {
			//window,page,route,router,store
			let {window,page,route,router,store} = res
			let login = page.findVueNode({
				tag:'Login'
			})
			//vue router前置钩子
			router.beforeEach((to, from, next)=>{
				global.route = to
				next()
			})
			let form =  login.form
			form.userName = 'xx'
			form.password = 'xx'
			form.vcode = 'xx'
			//登录
			login.handleSubmit()
			//全局设置window,page,route,router,store
			Object.keys(res).forEach(key=>{
				global[key] = res[key]
			})
			resolve()
		})
	})
})
