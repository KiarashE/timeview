$wnd.showcase.runAsyncCallback21("function GDb(a){this.b=a}\nfunction JDb(a){this.b=a}\nfunction PBc(a){this.b=a}\nfunction qBc(a,b){return a.d.re(b)}\nfunction tBc(a,b){if(a.b){LBc(b);KBc(b)}}\nfunction VBc(a){this.d=a;this.c=a.b.c.b}\nfunction MBc(a){NBc.call(this,a,null,null)}\nfunction LBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}\nfunction KBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}\nfunction NBc(a,b,c){this.d=a;GBc.call(this,b,c);this.b=this.c=null}\nfunction UBc(a){if(a.c==a.d.b.c){throw new aCc}a.b=a.c;a.c=a.c.b;return a.b}\nfunction rBc(a,b){var c;c=aW(a.d.ue(b),154);if(c){tBc(a,c);return c.f}return null}\nfunction sBc(a,b,c){var d,e,f;e=aW(a.d.ue(b),154);if(!e){d=new NBc(a,b,c);a.d.we(b,d);KBc(d);return null}else{f=e.f;FBc(e,c);tBc(a,e);return f}}\nfunction kkb(a){var b,c;b=aW(a.b.ue(LNc),146);if(b==null){c=SV(rfb,BDc,1,['Bonjour le monde',MNc,NNc]);a.b.we(LNc,c);return c}else{return b}}\nfunction uBc(){ZAc.call(this);this.c=new MBc(this);this.d=new ZAc;this.c.c=this.c;this.c.b=this.c}\nfunction tDb(b){var c,d,e,f;e=Lac(b.e,Kac(b.e).selectedIndex);c=aW(rBc(b.g,e),117);try{f=Msc(ps($i(b.f),_Lc));d=Msc(ps($i(b.d),_Lc));R_b(b.b,c,d,f)}catch(a){a=Bfb(a);if(cW(a,142)){return}else throw Afb(a)}}\nfunction rDb(a){var b,c,d,e;d=new U7b;a.f=new Ddc;nj(a.f,ONc);tdc(a.f,'100');a.d=new Ddc;nj(a.d,ONc);tdc(a.d,'60');a.e=new Rac;J7b(d,0,0,'<b>Points \\xE0 circuler:<\\/b>');M7b(d,0,1,a.e);J7b(d,1,0,'<b>Bord du dessus:<\\/b>');M7b(d,1,1,a.f);J7b(d,2,0,'<b>Bord gauche:<\\/b>');M7b(d,2,1,a.d);for(c=ayc(EJ(a.g));c.b.Fe();){b=aW(gyc(c),1);Mac(a.e,b)}Gj(a.e,new GDb(a),(Ry(),Ry(),Qy));e=new JDb(a);Gj(a.f,e,(Ez(),Ez(),Dz));Gj(a.d,e,Dz);return d}\nfunction sDb(a){var b,c,d,e,f,g,i,j;a.g=new uBc;a.b=new T_b;jj(a.b,PNc,PNc);cj(a.b,QNc);j=kkb(a.c);i=new l5b('Hello World');M_b(a.b,i,10,20);sBc(a.g,j[0],i);c=new P0b('Cliquez-moi!');M_b(a.b,c,80,45);sBc(a.g,j[1],c);d=new t8b(2,3);Bs(d.p,LIc,$Jc);for(e=0;e<3;e++){J7b(d,0,e,e+VFc);M7b(d,1,e,new ZXb((hlb(),Ykb)))}M_b(a.b,d,60,100);sBc(a.g,j[2],d);b=new w4b;fk(b,a.b);g=new w4b;fk(g,rDb(a));f=new K9b;As(f.f,lKc,10);H9b(f,g);H9b(f,b);return f}\nvar ONc='3em',LNc='cwAbsolutePanelWidgetNames';wgb(737,1,nEc);_.xc=function EDb(){ajb(this.c,sDb(this.b))};wgb(738,1,lEc,GDb);_.Mc=function HDb(a){uDb(this.b)};wgb(739,1,XDc,JDb);_.Pc=function KDb(a){tDb(this.b)};wgb(1327,1325,$Ec,uBc);_.Rh=function vBc(){this.d.Rh();this.c.c=this.c;this.c.b=this.c};_.re=function wBc(a){return qBc(this,a)};_.se=function xBc(a){var b;b=this.c.b;while(b!=this.c){if(tDc(b.f,a)){return true}b=b.b}return false};_.te=function yBc(){return new PBc(this)};_.ue=function zBc(a){return rBc(this,a)};_.we=function ABc(a,b){return sBc(this,a,b)};_.xe=function BBc(a){var b;b=aW(this.d.xe(a),154);if(b){LBc(b);return b.f}return null};_.ye=function CBc(){return this.d.ye()};_.b=false;wgb(1328,1329,{154:1,157:1},MBc,NBc);wgb(1330,366,aEc,PBc);_.Be=function QBc(a){var b,c,d;if(!cW(a,157)){return false}b=aW(a,157);c=b.Ie();if(qBc(this.b,c)){d=rBc(this.b,c);return tDc(b.Vc(),d)}return false};_.gc=function RBc(){return new VBc(this)};_.ye=function SBc(){return this.b.d.ye()};wgb(1331,1,{},VBc);_.Fe=function WBc(){return this.c!=this.d.b.c};_.Ge=function XBc(){return UBc(this)};_.He=function YBc(){if(!this.b){throw new Ssc('No current entry')}LBc(this.b);this.d.b.d.xe(this.b.e);this.b=null};var Z4=zsc(bLc,'CwAbsolutePanel$3',738),$4=zsc(bLc,'CwAbsolutePanel$4',739),teb=zsc(oLc,'LinkedHashMap',1327),qeb=zsc(oLc,'LinkedHashMap$ChainEntry',1328),seb=zsc(oLc,'LinkedHashMap$EntrySet',1330),reb=zsc(oLc,'LinkedHashMap$EntrySet$EntryIterator',1331);aFc(lo)(21);\n//# sourceURL=showcase-21.js\n")