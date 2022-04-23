
class ApiClient
{
	/*
    Class wide variables(properties).
	*/
	static SERVER_URL = 'http://localhost:8000';
	static GET_CHALLENGE = '/challenges/random';
	static POST_ATTEMPT = '/attempts';
	static VALIDATE_USER = '/auth/authenticate';
	static GET_LEADERS = '/attempt/leaders';
	static REGISTER_USER = '/auth/register';
	static GET_TODO_BY_EMAIL = '/api/getbyemail/mark@gmail.com';
	static GET_ATTEMPTS_BY_ALIAS = '?alias=';

	static challenge(token:string): Promise<Response>
	{
		console.log(token);

		return fetch(ApiClient.SERVER_URL+ ApiClient.GET_CHALLENGE,

		  {
		  
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
         }
      });
	}

	static sendGuess(user: string, a: number, b:number, guess:number, token:string): Promise<Response>{
		return fetch(ApiClient.SERVER_URL + ApiClient.POST_ATTEMPT,
		{
			method: 'POST',
			headers:{
				'Content-Type':'application/json',
				"Authorization": "Bearer " + token
			},
			body:JSON.stringify(
			{
				userId:user,
				factorA: a,
				factorB: b,
				guess:guess
			})
		});
	}

	static registerUser(username: string, password: string ): Promise<Response>{
		return fetch(ApiClient.SERVER_URL+ ApiClient.REGISTER_USER,
		{
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(
			{
				alias:username,
				password: password
				
			})
		});
	}

	static sendUserDetails(username: string, password: string ): Promise<Response>{
		return fetch(ApiClient.SERVER_URL+ ApiClient.VALIDATE_USER,
		{
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(
			{
				alias:username,
				password: password
				
			})
		});
	}

	static getTodoByEmail(token: string): Promise<Response>
	{
		return fetch(ApiClient.SERVER_URL+ ApiClient.GET_TODO_BY_EMAIL,
		{
		  
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
			
		});
	}

	static getAttempts(userAlias: string, token: string): Promise<Response> 
	  { 
	  	 return fetch(ApiClient.SERVER_URL + ApiClient.POST_ATTEMPT+ ApiClient.GET_ATTEMPTS_BY_ALIAS + userAlias,
				{
				  
		          method: "GET",
		          headers: {
		            "Content-Type": "application/json",
		            "Authorization": "Bearer " + token
		        }
		     });
    }

    static getLeaders(token: string): Promise<Response> 
	  { 
	  	 return fetch(ApiClient.SERVER_URL + ApiClient.GET_LEADERS,
				{
				  
		          method: "GET",
		          headers: {
		            "Content-Type": "application/json",
		            "Authorization": "Bearer " + token
		        }
		     });
    }

 }

export default ApiClient;
