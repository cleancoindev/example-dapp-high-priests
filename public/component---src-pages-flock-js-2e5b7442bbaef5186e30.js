(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CnBM:function(t,e,o){"use strict";o("91GP"),o("VRzm"),o("XfO3"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("8+KV"),o("LK8F"),o("/SS/"),o("hHhE"),o("rE2o"),o("ioFf");var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=o("q1tI"),u=o("17x9"),c=[],s=[];function d(t){var e=t(),o={loading:!0,loaded:null,error:null};return o.promise=e.then((function(t){return o.loading=!1,o.loaded=t,t})).catch((function(t){throw o.loading=!1,o.error=t,t})),o}function p(t){var e={loading:!1,loaded:{},error:null},o=[];try{Object.keys(t).forEach((function(n){var r=d(t[n]);r.loading?e.loading=!0:(e.loaded[n]=r.loaded,e.error=r.error),o.push(r.promise),r.promise.then((function(t){e.loaded[n]=t})).catch((function(t){e.error=t}))}))}catch(n){e.error=n}return e.promise=Promise.all(o).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function f(t,e){return l.createElement((o=t)&&o.__esModule?o.default:o,e);var o}function h(t,e){var d,p;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},e),m=null;function y(){return m||(m=t(h.loader)),m.promise}return c.push(y),"function"==typeof h.webpack&&s.push((function(){if(t=h.webpack,"object"===n(o.m)&&t().every((function(t){return void 0!==t&&void 0!==o.m[t]})))return y();var t})),p=d=function(e){function o(n){r(this,o);var a=i(this,e.call(this,n));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),m=t(h.loader),a._loadModule()},y(),a.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},a}return a(o,e),o.preload=function(){return y()},o.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},o.prototype._loadModule=function(){var t=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach((function(e){t.context.loadable.report(e)})),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){t.setState({pastDelay:!0})}),h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout((function(){t.setState({timedOut:!0})}),h.timeout));var e=function(){t._mounted&&(t.setState({error:m.error,loaded:m.loaded,loading:m.loading}),t._clearTimeouts())};m.promise.then((function(){e()})).catch((function(t){e()}))}},o.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},o.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},o.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},o}(l.Component),d.contextTypes={loadable:u.shape({report:u.func.isRequired})},p}function m(t){return h(d,t)}m.Map=function(t){if("function"!=typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(p,t)};var y=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},e.prototype.render=function(){return l.Children.only(this.props.children)},e}(l.Component);function b(t){for(var e=[];t.length;){var o=t.pop();e.push(o())}return Promise.all(e).then((function(){if(t.length)return b(t)}))}y.propTypes={report:u.func.isRequired},y.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},m.Capture=y,m.preloadAll=function(){return new Promise((function(t,e){b(c).then(t,e)}))},m.preloadReady=function(){return new Promise((function(t,e){b(s).then(t,t)}))},t.exports=m},yfjT:function(t,e,o){"use strict";o.r(e);var n=o("q1tI"),r=o.n(n),i=o("vrFN"),a=o("yBb5"),l=o("CnBM"),u=o.n(l)()({loader:function(){return Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"vGNc"))},loading:function(t){return t.error?(console.log(t.error),r.a.createElement("div",null,"Error! ",r.a.createElement("button",{onClick:function(){return location.reload()}},"Retry"))):t.pastDelay?r.a.createElement("div",null):t.timedOut?r.a.createElement("div",null,"Taking a long time..."," ",r.a.createElement("button",{onClick:function(){return location.reload()}},"Retry")):null},delay:300,timeout:1e4});e.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{title:"Flock"}),r.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-flock-js-2e5b7442bbaef5186e30.js.map