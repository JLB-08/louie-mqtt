// basic functionalities
var btnSubscribe = document.getElementById('sub');
var btnPublish = document.getElementById('pub');
var btnTopic = document.getElementById('topic');
var connect = document.getElementById('cnt');
var pl = document.getElementById("pl");
var disConnect = document.getElementById("dcnt");


// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// // client.subscribe("mqtt/demo")

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!")
// function getPayload(){
// 	// Selecting the input element and get its value 
// 	var payload = document.getElementById("pl").value;
// 	// var topic = document.getElementById("topic").value;
// 	// console.log(payload);


// }

connect.addEventListener('click', function(e){
	e.preventDefault();
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
    client.on("connect", function(){
	let stat = document.getElementById("cnt").innerHTML = "Connected";
	let stat1 = document.getElementById("dcnt").innerHTML = "Disonnected";

	})
})

disConnect.addEventListener('click',function(e){
	e.preventDefault();
	client.end();
	let stat = document.getElementById("cnt").innerHTML = "Connect";
	let stat1 = document.getElementById("dcnt").innerHTML = "DisConnected";
})

btnSubscribe.addEventListener('click', function(e){
	e.preventDefault();
	client.subscribe(btnSubscribe.value)
})

btnPublish.addEventListener('click',function(e){
	e.preventDefault();
	client.publish(btnSubscribe.value, btnPublish.value)
	var d = new Date();
	var node = document.createElement("p");
	var textnode = document.createTextNode("message: {Topic: "+btnTopic.value+", payload: "+pl.value+", "+"Timestamp: "+d+"}");
	node.appendChild(textnode);
	document.getElementById("mess").appendChild(node);

})




// function myFunction() {
// 	var node = document.createElement("LI");
// 	var textnode = document.createTextNode("Water");
// 	node.appendChild(textnode);
// 	document.getElementById("myList").appendChild(node);
//   }
//   "messages: {"+btnTopic.value+", payload: "+pl.value+"}"



// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
