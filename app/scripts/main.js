$(function() {
  $.getJSON('http://boiler-plugins-list.herokuapp.com', function(data) {
    var plugins   = $('#tmpl-plugins').html();
    var pluginsTemplate = Handlebars.compile(plugins);

    var search = $('#tmpl-search').html();
    var searchTemplate = Handlebars.compile(search);

    _.each(data, function(i) {
      i.updated_ago = moment(i.updated).fromNow()
    });

    data = _.sortBy(data, 'updated').reverse();

    $('form').html(searchTemplate({ count: data.length }));
    $('#plugins').html(pluginsTemplate({ plugins: data }));

    var pluginList = new List('plugin-list', {
      valueNames: [ 'name', 'description' ]
    });
  });

});

$(document).on('click', '#install-boiler-btn', function(e) {
  e.preventDefault();
  $(this.hash).toggleClass('hidden');
});
