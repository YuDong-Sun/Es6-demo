const render = (opts={})=>{

	let tpl = `
	<form action="" onsubmit='return false'>
			
		<div style='opacity:0'>
			<label for="">
				<input type="text" placeholder='请输入用户名'>
			</label>	

			<label for="">
				<input type="password" placeholder='请输入密码'>
			</label>
		</div>	

		<label for="">
			<input type="text" placeholder='${opts.loginUser}' id='user'>
		</label>	

		<label for="">
			<input type="password" placeholder='${opts.loginPwd}' id='pwd'>
		</label>


		<label for="">
			<input type="submit" value='${opts.loginBtnText}' id='btn'>
		</label>

	</form> 
	`
	opts.container.innerHTML = tpl;

}
export default render;