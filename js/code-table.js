var SPREADSHEET_ID_AND_TAB =
	'1qg2NQO9Qh_zjApjyMTMLcUorq8Ox2Al8x6_a1q42gSg/current';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let section = $(
					`<a href="` +
						entry.Ready +
						`" class="program--item" data-confirm="` +
						entry.Ready +
						`" data-upcoming="` +
						entry.TagUpcoming +
						`" data-category="all ` +
						entry.EventType +
						`"><ul>
					<li data-filter-type="` +
						entry.TagSeries +
						`" class="filter--series">` +
						entry.SeriesTitle +
						`</li>
				</ul><img src="film-posters/` +
						entry.ImgFileName +
						`.jpg" /><div class="program--details"><h4>` +
						entry.Title +
						`</h4><span><h5>` +
						entry.Director +
						`</h5><p data-year="` +
						entry.Year +
						`">` +
						entry.Year +
						`</p></span></div><span data-filter-type="` +
						entry.TagUpcoming +
						`" class="filter--upcoming"><p>` +
						entry.EventDate +
						`</p><p>` +
						entry.EventLocation +
						`</p></span><p data-online="` +
						entry.OnlineIrl +
						`" class="filter--online">` +
						entry.OnlineIrl +
						`</p></a>`
				).appendTo('#listings');
			});
		}
	);

	var $filterRadio = $('input[type="radio"]');
	var filterFunc = function () {
		var selectedFilters = {};

		$filterRadio.filter(':checked').each(function () {
			if (!selectedFilters.hasOwnProperty(this.name)) {
				selectedFilters[this.name] = [];
			}

			selectedFilters[this.name].push(this.value);
		});

		// create a collection containing all of the filterable elements
		var $filteredResults = $('.program--item');

		// loop over the selected filter name -> (array) values pairs
		$.each(selectedFilters, function (name, filterValues) {
			// filter each .program--item element
			$filteredResults = $filteredResults.filter(function () {
				var matched = false,
					currentFilterValues = $(this).data('category').split(' ');

				// loop over each category value in the current .program--item's data-category
				$.each(currentFilterValues, function (_, currentFilterValue) {
					// if the current category exists in the selected filters array
					// set matched to true, and stop looping. as we're ORing in each
					// set of filters, we only need to match once

					if ($.inArray(currentFilterValue, filterValues) != -1) {
						matched = true;
						return false;
					}
				});

				// if matched is true the current .program--item element is returned
				return matched;
			});
		});

		$('.program--item').hide().filter($filteredResults).show();
	};

	$filterRadio.on('change', filterFunc);
});
