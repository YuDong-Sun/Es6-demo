import $ from '../common/getId'
import formFetch from '../common/formFetch'
const event = ()=>{
	let btn = $("btn"),
		user = $("user"),
		pwd = $("pwd");
	btn.onclick = async ()=>{
		let data = await formFetch('/login',{
			user:user.value,
			pwd:pwd.value
		})
		console.log(data)
	}
}
export default event;