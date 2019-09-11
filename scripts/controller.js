$(document).ready(function () {
	var rownum = 0;
	$("#cnt").click(function () {
		let address = $("#brokerAddress").val()
		client = mqtt.connect(address)

		$("#status").text("Connecting.....")
		$("#status").css("color", "green")

		client.on("connect", function () {
			$("#status").css("color", "green")
			$("#status").text("Successfully connected!");

		});

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


	});

	$("#dcnt").click(function () {
		$("#status").css("color", "red")
		$("#status").text("Disconnected!")
		client.end();
	});

	$("#btnSubscribe").click(function () {
		let topicSubs = "mqtt/" + $("#topicToSubscribe").val();
		client.subscribe(topicSubs);
	});

	$("#btnPublish").click(function () {
		let top = "mqtt/" + $("#topicToPublish").val();
		let payld = $("#payloadToPublish").val();
		client.publish(top, payld);
	});

	$("#btnUnsubscribe").click(function () {
		let topicSubs = "mqtt/" + $("#topicToSubscribe").val();
		client.unsubscribe(topicSubs);
	});
});



