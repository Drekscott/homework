import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...
function retrieve(){
	console.log(window.path);
        fetch(window.path).then(function(response){
        return response.json();
})
.then(function(myJson) {
        console.log(myJson);
})
.catch(function(error){
	console.log(error);
});
}
export default retrieve;


