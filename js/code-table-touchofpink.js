var SPREADSHEET_ID_AND_TAB =
	'1qg2NQO9Qh_zjApjyMTMLcUorq8Ox2Al8x6_a1q42gSg/touchofpink';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let ul = $(`<p>` + entry.Tags + `</p>`).appendTo('#tags');

				if (entry.Ready == 'show') {
					let section = $(
						`<span><h5>` +
							entry.Title +
							`</h5><h5>` +
							entry.Director +
							`</h5><h5>` +
							entry.Year +
							`</h5></span`
					).appendTo('#banner-title');

					let div = $(
						`<p>` +
							entry.EventDate +
							`</p><p>` +
							entry.EventLocation +
							`</p><a data-confirm="` +
							entry.TicketLink +
							`" src="` +
							entry.TicketLink +
							`">` +
							entry.TicketPrice +
							`</a><a src="` +
							entry.CopresenterLink +
							`">` +
							entry.Copresenter +
							`</a><p>` +
							entry.Collaborators +
							`</p>`
					).appendTo('#banner-details');

					let img = $(
						`<img class="b__img" src="../film-stills/` +
							entry.FilmStills +
							`1.jpg" title="Film still: ` +
							entry.Title +
							`, ` +
							entry.Year +
							`" />`
					).appendTo('#banner-img');
				}
				let div = $(
					`<p data-confirm="` +
						entry.Duration +
						`">` +
						entry.Duration +
						`</p><p data-confirm="` +
						entry.Country +
						`">` +
						entry.Country +
						`</p><p data-confirm="` +
						entry.Language +
						`">` +
						entry.Language +
						`</p><a href="` +
						entry.TrailerLink +
						`" data-confirm="` +
						entry.TrailerLink +
						`" target="_blank">Trailer</a>`
				).appendTo('#film-meta');

				let p = $(
					`<p data-confirm="` +
						entry.EventDescription +
						`">` +
						entry.EventDescription +
						`</p>`
				).appendTo('#film-description');

				let span = $(
					`<p data-confirm="` +
						entry.DirectorBio +
						`">` +
						entry.DirectorBio +
						`</p>`
				).appendTo('#dir-bio');

				let article = $(
					`<img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`2.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" /><img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`3.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" /><img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`4.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" />`
				).appendTo('#film-stills');

				let footer = $(
					`<div  data-confirm="` +
						entry.SeriesTitle +
						`"><p data-confirm="` +
						entry.SeriesDescription +
						`">` +
						entry.SeriesDescription +
						`</p><p data-confirm="` +
						entry.SeriesProgram +
						`">` +
						entry.SeriesProgram +
						`</p></div>`
				).appendTo('#series');
			});
		}
	);
});
