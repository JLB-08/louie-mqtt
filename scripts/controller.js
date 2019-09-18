var topic = document.getElementById('pub');
var publish = document.getElementById('pubP');
var d = new Date();


function connectFunc(){
  console.log("Connecting..");
	// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
	client = mqtt.connect(document.getElementById('broker').value)
  console.log(document.getElementById('broker').value);
  
	client.on("connect", function(){
    console.log("Successfully connected");
    document.getElementById("p").innerHTML = "Connected";
	})
  
	client.on("message", function (topic, payload) {
	  // console.log([topic, payload].join(": "));
	  console.log("Received { topic: " + topic + "; payload: " + payload + " }");
    // client.end();
  })

  }
  function publishFunc(){
	// console.log("publish");
	// client.publish("mqtt/demo", "hello world!");
	client.publish(document.getElementById('pub').value, document.getElementById('pubP').value)
	console.log("Published { topic: " + document.getElementById('pub').value
	+ "; payload: " + document.getElementById('pubP').value + " }");

   var table = document.getElementById("table");
   var row = table.insertRow(-1);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   cell1.innerHTML = topic.value;
   cell2.innerHTML = publish.value;
   cell3.innerHTML = d;

  }
  
  function subscribeFunc(){
	// console.log("subscribe");
	// client.subscribe("mqtt/demo");
	client.subscribe(document.getElementById('sub-topic').value);
	console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
  }

  function disconnect(){
  client.end();
  console.log("Disconnected");
  document.getElementById("p").innerHTML = "Status";
  }







 


  
 
