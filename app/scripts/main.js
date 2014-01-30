$(function() {
  var search, params, query;
  var plugins_list_url = 'http://boiler-plugins-list.herokuapp.com';
  var pluginsTemplate = JST['plugins'];
  var searchTemplate = JST['search'];

  if (window.location.search) {
    search = window.location.search.replace('?', '');
    params = search.split('=');
    query  = params[1];
  }

  var populatePage = function(data) {
    _.each(data, function(plugin) {
      plugin.updated_ago = moment(plugin.updated).fromNow()
    });

    data = _.sortBy(data, 'updated').reverse();

    $('form').html(searchTemplate({ count: data.length, value: query }));
    $('#plugins').html(pluginsTemplate({ plugins: data }));

    var pluginList = new List('plugin-list', {
      valueNames: [ 'name', 'description', 'updated', 'stars' ]
    });

    if (query) {
      pluginList.search(query);
    }
  };

  $.support.cors = true;
  $.ajax({
    url: plugins_list_url,
    cache: false,
    dataType: "json",
    success: populatePage,
    error: function (request, status, error) {
      $('#plugins').html('There was an error loading the list :(');
      console.error(status + ", " + error);
      jslogger.log(error);
    }
  });

});

$(document).on('click', '#install-boiler-btn', function(e) {
  e.preventDefault();
  $(this.hash).toggleClass('hidden');
});
