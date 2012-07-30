(function(a){a.isScrollToFixed=function(b){return a(b).data("ScrollToFixed")!==undefined};a.ScrollToFixed=function(d,g){var j=this;j.$el=a(d);j.el=d;j.$el.data("ScrollToFixed",j);var c=false;var z=j.$el;var A;var x=0;var n=0;var h=-1;var e=-1;var p=null;var u;function q(){i();e=-1;x=z.offset().top;n=z.offset().left;if(j.options.offsets){n+=(z.offset().left-z.position().left)}if(h==-1){h=n}A=z.css("position");c=true;if(j.options.bottom!=-1){s()}}function k(){var B=j.options.limit;if(!B){return 0}if(typeof(B)==="function"){return B()}return B}function m(){return A==="fixed"}function t(){return A==="absolute"}function f(){return !(m()||t())}function s(){if(!m()){p.css({display:z.css("display"),width:z.outerWidth(true),height:z.outerHeight(true),"float":z.css("float")});z.css({width:z.width(),position:"fixed",top:j.options.bottom==-1?o():"",bottom:j.options.bottom==-1?"":j.options.bottom});A="fixed"}}function b(){z.css({width:z.width(),position:"absolute",top:k(),left:n});A="absolute"}function i(){if(!f()){e=-1;p.css("display","none");z.css({width:"",position:"",left:"",top:""});A=null}}function r(B){if(B!=e){z.css("left",n-B);e=B}}function o(){return j.options.marginTop}function v(){var D=c;if(!c){q()}var B=a(window).scrollLeft();var E=a(window).scrollTop();var C=k();if(j.options.minWidth&&a(window).width()<j.options.minWidth){if(!f()||!D){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}else{if(j.options.bottom==-1){if(C>0&&E>=C-o()){if(!t()||!D){l();z.trigger("preAbsolute");b();z.trigger("unfixed")}}else{if(E>=x-o()){if(!m()||!D){l();z.trigger("preFixed");s();e=-1;z.trigger("fixed")}r(B)}else{if(!f()||!D){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}}}else{if(C>0){if(E+a(window).height()-z.outerHeight(true)>=C-o()){if(m()){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}else{if(!m()){l();z.trigger("preFixed");s()}r(B);z.trigger("fixed")}}else{r(B)}}}}function l(){var B=z.css("position");if(B=="absolute"){z.trigger("postAbsolute")}else{if(B=="fixed"){z.trigger("postFixed")}else{z.trigger("postUnfixed")}}}var w=function(B){c=false;v()};var y=function(B){v()};j.init=function(){j.options=a.extend({},a.ScrollToFixed.defaultOptions,g);if(navigator.platform==="iPad"||navigator.platform==="iPhone"||navigator.platform==="iPod"){if(!navigator.userAgent.match(/OS 5_.*\ like Mac OS X/i)){return}}j.$el.css("z-index",j.options.zIndex);p=a("<div />");A=z.css("position");if(f()){j.$el.after(p)}a(window).bind("resize.ScrollToFixed",w);a(window).bind("scroll.ScrollToFixed",y);if(j.options.preFixed){z.bind("preFixed.ScrollToFixed",j.options.preFixed)}if(j.options.postFixed){z.bind("postFixed.ScrollToFixed",j.options.postFixed)}if(j.options.preUnfixed){z.bind("preUnfixed.ScrollToFixed",j.options.preUnfixed)}if(j.options.postUnfixed){z.bind("postUnfixed.ScrollToFixed",j.options.postUnfixed)}if(j.options.preAbsolute){z.bind("preAbsolute.ScrollToFixed",j.options.preAbsolute)}if(j.options.postAbsolute){z.bind("postAbsolute.ScrollToFixed",j.options.postAbsolute)}if(j.options.fixed){z.bind("fixed.ScrollToFixed",j.options.fixed)}if(j.options.unfixed){z.bind("unfixed.ScrollToFixed",j.options.unfixed)}if(j.options.spacerClass){p.addClass(j.options.spacerClass)}z.bind("resize",function(){p.height(z.height())});z.bind("scroll.ScrollToFixed",function(){i();v()});z.bind("remove.ScrollToFixed",function(){z.trigger("preUnfixed");i();z.trigger("unfixed");a(window).unbind("resize",w);a(window).unbind("scroll",y);z.unbind(".ScrollToFixed");j.$el.removeData("ScrollToFixed")});if(j.options.bottom!=-1){if(!m()){l();z.trigger("preFixed.ScrollToFixed");s()}}};j.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);