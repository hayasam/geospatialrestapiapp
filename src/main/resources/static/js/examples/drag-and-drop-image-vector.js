(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{249:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(2),i=t(217),o=t(41),c=t(218),s=t(105),u=t(176),f=t(207),g=t(49),w=t(6),d=t(22),l=t(43),p=t(15),v=new f.a({formatConstructors:[i.a,o.a,c.a,s.a,u.a]}),m=new a.a({interactions:Object(g.a)().extend([v]),layers:[new w.a({source:new l.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})})],target:"map",view:new r.a({center:[0,0],zoom:2})});v.on("addfeatures",function(e){var n=new p.a({features:e.features});m.addLayer(new d.a({renderMode:"image",source:n})),m.getView().fit(n.getExtent())});var b=function(e){var n=[];if(m.forEachFeatureAtPixel(e,function(e){n.push(e)}),0<n.length){var t,a,r=[];for(t=0,a=n.length;t<a;++t)r.push(n[t].get("name"));document.getElementById("info").innerHTML=r.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};m.on("pointermove",function(e){if(!e.dragging){var n=m.getEventPixel(e.originalEvent);b(n)}}),m.on("click",function(e){b(e.pixel)})}},[[249,0]]]);
//# sourceMappingURL=drag-and-drop-image-vector.js.map