$wnd.showcase.runAsyncCallback24("function Mpb(a){this.a=a}\nfunction Ppb(a){this.a=a}\nfunction Spb(a){this.a=a}\nfunction Zpb(a,b){this.a=a;this.b=b}\nfunction wZb(a,b){oZb(a,b);ct((CLb(),a.gb),b)}\nfunction tLb(){var a;if(!qLb||vLb()){a=new Gnc;uLb(a);qLb=a}return qLb}\nfunction vLb(){var a=$doc.cookie;if(a!=rLb){rLb=a;return true}else{return false}}\nfunction ct(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction wLb(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction Hpb(a,b){var c,d,e,f;Ls(rZb(a.c));f=0;e=$F(tLb());for(d=Jkc(e);d.a.Ed();){c=eJ(Pkc(d),1);tZb(a.c,c);kgc(c,b)&&(f=rZb(a.c).options.length-1)}fp(($o(),Zo),new Zpb(a,f))}\nfunction Ipb(a){var b,c,d,e;if(rZb(a.c).options.length<1){a0b(a.a,Csc);a0b(a.b,Csc);return}d=rZb(a.c).selectedIndex;b=sZb(a.c,d);c=(e=tLb(),eJ(e.td(b),1));a0b(a.a,b);a0b(a.b,c)}\nfunction uLb(b){var c=$doc.cookie;if(c&&c!=Csc){var d=c.split(Vtc);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(fuc);if(i==-1){f=d[e];g=Csc}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(sLb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.vd(f,g)}}}\nfunction Gpb(a){var b,c,d;c=new _Wb(3,3);a.c=new yZb;b=new vPb('Delete');oj((CLb(),b.gb),uzc,true);pWb(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');sWb(c,0,1,a.c);sWb(c,0,2,b);a.a=new k0b;pWb(c,1,0,'<b><b>Name:<\\/b><\\/b>');sWb(c,1,1,a.a);a.b=new k0b;d=new vPb('Set Cookie');oj(d.gb,uzc,true);pWb(c,2,0,'<b><b>Value:<\\/b><\\/b>');sWb(c,2,1,a.b);sWb(c,2,2,d);vj(d,new Mpb(a),(Jy(),Jy(),Iy));vj(a.c,new Ppb(a),(zy(),zy(),yy));vj(b,new Spb(a),Iy);Hpb(a,null);return c}\nb3(708,1,Sqc,Mpb);_.Jc=function Npb(a){var b,c,d;c=cs(Pi(this.a.a),zyc);d=cs(Pi(this.a.b),zyc);b=new vI(z2(D2((new tI).p.getTime()),_qc));if(c.length<1){uMb('You must specify a cookie name');return}xLb(c,d,b);Hpb(this.a,c)};b3(709,1,Tqc,Ppb);_.Ic=function Qpb(a){Ipb(this.a)};b3(710,1,Sqc,Spb);_.Jc=function Tpb(a){var b,c;c=rZb(this.a.c).selectedIndex;if(c>-1&&c<rZb(this.a.c).options.length){b=sZb(this.a.c,c);wLb(b);wZb(this.a.c,c);Ipb(this.a)}};b3(711,1,Vqc);_.sc=function Xpb(){M5(this.b,Gpb(this.a))};b3(712,1,{},Zpb);_.uc=function $pb(){this.b<rZb(this.a.c).options.length&&xZb(this.a.c,this.b);Ipb(this.a)};_.b=0;var qLb=null,rLb,sLb=true;var wT=gfc(Cxc,'CwCookies$1',708),xT=gfc(Cxc,'CwCookies$2',709),yT=gfc(Cxc,'CwCookies$3',710),AT=gfc(Cxc,'CwCookies$5',712);Jrc($n)(24);\n//# sourceURL=showcase-24.js\n")