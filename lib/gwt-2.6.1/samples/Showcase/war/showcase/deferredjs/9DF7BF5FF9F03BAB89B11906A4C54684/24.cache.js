$wnd.showcase.runAsyncCallback24("function _4b(a){this.a=a}\nfunction c5b(a){this.a=a}\nfunction f5b(a){this.a=a}\nfunction m5b(a,b){this.a=a;this.b=b}\nfunction KEc(a,b){CEc(a,b);ct((Qqc(),a.gb),b)}\nfunction Hqc(){var a;if(!Eqc||Jqc()){a=new N2c;Iqc(a);Eqc=a}return Eqc}\nfunction Jqc(){var a=$doc.cookie;if(a!=Fqc){Fqc=a;return true}else{return false}}\nfunction ct(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction Kqc(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction W4b(a,b){var c,d,e,f;Ms(FEc(a.c));f=0;e=QO(Hqc());for(d=Q_c(e);d.a.Be();){c=Omb(W_c(d),1);HEc(a.c,c);rXc(c,b)&&(f=FEc(a.c).options.length-1)}fp(($o(),Zo),new m5b(a,f))}\nfunction X4b(a){var b,c,d,e;if(FEc(a.c).options.length<1){oHc(a.a,I7c);oHc(a.b,I7c);return}d=FEc(a.c).selectedIndex;b=GEc(a.c,d);c=(e=Hqc(),Omb(e.qe(b),1));oHc(a.a,b);oHc(a.b,c)}\nfunction Iqc(b){var c=$doc.cookie;if(c&&c!=I7c){var d=c.split(_8c);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(l9c);if(i==-1){f=d[e];g=I7c}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(Gqc){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.se(f,g)}}}\nfunction V4b(a){var b,c,d;c=new oCc(3,3);a.c=new MEc;b=new Kuc('Delete');oj((Qqc(),b.gb),dfd,true);EBc(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');HBc(c,0,1,a.c);HBc(c,0,2,b);a.a=new yHc;EBc(c,1,0,'<b><b>Name:<\\/b><\\/b>');HBc(c,1,1,a.a);a.b=new yHc;d=new Kuc('Set Cookie');oj(d.gb,dfd,true);EBc(c,2,0,'<b><b>Value:<\\/b><\\/b>');HBc(c,2,1,a.b);HBc(c,2,2,d);vj(d,new _4b(a),(Jy(),Jy(),Iy));vj(a.c,new c5b(a),(zy(),zy(),yy));vj(b,new f5b(a),Iy);W4b(a,null);return c}\nqKb(794,1,Z5c,_4b);_.Jc=function a5b(a){var b,c,d;c=cs(Pi(this.a.a),ied);d=cs(Pi(this.a.b),ied);b=new emb(OJb(SJb((new cmb).p.getTime()),g6c));if(c.length<1){Jrc('You must specify a cookie name');return}Lqc(c,d,b);W4b(this.a,c)};qKb(795,1,$5c,c5b);_.Ic=function d5b(a){X4b(this.a)};qKb(796,1,Z5c,f5b);_.Jc=function g5b(a){var b,c;c=FEc(this.a.c).selectedIndex;if(c>-1&&c<FEc(this.a.c).options.length){b=GEc(this.a.c,c);Kqc(b);KEc(this.a.c,c);X4b(this.a)}};qKb(797,1,a6c);_.sc=function k5b(){_Mb(this.b,V4b(this.a))};qKb(798,1,{},m5b);_.uc=function n5b(){this.b<FEc(this.a.c).options.length&&LEc(this.a.c,this.b);X4b(this.a)};_.b=0;var Eqc=null,Fqc,Gqc=true;var Lyb=nWc(ldd,'CwCookies$1',794),Myb=nWc(ldd,'CwCookies$2',795),Nyb=nWc(ldd,'CwCookies$3',796),Pyb=nWc(ldd,'CwCookies$5',798);P6c($n)(24);\n//# sourceURL=showcase-24.js\n")