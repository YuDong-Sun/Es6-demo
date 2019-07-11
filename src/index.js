import login from './login/init'
import './common/babel'
import './api/FetchMock'
login({
	container:document.getElementById("container")
})