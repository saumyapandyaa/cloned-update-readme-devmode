(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){e.exports=n(50)},27:function(e,t,n){},28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(13),s=n.n(o),i=(n(27),n(28),n(20)),c=n(14),l=n(15),u=n(19),d=n(16),f=n(21),h=n(17),m=n.n(h),v=n(18),p=(n(48),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={posts:[],isLoading:!0,error:null},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"getArtistsInfo",value:function(){var e=this;m()("http://localhost:9080/artists").then((function(n){e.setState({posts:t(n.data),isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}));var t=function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value,l={};if(c.albums.length){var u=c.albums;delete c.albums;var d=!0,f=!1,h=void 0;try{for(var m,v=u[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){l=m.value,t.push(Object(i.a)({},c,{},l))}}catch(p){f=!0,h=p}finally{try{d||null==v.return||v.return()}finally{if(f)throw h}}}else delete c.albums,t.push(c)}}catch(p){r=!0,a=p}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return t}}},{key:"componentDidMount",value:function(){this.getArtistsInfo()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.posts;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Artist Web Service"),t?a.a.createElement("p",null,"Loading ....."):a.a.createElement(v.a,{data:n,columns:[{Header:"Artist Info",columns:[{Header:"Artist ID",accessor:"id"},{Header:"Artist Name",accessor:"name"},{Header:"Genres",accessor:"genres"}]},{Header:"Albums",columns:[{Header:"Title",accessor:"title"},{Header:"Number of Tracks",accessor:"ntracks"}]}],defaultPageSize:4,pageSizeOptions:[4,5,6]}))}}]),t}(r.Component));var g=function(){return a.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49);s.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b4a37c33.chunk.js.map