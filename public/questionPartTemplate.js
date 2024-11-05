(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['questionPart'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class =\"custom-box quiz-box\" id =\"quiz-box\" index="
    + alias4(((helper = (helper = lookupProperty(helpers,"number") || (depth0 != null ? lookupProperty(depth0,"number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":65}}}) : helper)))
    + " answer="
    + alias4(((helper = (helper = lookupProperty(helpers,"answer") || (depth0 != null ? lookupProperty(depth0,"answer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data,"loc":{"start":{"line":1,"column":73},"end":{"line":1,"column":83}}}) : helper)))
    + ">\r\n    <div class =\"current-question-num\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"question") || (depth0 != null ? lookupProperty(depth0,"question") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":51}}}) : helper)))
    + "<br>Question "
    + alias4(((helper = (helper = lookupProperty(helpers,"number") || (depth0 != null ? lookupProperty(depth0,"number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data,"loc":{"start":{"line":2,"column":64},"end":{"line":2,"column":74}}}) : helper)))
    + " of 36 <br> Grade: "
    + alias4(((helper = (helper = lookupProperty(helpers,"grade") || (depth0 != null ? lookupProperty(depth0,"grade") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grade","hash":{},"data":data,"loc":{"start":{"line":2,"column":93},"end":{"line":2,"column":102}}}) : helper)))
    + " | Topic: "
    + alias4(((helper = (helper = lookupProperty(helpers,"topic") || (depth0 != null ? lookupProperty(depth0,"topic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topic","hash":{},"data":data,"loc":{"start":{"line":2,"column":112},"end":{"line":2,"column":121}}}) : helper)))
    + "</div>\r\n    <div class=\"question-content\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"questionName") || (depth0 != null ? lookupProperty(depth0,"questionName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questionName","hash":{},"data":data,"loc":{"start":{"line":3,"column":34},"end":{"line":3,"column":50}}}) : helper)))
    + "</div>\r\n\r\n    <div class=\"option-container\">\r\n        <div>\r\n            <button  class=\"answer-option\" id = \"option-"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"option") : depth0)) != null ? lookupProperty(stack1,"0") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"choices") : depth0)) != null ? lookupProperty(stack1,"0") : stack1), depth0))
    + "</button>\r\n        </div>\r\n        <div>\r\n            <button class=\"answer-option\" id = \"option-"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"option") : depth0)) != null ? lookupProperty(stack1,"1") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"choices") : depth0)) != null ? lookupProperty(stack1,"1") : stack1), depth0))
    + "</button>\r\n        </div>\r\n        <div>\r\n            <button class=\"answer-option\" id = \"option-"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"option") : depth0)) != null ? lookupProperty(stack1,"2") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"choices") : depth0)) != null ? lookupProperty(stack1,"2") : stack1), depth0))
    + "</button>\r\n        </div>\r\n        <div>\r\n            <button class=\"answer-option\" id = \"option-"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"option") : depth0)) != null ? lookupProperty(stack1,"3") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"choices") : depth0)) != null ? lookupProperty(stack1,"3") : stack1), depth0))
    + "</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"result-container\">\r\n        <div class=\"correct-answer\" name = \"correct\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"answer") || (depth0 != null ? lookupProperty(depth0,"answer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data,"loc":{"start":{"line":26,"column":53},"end":{"line":26,"column":63}}}) : helper)))
    + "</div>\r\n    </div>\r\n</div>\r\n<div class=\"answer-indicator\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n\r\n</div>";
},"useData":true});
})();