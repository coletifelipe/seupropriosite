$(document).ready(function(){
	console.log('ready!')
	// Custom jQuery Functions Here
	stepForm();
})

function stepForm() {
	var groupWrap = $('.group-wrapper'),
			inpWrap = groupWrap.find('.group-wrap'),
			input = inpWrap.find('input'),
			nextQ = $('.next-arrow'),
			progress = $('.progress'),
			results = $('.results'),
			subBtn = $('.submit-btn'),
			thankYouMsg = $('.thankYouMsg');
	
	input.each(function(){
		input.on('keyup', function(e){
			if(input.val() == "") {
				$('.next-arrow').removeClass('active')
			} else {
				$('.next-arrow').addClass('active')
			}
		})
	})
	
	// watch for enter to trigger click for next question
	$(document).keypress(function(e){
		
		if(e.which == 13) {
			e.preventDefault();
      nextQ.trigger('click')
    }
	})
	
	nextQ.on('click', function() {
		var emptyNum = 0,
				activeInput = groupWrap.find('.active-inp'),
				position = groupWrap.children().index(activeInput),
				inputNum = inpWrap.length;
		
		input.each(function(){
			if($(this).val() != '') {
				emptyNum++;
			}
		})
		
		progress.css('width', emptyNum * (100 / input.length) + '%')
		
		if(emptyNum < 4) {
			if (activeInput.find('input').val() != "") {
				activeInput.removeClass('active-inp').next().addClass('active-inp').find('input').focus();
				
			} 

		} else {
			activeInput.removeClass('active-inp')
			groupWrap.addClass('results-shown');
			
			inpWrap.each(function(i){
				results.append('<div>' + inpWrap.eq(i).find('label').attr('name') 
											 + ': <span> '+ inpWrap.eq(i).find('input').val() +
											 ' </span></div>').addClass('active');
				
				input.eq(i).val("");
			})
			
			$(document).off('keypress');
			nextQ.removeClass('active');
			subBtn.addClass('active');
		}
	})	
}