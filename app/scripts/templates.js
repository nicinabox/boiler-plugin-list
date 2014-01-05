this["JST"] = this["JST"] || {};

this["JST"]["plugins"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"plugin\">\n    <header class=\"row\">\n      <div class=\"col-xs-9\">\n        <strong class=\"h4\"><a href=\"";
  if (stack1 = helpers.website) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.website); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></strong>\n        <small class=\"text-muted\" >by ";
  if (stack1 = helpers.owner) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.owner); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>\n      </div>\n      <div class=\"col-xs-3 text-right\">\n        <span class=\"text-muted stars\">";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.stars); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span class=\"glyphicon glyphicon-star\"></span></span>\n      </div>\n    </header>\n    <p class=\" description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <pre>boiler install ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</pre>\n    <span class=\"updated hidden\">";
  if (stack1 = helpers.updated) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.updated); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <small class=\"text-muted\">\n      Updated ";
  if (stack1 = helpers.updated_ago) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.updated_ago); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </small>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.plugins), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["search"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"form-group\">\n  <input type=\"search\" placeholder=\"Search ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " plugins...\" class=\"form-control search\" value=\"";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.value); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" name=\"search\" autofocus>\n</div>\n<p class=\"sort-options\">\n  <span class=\"text-muted\">Sort by: </span>\n\n  <a href=\"#\" class=\"sort desc\" data-sort=\"updated\">\n    <span>\n      updated\n      <span>(newest)</span>\n      <span>(oldest)</span>\n    </span>\n  </a href=\"#\">\n  <a href=\"#\" class=\"sort\" data-sort=\"name\">\n    <span>\n      name\n      <span>(z-a)</span>\n      <span>(a-z)</span>\n    </span>\n  </a href=\"#\">\n  <a href=\"#\" class=\"sort\" data-sort=\"stars\">\n    <span>\n      stars\n      <span>(more)</span>\n      <span>(fewer)</span>\n    </span>\n  </a href=\"#\">\n</p>\n";
  return buffer;
  });