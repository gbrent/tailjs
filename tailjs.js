$(document).ready(function(){
	let refreshTime = 1000;
	let logUpdaterHandle;

	/* Extend jQuery to have toggleText which will check for one passed variable and return the other passed */
	$.fn.extend({
		toggleText: function(a, b){
			return this.val(this.val() == b ? a : b);
		}
	});

	function updateFeed(){
		$.get("tailjsLog.php").done(function(data){
			$('#feed').html(data);
		});
		logUpdaterHandle = setTimeout(updateFeed, refreshTime);
	}

	$('#logControl').on('click', function(){
		$("#logControl").toggleText('Pause', 'Start');
		if($("#logControl").val() == 'Start'){
			clearTimeout(logUpdaterHandle);
		}else{
			updateFeed();		}
	});

	$('.colorBox').on('click',function() {
		let classList = this.className.split(/\s+/);
		if(classList[1]){
			$('#feed').removeClass("feedDefaultColor whiteBox blueBox greenBox purpleBox yellowBox redBox orangeBox");
			$('#feed').addClass(classList[1]);
			$('#feed').css("background-color", "#333");
		}
	});
	updateFeed()
});
