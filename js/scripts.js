$(document).ready(function () {
	var times = 0;
	$("#complete").hide();
	$(".txtb").keyup(function (e) {
		if (e.keyCode == 13 && $(".txtb").val() != "") {
			var task = $("<div class='task'></div>").text($(".txtb").val());
			$("#notcompbar").append(task, del, check);
			$("#complete").show();

			var del = $("<i class='fa fa-trash'></i>").click(function () {
				var dell = $(this).parent();
				dell.slideUp(function () {
					if (times > 0) {
						times = times - 1;
						$(".unn").html(times);
					} else if (times <= 0) {
						times = times;
						$(".unn").html(times);
					}
					dell.remove();
				});
			});
			var check = $("<i class='fa fa-check'></i>").click(function () {
				var checkk = $(this).parent();
				checkk.slideUp(function () {
					$("#compbar").append(checkk);
					checkk.slideDown(500);
				});
				$(this).fadeOut(2000);
				times = times - 1;
				$(".unn").html(times);
			});
			task.append(del, check);
			times = times + 1;
			$(".unn").html(times);
		}
	});
});
