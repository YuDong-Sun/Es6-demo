import render from './render'
import event from './event'
const login = (opts={})=>{
	let pageController = {
		loginBtnText:"登录",
		loginUser:"请输入用户名",
		loginPwd:"请输入密码"
	}
	let loginObj = Object.assign(pageController,opts)
	render(loginObj)
	event()
}
export default login;