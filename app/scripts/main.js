$(function() {
  $.getJSON('http://boiler-plugins-list.herokuapp.com', function(data) {
    var plugins   = $("#tmpl-plugins").html();
    var pluginsTemplate = Handlebars.compile(plugins);

    var search = $('#tmpl-search').html();
    var searchTemplate = Handlebars.compile(search);

    $('form').html(searchTemplate({ count: data.length }));
    $('#plugins').html(pluginsTemplate({ plugins: data }));

    var hackerList = new List('plugin-list', {
      valueNames: [ 'name', 'description' ]
    });
  });

});
