$wnd.showcase.runAsyncCallback24("function ZCb(a){this.a=a}\nfunction aDb(a){this.a=a}\nfunction dDb(a){this.a=a}\nfunction kDb(a,b){this.a=a;this.b=b}\nfunction Ks(a,b){a.remove(b)}\nfunction Gac(a,b){yac(a,b);Ks((_Yb(),a.gb),b)}\nfunction SYb(){var a;if(!PYb||UYb()){a=new TAc;TYb(a);PYb=a}return PYb}\nfunction UYb(){var a=$doc.cookie;if(a!=QYb){QYb=a;return true}else{return false}}\nfunction VYb(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction UCb(a,b){var c,d,e,f;Js(Bac(a.c));f=0;e=wJ(SYb());for(d=Wxc(e);d.a.Be();){c=UV(ayc(d),1);Dac(a.c,c);xtc(c,b)&&(f=Bac(a.c).options.length-1)}ep((Zo(),Yo),new kDb(a,f))}\nfunction VCb(a){var b,c,d,e;if(Bac(a.c).options.length<1){kdc(a.a,OFc);kdc(a.b,OFc);return}d=Bac(a.c).selectedIndex;b=Cac(a.c,d);c=(e=SYb(),UV(e.qe(b),1));kdc(a.a,b);kdc(a.b,c)}\nfunction TYb(b){var c=$doc.cookie;if(c&&c!=OFc){var d=c.split(iHc);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(uHc);if(i==-1){f=d[e];g=OFc}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(RYb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.se(f,g)}}}\nfunction TCb(a){var b,c,d;c=new j8b(3,3);a.c=new Iac;b=new F0b('Supprimer');nj((_Yb(),b.gb),UMc,true);z7b(c,0,0,'<b><b>Cookies existants:<\\/b><\\/b>');C7b(c,0,1,a.c);C7b(c,0,2,b);a.a=new udc;z7b(c,1,0,'<b><b>Nom:<\\/b><\\/b>');C7b(c,1,1,a.a);a.b=new udc;d=new F0b('Sauvegarder Cookie');nj(d.gb,UMc,true);z7b(c,2,0,'<b><b>Valeur:<\\/b><\\/b>');C7b(c,2,1,a.b);C7b(c,2,2,d);uj(d,new ZCb(a),(Sy(),Sy(),Ry));uj(a.c,new aDb(a),(Iy(),Iy(),Hy));uj(b,new dDb(a),Ry);UCb(a,null);return c}\nngb(732,1,dEc,ZCb);_.Jc=function $Cb(a){var b,c,d;c=bs(Pi(this.a.a),TLc);d=bs(Pi(this.a.b),TLc);b=new kV(Lfb(Pfb((new iV).p.getTime()),mEc));if(c.length<1){SZb('Vous devez indiquer un nom de cookie');return}WYb(c,d,b);UCb(this.a,c)};ngb(733,1,eEc,aDb);_.Ic=function bDb(a){VCb(this.a)};ngb(734,1,dEc,dDb);_.Jc=function eDb(a){var b,c;c=Bac(this.a.c).selectedIndex;if(c>-1&&c<Bac(this.a.c).options.length){b=Cac(this.a.c,c);VYb(b);Gac(this.a.c,c);VCb(this.a)}};ngb(735,1,gEc);_.sc=function iDb(){Yib(this.b,TCb(this.a))};ngb(736,1,{},kDb);_.uc=function lDb(){this.b<Bac(this.a.c).options.length&&Hac(this.a.c,this.b);VCb(this.a)};_.b=0;var PYb=null,QYb,RYb=true;var J4=tsc($Kc,'CwCookies$1',732),K4=tsc($Kc,'CwCookies$2',733),L4=tsc($Kc,'CwCookies$3',734),N4=tsc($Kc,'CwCookies$5',736);VEc(Zn)(24);\n//# sourceURL=showcase-24.js\n")