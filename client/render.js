function calenderEvents(data) {
	if (!data) {
		var noEvents = document.createElement("div");
		noEvents.className = "noEvents";
		noEvents.innerHTML = 'NO UPCOMING EVENTS FOUND';
		document.body.appendChild(noEvents);
	} else {
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var eventDate = document.createElement("div");
				eventDate.className = "eventDate";
				eventDate.innerHTML = key;
				document.body.appendChild(eventDate);
	
				data[key].forEach(function (events) {
					var appendEvents = document.createElement("div");
					appendEvents.className = "appendEvents";
					if (events.dayTime)
						appendEvents.innerHTML = `${events.dayTime}<a class="summary">&#9${events.summary}</a>${events.location}`;
					else
						appendEvents.innerHTML = `${events.startTime}-${events.endTime}<a class="summary">&#9${events.summary}</a>${events.location}`;
					document.body.appendChild(appendEvents);
				});
			}
		}
	}
}

window.onload = function () {
	axios.get('http://localhost:3001/events')
		.then((res) => {
			calenderEvents(res.data);
		});
}