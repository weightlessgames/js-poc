// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14268 = (function (f,fn_handler,meta14269){
this.f = f;
this.fn_handler = fn_handler;
this.meta14269 = meta14269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14268.cljs$lang$type = true;
cljs.core.async.t14268.cljs$lang$ctorStr = "cljs.core.async/t14268";
cljs.core.async.t14268.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14268");
});
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14270){var self__ = this;
var _14270__$1 = this;return self__.meta14269;
});
cljs.core.async.t14268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14270,meta14269__$1){var self__ = this;
var _14270__$1 = this;return (new cljs.core.async.t14268(self__.f,self__.fn_handler,meta14269__$1));
});
cljs.core.async.__GT_t14268 = (function __GT_t14268(f__$1,fn_handler__$1,meta14269){return (new cljs.core.async.t14268(f__$1,fn_handler__$1,meta14269));
});
}
return (new cljs.core.async.t14268(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14272 = buff;if(G__14272)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__14272.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14272);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14273 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14273);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14273,ret){
return (function (){return fn1.call(null,val_14273);
});})(val_14273,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8717__auto___14274 = n;var x_14275 = 0;while(true){
if((x_14275 < n__8717__auto___14274))
{(a[x_14275] = 0);
{
var G__14276 = (x_14275 + 1);
x_14275 = G__14276;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14277 = (i + 1);
i = G__14277;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14281 = (function (flag,alt_flag,meta14282){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14282 = meta14282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14281.cljs$lang$type = true;
cljs.core.async.t14281.cljs$lang$ctorStr = "cljs.core.async/t14281";
cljs.core.async.t14281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14281");
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14283){var self__ = this;
var _14283__$1 = this;return self__.meta14282;
});})(flag))
;
cljs.core.async.t14281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14283,meta14282__$1){var self__ = this;
var _14283__$1 = this;return (new cljs.core.async.t14281(self__.flag,self__.alt_flag,meta14282__$1));
});})(flag))
;
cljs.core.async.__GT_t14281 = ((function (flag){
return (function __GT_t14281(flag__$1,alt_flag__$1,meta14282){return (new cljs.core.async.t14281(flag__$1,alt_flag__$1,meta14282));
});})(flag))
;
}
return (new cljs.core.async.t14281(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14287 = (function (cb,flag,alt_handler,meta14288){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14288 = meta14288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14287.cljs$lang$type = true;
cljs.core.async.t14287.cljs$lang$ctorStr = "cljs.core.async/t14287";
cljs.core.async.t14287.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14287");
});
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14289){var self__ = this;
var _14289__$1 = this;return self__.meta14288;
});
cljs.core.async.t14287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14289,meta14288__$1){var self__ = this;
var _14289__$1 = this;return (new cljs.core.async.t14287(self__.cb,self__.flag,self__.alt_handler,meta14288__$1));
});
cljs.core.async.__GT_t14287 = (function __GT_t14287(cb__$1,flag__$1,alt_handler__$1,meta14288){return (new cljs.core.async.t14287(cb__$1,flag__$1,alt_handler__$1,meta14288));
});
}
return (new cljs.core.async.t14287(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14290_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14290_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14291_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14291_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7869__auto__ = wport;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14292 = (i + 1);
i = G__14292;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7869__auto__ = ret;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7857__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7857__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14293){var map__14295 = p__14293;var map__14295__$1 = ((cljs.core.seq_QMARK_.call(null,map__14295))?cljs.core.apply.call(null,cljs.core.hash_map,map__14295):map__14295);var opts = map__14295__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14293 = null;if (arguments.length > 1) {
  p__14293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14293);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14296){
var ports = cljs.core.first(arglist__14296);
var p__14293 = cljs.core.rest(arglist__14296);
return alts_BANG___delegate(ports,p__14293);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14304 = (function (ch,f,map_LT_,meta14305){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14305 = meta14305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14304.cljs$lang$type = true;
cljs.core.async.t14304.cljs$lang$ctorStr = "cljs.core.async/t14304";
cljs.core.async.t14304.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14304");
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14307 = (function (fn1,_,meta14305,ch,f,map_LT_,meta14308){
this.fn1 = fn1;
this._ = _;
this.meta14305 = meta14305;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14308 = meta14308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14307.cljs$lang$type = true;
cljs.core.async.t14307.cljs$lang$ctorStr = "cljs.core.async/t14307";
cljs.core.async.t14307.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14307");
});})(___$1))
;
cljs.core.async.t14307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14307.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14297_SHARP_){return f1.call(null,(((p1__14297_SHARP_ == null))?null:self__.f.call(null,p1__14297_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14309){var self__ = this;
var _14309__$1 = this;return self__.meta14308;
});})(___$1))
;
cljs.core.async.t14307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14309,meta14308__$1){var self__ = this;
var _14309__$1 = this;return (new cljs.core.async.t14307(self__.fn1,self__._,self__.meta14305,self__.ch,self__.f,self__.map_LT_,meta14308__$1));
});})(___$1))
;
cljs.core.async.__GT_t14307 = ((function (___$1){
return (function __GT_t14307(fn1__$1,___$2,meta14305__$1,ch__$2,f__$2,map_LT___$2,meta14308){return (new cljs.core.async.t14307(fn1__$1,___$2,meta14305__$1,ch__$2,f__$2,map_LT___$2,meta14308));
});})(___$1))
;
}
return (new cljs.core.async.t14307(fn1,___$1,self__.meta14305,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7857__auto__ = ret;if(cljs.core.truth_(and__7857__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7857__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14306){var self__ = this;
var _14306__$1 = this;return self__.meta14305;
});
cljs.core.async.t14304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14306,meta14305__$1){var self__ = this;
var _14306__$1 = this;return (new cljs.core.async.t14304(self__.ch,self__.f,self__.map_LT_,meta14305__$1));
});
cljs.core.async.__GT_t14304 = (function __GT_t14304(ch__$1,f__$1,map_LT___$1,meta14305){return (new cljs.core.async.t14304(ch__$1,f__$1,map_LT___$1,meta14305));
});
}
return (new cljs.core.async.t14304(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14313 = (function (ch,f,map_GT_,meta14314){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14314 = meta14314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14313.cljs$lang$type = true;
cljs.core.async.t14313.cljs$lang$ctorStr = "cljs.core.async/t14313";
cljs.core.async.t14313.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14313");
});
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14315){var self__ = this;
var _14315__$1 = this;return self__.meta14314;
});
cljs.core.async.t14313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14315,meta14314__$1){var self__ = this;
var _14315__$1 = this;return (new cljs.core.async.t14313(self__.ch,self__.f,self__.map_GT_,meta14314__$1));
});
cljs.core.async.__GT_t14313 = (function __GT_t14313(ch__$1,f__$1,map_GT___$1,meta14314){return (new cljs.core.async.t14313(ch__$1,f__$1,map_GT___$1,meta14314));
});
}
return (new cljs.core.async.t14313(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14319 = (function (ch,p,filter_GT_,meta14320){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14320 = meta14320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14319.cljs$lang$type = true;
cljs.core.async.t14319.cljs$lang$ctorStr = "cljs.core.async/t14319";
cljs.core.async.t14319.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t14319");
});
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14321){var self__ = this;
var _14321__$1 = this;return self__.meta14320;
});
cljs.core.async.t14319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14321,meta14320__$1){var self__ = this;
var _14321__$1 = this;return (new cljs.core.async.t14319(self__.ch,self__.p,self__.filter_GT_,meta14320__$1));
});
cljs.core.async.__GT_t14319 = (function __GT_t14319(ch__$1,p__$1,filter_GT___$1,meta14320){return (new cljs.core.async.t14319(ch__$1,p__$1,filter_GT___$1,meta14320));
});
}
return (new cljs.core.async.t14319(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___14404 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___14404,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___14404,out){
return (function (state_14383){var state_val_14384 = (state_14383[1]);if((state_val_14384 === 7))
{var inst_14379 = (state_14383[2]);var state_14383__$1 = state_14383;var statearr_14385_14405 = state_14383__$1;(statearr_14385_14405[2] = inst_14379);
(statearr_14385_14405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 1))
{var state_14383__$1 = state_14383;var statearr_14386_14406 = state_14383__$1;(statearr_14386_14406[2] = null);
(statearr_14386_14406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 4))
{var inst_14365 = (state_14383[7]);var inst_14365__$1 = (state_14383[2]);var inst_14366 = (inst_14365__$1 == null);var state_14383__$1 = (function (){var statearr_14387 = state_14383;(statearr_14387[7] = inst_14365__$1);
return statearr_14387;
})();if(cljs.core.truth_(inst_14366))
{var statearr_14388_14407 = state_14383__$1;(statearr_14388_14407[1] = 5);
} else
{var statearr_14389_14408 = state_14383__$1;(statearr_14389_14408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 6))
{var inst_14365 = (state_14383[7]);var inst_14370 = p.call(null,inst_14365);var state_14383__$1 = state_14383;if(cljs.core.truth_(inst_14370))
{var statearr_14390_14409 = state_14383__$1;(statearr_14390_14409[1] = 8);
} else
{var statearr_14391_14410 = state_14383__$1;(statearr_14391_14410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 3))
{var inst_14381 = (state_14383[2]);var state_14383__$1 = state_14383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14383__$1,inst_14381);
} else
{if((state_val_14384 === 2))
{var state_14383__$1 = state_14383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14383__$1,4,ch);
} else
{if((state_val_14384 === 11))
{var inst_14373 = (state_14383[2]);var state_14383__$1 = state_14383;var statearr_14392_14411 = state_14383__$1;(statearr_14392_14411[2] = inst_14373);
(statearr_14392_14411[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 9))
{var state_14383__$1 = state_14383;var statearr_14393_14412 = state_14383__$1;(statearr_14393_14412[2] = null);
(statearr_14393_14412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 5))
{var inst_14368 = cljs.core.async.close_BANG_.call(null,out);var state_14383__$1 = state_14383;var statearr_14394_14413 = state_14383__$1;(statearr_14394_14413[2] = inst_14368);
(statearr_14394_14413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 10))
{var inst_14376 = (state_14383[2]);var state_14383__$1 = (function (){var statearr_14395 = state_14383;(statearr_14395[8] = inst_14376);
return statearr_14395;
})();var statearr_14396_14414 = state_14383__$1;(statearr_14396_14414[2] = null);
(statearr_14396_14414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 8))
{var inst_14365 = (state_14383[7]);var state_14383__$1 = state_14383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14383__$1,11,out,inst_14365);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___14404,out))
;return ((function (switch__10155__auto__,c__10219__auto___14404,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14400 = [null,null,null,null,null,null,null,null,null];(statearr_14400[0] = state_machine__10156__auto__);
(statearr_14400[1] = 1);
return statearr_14400;
});
var state_machine__10156__auto____1 = (function (state_14383){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14383);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14401){if((e14401 instanceof Object))
{var ex__10159__auto__ = e14401;var statearr_14402_14415 = state_14383;(statearr_14402_14415[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14416 = state_14383;
state_14383 = G__14416;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14383){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___14404,out))
})();var state__10221__auto__ = (function (){var statearr_14403 = f__10220__auto__.call(null);(statearr_14403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___14404);
return statearr_14403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___14404,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__){
return (function (state_14582){var state_val_14583 = (state_14582[1]);if((state_val_14583 === 7))
{var inst_14578 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14584_14625 = state_14582__$1;(statearr_14584_14625[2] = inst_14578);
(statearr_14584_14625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 20))
{var inst_14548 = (state_14582[7]);var inst_14559 = (state_14582[2]);var inst_14560 = cljs.core.next.call(null,inst_14548);var inst_14534 = inst_14560;var inst_14535 = null;var inst_14536 = 0;var inst_14537 = 0;var state_14582__$1 = (function (){var statearr_14585 = state_14582;(statearr_14585[8] = inst_14535);
(statearr_14585[9] = inst_14559);
(statearr_14585[10] = inst_14537);
(statearr_14585[11] = inst_14536);
(statearr_14585[12] = inst_14534);
return statearr_14585;
})();var statearr_14586_14626 = state_14582__$1;(statearr_14586_14626[2] = null);
(statearr_14586_14626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 1))
{var state_14582__$1 = state_14582;var statearr_14587_14627 = state_14582__$1;(statearr_14587_14627[2] = null);
(statearr_14587_14627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 4))
{var inst_14523 = (state_14582[13]);var inst_14523__$1 = (state_14582[2]);var inst_14524 = (inst_14523__$1 == null);var state_14582__$1 = (function (){var statearr_14588 = state_14582;(statearr_14588[13] = inst_14523__$1);
return statearr_14588;
})();if(cljs.core.truth_(inst_14524))
{var statearr_14589_14628 = state_14582__$1;(statearr_14589_14628[1] = 5);
} else
{var statearr_14590_14629 = state_14582__$1;(statearr_14590_14629[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 15))
{var state_14582__$1 = state_14582;var statearr_14594_14630 = state_14582__$1;(statearr_14594_14630[2] = null);
(statearr_14594_14630[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 21))
{var state_14582__$1 = state_14582;var statearr_14595_14631 = state_14582__$1;(statearr_14595_14631[2] = null);
(statearr_14595_14631[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 13))
{var inst_14535 = (state_14582[8]);var inst_14537 = (state_14582[10]);var inst_14536 = (state_14582[11]);var inst_14534 = (state_14582[12]);var inst_14544 = (state_14582[2]);var inst_14545 = (inst_14537 + 1);var tmp14591 = inst_14535;var tmp14592 = inst_14536;var tmp14593 = inst_14534;var inst_14534__$1 = tmp14593;var inst_14535__$1 = tmp14591;var inst_14536__$1 = tmp14592;var inst_14537__$1 = inst_14545;var state_14582__$1 = (function (){var statearr_14596 = state_14582;(statearr_14596[8] = inst_14535__$1);
(statearr_14596[14] = inst_14544);
(statearr_14596[10] = inst_14537__$1);
(statearr_14596[11] = inst_14536__$1);
(statearr_14596[12] = inst_14534__$1);
return statearr_14596;
})();var statearr_14597_14632 = state_14582__$1;(statearr_14597_14632[2] = null);
(statearr_14597_14632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 22))
{var state_14582__$1 = state_14582;var statearr_14598_14633 = state_14582__$1;(statearr_14598_14633[2] = null);
(statearr_14598_14633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 6))
{var inst_14523 = (state_14582[13]);var inst_14532 = f.call(null,inst_14523);var inst_14533 = cljs.core.seq.call(null,inst_14532);var inst_14534 = inst_14533;var inst_14535 = null;var inst_14536 = 0;var inst_14537 = 0;var state_14582__$1 = (function (){var statearr_14599 = state_14582;(statearr_14599[8] = inst_14535);
(statearr_14599[10] = inst_14537);
(statearr_14599[11] = inst_14536);
(statearr_14599[12] = inst_14534);
return statearr_14599;
})();var statearr_14600_14634 = state_14582__$1;(statearr_14600_14634[2] = null);
(statearr_14600_14634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 17))
{var inst_14548 = (state_14582[7]);var inst_14552 = cljs.core.chunk_first.call(null,inst_14548);var inst_14553 = cljs.core.chunk_rest.call(null,inst_14548);var inst_14554 = cljs.core.count.call(null,inst_14552);var inst_14534 = inst_14553;var inst_14535 = inst_14552;var inst_14536 = inst_14554;var inst_14537 = 0;var state_14582__$1 = (function (){var statearr_14601 = state_14582;(statearr_14601[8] = inst_14535);
(statearr_14601[10] = inst_14537);
(statearr_14601[11] = inst_14536);
(statearr_14601[12] = inst_14534);
return statearr_14601;
})();var statearr_14602_14635 = state_14582__$1;(statearr_14602_14635[2] = null);
(statearr_14602_14635[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 3))
{var inst_14580 = (state_14582[2]);var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14582__$1,inst_14580);
} else
{if((state_val_14583 === 12))
{var inst_14568 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14603_14636 = state_14582__$1;(statearr_14603_14636[2] = inst_14568);
(statearr_14603_14636[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 2))
{var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14582__$1,4,in$);
} else
{if((state_val_14583 === 23))
{var inst_14576 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14604_14637 = state_14582__$1;(statearr_14604_14637[2] = inst_14576);
(statearr_14604_14637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 19))
{var inst_14563 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14605_14638 = state_14582__$1;(statearr_14605_14638[2] = inst_14563);
(statearr_14605_14638[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 11))
{var inst_14548 = (state_14582[7]);var inst_14534 = (state_14582[12]);var inst_14548__$1 = cljs.core.seq.call(null,inst_14534);var state_14582__$1 = (function (){var statearr_14606 = state_14582;(statearr_14606[7] = inst_14548__$1);
return statearr_14606;
})();if(inst_14548__$1)
{var statearr_14607_14639 = state_14582__$1;(statearr_14607_14639[1] = 14);
} else
{var statearr_14608_14640 = state_14582__$1;(statearr_14608_14640[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 9))
{var inst_14570 = (state_14582[2]);var inst_14571 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14582__$1 = (function (){var statearr_14609 = state_14582;(statearr_14609[15] = inst_14570);
return statearr_14609;
})();if(cljs.core.truth_(inst_14571))
{var statearr_14610_14641 = state_14582__$1;(statearr_14610_14641[1] = 21);
} else
{var statearr_14611_14642 = state_14582__$1;(statearr_14611_14642[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 5))
{var inst_14526 = cljs.core.async.close_BANG_.call(null,out);var state_14582__$1 = state_14582;var statearr_14612_14643 = state_14582__$1;(statearr_14612_14643[2] = inst_14526);
(statearr_14612_14643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 14))
{var inst_14548 = (state_14582[7]);var inst_14550 = cljs.core.chunked_seq_QMARK_.call(null,inst_14548);var state_14582__$1 = state_14582;if(inst_14550)
{var statearr_14613_14644 = state_14582__$1;(statearr_14613_14644[1] = 17);
} else
{var statearr_14614_14645 = state_14582__$1;(statearr_14614_14645[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 16))
{var inst_14566 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14615_14646 = state_14582__$1;(statearr_14615_14646[2] = inst_14566);
(statearr_14615_14646[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 10))
{var inst_14535 = (state_14582[8]);var inst_14537 = (state_14582[10]);var inst_14542 = cljs.core._nth.call(null,inst_14535,inst_14537);var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14582__$1,13,out,inst_14542);
} else
{if((state_val_14583 === 18))
{var inst_14548 = (state_14582[7]);var inst_14557 = cljs.core.first.call(null,inst_14548);var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14582__$1,20,out,inst_14557);
} else
{if((state_val_14583 === 8))
{var inst_14537 = (state_14582[10]);var inst_14536 = (state_14582[11]);var inst_14539 = (inst_14537 < inst_14536);var inst_14540 = inst_14539;var state_14582__$1 = state_14582;if(cljs.core.truth_(inst_14540))
{var statearr_14616_14647 = state_14582__$1;(statearr_14616_14647[1] = 10);
} else
{var statearr_14617_14648 = state_14582__$1;(statearr_14617_14648[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto__))
;return ((function (switch__10155__auto__,c__10219__auto__){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14621[0] = state_machine__10156__auto__);
(statearr_14621[1] = 1);
return statearr_14621;
});
var state_machine__10156__auto____1 = (function (state_14582){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14582);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14622){if((e14622 instanceof Object))
{var ex__10159__auto__ = e14622;var statearr_14623_14649 = state_14582;(statearr_14623_14649[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14650 = state_14582;
state_14582 = G__14650;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14582){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__))
})();var state__10221__auto__ = (function (){var statearr_14624 = f__10220__auto__.call(null);(statearr_14624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_14624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__))
);
return c__10219__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10219__auto___14745 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___14745){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___14745){
return (function (state_14721){var state_val_14722 = (state_14721[1]);if((state_val_14722 === 7))
{var inst_14717 = (state_14721[2]);var state_14721__$1 = state_14721;var statearr_14723_14746 = state_14721__$1;(statearr_14723_14746[2] = inst_14717);
(statearr_14723_14746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 1))
{var state_14721__$1 = state_14721;var statearr_14724_14747 = state_14721__$1;(statearr_14724_14747[2] = null);
(statearr_14724_14747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 4))
{var inst_14700 = (state_14721[7]);var inst_14700__$1 = (state_14721[2]);var inst_14701 = (inst_14700__$1 == null);var state_14721__$1 = (function (){var statearr_14725 = state_14721;(statearr_14725[7] = inst_14700__$1);
return statearr_14725;
})();if(cljs.core.truth_(inst_14701))
{var statearr_14726_14748 = state_14721__$1;(statearr_14726_14748[1] = 5);
} else
{var statearr_14727_14749 = state_14721__$1;(statearr_14727_14749[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 13))
{var state_14721__$1 = state_14721;var statearr_14728_14750 = state_14721__$1;(statearr_14728_14750[2] = null);
(statearr_14728_14750[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 6))
{var inst_14700 = (state_14721[7]);var state_14721__$1 = state_14721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14721__$1,11,to,inst_14700);
} else
{if((state_val_14722 === 3))
{var inst_14719 = (state_14721[2]);var state_14721__$1 = state_14721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14721__$1,inst_14719);
} else
{if((state_val_14722 === 12))
{var state_14721__$1 = state_14721;var statearr_14729_14751 = state_14721__$1;(statearr_14729_14751[2] = null);
(statearr_14729_14751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 2))
{var state_14721__$1 = state_14721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14721__$1,4,from);
} else
{if((state_val_14722 === 11))
{var inst_14710 = (state_14721[2]);var state_14721__$1 = state_14721;if(cljs.core.truth_(inst_14710))
{var statearr_14730_14752 = state_14721__$1;(statearr_14730_14752[1] = 12);
} else
{var statearr_14731_14753 = state_14721__$1;(statearr_14731_14753[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 9))
{var state_14721__$1 = state_14721;var statearr_14732_14754 = state_14721__$1;(statearr_14732_14754[2] = null);
(statearr_14732_14754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 5))
{var state_14721__$1 = state_14721;if(cljs.core.truth_(close_QMARK_))
{var statearr_14733_14755 = state_14721__$1;(statearr_14733_14755[1] = 8);
} else
{var statearr_14734_14756 = state_14721__$1;(statearr_14734_14756[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 14))
{var inst_14715 = (state_14721[2]);var state_14721__$1 = state_14721;var statearr_14735_14757 = state_14721__$1;(statearr_14735_14757[2] = inst_14715);
(statearr_14735_14757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 10))
{var inst_14707 = (state_14721[2]);var state_14721__$1 = state_14721;var statearr_14736_14758 = state_14721__$1;(statearr_14736_14758[2] = inst_14707);
(statearr_14736_14758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14722 === 8))
{var inst_14704 = cljs.core.async.close_BANG_.call(null,to);var state_14721__$1 = state_14721;var statearr_14737_14759 = state_14721__$1;(statearr_14737_14759[2] = inst_14704);
(statearr_14737_14759[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___14745))
;return ((function (switch__10155__auto__,c__10219__auto___14745){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14741 = [null,null,null,null,null,null,null,null];(statearr_14741[0] = state_machine__10156__auto__);
(statearr_14741[1] = 1);
return statearr_14741;
});
var state_machine__10156__auto____1 = (function (state_14721){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14721);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14742){if((e14742 instanceof Object))
{var ex__10159__auto__ = e14742;var statearr_14743_14760 = state_14721;(statearr_14743_14760[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14761 = state_14721;
state_14721 = G__14761;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14721){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___14745))
})();var state__10221__auto__ = (function (){var statearr_14744 = f__10220__auto__.call(null);(statearr_14744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___14745);
return statearr_14744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___14745))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10219__auto___14862 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___14862,tc,fc){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___14862,tc,fc){
return (function (state_14837){var state_val_14838 = (state_14837[1]);if((state_val_14838 === 7))
{var inst_14833 = (state_14837[2]);var state_14837__$1 = state_14837;var statearr_14839_14863 = state_14837__$1;(statearr_14839_14863[2] = inst_14833);
(statearr_14839_14863[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 1))
{var state_14837__$1 = state_14837;var statearr_14840_14864 = state_14837__$1;(statearr_14840_14864[2] = null);
(statearr_14840_14864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 4))
{var inst_14814 = (state_14837[7]);var inst_14814__$1 = (state_14837[2]);var inst_14815 = (inst_14814__$1 == null);var state_14837__$1 = (function (){var statearr_14841 = state_14837;(statearr_14841[7] = inst_14814__$1);
return statearr_14841;
})();if(cljs.core.truth_(inst_14815))
{var statearr_14842_14865 = state_14837__$1;(statearr_14842_14865[1] = 5);
} else
{var statearr_14843_14866 = state_14837__$1;(statearr_14843_14866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 13))
{var state_14837__$1 = state_14837;var statearr_14844_14867 = state_14837__$1;(statearr_14844_14867[2] = null);
(statearr_14844_14867[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 6))
{var inst_14814 = (state_14837[7]);var inst_14820 = p.call(null,inst_14814);var state_14837__$1 = state_14837;if(cljs.core.truth_(inst_14820))
{var statearr_14845_14868 = state_14837__$1;(statearr_14845_14868[1] = 9);
} else
{var statearr_14846_14869 = state_14837__$1;(statearr_14846_14869[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 3))
{var inst_14835 = (state_14837[2]);var state_14837__$1 = state_14837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14837__$1,inst_14835);
} else
{if((state_val_14838 === 12))
{var state_14837__$1 = state_14837;var statearr_14847_14870 = state_14837__$1;(statearr_14847_14870[2] = null);
(statearr_14847_14870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 2))
{var state_14837__$1 = state_14837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14837__$1,4,ch);
} else
{if((state_val_14838 === 11))
{var inst_14814 = (state_14837[7]);var inst_14824 = (state_14837[2]);var state_14837__$1 = state_14837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14837__$1,8,inst_14824,inst_14814);
} else
{if((state_val_14838 === 9))
{var state_14837__$1 = state_14837;var statearr_14848_14871 = state_14837__$1;(statearr_14848_14871[2] = tc);
(statearr_14848_14871[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 5))
{var inst_14817 = cljs.core.async.close_BANG_.call(null,tc);var inst_14818 = cljs.core.async.close_BANG_.call(null,fc);var state_14837__$1 = (function (){var statearr_14849 = state_14837;(statearr_14849[8] = inst_14817);
return statearr_14849;
})();var statearr_14850_14872 = state_14837__$1;(statearr_14850_14872[2] = inst_14818);
(statearr_14850_14872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 14))
{var inst_14831 = (state_14837[2]);var state_14837__$1 = state_14837;var statearr_14851_14873 = state_14837__$1;(statearr_14851_14873[2] = inst_14831);
(statearr_14851_14873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 10))
{var state_14837__$1 = state_14837;var statearr_14852_14874 = state_14837__$1;(statearr_14852_14874[2] = fc);
(statearr_14852_14874[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14838 === 8))
{var inst_14826 = (state_14837[2]);var state_14837__$1 = state_14837;if(cljs.core.truth_(inst_14826))
{var statearr_14853_14875 = state_14837__$1;(statearr_14853_14875[1] = 12);
} else
{var statearr_14854_14876 = state_14837__$1;(statearr_14854_14876[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___14862,tc,fc))
;return ((function (switch__10155__auto__,c__10219__auto___14862,tc,fc){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14858 = [null,null,null,null,null,null,null,null,null];(statearr_14858[0] = state_machine__10156__auto__);
(statearr_14858[1] = 1);
return statearr_14858;
});
var state_machine__10156__auto____1 = (function (state_14837){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14837);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14859){if((e14859 instanceof Object))
{var ex__10159__auto__ = e14859;var statearr_14860_14877 = state_14837;(statearr_14860_14877[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14837);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14878 = state_14837;
state_14837 = G__14878;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14837){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___14862,tc,fc))
})();var state__10221__auto__ = (function (){var statearr_14861 = f__10220__auto__.call(null);(statearr_14861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___14862);
return statearr_14861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___14862,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__){
return (function (state_14925){var state_val_14926 = (state_14925[1]);if((state_val_14926 === 7))
{var inst_14921 = (state_14925[2]);var state_14925__$1 = state_14925;var statearr_14927_14943 = state_14925__$1;(statearr_14927_14943[2] = inst_14921);
(statearr_14927_14943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 6))
{var inst_14911 = (state_14925[7]);var inst_14914 = (state_14925[8]);var inst_14918 = f.call(null,inst_14911,inst_14914);var inst_14911__$1 = inst_14918;var state_14925__$1 = (function (){var statearr_14928 = state_14925;(statearr_14928[7] = inst_14911__$1);
return statearr_14928;
})();var statearr_14929_14944 = state_14925__$1;(statearr_14929_14944[2] = null);
(statearr_14929_14944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 5))
{var inst_14911 = (state_14925[7]);var state_14925__$1 = state_14925;var statearr_14930_14945 = state_14925__$1;(statearr_14930_14945[2] = inst_14911);
(statearr_14930_14945[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 4))
{var inst_14914 = (state_14925[8]);var inst_14914__$1 = (state_14925[2]);var inst_14915 = (inst_14914__$1 == null);var state_14925__$1 = (function (){var statearr_14931 = state_14925;(statearr_14931[8] = inst_14914__$1);
return statearr_14931;
})();if(cljs.core.truth_(inst_14915))
{var statearr_14932_14946 = state_14925__$1;(statearr_14932_14946[1] = 5);
} else
{var statearr_14933_14947 = state_14925__$1;(statearr_14933_14947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 3))
{var inst_14923 = (state_14925[2]);var state_14925__$1 = state_14925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14925__$1,inst_14923);
} else
{if((state_val_14926 === 2))
{var state_14925__$1 = state_14925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14925__$1,4,ch);
} else
{if((state_val_14926 === 1))
{var inst_14911 = init;var state_14925__$1 = (function (){var statearr_14934 = state_14925;(statearr_14934[7] = inst_14911);
return statearr_14934;
})();var statearr_14935_14948 = state_14925__$1;(statearr_14935_14948[2] = null);
(statearr_14935_14948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10219__auto__))
;return ((function (switch__10155__auto__,c__10219__auto__){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_14939 = [null,null,null,null,null,null,null,null,null];(statearr_14939[0] = state_machine__10156__auto__);
(statearr_14939[1] = 1);
return statearr_14939;
});
var state_machine__10156__auto____1 = (function (state_14925){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_14925);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e14940){if((e14940 instanceof Object))
{var ex__10159__auto__ = e14940;var statearr_14941_14949 = state_14925;(statearr_14941_14949[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14950 = state_14925;
state_14925 = G__14950;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_14925){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_14925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__))
})();var state__10221__auto__ = (function (){var statearr_14942 = f__10220__auto__.call(null);(statearr_14942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_14942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__))
);
return c__10219__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10219__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto__){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto__){
return (function (state_15024){var state_val_15025 = (state_15024[1]);if((state_val_15025 === 7))
{var inst_15006 = (state_15024[2]);var state_15024__$1 = state_15024;var statearr_15026_15049 = state_15024__$1;(statearr_15026_15049[2] = inst_15006);
(statearr_15026_15049[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 1))
{var inst_15000 = cljs.core.seq.call(null,coll);var inst_15001 = inst_15000;var state_15024__$1 = (function (){var statearr_15027 = state_15024;(statearr_15027[7] = inst_15001);
return statearr_15027;
})();var statearr_15028_15050 = state_15024__$1;(statearr_15028_15050[2] = null);
(statearr_15028_15050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 4))
{var inst_15001 = (state_15024[7]);var inst_15004 = cljs.core.first.call(null,inst_15001);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15024__$1,7,ch,inst_15004);
} else
{if((state_val_15025 === 13))
{var inst_15018 = (state_15024[2]);var state_15024__$1 = state_15024;var statearr_15029_15051 = state_15024__$1;(statearr_15029_15051[2] = inst_15018);
(statearr_15029_15051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 6))
{var inst_15009 = (state_15024[2]);var state_15024__$1 = state_15024;if(cljs.core.truth_(inst_15009))
{var statearr_15030_15052 = state_15024__$1;(statearr_15030_15052[1] = 8);
} else
{var statearr_15031_15053 = state_15024__$1;(statearr_15031_15053[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 3))
{var inst_15022 = (state_15024[2]);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15024__$1,inst_15022);
} else
{if((state_val_15025 === 12))
{var state_15024__$1 = state_15024;var statearr_15032_15054 = state_15024__$1;(statearr_15032_15054[2] = null);
(statearr_15032_15054[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 2))
{var inst_15001 = (state_15024[7]);var state_15024__$1 = state_15024;if(cljs.core.truth_(inst_15001))
{var statearr_15033_15055 = state_15024__$1;(statearr_15033_15055[1] = 4);
} else
{var statearr_15034_15056 = state_15024__$1;(statearr_15034_15056[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 11))
{var inst_15015 = cljs.core.async.close_BANG_.call(null,ch);var state_15024__$1 = state_15024;var statearr_15035_15057 = state_15024__$1;(statearr_15035_15057[2] = inst_15015);
(statearr_15035_15057[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 9))
{var state_15024__$1 = state_15024;if(cljs.core.truth_(close_QMARK_))
{var statearr_15036_15058 = state_15024__$1;(statearr_15036_15058[1] = 11);
} else
{var statearr_15037_15059 = state_15024__$1;(statearr_15037_15059[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 5))
{var inst_15001 = (state_15024[7]);var state_15024__$1 = state_15024;var statearr_15038_15060 = state_15024__$1;(statearr_15038_15060[2] = inst_15001);
(statearr_15038_15060[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 10))
{var inst_15020 = (state_15024[2]);var state_15024__$1 = state_15024;var statearr_15039_15061 = state_15024__$1;(statearr_15039_15061[2] = inst_15020);
(statearr_15039_15061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15025 === 8))
{var inst_15001 = (state_15024[7]);var inst_15011 = cljs.core.next.call(null,inst_15001);var inst_15001__$1 = inst_15011;var state_15024__$1 = (function (){var statearr_15040 = state_15024;(statearr_15040[7] = inst_15001__$1);
return statearr_15040;
})();var statearr_15041_15062 = state_15024__$1;(statearr_15041_15062[2] = null);
(statearr_15041_15062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto__))
;return ((function (switch__10155__auto__,c__10219__auto__){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_15045 = [null,null,null,null,null,null,null,null];(statearr_15045[0] = state_machine__10156__auto__);
(statearr_15045[1] = 1);
return statearr_15045;
});
var state_machine__10156__auto____1 = (function (state_15024){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_15024);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e15046){if((e15046 instanceof Object))
{var ex__10159__auto__ = e15046;var statearr_15047_15063 = state_15024;(statearr_15047_15063[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15064 = state_15024;
state_15024 = G__15064;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_15024){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_15024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto__))
})();var state__10221__auto__ = (function (){var statearr_15048 = f__10220__auto__.call(null);(statearr_15048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto__);
return statearr_15048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto__))
);
return c__10219__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15066 = {};return obj15066;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7857__auto__ = _;if(and__7857__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8496__auto__ = (((_ == null))?null:_);return (function (){var or__7869__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15068 = {};return obj15068;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15290 = (function (cs,ch,mult,meta15291){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15291 = meta15291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15290.cljs$lang$type = true;
cljs.core.async.t15290.cljs$lang$ctorStr = "cljs.core.async/t15290";
cljs.core.async.t15290.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t15290");
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15290.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15292){var self__ = this;
var _15292__$1 = this;return self__.meta15291;
});})(cs))
;
cljs.core.async.t15290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15292,meta15291__$1){var self__ = this;
var _15292__$1 = this;return (new cljs.core.async.t15290(self__.cs,self__.ch,self__.mult,meta15291__$1));
});})(cs))
;
cljs.core.async.__GT_t15290 = ((function (cs){
return (function __GT_t15290(cs__$1,ch__$1,mult__$1,meta15291){return (new cljs.core.async.t15290(cs__$1,ch__$1,mult__$1,meta15291));
});})(cs))
;
}
return (new cljs.core.async.t15290(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10219__auto___15511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___15511,cs,m,dchan,dctr,done){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___15511,cs,m,dchan,dctr,done){
return (function (state_15423){var state_val_15424 = (state_15423[1]);if((state_val_15424 === 7))
{var inst_15419 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15425_15512 = state_15423__$1;(statearr_15425_15512[2] = inst_15419);
(statearr_15425_15512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 20))
{var inst_15324 = (state_15423[7]);var inst_15334 = cljs.core.first.call(null,inst_15324);var inst_15335 = cljs.core.nth.call(null,inst_15334,0,null);var inst_15336 = cljs.core.nth.call(null,inst_15334,1,null);var state_15423__$1 = (function (){var statearr_15426 = state_15423;(statearr_15426[8] = inst_15335);
return statearr_15426;
})();if(cljs.core.truth_(inst_15336))
{var statearr_15427_15513 = state_15423__$1;(statearr_15427_15513[1] = 22);
} else
{var statearr_15428_15514 = state_15423__$1;(statearr_15428_15514[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 27))
{var inst_15371 = (state_15423[9]);var inst_15366 = (state_15423[10]);var inst_15364 = (state_15423[11]);var inst_15295 = (state_15423[12]);var inst_15371__$1 = cljs.core._nth.call(null,inst_15364,inst_15366);var inst_15372 = cljs.core.async.put_BANG_.call(null,inst_15371__$1,inst_15295,done);var state_15423__$1 = (function (){var statearr_15429 = state_15423;(statearr_15429[9] = inst_15371__$1);
return statearr_15429;
})();if(cljs.core.truth_(inst_15372))
{var statearr_15430_15515 = state_15423__$1;(statearr_15430_15515[1] = 30);
} else
{var statearr_15431_15516 = state_15423__$1;(statearr_15431_15516[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 1))
{var state_15423__$1 = state_15423;var statearr_15432_15517 = state_15423__$1;(statearr_15432_15517[2] = null);
(statearr_15432_15517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 24))
{var inst_15324 = (state_15423[7]);var inst_15341 = (state_15423[2]);var inst_15342 = cljs.core.next.call(null,inst_15324);var inst_15304 = inst_15342;var inst_15305 = null;var inst_15306 = 0;var inst_15307 = 0;var state_15423__$1 = (function (){var statearr_15433 = state_15423;(statearr_15433[13] = inst_15304);
(statearr_15433[14] = inst_15307);
(statearr_15433[15] = inst_15341);
(statearr_15433[16] = inst_15305);
(statearr_15433[17] = inst_15306);
return statearr_15433;
})();var statearr_15434_15518 = state_15423__$1;(statearr_15434_15518[2] = null);
(statearr_15434_15518[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 39))
{var state_15423__$1 = state_15423;var statearr_15438_15519 = state_15423__$1;(statearr_15438_15519[2] = null);
(statearr_15438_15519[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 4))
{var inst_15295 = (state_15423[12]);var inst_15295__$1 = (state_15423[2]);var inst_15296 = (inst_15295__$1 == null);var state_15423__$1 = (function (){var statearr_15439 = state_15423;(statearr_15439[12] = inst_15295__$1);
return statearr_15439;
})();if(cljs.core.truth_(inst_15296))
{var statearr_15440_15520 = state_15423__$1;(statearr_15440_15520[1] = 5);
} else
{var statearr_15441_15521 = state_15423__$1;(statearr_15441_15521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 15))
{var inst_15304 = (state_15423[13]);var inst_15307 = (state_15423[14]);var inst_15305 = (state_15423[16]);var inst_15306 = (state_15423[17]);var inst_15320 = (state_15423[2]);var inst_15321 = (inst_15307 + 1);var tmp15435 = inst_15304;var tmp15436 = inst_15305;var tmp15437 = inst_15306;var inst_15304__$1 = tmp15435;var inst_15305__$1 = tmp15436;var inst_15306__$1 = tmp15437;var inst_15307__$1 = inst_15321;var state_15423__$1 = (function (){var statearr_15442 = state_15423;(statearr_15442[13] = inst_15304__$1);
(statearr_15442[14] = inst_15307__$1);
(statearr_15442[18] = inst_15320);
(statearr_15442[16] = inst_15305__$1);
(statearr_15442[17] = inst_15306__$1);
return statearr_15442;
})();var statearr_15443_15522 = state_15423__$1;(statearr_15443_15522[2] = null);
(statearr_15443_15522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 21))
{var inst_15345 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15447_15523 = state_15423__$1;(statearr_15447_15523[2] = inst_15345);
(statearr_15447_15523[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 31))
{var inst_15371 = (state_15423[9]);var inst_15375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15376 = cljs.core.async.untap_STAR_.call(null,m,inst_15371);var state_15423__$1 = (function (){var statearr_15448 = state_15423;(statearr_15448[19] = inst_15375);
return statearr_15448;
})();var statearr_15449_15524 = state_15423__$1;(statearr_15449_15524[2] = inst_15376);
(statearr_15449_15524[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 32))
{var inst_15363 = (state_15423[20]);var inst_15366 = (state_15423[10]);var inst_15365 = (state_15423[21]);var inst_15364 = (state_15423[11]);var inst_15378 = (state_15423[2]);var inst_15379 = (inst_15366 + 1);var tmp15444 = inst_15363;var tmp15445 = inst_15365;var tmp15446 = inst_15364;var inst_15363__$1 = tmp15444;var inst_15364__$1 = tmp15446;var inst_15365__$1 = tmp15445;var inst_15366__$1 = inst_15379;var state_15423__$1 = (function (){var statearr_15450 = state_15423;(statearr_15450[20] = inst_15363__$1);
(statearr_15450[22] = inst_15378);
(statearr_15450[10] = inst_15366__$1);
(statearr_15450[21] = inst_15365__$1);
(statearr_15450[11] = inst_15364__$1);
return statearr_15450;
})();var statearr_15451_15525 = state_15423__$1;(statearr_15451_15525[2] = null);
(statearr_15451_15525[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 40))
{var inst_15391 = (state_15423[23]);var inst_15395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15396 = cljs.core.async.untap_STAR_.call(null,m,inst_15391);var state_15423__$1 = (function (){var statearr_15452 = state_15423;(statearr_15452[24] = inst_15395);
return statearr_15452;
})();var statearr_15453_15526 = state_15423__$1;(statearr_15453_15526[2] = inst_15396);
(statearr_15453_15526[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 33))
{var inst_15382 = (state_15423[25]);var inst_15384 = cljs.core.chunked_seq_QMARK_.call(null,inst_15382);var state_15423__$1 = state_15423;if(inst_15384)
{var statearr_15454_15527 = state_15423__$1;(statearr_15454_15527[1] = 36);
} else
{var statearr_15455_15528 = state_15423__$1;(statearr_15455_15528[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 13))
{var inst_15314 = (state_15423[26]);var inst_15317 = cljs.core.async.close_BANG_.call(null,inst_15314);var state_15423__$1 = state_15423;var statearr_15456_15529 = state_15423__$1;(statearr_15456_15529[2] = inst_15317);
(statearr_15456_15529[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 22))
{var inst_15335 = (state_15423[8]);var inst_15338 = cljs.core.async.close_BANG_.call(null,inst_15335);var state_15423__$1 = state_15423;var statearr_15457_15530 = state_15423__$1;(statearr_15457_15530[2] = inst_15338);
(statearr_15457_15530[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 36))
{var inst_15382 = (state_15423[25]);var inst_15386 = cljs.core.chunk_first.call(null,inst_15382);var inst_15387 = cljs.core.chunk_rest.call(null,inst_15382);var inst_15388 = cljs.core.count.call(null,inst_15386);var inst_15363 = inst_15387;var inst_15364 = inst_15386;var inst_15365 = inst_15388;var inst_15366 = 0;var state_15423__$1 = (function (){var statearr_15458 = state_15423;(statearr_15458[20] = inst_15363);
(statearr_15458[10] = inst_15366);
(statearr_15458[21] = inst_15365);
(statearr_15458[11] = inst_15364);
return statearr_15458;
})();var statearr_15459_15531 = state_15423__$1;(statearr_15459_15531[2] = null);
(statearr_15459_15531[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 41))
{var inst_15382 = (state_15423[25]);var inst_15398 = (state_15423[2]);var inst_15399 = cljs.core.next.call(null,inst_15382);var inst_15363 = inst_15399;var inst_15364 = null;var inst_15365 = 0;var inst_15366 = 0;var state_15423__$1 = (function (){var statearr_15460 = state_15423;(statearr_15460[27] = inst_15398);
(statearr_15460[20] = inst_15363);
(statearr_15460[10] = inst_15366);
(statearr_15460[21] = inst_15365);
(statearr_15460[11] = inst_15364);
return statearr_15460;
})();var statearr_15461_15532 = state_15423__$1;(statearr_15461_15532[2] = null);
(statearr_15461_15532[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 43))
{var state_15423__$1 = state_15423;var statearr_15462_15533 = state_15423__$1;(statearr_15462_15533[2] = null);
(statearr_15462_15533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 29))
{var inst_15407 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15463_15534 = state_15423__$1;(statearr_15463_15534[2] = inst_15407);
(statearr_15463_15534[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 44))
{var inst_15416 = (state_15423[2]);var state_15423__$1 = (function (){var statearr_15464 = state_15423;(statearr_15464[28] = inst_15416);
return statearr_15464;
})();var statearr_15465_15535 = state_15423__$1;(statearr_15465_15535[2] = null);
(statearr_15465_15535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 6))
{var inst_15355 = (state_15423[29]);var inst_15354 = cljs.core.deref.call(null,cs);var inst_15355__$1 = cljs.core.keys.call(null,inst_15354);var inst_15356 = cljs.core.count.call(null,inst_15355__$1);var inst_15357 = cljs.core.reset_BANG_.call(null,dctr,inst_15356);var inst_15362 = cljs.core.seq.call(null,inst_15355__$1);var inst_15363 = inst_15362;var inst_15364 = null;var inst_15365 = 0;var inst_15366 = 0;var state_15423__$1 = (function (){var statearr_15466 = state_15423;(statearr_15466[20] = inst_15363);
(statearr_15466[30] = inst_15357);
(statearr_15466[29] = inst_15355__$1);
(statearr_15466[10] = inst_15366);
(statearr_15466[21] = inst_15365);
(statearr_15466[11] = inst_15364);
return statearr_15466;
})();var statearr_15467_15536 = state_15423__$1;(statearr_15467_15536[2] = null);
(statearr_15467_15536[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 28))
{var inst_15363 = (state_15423[20]);var inst_15382 = (state_15423[25]);var inst_15382__$1 = cljs.core.seq.call(null,inst_15363);var state_15423__$1 = (function (){var statearr_15468 = state_15423;(statearr_15468[25] = inst_15382__$1);
return statearr_15468;
})();if(inst_15382__$1)
{var statearr_15469_15537 = state_15423__$1;(statearr_15469_15537[1] = 33);
} else
{var statearr_15470_15538 = state_15423__$1;(statearr_15470_15538[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 25))
{var inst_15366 = (state_15423[10]);var inst_15365 = (state_15423[21]);var inst_15368 = (inst_15366 < inst_15365);var inst_15369 = inst_15368;var state_15423__$1 = state_15423;if(cljs.core.truth_(inst_15369))
{var statearr_15471_15539 = state_15423__$1;(statearr_15471_15539[1] = 27);
} else
{var statearr_15472_15540 = state_15423__$1;(statearr_15472_15540[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 34))
{var state_15423__$1 = state_15423;var statearr_15473_15541 = state_15423__$1;(statearr_15473_15541[2] = null);
(statearr_15473_15541[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 17))
{var state_15423__$1 = state_15423;var statearr_15474_15542 = state_15423__$1;(statearr_15474_15542[2] = null);
(statearr_15474_15542[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 3))
{var inst_15421 = (state_15423[2]);var state_15423__$1 = state_15423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15423__$1,inst_15421);
} else
{if((state_val_15424 === 12))
{var inst_15350 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15475_15543 = state_15423__$1;(statearr_15475_15543[2] = inst_15350);
(statearr_15475_15543[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 2))
{var state_15423__$1 = state_15423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15423__$1,4,ch);
} else
{if((state_val_15424 === 23))
{var state_15423__$1 = state_15423;var statearr_15476_15544 = state_15423__$1;(statearr_15476_15544[2] = null);
(statearr_15476_15544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 35))
{var inst_15405 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15477_15545 = state_15423__$1;(statearr_15477_15545[2] = inst_15405);
(statearr_15477_15545[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 19))
{var inst_15324 = (state_15423[7]);var inst_15328 = cljs.core.chunk_first.call(null,inst_15324);var inst_15329 = cljs.core.chunk_rest.call(null,inst_15324);var inst_15330 = cljs.core.count.call(null,inst_15328);var inst_15304 = inst_15329;var inst_15305 = inst_15328;var inst_15306 = inst_15330;var inst_15307 = 0;var state_15423__$1 = (function (){var statearr_15478 = state_15423;(statearr_15478[13] = inst_15304);
(statearr_15478[14] = inst_15307);
(statearr_15478[16] = inst_15305);
(statearr_15478[17] = inst_15306);
return statearr_15478;
})();var statearr_15479_15546 = state_15423__$1;(statearr_15479_15546[2] = null);
(statearr_15479_15546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 11))
{var inst_15304 = (state_15423[13]);var inst_15324 = (state_15423[7]);var inst_15324__$1 = cljs.core.seq.call(null,inst_15304);var state_15423__$1 = (function (){var statearr_15480 = state_15423;(statearr_15480[7] = inst_15324__$1);
return statearr_15480;
})();if(inst_15324__$1)
{var statearr_15481_15547 = state_15423__$1;(statearr_15481_15547[1] = 16);
} else
{var statearr_15482_15548 = state_15423__$1;(statearr_15482_15548[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 9))
{var inst_15352 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15483_15549 = state_15423__$1;(statearr_15483_15549[2] = inst_15352);
(statearr_15483_15549[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 5))
{var inst_15302 = cljs.core.deref.call(null,cs);var inst_15303 = cljs.core.seq.call(null,inst_15302);var inst_15304 = inst_15303;var inst_15305 = null;var inst_15306 = 0;var inst_15307 = 0;var state_15423__$1 = (function (){var statearr_15484 = state_15423;(statearr_15484[13] = inst_15304);
(statearr_15484[14] = inst_15307);
(statearr_15484[16] = inst_15305);
(statearr_15484[17] = inst_15306);
return statearr_15484;
})();var statearr_15485_15550 = state_15423__$1;(statearr_15485_15550[2] = null);
(statearr_15485_15550[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 14))
{var state_15423__$1 = state_15423;var statearr_15486_15551 = state_15423__$1;(statearr_15486_15551[2] = null);
(statearr_15486_15551[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 45))
{var inst_15413 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15487_15552 = state_15423__$1;(statearr_15487_15552[2] = inst_15413);
(statearr_15487_15552[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 26))
{var inst_15355 = (state_15423[29]);var inst_15409 = (state_15423[2]);var inst_15410 = cljs.core.seq.call(null,inst_15355);var state_15423__$1 = (function (){var statearr_15488 = state_15423;(statearr_15488[31] = inst_15409);
return statearr_15488;
})();if(inst_15410)
{var statearr_15489_15553 = state_15423__$1;(statearr_15489_15553[1] = 42);
} else
{var statearr_15490_15554 = state_15423__$1;(statearr_15490_15554[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 16))
{var inst_15324 = (state_15423[7]);var inst_15326 = cljs.core.chunked_seq_QMARK_.call(null,inst_15324);var state_15423__$1 = state_15423;if(inst_15326)
{var statearr_15491_15555 = state_15423__$1;(statearr_15491_15555[1] = 19);
} else
{var statearr_15492_15556 = state_15423__$1;(statearr_15492_15556[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 38))
{var inst_15402 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15493_15557 = state_15423__$1;(statearr_15493_15557[2] = inst_15402);
(statearr_15493_15557[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 30))
{var state_15423__$1 = state_15423;var statearr_15494_15558 = state_15423__$1;(statearr_15494_15558[2] = null);
(statearr_15494_15558[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 10))
{var inst_15307 = (state_15423[14]);var inst_15305 = (state_15423[16]);var inst_15313 = cljs.core._nth.call(null,inst_15305,inst_15307);var inst_15314 = cljs.core.nth.call(null,inst_15313,0,null);var inst_15315 = cljs.core.nth.call(null,inst_15313,1,null);var state_15423__$1 = (function (){var statearr_15495 = state_15423;(statearr_15495[26] = inst_15314);
return statearr_15495;
})();if(cljs.core.truth_(inst_15315))
{var statearr_15496_15559 = state_15423__$1;(statearr_15496_15559[1] = 13);
} else
{var statearr_15497_15560 = state_15423__$1;(statearr_15497_15560[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 18))
{var inst_15348 = (state_15423[2]);var state_15423__$1 = state_15423;var statearr_15498_15561 = state_15423__$1;(statearr_15498_15561[2] = inst_15348);
(statearr_15498_15561[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 42))
{var state_15423__$1 = state_15423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15423__$1,45,dchan);
} else
{if((state_val_15424 === 37))
{var inst_15295 = (state_15423[12]);var inst_15382 = (state_15423[25]);var inst_15391 = (state_15423[23]);var inst_15391__$1 = cljs.core.first.call(null,inst_15382);var inst_15392 = cljs.core.async.put_BANG_.call(null,inst_15391__$1,inst_15295,done);var state_15423__$1 = (function (){var statearr_15499 = state_15423;(statearr_15499[23] = inst_15391__$1);
return statearr_15499;
})();if(cljs.core.truth_(inst_15392))
{var statearr_15500_15562 = state_15423__$1;(statearr_15500_15562[1] = 39);
} else
{var statearr_15501_15563 = state_15423__$1;(statearr_15501_15563[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15424 === 8))
{var inst_15307 = (state_15423[14]);var inst_15306 = (state_15423[17]);var inst_15309 = (inst_15307 < inst_15306);var inst_15310 = inst_15309;var state_15423__$1 = state_15423;if(cljs.core.truth_(inst_15310))
{var statearr_15502_15564 = state_15423__$1;(statearr_15502_15564[1] = 10);
} else
{var statearr_15503_15565 = state_15423__$1;(statearr_15503_15565[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___15511,cs,m,dchan,dctr,done))
;return ((function (switch__10155__auto__,c__10219__auto___15511,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_15507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15507[0] = state_machine__10156__auto__);
(statearr_15507[1] = 1);
return statearr_15507;
});
var state_machine__10156__auto____1 = (function (state_15423){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_15423);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e15508){if((e15508 instanceof Object))
{var ex__10159__auto__ = e15508;var statearr_15509_15566 = state_15423;(statearr_15509_15566[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15567 = state_15423;
state_15423 = G__15567;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_15423){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_15423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___15511,cs,m,dchan,dctr,done))
})();var state__10221__auto__ = (function (){var statearr_15510 = f__10220__auto__.call(null);(statearr_15510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___15511);
return statearr_15510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___15511,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15569 = {};return obj15569;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15689 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15690){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15690 = meta15690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15689.cljs$lang$type = true;
cljs.core.async.t15689.cljs$lang$ctorStr = "cljs.core.async/t15689";
cljs.core.async.t15689.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t15689");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15691){var self__ = this;
var _15691__$1 = this;return self__.meta15690;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15691,meta15690__$1){var self__ = this;
var _15691__$1 = this;return (new cljs.core.async.t15689(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15690__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15689 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15689(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15690){return (new cljs.core.async.t15689(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15690));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15689(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10219__auto___15808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15761){var state_val_15762 = (state_15761[1]);if((state_val_15762 === 7))
{var inst_15705 = (state_15761[7]);var inst_15710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15705);var state_15761__$1 = state_15761;var statearr_15763_15809 = state_15761__$1;(statearr_15763_15809[2] = inst_15710);
(statearr_15763_15809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 20))
{var inst_15720 = (state_15761[8]);var state_15761__$1 = state_15761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15761__$1,23,out,inst_15720);
} else
{if((state_val_15762 === 1))
{var inst_15695 = (state_15761[9]);var inst_15695__$1 = calc_state.call(null);var inst_15696 = cljs.core.seq_QMARK_.call(null,inst_15695__$1);var state_15761__$1 = (function (){var statearr_15764 = state_15761;(statearr_15764[9] = inst_15695__$1);
return statearr_15764;
})();if(inst_15696)
{var statearr_15765_15810 = state_15761__$1;(statearr_15765_15810[1] = 2);
} else
{var statearr_15766_15811 = state_15761__$1;(statearr_15766_15811[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 24))
{var inst_15713 = (state_15761[10]);var inst_15705 = inst_15713;var state_15761__$1 = (function (){var statearr_15767 = state_15761;(statearr_15767[7] = inst_15705);
return statearr_15767;
})();var statearr_15768_15812 = state_15761__$1;(statearr_15768_15812[2] = null);
(statearr_15768_15812[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 4))
{var inst_15695 = (state_15761[9]);var inst_15701 = (state_15761[2]);var inst_15702 = cljs.core.get.call(null,inst_15701,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15703 = cljs.core.get.call(null,inst_15701,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15704 = cljs.core.get.call(null,inst_15701,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15705 = inst_15695;var state_15761__$1 = (function (){var statearr_15769 = state_15761;(statearr_15769[11] = inst_15702);
(statearr_15769[12] = inst_15704);
(statearr_15769[13] = inst_15703);
(statearr_15769[7] = inst_15705);
return statearr_15769;
})();var statearr_15770_15813 = state_15761__$1;(statearr_15770_15813[2] = null);
(statearr_15770_15813[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 15))
{var state_15761__$1 = state_15761;var statearr_15771_15814 = state_15761__$1;(statearr_15771_15814[2] = null);
(statearr_15771_15814[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 21))
{var inst_15713 = (state_15761[10]);var inst_15705 = inst_15713;var state_15761__$1 = (function (){var statearr_15772 = state_15761;(statearr_15772[7] = inst_15705);
return statearr_15772;
})();var statearr_15773_15815 = state_15761__$1;(statearr_15773_15815[2] = null);
(statearr_15773_15815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 13))
{var inst_15757 = (state_15761[2]);var state_15761__$1 = state_15761;var statearr_15774_15816 = state_15761__$1;(statearr_15774_15816[2] = inst_15757);
(statearr_15774_15816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 22))
{var inst_15755 = (state_15761[2]);var state_15761__$1 = state_15761;var statearr_15775_15817 = state_15761__$1;(statearr_15775_15817[2] = inst_15755);
(statearr_15775_15817[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 6))
{var inst_15759 = (state_15761[2]);var state_15761__$1 = state_15761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15761__$1,inst_15759);
} else
{if((state_val_15762 === 25))
{var state_15761__$1 = state_15761;var statearr_15776_15818 = state_15761__$1;(statearr_15776_15818[2] = null);
(statearr_15776_15818[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 17))
{var inst_15735 = (state_15761[14]);var state_15761__$1 = state_15761;var statearr_15777_15819 = state_15761__$1;(statearr_15777_15819[2] = inst_15735);
(statearr_15777_15819[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 3))
{var inst_15695 = (state_15761[9]);var state_15761__$1 = state_15761;var statearr_15778_15820 = state_15761__$1;(statearr_15778_15820[2] = inst_15695);
(statearr_15778_15820[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 12))
{var inst_15721 = (state_15761[15]);var inst_15716 = (state_15761[16]);var inst_15735 = (state_15761[14]);var inst_15735__$1 = inst_15716.call(null,inst_15721);var state_15761__$1 = (function (){var statearr_15779 = state_15761;(statearr_15779[14] = inst_15735__$1);
return statearr_15779;
})();if(cljs.core.truth_(inst_15735__$1))
{var statearr_15780_15821 = state_15761__$1;(statearr_15780_15821[1] = 17);
} else
{var statearr_15781_15822 = state_15761__$1;(statearr_15781_15822[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 2))
{var inst_15695 = (state_15761[9]);var inst_15698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15695);var state_15761__$1 = state_15761;var statearr_15782_15823 = state_15761__$1;(statearr_15782_15823[2] = inst_15698);
(statearr_15782_15823[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 23))
{var inst_15746 = (state_15761[2]);var state_15761__$1 = state_15761;if(cljs.core.truth_(inst_15746))
{var statearr_15783_15824 = state_15761__$1;(statearr_15783_15824[1] = 24);
} else
{var statearr_15784_15825 = state_15761__$1;(statearr_15784_15825[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 19))
{var inst_15743 = (state_15761[2]);var state_15761__$1 = state_15761;if(cljs.core.truth_(inst_15743))
{var statearr_15785_15826 = state_15761__$1;(statearr_15785_15826[1] = 20);
} else
{var statearr_15786_15827 = state_15761__$1;(statearr_15786_15827[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 11))
{var inst_15720 = (state_15761[8]);var inst_15726 = (inst_15720 == null);var state_15761__$1 = state_15761;if(cljs.core.truth_(inst_15726))
{var statearr_15787_15828 = state_15761__$1;(statearr_15787_15828[1] = 14);
} else
{var statearr_15788_15829 = state_15761__$1;(statearr_15788_15829[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 9))
{var inst_15713 = (state_15761[10]);var inst_15713__$1 = (state_15761[2]);var inst_15714 = cljs.core.get.call(null,inst_15713__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15715 = cljs.core.get.call(null,inst_15713__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15716 = cljs.core.get.call(null,inst_15713__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15761__$1 = (function (){var statearr_15789 = state_15761;(statearr_15789[17] = inst_15715);
(statearr_15789[16] = inst_15716);
(statearr_15789[10] = inst_15713__$1);
return statearr_15789;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15761__$1,10,inst_15714);
} else
{if((state_val_15762 === 5))
{var inst_15705 = (state_15761[7]);var inst_15708 = cljs.core.seq_QMARK_.call(null,inst_15705);var state_15761__$1 = state_15761;if(inst_15708)
{var statearr_15790_15830 = state_15761__$1;(statearr_15790_15830[1] = 7);
} else
{var statearr_15791_15831 = state_15761__$1;(statearr_15791_15831[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 14))
{var inst_15721 = (state_15761[15]);var inst_15728 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15721);var state_15761__$1 = state_15761;var statearr_15792_15832 = state_15761__$1;(statearr_15792_15832[2] = inst_15728);
(statearr_15792_15832[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 26))
{var inst_15751 = (state_15761[2]);var state_15761__$1 = state_15761;var statearr_15793_15833 = state_15761__$1;(statearr_15793_15833[2] = inst_15751);
(statearr_15793_15833[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 16))
{var inst_15731 = (state_15761[2]);var inst_15732 = calc_state.call(null);var inst_15705 = inst_15732;var state_15761__$1 = (function (){var statearr_15794 = state_15761;(statearr_15794[18] = inst_15731);
(statearr_15794[7] = inst_15705);
return statearr_15794;
})();var statearr_15795_15834 = state_15761__$1;(statearr_15795_15834[2] = null);
(statearr_15795_15834[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 10))
{var inst_15721 = (state_15761[15]);var inst_15720 = (state_15761[8]);var inst_15719 = (state_15761[2]);var inst_15720__$1 = cljs.core.nth.call(null,inst_15719,0,null);var inst_15721__$1 = cljs.core.nth.call(null,inst_15719,1,null);var inst_15722 = (inst_15720__$1 == null);var inst_15723 = cljs.core._EQ_.call(null,inst_15721__$1,change);var inst_15724 = (inst_15722) || (inst_15723);var state_15761__$1 = (function (){var statearr_15796 = state_15761;(statearr_15796[15] = inst_15721__$1);
(statearr_15796[8] = inst_15720__$1);
return statearr_15796;
})();if(cljs.core.truth_(inst_15724))
{var statearr_15797_15835 = state_15761__$1;(statearr_15797_15835[1] = 11);
} else
{var statearr_15798_15836 = state_15761__$1;(statearr_15798_15836[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 18))
{var inst_15715 = (state_15761[17]);var inst_15721 = (state_15761[15]);var inst_15716 = (state_15761[16]);var inst_15738 = cljs.core.empty_QMARK_.call(null,inst_15716);var inst_15739 = inst_15715.call(null,inst_15721);var inst_15740 = cljs.core.not.call(null,inst_15739);var inst_15741 = (inst_15738) && (inst_15740);var state_15761__$1 = state_15761;var statearr_15799_15837 = state_15761__$1;(statearr_15799_15837[2] = inst_15741);
(statearr_15799_15837[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15762 === 8))
{var inst_15705 = (state_15761[7]);var state_15761__$1 = state_15761;var statearr_15800_15838 = state_15761__$1;(statearr_15800_15838[2] = inst_15705);
(statearr_15800_15838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10155__auto__,c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_15804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15804[0] = state_machine__10156__auto__);
(statearr_15804[1] = 1);
return statearr_15804;
});
var state_machine__10156__auto____1 = (function (state_15761){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_15761);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e15805){if((e15805 instanceof Object))
{var ex__10159__auto__ = e15805;var statearr_15806_15839 = state_15761;(statearr_15806_15839[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15840 = state_15761;
state_15761 = G__15840;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_15761){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_15761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10221__auto__ = (function (){var statearr_15807 = f__10220__auto__.call(null);(statearr_15807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___15808);
return statearr_15807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___15808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15842 = {};return obj15842;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7869__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7869__auto__,mults){
return (function (p1__15843_SHARP_){if(cljs.core.truth_(p1__15843_SHARP_.call(null,topic)))
{return p1__15843_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15843_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7869__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15958 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15959){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15959 = meta15959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15958.cljs$lang$type = true;
cljs.core.async.t15958.cljs$lang$ctorStr = "cljs.core.async/t15958";
cljs.core.async.t15958.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t15958");
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15958.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15960){var self__ = this;
var _15960__$1 = this;return self__.meta15959;
});})(mults,ensure_mult))
;
cljs.core.async.t15958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15960,meta15959__$1){var self__ = this;
var _15960__$1 = this;return (new cljs.core.async.t15958(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15959__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15958 = ((function (mults,ensure_mult){
return (function __GT_t15958(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15959){return (new cljs.core.async.t15958(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15959));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15958(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10219__auto___16072 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16072,mults,ensure_mult,p){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16072,mults,ensure_mult,p){
return (function (state_16028){var state_val_16029 = (state_16028[1]);if((state_val_16029 === 7))
{var inst_16024 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16030_16073 = state_16028__$1;(statearr_16030_16073[2] = inst_16024);
(statearr_16030_16073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 20))
{var state_16028__$1 = state_16028;var statearr_16031_16074 = state_16028__$1;(statearr_16031_16074[2] = null);
(statearr_16031_16074[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 1))
{var state_16028__$1 = state_16028;var statearr_16032_16075 = state_16028__$1;(statearr_16032_16075[2] = null);
(statearr_16032_16075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 4))
{var inst_15963 = (state_16028[7]);var inst_15963__$1 = (state_16028[2]);var inst_15964 = (inst_15963__$1 == null);var state_16028__$1 = (function (){var statearr_16033 = state_16028;(statearr_16033[7] = inst_15963__$1);
return statearr_16033;
})();if(cljs.core.truth_(inst_15964))
{var statearr_16034_16076 = state_16028__$1;(statearr_16034_16076[1] = 5);
} else
{var statearr_16035_16077 = state_16028__$1;(statearr_16035_16077[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 15))
{var inst_16005 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16036_16078 = state_16028__$1;(statearr_16036_16078[2] = inst_16005);
(statearr_16036_16078[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 21))
{var inst_16011 = (state_16028[8]);var inst_16019 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16011);var state_16028__$1 = state_16028;var statearr_16037_16079 = state_16028__$1;(statearr_16037_16079[2] = inst_16019);
(statearr_16037_16079[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 13))
{var inst_15987 = (state_16028[9]);var inst_15989 = cljs.core.chunked_seq_QMARK_.call(null,inst_15987);var state_16028__$1 = state_16028;if(inst_15989)
{var statearr_16038_16080 = state_16028__$1;(statearr_16038_16080[1] = 16);
} else
{var statearr_16039_16081 = state_16028__$1;(statearr_16039_16081[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 22))
{var inst_16021 = (state_16028[2]);var state_16028__$1 = (function (){var statearr_16040 = state_16028;(statearr_16040[10] = inst_16021);
return statearr_16040;
})();var statearr_16041_16082 = state_16028__$1;(statearr_16041_16082[2] = null);
(statearr_16041_16082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 6))
{var inst_16011 = (state_16028[8]);var inst_15963 = (state_16028[7]);var inst_16011__$1 = topic_fn.call(null,inst_15963);var inst_16012 = cljs.core.deref.call(null,mults);var inst_16013 = cljs.core.get.call(null,inst_16012,inst_16011__$1);var inst_16014 = cljs.core.async.muxch_STAR_.call(null,inst_16013);var state_16028__$1 = (function (){var statearr_16042 = state_16028;(statearr_16042[8] = inst_16011__$1);
return statearr_16042;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16028__$1,19,inst_16014,inst_15963);
} else
{if((state_val_16029 === 17))
{var inst_15987 = (state_16028[9]);var inst_15996 = cljs.core.first.call(null,inst_15987);var inst_15997 = cljs.core.async.muxch_STAR_.call(null,inst_15996);var inst_15998 = cljs.core.async.close_BANG_.call(null,inst_15997);var inst_15999 = cljs.core.next.call(null,inst_15987);var inst_15973 = inst_15999;var inst_15974 = null;var inst_15975 = 0;var inst_15976 = 0;var state_16028__$1 = (function (){var statearr_16043 = state_16028;(statearr_16043[11] = inst_15973);
(statearr_16043[12] = inst_15976);
(statearr_16043[13] = inst_15975);
(statearr_16043[14] = inst_15974);
(statearr_16043[15] = inst_15998);
return statearr_16043;
})();var statearr_16044_16083 = state_16028__$1;(statearr_16044_16083[2] = null);
(statearr_16044_16083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 3))
{var inst_16026 = (state_16028[2]);var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16028__$1,inst_16026);
} else
{if((state_val_16029 === 12))
{var inst_16007 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16045_16084 = state_16028__$1;(statearr_16045_16084[2] = inst_16007);
(statearr_16045_16084[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 2))
{var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16028__$1,4,ch);
} else
{if((state_val_16029 === 19))
{var inst_16016 = (state_16028[2]);var state_16028__$1 = state_16028;if(cljs.core.truth_(inst_16016))
{var statearr_16046_16085 = state_16028__$1;(statearr_16046_16085[1] = 20);
} else
{var statearr_16047_16086 = state_16028__$1;(statearr_16047_16086[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 11))
{var inst_15973 = (state_16028[11]);var inst_15987 = (state_16028[9]);var inst_15987__$1 = cljs.core.seq.call(null,inst_15973);var state_16028__$1 = (function (){var statearr_16048 = state_16028;(statearr_16048[9] = inst_15987__$1);
return statearr_16048;
})();if(inst_15987__$1)
{var statearr_16049_16087 = state_16028__$1;(statearr_16049_16087[1] = 13);
} else
{var statearr_16050_16088 = state_16028__$1;(statearr_16050_16088[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 9))
{var inst_16009 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16051_16089 = state_16028__$1;(statearr_16051_16089[2] = inst_16009);
(statearr_16051_16089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 5))
{var inst_15970 = cljs.core.deref.call(null,mults);var inst_15971 = cljs.core.vals.call(null,inst_15970);var inst_15972 = cljs.core.seq.call(null,inst_15971);var inst_15973 = inst_15972;var inst_15974 = null;var inst_15975 = 0;var inst_15976 = 0;var state_16028__$1 = (function (){var statearr_16052 = state_16028;(statearr_16052[11] = inst_15973);
(statearr_16052[12] = inst_15976);
(statearr_16052[13] = inst_15975);
(statearr_16052[14] = inst_15974);
return statearr_16052;
})();var statearr_16053_16090 = state_16028__$1;(statearr_16053_16090[2] = null);
(statearr_16053_16090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 14))
{var state_16028__$1 = state_16028;var statearr_16057_16091 = state_16028__$1;(statearr_16057_16091[2] = null);
(statearr_16057_16091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 16))
{var inst_15987 = (state_16028[9]);var inst_15991 = cljs.core.chunk_first.call(null,inst_15987);var inst_15992 = cljs.core.chunk_rest.call(null,inst_15987);var inst_15993 = cljs.core.count.call(null,inst_15991);var inst_15973 = inst_15992;var inst_15974 = inst_15991;var inst_15975 = inst_15993;var inst_15976 = 0;var state_16028__$1 = (function (){var statearr_16058 = state_16028;(statearr_16058[11] = inst_15973);
(statearr_16058[12] = inst_15976);
(statearr_16058[13] = inst_15975);
(statearr_16058[14] = inst_15974);
return statearr_16058;
})();var statearr_16059_16092 = state_16028__$1;(statearr_16059_16092[2] = null);
(statearr_16059_16092[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 10))
{var inst_15973 = (state_16028[11]);var inst_15976 = (state_16028[12]);var inst_15975 = (state_16028[13]);var inst_15974 = (state_16028[14]);var inst_15981 = cljs.core._nth.call(null,inst_15974,inst_15976);var inst_15982 = cljs.core.async.muxch_STAR_.call(null,inst_15981);var inst_15983 = cljs.core.async.close_BANG_.call(null,inst_15982);var inst_15984 = (inst_15976 + 1);var tmp16054 = inst_15973;var tmp16055 = inst_15975;var tmp16056 = inst_15974;var inst_15973__$1 = tmp16054;var inst_15974__$1 = tmp16056;var inst_15975__$1 = tmp16055;var inst_15976__$1 = inst_15984;var state_16028__$1 = (function (){var statearr_16060 = state_16028;(statearr_16060[11] = inst_15973__$1);
(statearr_16060[12] = inst_15976__$1);
(statearr_16060[13] = inst_15975__$1);
(statearr_16060[16] = inst_15983);
(statearr_16060[14] = inst_15974__$1);
return statearr_16060;
})();var statearr_16061_16093 = state_16028__$1;(statearr_16061_16093[2] = null);
(statearr_16061_16093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 18))
{var inst_16002 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16062_16094 = state_16028__$1;(statearr_16062_16094[2] = inst_16002);
(statearr_16062_16094[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 8))
{var inst_15976 = (state_16028[12]);var inst_15975 = (state_16028[13]);var inst_15978 = (inst_15976 < inst_15975);var inst_15979 = inst_15978;var state_16028__$1 = state_16028;if(cljs.core.truth_(inst_15979))
{var statearr_16063_16095 = state_16028__$1;(statearr_16063_16095[1] = 10);
} else
{var statearr_16064_16096 = state_16028__$1;(statearr_16064_16096[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16072,mults,ensure_mult,p))
;return ((function (switch__10155__auto__,c__10219__auto___16072,mults,ensure_mult,p){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16068[0] = state_machine__10156__auto__);
(statearr_16068[1] = 1);
return statearr_16068;
});
var state_machine__10156__auto____1 = (function (state_16028){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16028);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16069){if((e16069 instanceof Object))
{var ex__10159__auto__ = e16069;var statearr_16070_16097 = state_16028;(statearr_16070_16097[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16098 = state_16028;
state_16028 = G__16098;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16028){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16072,mults,ensure_mult,p))
})();var state__10221__auto__ = (function (){var statearr_16071 = f__10220__auto__.call(null);(statearr_16071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16072);
return statearr_16071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16072,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10219__auto___16235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16205){var state_val_16206 = (state_16205[1]);if((state_val_16206 === 7))
{var state_16205__$1 = state_16205;var statearr_16207_16236 = state_16205__$1;(statearr_16207_16236[2] = null);
(statearr_16207_16236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 1))
{var state_16205__$1 = state_16205;var statearr_16208_16237 = state_16205__$1;(statearr_16208_16237[2] = null);
(statearr_16208_16237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 4))
{var inst_16169 = (state_16205[7]);var inst_16171 = (inst_16169 < cnt);var state_16205__$1 = state_16205;if(cljs.core.truth_(inst_16171))
{var statearr_16209_16238 = state_16205__$1;(statearr_16209_16238[1] = 6);
} else
{var statearr_16210_16239 = state_16205__$1;(statearr_16210_16239[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 15))
{var inst_16201 = (state_16205[2]);var state_16205__$1 = state_16205;var statearr_16211_16240 = state_16205__$1;(statearr_16211_16240[2] = inst_16201);
(statearr_16211_16240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 13))
{var inst_16194 = cljs.core.async.close_BANG_.call(null,out);var state_16205__$1 = state_16205;var statearr_16212_16241 = state_16205__$1;(statearr_16212_16241[2] = inst_16194);
(statearr_16212_16241[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 6))
{var state_16205__$1 = state_16205;var statearr_16213_16242 = state_16205__$1;(statearr_16213_16242[2] = null);
(statearr_16213_16242[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 3))
{var inst_16203 = (state_16205[2]);var state_16205__$1 = state_16205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16205__$1,inst_16203);
} else
{if((state_val_16206 === 12))
{var inst_16191 = (state_16205[8]);var inst_16191__$1 = (state_16205[2]);var inst_16192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16191__$1);var state_16205__$1 = (function (){var statearr_16214 = state_16205;(statearr_16214[8] = inst_16191__$1);
return statearr_16214;
})();if(cljs.core.truth_(inst_16192))
{var statearr_16215_16243 = state_16205__$1;(statearr_16215_16243[1] = 13);
} else
{var statearr_16216_16244 = state_16205__$1;(statearr_16216_16244[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 2))
{var inst_16168 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16169 = 0;var state_16205__$1 = (function (){var statearr_16217 = state_16205;(statearr_16217[9] = inst_16168);
(statearr_16217[7] = inst_16169);
return statearr_16217;
})();var statearr_16218_16245 = state_16205__$1;(statearr_16218_16245[2] = null);
(statearr_16218_16245[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 11))
{var inst_16169 = (state_16205[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16205,10,Object,null,9);var inst_16178 = chs__$1.call(null,inst_16169);var inst_16179 = done.call(null,inst_16169);var inst_16180 = cljs.core.async.take_BANG_.call(null,inst_16178,inst_16179);var state_16205__$1 = state_16205;var statearr_16219_16246 = state_16205__$1;(statearr_16219_16246[2] = inst_16180);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 9))
{var inst_16169 = (state_16205[7]);var inst_16182 = (state_16205[2]);var inst_16183 = (inst_16169 + 1);var inst_16169__$1 = inst_16183;var state_16205__$1 = (function (){var statearr_16220 = state_16205;(statearr_16220[10] = inst_16182);
(statearr_16220[7] = inst_16169__$1);
return statearr_16220;
})();var statearr_16221_16247 = state_16205__$1;(statearr_16221_16247[2] = null);
(statearr_16221_16247[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 5))
{var inst_16189 = (state_16205[2]);var state_16205__$1 = (function (){var statearr_16222 = state_16205;(statearr_16222[11] = inst_16189);
return statearr_16222;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16205__$1,12,dchan);
} else
{if((state_val_16206 === 14))
{var inst_16191 = (state_16205[8]);var inst_16196 = cljs.core.apply.call(null,f,inst_16191);var state_16205__$1 = state_16205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16205__$1,16,out,inst_16196);
} else
{if((state_val_16206 === 16))
{var inst_16198 = (state_16205[2]);var state_16205__$1 = (function (){var statearr_16223 = state_16205;(statearr_16223[12] = inst_16198);
return statearr_16223;
})();var statearr_16224_16248 = state_16205__$1;(statearr_16224_16248[2] = null);
(statearr_16224_16248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 10))
{var inst_16173 = (state_16205[2]);var inst_16174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16205__$1 = (function (){var statearr_16225 = state_16205;(statearr_16225[13] = inst_16173);
return statearr_16225;
})();var statearr_16226_16249 = state_16205__$1;(statearr_16226_16249[2] = inst_16174);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16206 === 8))
{var inst_16187 = (state_16205[2]);var state_16205__$1 = state_16205;var statearr_16227_16250 = state_16205__$1;(statearr_16227_16250[2] = inst_16187);
(statearr_16227_16250[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10155__auto__,c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16231[0] = state_machine__10156__auto__);
(statearr_16231[1] = 1);
return statearr_16231;
});
var state_machine__10156__auto____1 = (function (state_16205){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16205);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16232){if((e16232 instanceof Object))
{var ex__10159__auto__ = e16232;var statearr_16233_16251 = state_16205;(statearr_16233_16251[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16252 = state_16205;
state_16205 = G__16252;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16205){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10221__auto__ = (function (){var statearr_16234 = f__10220__auto__.call(null);(statearr_16234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16235);
return statearr_16234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16235,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___16360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16360,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16360,out){
return (function (state_16336){var state_val_16337 = (state_16336[1]);if((state_val_16337 === 7))
{var inst_16315 = (state_16336[7]);var inst_16316 = (state_16336[8]);var inst_16315__$1 = (state_16336[2]);var inst_16316__$1 = cljs.core.nth.call(null,inst_16315__$1,0,null);var inst_16317 = cljs.core.nth.call(null,inst_16315__$1,1,null);var inst_16318 = (inst_16316__$1 == null);var state_16336__$1 = (function (){var statearr_16338 = state_16336;(statearr_16338[7] = inst_16315__$1);
(statearr_16338[9] = inst_16317);
(statearr_16338[8] = inst_16316__$1);
return statearr_16338;
})();if(cljs.core.truth_(inst_16318))
{var statearr_16339_16361 = state_16336__$1;(statearr_16339_16361[1] = 8);
} else
{var statearr_16340_16362 = state_16336__$1;(statearr_16340_16362[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 1))
{var inst_16307 = cljs.core.vec.call(null,chs);var inst_16308 = inst_16307;var state_16336__$1 = (function (){var statearr_16341 = state_16336;(statearr_16341[10] = inst_16308);
return statearr_16341;
})();var statearr_16342_16363 = state_16336__$1;(statearr_16342_16363[2] = null);
(statearr_16342_16363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 4))
{var inst_16308 = (state_16336[10]);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16336__$1,7,inst_16308);
} else
{if((state_val_16337 === 6))
{var inst_16332 = (state_16336[2]);var state_16336__$1 = state_16336;var statearr_16343_16364 = state_16336__$1;(statearr_16343_16364[2] = inst_16332);
(statearr_16343_16364[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 3))
{var inst_16334 = (state_16336[2]);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16336__$1,inst_16334);
} else
{if((state_val_16337 === 2))
{var inst_16308 = (state_16336[10]);var inst_16310 = cljs.core.count.call(null,inst_16308);var inst_16311 = (inst_16310 > 0);var state_16336__$1 = state_16336;if(cljs.core.truth_(inst_16311))
{var statearr_16345_16365 = state_16336__$1;(statearr_16345_16365[1] = 4);
} else
{var statearr_16346_16366 = state_16336__$1;(statearr_16346_16366[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 11))
{var inst_16308 = (state_16336[10]);var inst_16325 = (state_16336[2]);var tmp16344 = inst_16308;var inst_16308__$1 = tmp16344;var state_16336__$1 = (function (){var statearr_16347 = state_16336;(statearr_16347[10] = inst_16308__$1);
(statearr_16347[11] = inst_16325);
return statearr_16347;
})();var statearr_16348_16367 = state_16336__$1;(statearr_16348_16367[2] = null);
(statearr_16348_16367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 9))
{var inst_16316 = (state_16336[8]);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16336__$1,11,out,inst_16316);
} else
{if((state_val_16337 === 5))
{var inst_16330 = cljs.core.async.close_BANG_.call(null,out);var state_16336__$1 = state_16336;var statearr_16349_16368 = state_16336__$1;(statearr_16349_16368[2] = inst_16330);
(statearr_16349_16368[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 10))
{var inst_16328 = (state_16336[2]);var state_16336__$1 = state_16336;var statearr_16350_16369 = state_16336__$1;(statearr_16350_16369[2] = inst_16328);
(statearr_16350_16369[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16337 === 8))
{var inst_16315 = (state_16336[7]);var inst_16317 = (state_16336[9]);var inst_16316 = (state_16336[8]);var inst_16308 = (state_16336[10]);var inst_16320 = (function (){var c = inst_16317;var v = inst_16316;var vec__16313 = inst_16315;var cs = inst_16308;return ((function (c,v,vec__16313,cs,inst_16315,inst_16317,inst_16316,inst_16308,state_val_16337,c__10219__auto___16360,out){
return (function (p1__16253_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16253_SHARP_);
});
;})(c,v,vec__16313,cs,inst_16315,inst_16317,inst_16316,inst_16308,state_val_16337,c__10219__auto___16360,out))
})();var inst_16321 = cljs.core.filterv.call(null,inst_16320,inst_16308);var inst_16308__$1 = inst_16321;var state_16336__$1 = (function (){var statearr_16351 = state_16336;(statearr_16351[10] = inst_16308__$1);
return statearr_16351;
})();var statearr_16352_16370 = state_16336__$1;(statearr_16352_16370[2] = null);
(statearr_16352_16370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16360,out))
;return ((function (switch__10155__auto__,c__10219__auto___16360,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16356 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16356[0] = state_machine__10156__auto__);
(statearr_16356[1] = 1);
return statearr_16356;
});
var state_machine__10156__auto____1 = (function (state_16336){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16336);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16357){if((e16357 instanceof Object))
{var ex__10159__auto__ = e16357;var statearr_16358_16371 = state_16336;(statearr_16358_16371[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16372 = state_16336;
state_16336 = G__16372;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16336){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16360,out))
})();var state__10221__auto__ = (function (){var statearr_16359 = f__10220__auto__.call(null);(statearr_16359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16360);
return statearr_16359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16360,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___16465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16465,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16465,out){
return (function (state_16442){var state_val_16443 = (state_16442[1]);if((state_val_16443 === 7))
{var inst_16424 = (state_16442[7]);var inst_16424__$1 = (state_16442[2]);var inst_16425 = (inst_16424__$1 == null);var inst_16426 = cljs.core.not.call(null,inst_16425);var state_16442__$1 = (function (){var statearr_16444 = state_16442;(statearr_16444[7] = inst_16424__$1);
return statearr_16444;
})();if(inst_16426)
{var statearr_16445_16466 = state_16442__$1;(statearr_16445_16466[1] = 8);
} else
{var statearr_16446_16467 = state_16442__$1;(statearr_16446_16467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 1))
{var inst_16419 = 0;var state_16442__$1 = (function (){var statearr_16447 = state_16442;(statearr_16447[8] = inst_16419);
return statearr_16447;
})();var statearr_16448_16468 = state_16442__$1;(statearr_16448_16468[2] = null);
(statearr_16448_16468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 4))
{var state_16442__$1 = state_16442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16442__$1,7,ch);
} else
{if((state_val_16443 === 6))
{var inst_16437 = (state_16442[2]);var state_16442__$1 = state_16442;var statearr_16449_16469 = state_16442__$1;(statearr_16449_16469[2] = inst_16437);
(statearr_16449_16469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 3))
{var inst_16439 = (state_16442[2]);var inst_16440 = cljs.core.async.close_BANG_.call(null,out);var state_16442__$1 = (function (){var statearr_16450 = state_16442;(statearr_16450[9] = inst_16439);
return statearr_16450;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16442__$1,inst_16440);
} else
{if((state_val_16443 === 2))
{var inst_16419 = (state_16442[8]);var inst_16421 = (inst_16419 < n);var state_16442__$1 = state_16442;if(cljs.core.truth_(inst_16421))
{var statearr_16451_16470 = state_16442__$1;(statearr_16451_16470[1] = 4);
} else
{var statearr_16452_16471 = state_16442__$1;(statearr_16452_16471[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 11))
{var inst_16419 = (state_16442[8]);var inst_16429 = (state_16442[2]);var inst_16430 = (inst_16419 + 1);var inst_16419__$1 = inst_16430;var state_16442__$1 = (function (){var statearr_16453 = state_16442;(statearr_16453[10] = inst_16429);
(statearr_16453[8] = inst_16419__$1);
return statearr_16453;
})();var statearr_16454_16472 = state_16442__$1;(statearr_16454_16472[2] = null);
(statearr_16454_16472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 9))
{var state_16442__$1 = state_16442;var statearr_16455_16473 = state_16442__$1;(statearr_16455_16473[2] = null);
(statearr_16455_16473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 5))
{var state_16442__$1 = state_16442;var statearr_16456_16474 = state_16442__$1;(statearr_16456_16474[2] = null);
(statearr_16456_16474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 10))
{var inst_16434 = (state_16442[2]);var state_16442__$1 = state_16442;var statearr_16457_16475 = state_16442__$1;(statearr_16457_16475[2] = inst_16434);
(statearr_16457_16475[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 8))
{var inst_16424 = (state_16442[7]);var state_16442__$1 = state_16442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16442__$1,11,out,inst_16424);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16465,out))
;return ((function (switch__10155__auto__,c__10219__auto___16465,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16461 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16461[0] = state_machine__10156__auto__);
(statearr_16461[1] = 1);
return statearr_16461;
});
var state_machine__10156__auto____1 = (function (state_16442){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16442);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16462){if((e16462 instanceof Object))
{var ex__10159__auto__ = e16462;var statearr_16463_16476 = state_16442;(statearr_16463_16476[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16477 = state_16442;
state_16442 = G__16477;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16442){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16465,out))
})();var state__10221__auto__ = (function (){var statearr_16464 = f__10220__auto__.call(null);(statearr_16464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16465);
return statearr_16464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16465,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___16574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16574,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16574,out){
return (function (state_16549){var state_val_16550 = (state_16549[1]);if((state_val_16550 === 7))
{var inst_16544 = (state_16549[2]);var state_16549__$1 = state_16549;var statearr_16551_16575 = state_16549__$1;(statearr_16551_16575[2] = inst_16544);
(statearr_16551_16575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 1))
{var inst_16526 = null;var state_16549__$1 = (function (){var statearr_16552 = state_16549;(statearr_16552[7] = inst_16526);
return statearr_16552;
})();var statearr_16553_16576 = state_16549__$1;(statearr_16553_16576[2] = null);
(statearr_16553_16576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 4))
{var inst_16529 = (state_16549[8]);var inst_16529__$1 = (state_16549[2]);var inst_16530 = (inst_16529__$1 == null);var inst_16531 = cljs.core.not.call(null,inst_16530);var state_16549__$1 = (function (){var statearr_16554 = state_16549;(statearr_16554[8] = inst_16529__$1);
return statearr_16554;
})();if(inst_16531)
{var statearr_16555_16577 = state_16549__$1;(statearr_16555_16577[1] = 5);
} else
{var statearr_16556_16578 = state_16549__$1;(statearr_16556_16578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 6))
{var state_16549__$1 = state_16549;var statearr_16557_16579 = state_16549__$1;(statearr_16557_16579[2] = null);
(statearr_16557_16579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 3))
{var inst_16546 = (state_16549[2]);var inst_16547 = cljs.core.async.close_BANG_.call(null,out);var state_16549__$1 = (function (){var statearr_16558 = state_16549;(statearr_16558[9] = inst_16546);
return statearr_16558;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16549__$1,inst_16547);
} else
{if((state_val_16550 === 2))
{var state_16549__$1 = state_16549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,4,ch);
} else
{if((state_val_16550 === 11))
{var inst_16529 = (state_16549[8]);var inst_16538 = (state_16549[2]);var inst_16526 = inst_16529;var state_16549__$1 = (function (){var statearr_16559 = state_16549;(statearr_16559[10] = inst_16538);
(statearr_16559[7] = inst_16526);
return statearr_16559;
})();var statearr_16560_16580 = state_16549__$1;(statearr_16560_16580[2] = null);
(statearr_16560_16580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 9))
{var inst_16529 = (state_16549[8]);var state_16549__$1 = state_16549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16549__$1,11,out,inst_16529);
} else
{if((state_val_16550 === 5))
{var inst_16529 = (state_16549[8]);var inst_16526 = (state_16549[7]);var inst_16533 = cljs.core._EQ_.call(null,inst_16529,inst_16526);var state_16549__$1 = state_16549;if(inst_16533)
{var statearr_16562_16581 = state_16549__$1;(statearr_16562_16581[1] = 8);
} else
{var statearr_16563_16582 = state_16549__$1;(statearr_16563_16582[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 10))
{var inst_16541 = (state_16549[2]);var state_16549__$1 = state_16549;var statearr_16564_16583 = state_16549__$1;(statearr_16564_16583[2] = inst_16541);
(statearr_16564_16583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16550 === 8))
{var inst_16526 = (state_16549[7]);var tmp16561 = inst_16526;var inst_16526__$1 = tmp16561;var state_16549__$1 = (function (){var statearr_16565 = state_16549;(statearr_16565[7] = inst_16526__$1);
return statearr_16565;
})();var statearr_16566_16584 = state_16549__$1;(statearr_16566_16584[2] = null);
(statearr_16566_16584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16574,out))
;return ((function (switch__10155__auto__,c__10219__auto___16574,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16570 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16570[0] = state_machine__10156__auto__);
(statearr_16570[1] = 1);
return statearr_16570;
});
var state_machine__10156__auto____1 = (function (state_16549){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16549);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16571){if((e16571 instanceof Object))
{var ex__10159__auto__ = e16571;var statearr_16572_16585 = state_16549;(statearr_16572_16585[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16586 = state_16549;
state_16549 = G__16586;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16549){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16574,out))
})();var state__10221__auto__ = (function (){var statearr_16573 = f__10220__auto__.call(null);(statearr_16573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16574);
return statearr_16573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16574,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___16721 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16721,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16721,out){
return (function (state_16691){var state_val_16692 = (state_16691[1]);if((state_val_16692 === 7))
{var inst_16687 = (state_16691[2]);var state_16691__$1 = state_16691;var statearr_16693_16722 = state_16691__$1;(statearr_16693_16722[2] = inst_16687);
(statearr_16693_16722[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 1))
{var inst_16654 = (new Array(n));var inst_16655 = inst_16654;var inst_16656 = 0;var state_16691__$1 = (function (){var statearr_16694 = state_16691;(statearr_16694[7] = inst_16656);
(statearr_16694[8] = inst_16655);
return statearr_16694;
})();var statearr_16695_16723 = state_16691__$1;(statearr_16695_16723[2] = null);
(statearr_16695_16723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 4))
{var inst_16659 = (state_16691[9]);var inst_16659__$1 = (state_16691[2]);var inst_16660 = (inst_16659__$1 == null);var inst_16661 = cljs.core.not.call(null,inst_16660);var state_16691__$1 = (function (){var statearr_16696 = state_16691;(statearr_16696[9] = inst_16659__$1);
return statearr_16696;
})();if(inst_16661)
{var statearr_16697_16724 = state_16691__$1;(statearr_16697_16724[1] = 5);
} else
{var statearr_16698_16725 = state_16691__$1;(statearr_16698_16725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 15))
{var inst_16681 = (state_16691[2]);var state_16691__$1 = state_16691;var statearr_16699_16726 = state_16691__$1;(statearr_16699_16726[2] = inst_16681);
(statearr_16699_16726[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 13))
{var state_16691__$1 = state_16691;var statearr_16700_16727 = state_16691__$1;(statearr_16700_16727[2] = null);
(statearr_16700_16727[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 6))
{var inst_16656 = (state_16691[7]);var inst_16677 = (inst_16656 > 0);var state_16691__$1 = state_16691;if(cljs.core.truth_(inst_16677))
{var statearr_16701_16728 = state_16691__$1;(statearr_16701_16728[1] = 12);
} else
{var statearr_16702_16729 = state_16691__$1;(statearr_16702_16729[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 3))
{var inst_16689 = (state_16691[2]);var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16691__$1,inst_16689);
} else
{if((state_val_16692 === 12))
{var inst_16655 = (state_16691[8]);var inst_16679 = cljs.core.vec.call(null,inst_16655);var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16691__$1,15,out,inst_16679);
} else
{if((state_val_16692 === 2))
{var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16691__$1,4,ch);
} else
{if((state_val_16692 === 11))
{var inst_16671 = (state_16691[2]);var inst_16672 = (new Array(n));var inst_16655 = inst_16672;var inst_16656 = 0;var state_16691__$1 = (function (){var statearr_16703 = state_16691;(statearr_16703[7] = inst_16656);
(statearr_16703[8] = inst_16655);
(statearr_16703[10] = inst_16671);
return statearr_16703;
})();var statearr_16704_16730 = state_16691__$1;(statearr_16704_16730[2] = null);
(statearr_16704_16730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 9))
{var inst_16655 = (state_16691[8]);var inst_16669 = cljs.core.vec.call(null,inst_16655);var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16691__$1,11,out,inst_16669);
} else
{if((state_val_16692 === 5))
{var inst_16659 = (state_16691[9]);var inst_16656 = (state_16691[7]);var inst_16664 = (state_16691[11]);var inst_16655 = (state_16691[8]);var inst_16663 = (inst_16655[inst_16656] = inst_16659);var inst_16664__$1 = (inst_16656 + 1);var inst_16665 = (inst_16664__$1 < n);var state_16691__$1 = (function (){var statearr_16705 = state_16691;(statearr_16705[12] = inst_16663);
(statearr_16705[11] = inst_16664__$1);
return statearr_16705;
})();if(cljs.core.truth_(inst_16665))
{var statearr_16706_16731 = state_16691__$1;(statearr_16706_16731[1] = 8);
} else
{var statearr_16707_16732 = state_16691__$1;(statearr_16707_16732[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 14))
{var inst_16684 = (state_16691[2]);var inst_16685 = cljs.core.async.close_BANG_.call(null,out);var state_16691__$1 = (function (){var statearr_16709 = state_16691;(statearr_16709[13] = inst_16684);
return statearr_16709;
})();var statearr_16710_16733 = state_16691__$1;(statearr_16710_16733[2] = inst_16685);
(statearr_16710_16733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 10))
{var inst_16675 = (state_16691[2]);var state_16691__$1 = state_16691;var statearr_16711_16734 = state_16691__$1;(statearr_16711_16734[2] = inst_16675);
(statearr_16711_16734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 8))
{var inst_16664 = (state_16691[11]);var inst_16655 = (state_16691[8]);var tmp16708 = inst_16655;var inst_16655__$1 = tmp16708;var inst_16656 = inst_16664;var state_16691__$1 = (function (){var statearr_16712 = state_16691;(statearr_16712[7] = inst_16656);
(statearr_16712[8] = inst_16655__$1);
return statearr_16712;
})();var statearr_16713_16735 = state_16691__$1;(statearr_16713_16735[2] = null);
(statearr_16713_16735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16721,out))
;return ((function (switch__10155__auto__,c__10219__auto___16721,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16717[0] = state_machine__10156__auto__);
(statearr_16717[1] = 1);
return statearr_16717;
});
var state_machine__10156__auto____1 = (function (state_16691){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16691);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16718){if((e16718 instanceof Object))
{var ex__10159__auto__ = e16718;var statearr_16719_16736 = state_16691;(statearr_16719_16736[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16737 = state_16691;
state_16691 = G__16737;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16691){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16721,out))
})();var state__10221__auto__ = (function (){var statearr_16720 = f__10220__auto__.call(null);(statearr_16720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16721);
return statearr_16720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16721,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10219__auto___16880 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10219__auto___16880,out){
return (function (){var f__10220__auto__ = (function (){var switch__10155__auto__ = ((function (c__10219__auto___16880,out){
return (function (state_16850){var state_val_16851 = (state_16850[1]);if((state_val_16851 === 7))
{var inst_16846 = (state_16850[2]);var state_16850__$1 = state_16850;var statearr_16852_16881 = state_16850__$1;(statearr_16852_16881[2] = inst_16846);
(statearr_16852_16881[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 1))
{var inst_16809 = [];var inst_16810 = inst_16809;var inst_16811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16850__$1 = (function (){var statearr_16853 = state_16850;(statearr_16853[7] = inst_16811);
(statearr_16853[8] = inst_16810);
return statearr_16853;
})();var statearr_16854_16882 = state_16850__$1;(statearr_16854_16882[2] = null);
(statearr_16854_16882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 4))
{var inst_16814 = (state_16850[9]);var inst_16814__$1 = (state_16850[2]);var inst_16815 = (inst_16814__$1 == null);var inst_16816 = cljs.core.not.call(null,inst_16815);var state_16850__$1 = (function (){var statearr_16855 = state_16850;(statearr_16855[9] = inst_16814__$1);
return statearr_16855;
})();if(inst_16816)
{var statearr_16856_16883 = state_16850__$1;(statearr_16856_16883[1] = 5);
} else
{var statearr_16857_16884 = state_16850__$1;(statearr_16857_16884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 15))
{var inst_16840 = (state_16850[2]);var state_16850__$1 = state_16850;var statearr_16858_16885 = state_16850__$1;(statearr_16858_16885[2] = inst_16840);
(statearr_16858_16885[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 13))
{var state_16850__$1 = state_16850;var statearr_16859_16886 = state_16850__$1;(statearr_16859_16886[2] = null);
(statearr_16859_16886[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 6))
{var inst_16810 = (state_16850[8]);var inst_16835 = inst_16810.length;var inst_16836 = (inst_16835 > 0);var state_16850__$1 = state_16850;if(cljs.core.truth_(inst_16836))
{var statearr_16860_16887 = state_16850__$1;(statearr_16860_16887[1] = 12);
} else
{var statearr_16861_16888 = state_16850__$1;(statearr_16861_16888[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 3))
{var inst_16848 = (state_16850[2]);var state_16850__$1 = state_16850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16850__$1,inst_16848);
} else
{if((state_val_16851 === 12))
{var inst_16810 = (state_16850[8]);var inst_16838 = cljs.core.vec.call(null,inst_16810);var state_16850__$1 = state_16850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16850__$1,15,out,inst_16838);
} else
{if((state_val_16851 === 2))
{var state_16850__$1 = state_16850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16850__$1,4,ch);
} else
{if((state_val_16851 === 11))
{var inst_16814 = (state_16850[9]);var inst_16818 = (state_16850[10]);var inst_16828 = (state_16850[2]);var inst_16829 = [];var inst_16830 = inst_16829.push(inst_16814);var inst_16810 = inst_16829;var inst_16811 = inst_16818;var state_16850__$1 = (function (){var statearr_16862 = state_16850;(statearr_16862[11] = inst_16828);
(statearr_16862[12] = inst_16830);
(statearr_16862[7] = inst_16811);
(statearr_16862[8] = inst_16810);
return statearr_16862;
})();var statearr_16863_16889 = state_16850__$1;(statearr_16863_16889[2] = null);
(statearr_16863_16889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 9))
{var inst_16810 = (state_16850[8]);var inst_16826 = cljs.core.vec.call(null,inst_16810);var state_16850__$1 = state_16850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16850__$1,11,out,inst_16826);
} else
{if((state_val_16851 === 5))
{var inst_16814 = (state_16850[9]);var inst_16818 = (state_16850[10]);var inst_16811 = (state_16850[7]);var inst_16818__$1 = f.call(null,inst_16814);var inst_16819 = cljs.core._EQ_.call(null,inst_16818__$1,inst_16811);var inst_16820 = cljs.core.keyword_identical_QMARK_.call(null,inst_16811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16821 = (inst_16819) || (inst_16820);var state_16850__$1 = (function (){var statearr_16864 = state_16850;(statearr_16864[10] = inst_16818__$1);
return statearr_16864;
})();if(cljs.core.truth_(inst_16821))
{var statearr_16865_16890 = state_16850__$1;(statearr_16865_16890[1] = 8);
} else
{var statearr_16866_16891 = state_16850__$1;(statearr_16866_16891[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 14))
{var inst_16843 = (state_16850[2]);var inst_16844 = cljs.core.async.close_BANG_.call(null,out);var state_16850__$1 = (function (){var statearr_16868 = state_16850;(statearr_16868[13] = inst_16843);
return statearr_16868;
})();var statearr_16869_16892 = state_16850__$1;(statearr_16869_16892[2] = inst_16844);
(statearr_16869_16892[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 10))
{var inst_16833 = (state_16850[2]);var state_16850__$1 = state_16850;var statearr_16870_16893 = state_16850__$1;(statearr_16870_16893[2] = inst_16833);
(statearr_16870_16893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16851 === 8))
{var inst_16814 = (state_16850[9]);var inst_16818 = (state_16850[10]);var inst_16810 = (state_16850[8]);var inst_16823 = inst_16810.push(inst_16814);var tmp16867 = inst_16810;var inst_16810__$1 = tmp16867;var inst_16811 = inst_16818;var state_16850__$1 = (function (){var statearr_16871 = state_16850;(statearr_16871[14] = inst_16823);
(statearr_16871[7] = inst_16811);
(statearr_16871[8] = inst_16810__$1);
return statearr_16871;
})();var statearr_16872_16894 = state_16850__$1;(statearr_16872_16894[2] = null);
(statearr_16872_16894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10219__auto___16880,out))
;return ((function (switch__10155__auto__,c__10219__auto___16880,out){
return (function() {
var state_machine__10156__auto__ = null;
var state_machine__10156__auto____0 = (function (){var statearr_16876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16876[0] = state_machine__10156__auto__);
(statearr_16876[1] = 1);
return statearr_16876;
});
var state_machine__10156__auto____1 = (function (state_16850){while(true){
var ret_value__10157__auto__ = (function (){try{while(true){
var result__10158__auto__ = switch__10155__auto__.call(null,state_16850);if(cljs.core.keyword_identical_QMARK_.call(null,result__10158__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10158__auto__;
}
break;
}
}catch (e16877){if((e16877 instanceof Object))
{var ex__10159__auto__ = e16877;var statearr_16878_16895 = state_16850;(statearr_16878_16895[5] = ex__10159__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16850);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16896 = state_16850;
state_16850 = G__16896;
continue;
}
} else
{return ret_value__10157__auto__;
}
break;
}
});
state_machine__10156__auto__ = function(state_16850){
switch(arguments.length){
case 0:
return state_machine__10156__auto____0.call(this);
case 1:
return state_machine__10156__auto____1.call(this,state_16850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10156__auto____0;
state_machine__10156__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10156__auto____1;
return state_machine__10156__auto__;
})()
;})(switch__10155__auto__,c__10219__auto___16880,out))
})();var state__10221__auto__ = (function (){var statearr_16879 = f__10220__auto__.call(null);(statearr_16879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10219__auto___16880);
return statearr_16879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10221__auto__);
});})(c__10219__auto___16880,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map