const axios = require('axios');
var headers= {
    "headers":{
        "app-id":"6213bb9cb624e19c989e0c45"}
}
axios.get('https://dummyapi.io/data/v1/user',headers)
.then(function (response){
    console.log(response);
})
.catch(function (error){
    console.log(error);
})
.then(function (){

})