$(document).ready(function(){
	$.ajax({
		type: "get",
		url: "data.json",
		crossDomain: true,
		dataType: "json",
		success: function(xml) {
			$("head title").html(xml.title);
			$(".header h1").html(xml.title);
			$(".footer #writer").html(xml.writer);
			$(".footer #date").html(xml.date);

			$.each(xml.pc, function(i) {
				var stepClass ="";
				if (xml.pc[i].step != undefined){
					stepClass = "class="+xml.pc[i].step;
				}

				$("#state_pc tbody").append(
					'<tr '+stepClass+'>'+
						'<td>'+xml.pc[i].depth1+'</td>'+
						'<td>'+xml.pc[i].depth2+'</td>'+
						'<td>'+xml.pc[i].depth3+'</td>'+
						'<td><a href="../'+xml.pc[i].html+'" target="_blank">'+xml.pc[i].html+'</a></td>'+
						'<td class="state">'+xml.pc[i].state+'</td>'+
						'<td class="date">'+xml.pc[i].date+'</td>'+
					'</tr>'
				)
			});
			$.each(xml.mobile, function(i) {
				var stepClass ="";
				if (xml.mobile[i].step != undefined){
					stepClass = "class="+xml.mobile[i].step;
				}

				$("#state_mobile tbody").append(
					'<tr '+stepClass+'>'+
						'<td>'+xml.mobile[i].depth1+'</td>'+
						'<td>'+xml.mobile[i].depth2+'</td>'+
						'<td>'+xml.mobile[i].depth3+'</td>'+
						'<td><a href="../mobile/'+xml.mobile[i].html+'" target="_blank">'+xml.mobile[i].html+'</a></td>'+
						'<td class="state">'+xml.mobile[i].state+'</td>'+
						'<td class="date">'+xml.mobile[i].date+'</td>'+
					'</tr>'
				);
			});
		},
		error: function() {
			alert("json 파일 오류 입니다. \n data.json 파일 확인 부탁 드립니다.");
		},
		complete:function(){
			//alert("complete");
		}
	});
})
