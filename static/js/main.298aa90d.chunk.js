(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{38:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),c=s.n(n),r=s(29),i=s.n(r),o=s(8),l=s(2);s(38);var j=function(){return Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(a.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},m=s(17),u=s.n(m),d=s(30),b=s(11),h=s(12),p=s(14),v=s(13),O=s(31),x=s.n(O);s(58);var f=function(e){var t=e.title,s=e.year,n=e.summary,c=e.poster,r=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:s,title:t,summary:n,poster:c,genres:r}},children:[Object(a.jsx)("img",{src:c,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:t}),Object(a.jsx)("h5",{className:"movie__year",children:s}),Object(a.jsx)("ul",{className:"movie__genre",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})},y=(s(64),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(b.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component));s(65);var _=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})},g=function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(a.jsx)("span",{children:e.state.title}),Object(a.jsx)("span",{children:e.state.year}),Object(a.jsx)("span",{children:e.state.genres}),Object(a.jsx)("h5",{children:e.state.summary})]}):null}}]),s}(c.a.Component);var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(_,{}),Object(a.jsx)(l.a,{path:"/",component:y,exact:!0}),Object(a.jsx)(l.a,{path:"/about",component:j}),Object(a.jsx)(l.a,{path:"/movie-detail",component:g})]})};i.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.298aa90d.chunk.js.map