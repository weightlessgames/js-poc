// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13888,args){var map__13890 = p__13888;var map__13890__$1 = ((cljs.core.seq_QMARK_.call(null,map__13890))?cljs.core.apply.call(null,cljs.core.hash_map,map__13890):map__13890);var debug = cljs.core.get.call(null,map__13890__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13888,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13888,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13891){
var p__13888 = cljs.core.first(arglist__13891);
var args = cljs.core.rest(arglist__13891);
return log__delegate(p__13888,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13892){var map__13894 = p__13892;var map__13894__$1 = ((cljs.core.seq_QMARK_.call(null,map__13894))?cljs.core.apply.call(null,cljs.core.hash_map,map__13894):map__13894);var websocket_url = cljs.core.get.call(null,map__13894__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13895,callback){var map__13897 = p__13895;var map__13897__$1 = ((cljs.core.seq_QMARK_.call(null,map__13897))?cljs.core.apply.call(null,cljs.core.hash_map,map__13897):map__13897);var msg = map__13897__$1;var dependency_file = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7869__auto__ = dependency_file;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13897,map__13897__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13897,map__13897__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13898,p__13899){var map__13902 = p__13898;var map__13902__$1 = ((cljs.core.seq_QMARK_.call(null,map__13902))?cljs.core.apply.call(null,cljs.core.hash_map,map__13902):map__13902);var opts = map__13902__$1;var url_rewriter = cljs.core.get.call(null,map__13902__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__13903 = p__13899;var map__13903__$1 = ((cljs.core.seq_QMARK_.call(null,map__13903))?cljs.core.apply.call(null,cljs.core.hash_map,map__13903):map__13903);var d = map__13903__$1;var file = cljs.core.get.call(null,map__13903__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13904,p__13905){var map__13946 = p__13904;var map__13946__$1 = ((cljs.core.seq_QMARK_.call(null,map__13946))?cljs.core.apply.call(null,cljs.core.hash_map,map__13946):map__13946);var opts = map__13946__$1;var on_jsload = cljs.core.get.call(null,map__13946__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__13946__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__13947 = p__13905;var map__13947__$1 = ((cljs.core.seq_QMARK_.call(null,map__13947))?cljs.core.apply.call(null,cljs.core.hash_map,map__13947):map__13947);var files = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files){
return (function (state_13969){var state_val_13970 = (state_13969[1]);if((state_val_13970 === 6))
{var inst_13952 = (state_13969[7]);var inst_13961 = (state_13969[2]);var inst_13962 = [inst_13952];var inst_13963 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13962,null));var inst_13964 = cljs.core.apply.call(null,on_jsload,inst_13963);var state_13969__$1 = (function (){var statearr_13971 = state_13969;(statearr_13971[8] = inst_13961);
return statearr_13971;
})();var statearr_13972_13986 = state_13969__$1;(statearr_13972_13986[2] = inst_13964);
(statearr_13972_13986[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 5))
{var inst_13967 = (state_13969[2]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13969__$1,inst_13967);
} else
{if((state_val_13970 === 4))
{var state_13969__$1 = state_13969;var statearr_13973_13987 = state_13969__$1;(statearr_13973_13987[2] = null);
(statearr_13973_13987[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 3))
{var inst_13952 = (state_13969[7]);var inst_13955 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_13956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_13952);var inst_13957 = cljs.core.prn_str.call(null,inst_13956);var inst_13958 = console.log(inst_13957);var inst_13959 = cljs.core.async.timeout.call(null,10);var state_13969__$1 = (function (){var statearr_13974 = state_13969;(statearr_13974[9] = inst_13955);
(statearr_13974[10] = inst_13958);
return statearr_13974;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,6,inst_13959);
} else
{if((state_val_13970 === 2))
{var inst_13952 = (state_13969[7]);var inst_13952__$1 = (state_13969[2]);var inst_13953 = cljs.core.not_empty.call(null,inst_13952__$1);var state_13969__$1 = (function (){var statearr_13975 = state_13969;(statearr_13975[7] = inst_13952__$1);
return statearr_13975;
})();if(cljs.core.truth_(inst_13953))
{var statearr_13976_13988 = state_13969__$1;(statearr_13976_13988[1] = 3);
} else
{var statearr_13977_13989 = state_13969__$1;(statearr_13977_13989[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 1))
{var inst_13948 = before_jsload.call(null,files);var inst_13949 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13950 = figwheel.client.load_all_js_files.call(null,inst_13949);var state_13969__$1 = (function (){var statearr_13978 = state_13969;(statearr_13978[11] = inst_13948);
return statearr_13978;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,2,inst_13950);
} else
{return null;
}
}
}
}
}
}
});})(c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files))
;return ((function (switch__10155__auto__,c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_13982 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13982[0] = state_machine__10156__auto__);
(statearr_13982[1] = 1);
return statearr_13982;
});
var state_machine__10156__auto____1 = (function (state_13969){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_13969);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e13983){if((e13983 instanceof Object))
{var ex__10159__auto__ = e13983;var statearr_13984_13990 = state_13969;(statearr_13984_13990[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13991 = state_13969;
state_13969 = G__13991;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_13969){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_13969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files))
})();var state__10221__auto__ = (function (){var statearr_13985 = f__10220__auto__.call(null);(statearr_13985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_13985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__,map__13946,map__13946__$1,opts,on_jsload,before_jsload,map__13947,map__13947__$1,files))
);
return c__10219__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13992,link_href){var map__13994 = p__13992;var map__13994__$1 = ((cljs.core.seq_QMARK_.call(null,map__13994))?cljs.core.apply.call(null,cljs.core.hash_map,map__13994):map__13994);var request_url = cljs.core.get.call(null,map__13994__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__13994__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__,parent){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__,parent){
return (function (state_14015){var state_val_14016 = (state_14015[1]);if((state_val_14016 === 2))
{var inst_14012 = (state_14015[2]);var inst_14013 = parent.removeChild(orig_link);var state_14015__$1 = (function (){var statearr_14017 = state_14015;(statearr_14017[7] = inst_14012);
return statearr_14017;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14015__$1,inst_14013);
} else
{if((state_val_14016 === 1))
{var inst_14010 = cljs.core.async.timeout.call(null,200);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14015__$1,2,inst_14010);
} else
{return null;
}
}
});})(c__10219__auto__,parent))
;return ((function (switch__10155__auto__,c__10219__auto__,parent){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14021 = [null,null,null,null,null,null,null,null];(statearr_14021[0] = state_machine__10156__auto__);
(statearr_14021[1] = 1);
return statearr_14021;
});
var state_machine__10156__auto____1 = (function (state_14015){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14015);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14022){if((e14022 instanceof Object))
{var ex__10159__auto__ = e14022;var statearr_14023_14025 = state_14015;(statearr_14023_14025[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14026 = state_14015;
state_14015 = G__14026;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__,parent))
})();var state__10221__auto__ = (function (){var statearr_14024 = f__10220__auto__.call(null);(statearr_14024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_14024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__,parent))
);
return c__10219__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__14027){var map__14029 = p__14027;var map__14029__$1 = ((cljs.core.seq_QMARK_.call(null,map__14029))?cljs.core.apply.call(null,cljs.core.hash_map,map__14029):map__14029);var f_data = map__14029__$1;var request_url = cljs.core.get.call(null,map__14029__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14029__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__14030,files_msg){var map__14052 = p__14030;var map__14052__$1 = ((cljs.core.seq_QMARK_.call(null,map__14052))?cljs.core.apply.call(null,cljs.core.hash_map,map__14052):map__14052);var opts = map__14052__$1;var on_cssload = cljs.core.get.call(null,map__14052__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__14053_14073 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__14054_14074 = null;var count__14055_14075 = 0;var i__14056_14076 = 0;while(true){
if((i__14056_14076 < count__14055_14075))
{var f_14077 = cljs.core._nth.call(null,chunk__14054_14074,i__14056_14076);figwheel.client.reload_css_file.call(null,f_14077);
{
var G__14078 = seq__14053_14073;
var G__14079 = chunk__14054_14074;
var G__14080 = count__14055_14075;
var G__14081 = (i__14056_14076 + 1);
seq__14053_14073 = G__14078;
chunk__14054_14074 = G__14079;
count__14055_14075 = G__14080;
i__14056_14076 = G__14081;
continue;
}
} else
{var temp__4126__auto___14082 = cljs.core.seq.call(null,seq__14053_14073);if(temp__4126__auto___14082)
{var seq__14053_14083__$1 = temp__4126__auto___14082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14053_14083__$1))
{var c__8617__auto___14084 = cljs.core.chunk_first.call(null,seq__14053_14083__$1);{
var G__14085 = cljs.core.chunk_rest.call(null,seq__14053_14083__$1);
var G__14086 = c__8617__auto___14084;
var G__14087 = cljs.core.count.call(null,c__8617__auto___14084);
var G__14088 = 0;
seq__14053_14073 = G__14085;
chunk__14054_14074 = G__14086;
count__14055_14075 = G__14087;
i__14056_14076 = G__14088;
continue;
}
} else
{var f_14089 = cljs.core.first.call(null,seq__14053_14083__$1);figwheel.client.reload_css_file.call(null,f_14089);
{
var G__14090 = cljs.core.next.call(null,seq__14053_14083__$1);
var G__14091 = null;
var G__14092 = 0;
var G__14093 = 0;
seq__14053_14073 = G__14090;
chunk__14054_14074 = G__14091;
count__14055_14075 = G__14092;
i__14056_14076 = G__14093;
continue;
}
}
} else
{}
}
break;
}
var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload){
return (function (state_14063){var state_val_14064 = (state_14063[1]);if((state_val_14064 === 2))
{var inst_14059 = (state_14063[2]);var inst_14060 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_14061 = on_cssload.call(null,inst_14060);var state_14063__$1 = (function (){var statearr_14065 = state_14063;(statearr_14065[7] = inst_14059);
return statearr_14065;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14063__$1,inst_14061);
} else
{if((state_val_14064 === 1))
{var inst_14057 = cljs.core.async.timeout.call(null,100);var state_14063__$1 = state_14063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14063__$1,2,inst_14057);
} else
{return null;
}
}
});})(c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload))
;return ((function (switch__10155__auto__,c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14069 = [null,null,null,null,null,null,null,null];(statearr_14069[0] = state_machine__10156__auto__);
(statearr_14069[1] = 1);
return statearr_14069;
});
var state_machine__10156__auto____1 = (function (state_14063){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14063);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14070){if((e14070 instanceof Object))
{var ex__10159__auto__ = e14070;var statearr_14071_14094 = state_14063;(statearr_14071_14094[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14095 = state_14063;
state_14063 = G__14095;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14063){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload))
})();var state__10221__auto__ = (function (){var statearr_14072 = f__10220__auto__.call(null);(statearr_14072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_14072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__,map__14052,map__14052__$1,opts,on_cssload))
);
return c__10219__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14096){var map__14101 = p__14096;var map__14101__$1 = ((cljs.core.seq_QMARK_.call(null,map__14101))?cljs.core.apply.call(null,cljs.core.hash_map,map__14101):map__14101);var opts = map__14101__$1;var on_compile_fail = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14102 = cljs.core._EQ_;var expr__14103 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14102.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__14103)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14102.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__14103)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14102.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__14103)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14101,map__14101__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14108 = {"detail":url};return obj14108;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__14109){var map__14111 = p__14109;var map__14111__$1 = ((cljs.core.seq_QMARK_.call(null,map__14111))?cljs.core.apply.call(null,cljs.core.hash_map,map__14111):map__14111);var class$ = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14112){var map__14118 = p__14112;var map__14118__$1 = ((cljs.core.seq_QMARK_.call(null,map__14118))?cljs.core.apply.call(null,cljs.core.hash_map,map__14118):map__14118);var ed = map__14118__$1;var exception_data = cljs.core.get.call(null,map__14118__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__14118__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__14119_14123 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__14120_14124 = null;var count__14121_14125 = 0;var i__14122_14126 = 0;while(true){
if((i__14122_14126 < count__14121_14125))
{var msg_14127 = cljs.core._nth.call(null,chunk__14120_14124,i__14122_14126);console.log(msg_14127);
{
var G__14128 = seq__14119_14123;
var G__14129 = chunk__14120_14124;
var G__14130 = count__14121_14125;
var G__14131 = (i__14122_14126 + 1);
seq__14119_14123 = G__14128;
chunk__14120_14124 = G__14129;
count__14121_14125 = G__14130;
i__14122_14126 = G__14131;
continue;
}
} else
{var temp__4126__auto___14132 = cljs.core.seq.call(null,seq__14119_14123);if(temp__4126__auto___14132)
{var seq__14119_14133__$1 = temp__4126__auto___14132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14119_14133__$1))
{var c__8617__auto___14134 = cljs.core.chunk_first.call(null,seq__14119_14133__$1);{
var G__14135 = cljs.core.chunk_rest.call(null,seq__14119_14133__$1);
var G__14136 = c__8617__auto___14134;
var G__14137 = cljs.core.count.call(null,c__8617__auto___14134);
var G__14138 = 0;
seq__14119_14123 = G__14135;
chunk__14120_14124 = G__14136;
count__14121_14125 = G__14137;
i__14122_14126 = G__14138;
continue;
}
} else
{var msg_14139 = cljs.core.first.call(null,seq__14119_14133__$1);console.log(msg_14139);
{
var G__14140 = cljs.core.next.call(null,seq__14119_14133__$1);
var G__14141 = null;
var G__14142 = 0;
var G__14143 = 0;
seq__14119_14123 = G__14140;
chunk__14120_14124 = G__14141;
count__14121_14125 = G__14142;
i__14122_14126 = G__14143;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7869__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__14144){var map__14146 = p__14144;var map__14146__$1 = ((cljs.core.seq_QMARK_.call(null,map__14146))?cljs.core.apply.call(null,cljs.core.hash_map,map__14146):map__14146);var opts = map__14146__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14144 = null;if (arguments.length > 0) {
  p__14144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14144);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14147){
var p__14144 = cljs.core.seq(arglist__14147);
return watch_and_reload__delegate(p__14144);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map