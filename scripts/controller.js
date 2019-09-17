// basic functionalities
function connectFunc(){
  console.log("Connecting..");
  var para = document.createElement("p");
  var node = document.createTextNode("connecting...");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);

	// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
	client = mqtt.connect(document.getElementById('broker').value)
  console.log(document.getElementById('broker').value);
  
	client.on("connect", function(){
    console.log("Successfully connected");
    
  var para = document.createElement("p");
  var node = document.createTextNode("Successfully connected");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
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
	// console.log(document.getElementById('pub-topic').value);
	// console.log(document.getElementById('pub-payload').value);
  }
  
  function subscribeFunc(){
	// console.log("subscribe");
	// client.subscribe("mqtt/demo");
	client.subscribe(document.getElementById('sub-topic').value);
	console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
  }

  function disconnect(){
  client.end();
  var para = document.createElement("p");
  var node = document.createTextNode("");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
  }

  client.on("message", function (topic, payload) {
    let getTopic = topic.toString().slice(5);
    var stamp = new Date($.now());
    let parent = $("#tbodyContainer");
    let row = $("<tr></tr>");
    let top = $("<th></th>").text(getTopic);
    let payld = $("<td></td>").text(payload);
    let time = $("<td></td>").text(stamp.toString().slice(0, 24));

    top.attr("scope", "row");
    row.attr("id", rownum);

    parent.append(row);
    $("#" + rownum).append(top, payld, time);
    rownum += 1;
  });



  
 
