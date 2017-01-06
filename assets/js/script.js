var app = app || {};
app.main = (function() {
	var projects = [],
		filters = {};
	var checkboxes = $('.checklist');

	function attachEvents() {
		$('.close').click(function (e) {
			e.preventDefault();
			window.location.hash = '#';
		});

		$('.checklist').on('click', function(){
	        var $$ = $(this)
	        cat = $$.attr('name');
	        if( !$$.is('.checked')){
	            $$.addClass('checked');
           		$(this).find(".dot img").attr('src',"assets/images/web_elements/circle_select.svg");
           		if(!(filters[cat] && filters[cat].length)){
					filters[cat] = [];
				}
				filters[cat].push($$.data("value"));           						
				createQueryHash(filters);
	        } else {
	            $$.removeClass('checked');

	            $(this).find(".dot img").attr('src',"assets/images/web_elements/circle_unselected.svg");

           		if(filters[cat] && filters[cat].length && (filters[cat].indexOf($$.data("value")) != -1)){
				var index = filters[cat].indexOf($$.data("value"));
				filters[cat].splice(index, 1);
					if(!filters[cat].length){
						delete filters[cat];
					}
				}				
				createQueryHash(filters);	            
	        }
	  	  });
	}

	/*------------------------------------------------*/
	//	Mapping nav url to render specific page
	/*------------------------------------------------*/
	function render(url) {
		// Get the keyword from the url.
		var temp = url.split('/')[0];
		$('.main-content .page').removeClass('visible');

		var	map = {
			// The "Homepage".
			'': function() {
				// Clear the filters object, uncheck all checkboxes, show all the students
				filters = {};
				checkboxes.prop('checked',false);

				renderProjectsPage(projects);
			},
			'#category': function() {
				// Get the index of which project we want to show and call the appropriate function.
				var index = url.split('#category/')[1].trim();
				console.log(index);
				renderSingleProjectPage(index, projects);
			},

			// Page with filtered students
			'#filter': function() {
				// Grab the string after the '#filter/' keyword. Call the filtering function.
				url = url.split('#filter/')[1];

				// Try and parse the filters object from the query string.
				try {
					// var t = '{"thesis-category":' + url + '}';
					filters = JSON.parse(url);
					
				}
				// If it isn't a valid json, go back to homepage ( the rest of the code won't be executed ).
				catch(err) {
					window.location.hash = '#';
					return;
				}
				renderFilterResults(filters, projects);
			}
		};
				// Execute the needed function depending on the url keyword (stored in temp).
		if(map[temp]){
			map[temp]();
		}

		// else {
		// 	renderErrorPage();
		// }
	}

	/*------------------------------------------------*/
	//	Load the JSON
	/*------------------------------------------------*/
	function loadData() {
		$.getJSON( "../projects.json", function( data ) {
			// Write the data into our global variable.
			projects = data;

			// Call a function to create HTML for all the students.
			generateAllProjectsHTML(projects);

			// Manually trigger a hashchange to start the app.
			$(window).trigger('hashchange');
		});
	}
	
	function createQueryHash(filters){
		// Here we check if filters isn't empty.
		if(!$.isEmptyObject(filters)){
			// Stringify the object via JSON.stringify and write it after the '#filter' keyword.

			// since filters is an object we need to stringify it
			var str = JSON.stringify(filters);

			window.location.hash = '#filter/' + str;
		}
		else{
			// If it's empty change the hash to '#' (the homepage).
			window.location.hash = '#';
		}
	}
		/*------------------------------------------------*/
	// This fills up the students list via a handlebars template.
	// It receives one parameter - the data we took from students.json.
	/*------------------------------------------------*/
	function generateAllProjectsHTML(data) {

		var list = $('.all-projects .projects-list');

		var source = $("#projects-template").html();
		//Compile the template​
		var template = Handlebars.compile(source);
		list.append (template(data));

		// Each students has a data-index attribute.
		// On click change the url hash to open up a preview for this project only.
		// Remember: every hashchange triggers the render function.
		list.find('li').on('click', function (e) {
			e.preventDefault();
			var studentIndex = $(this).data('index');
			window.location.hash = 'category/' + studentIndex;
		})
	}
	/*------------------------------------------------*/
	// Iterate through the students object & Make the students page visible
	/*------------------------------------------------*/
	function renderProjectsPage(data){

		var page = $('.all-projects'),
			allprojects = $('.all-projects .projects-list > li');

		// Hide all the students in the students list.
		allprojects.addClass('hidden');

		// Iterate over all of the students.
		// If their ID is somewhere in the data object remove the hidden class to reveal them.
		allprojects.each(function () {

			var that = $(this);

			data.forEach(function (item) {
				if(that.data('index') == item.id){
					that.removeClass('hidden');
				}
			});
		});

		// Show the page itself.
		// (the render function hides all pages so we need to show the one we want).
		page.addClass('visible');
	}
	/*------------------------------------------------*/
	// Pop-up the project detail
	/*------------------------------------------------*/
	// Its parameters are an index from the hash and the students object.
	function renderSingleProjectPage(index, data){
		var page = $('.single-project'),
			container = $('.popup-detail');

		// Find the wanted project by iterating the data object and searching for the chosen index.
		if(data.length){
			data.forEach(function (item) {
				if(item.id == index){
					// Populate '.popup-detail' with the chosen project's data.
					container.find('h3').text(item.project.title);
					container.find('h4').text(item.project.date);
					container.find('h5').text(item.project.tools);
					// container.find('img').attr('src', item.project.image);
					container.find('.img').css('background-image', 'url('+item.project.image+')');
					container.find('p').text(item.project.description);
				}
			});
		}

		// Show the page.
		page.addClass('visible');
	}

	/*------------------------------------------------*/
	// Find and render the filtered render results. Arguments are:
	// filters - our global variable - the object with arrays about what we are searching for.
	// students - an object with the full students list (from students.json).
	/*------------------------------------------------*/
	function renderFilterResults(filters, projects){

			// This array contains all the possible filter criteria.
		var criteria = ['category'],
			results = [],
			isFiltered = false;
			

		// Uncheck all the checkboxes.
		// We will be checking them again one by one.
		checkboxes.prop('checked', false);

		criteria.forEach(function (c) {
			// Check if each of the possible filter criteria is actually in the filters object.
			if(filters[c] && filters[c].length){
				

				// After we've filtered the students once, we want to keep filtering them.
				// That's why we make the object we search in (students) to equal the one with the results.
				// Then the results array is cleared, so it can be filled with the newly filtered data.
				if(isFiltered){
					projects = results;
					results = [];

				}


				// In these nested 'for loops' we will iterate over the filters and the students
				// and check if they contain the same values (the ones we are filtering by).

				// Iterate over the entries inside filters.criteria (remember each criteria contains an array).
				filters[c].forEach(function (filter) {
					
				
					// Iterate over the students.
					projects.forEach(function (item){

						// If the project has the same specification value as the one in the filter
						// push it inside the results array and mark the isFiltered flag true.
						
						console.log(filter);

						if(typeof item.project[c] == 'string'){
							console.log('1');
							if(item.project[c].toLowerCase().indexOf(filter) != -1){
								results.push(item);
								isFiltered = true;

							}
						}
					});

					// Here we can make the checkboxes representing the filters true,
					// keeping the app up to date.
					// if(c && filter){
					// 	$('.checklist[name='+c+'][value='+filter+']').prop('checked',true);
					// }
				});
			}

		});

		// Call the renderStudentsPage.
		// As it's argument give the object with filtered students.

		renderProjectsPage(results);
	}

	var init = function(){
		attachEvents();
		loadData();
		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		});
	};
		return {
		init: init
	};
})();

window.addEventListener('DOMContentLoaded', app.main.init);