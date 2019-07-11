import FetchMock from 'fetch-mock';
console.log(FetchMock)
FetchMock.mock(
	'/login',
	(url,params)=>{
		console.log(url,params)
	}
)