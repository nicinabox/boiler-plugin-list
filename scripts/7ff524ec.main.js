this.JST=this.JST||{},this.JST.plugins=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n  <div class="plugin">\n    <header class="row">\n      <div class="col-xs-9">\n        <strong class="h4"><a href="',(d=c.website)?d=d.call(a,{hash:{},data:b}):(d=a&&a.website,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'" class="name">',(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a&&a.name,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</a></strong>\n        <small class="text-muted" >by ',(d=c.owner)?d=d.call(a,{hash:{},data:b}):(d=a&&a.owner,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</small>\n      </div>\n      <div class="col-xs-3 text-right">\n        <span class="text-muted stars">',(d=c.stars)?d=d.call(a,{hash:{},data:b}):(d=a&&a.stars,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+' <span class="glyphicon glyphicon-star"></span></span>\n      </div>\n    </header>\n    <p class=" description">',(d=c.description)?d=d.call(a,{hash:{},data:b}):(d=a&&a.description,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+"</p>\n    <pre>boiler install ",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a&&a.name,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</pre>\n    <span class="updated hidden">',(d=c.updated)?d=d.call(a,{hash:{},data:b}):(d=a&&a.updated,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</span>\n    <small class="text-muted">\n      Updated ',(d=c.updated_ago)?d=d.call(a,{hash:{},data:b}):(d=a&&a.updated_ago,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+"\n    </small>\n  </div>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return g=c.each.call(b,b&&b.plugins,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n"}),this.JST.search=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<div class="form-group">\n  <input type="search" placeholder="Search ',(f=c.count)?f=f.call(b,{hash:{},data:e}):(f=b&&b.count,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+' plugins..." class="form-control search" value="',(f=c.value)?f=f.call(b,{hash:{},data:e}):(f=b&&b.value,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'" name="search" autofocus>\n</div>\n<p class="sort-options">\n  <span class="text-muted">Sort by: </span>\n\n  <a href="#" class="sort desc" data-sort="updated">\n    <span>\n      updated\n      <span>(newest)</span>\n      <span>(oldest)</span>\n    </span>\n  </a href="#">\n  <a href="#" class="sort" data-sort="name">\n    <span>\n      name\n      <span>(z-a)</span>\n      <span>(a-z)</span>\n    </span>\n  </a href="#">\n  <a href="#" class="sort" data-sort="stars">\n    <span>\n      stars\n      <span>(more)</span>\n      <span>(fewer)</span>\n    </span>\n  </a href="#">\n</p>\n'}),$(function(){var a,b,c,d="http://boiler-plugins-list.herokuapp.com";window.location.search&&(a=window.location.search.replace("?",""),b=a.split("="),c=b[1]),$.getJSON(d,function(a){var b=JST.plugins,d=JST.search;_.each(a,function(a){a.updated_ago=moment(a.updated).fromNow()}),a=_.sortBy(a,"updated").reverse(),$("form").html(d({count:a.length,value:c})),$("#plugins").html(b({plugins:a}));var e=new List("plugin-list",{valueNames:["name","description","updated","stars"]});c&&e.search(c)})}),$(document).on("click","#install-boiler-btn",function(a){a.preventDefault(),$(this.hash).toggleClass("hidden")});