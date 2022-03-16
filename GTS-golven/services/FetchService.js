import AuthService from "./AuthService";

const FetchService = {     
    Get: async function(url){
        const response = await fetch('http://localhost:1290/api/' + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AuthService.GetToken()}`
            }
        })

        return response.json();
    },

    Post: async function(url, data){
        const response = await fetch('http://localhost:1290/api/' + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        return response.json();
    },

    Put: async function(url, data){

    },

    Delete: async function(url, data){

    }
}

export default FetchService;