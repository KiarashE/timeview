$wnd.showcase.runAsyncCallback11("function rBc(){}\nfunction vBc(){}\nfunction kBc(a,b){a.c=b}\nfunction lBc(a){if(a==aBc){return true}_H();return a==dBc}\nfunction mBc(a){if(a==_Ac){return true}_H();return a==$Ac}\nfunction tBc(a){this.c=(kDc(),fDc).b;this.e=(rDc(),qDc).b;this.b=a}\nfunction jBc(a,b){var c;c=enb(a.fb,93);c.e=b.b;!!c.d&&gvc(c.d,b)}\nfunction iBc(a,b){var c;c=enb(a.fb,93);c.c=b.b;!!c.d&&evc(c.d,b)}\nfunction eBc(){eBc=G5c;ZAc=new rBc;aBc=new rBc;_Ac=new rBc;$Ac=new rBc;bBc=new rBc;cBc=new rBc;dBc=new rBc}\nfunction nBc(){eBc();ivc.call(this);this.c=(kDc(),fDc);this.d=(rDc(),qDc);As((arc(),this.f),Tcd,0);As(this.f,Ucd,0)}\nfunction fBc(a,b,c){var d;if(c==ZAc){if(b==a.b){return}else if(a.b){throw new _Wc('Only one CENTER widget may be added')}}Nj(b);mPc(a.k,b);c==ZAc&&(a.b=b);d=new tBc(c);b.fb=d;iBc(b,a.c);jBc(b,a.d);hBc(a);Pj(b,a)}\nfunction gBc(a,b){var c,d,e,f,g,i,j;LOc((arc(),a.hb),f8c,b);i=new j3c;j=new xPc(a.k);while(j.c<j.d.d){c=vPc(j);g=enb(c.fb,93).b;e=enb(i.ue(g),140);d=!e?1:e.b;f=g==bBc?'north'+d:g==cBc?'south'+d:g==dBc?'west'+d:g==$Ac?'east'+d:g==aBc?'linestart'+d:g==_Ac?'lineend'+d:Hcd;LOc(Vs(c.hb),b,f);i.we(g,pXc(d+1))}}\nfunction hBc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(arc(),a.e);while(Nsc(b)>0){fs(b,Msc(b,0))}r=1;e=1;for(j=new xPc(a.k);j.c<j.d.d;){d=vPc(j);f=enb(d.fb,93).b;f==bBc||f==cBc?++r:(f==$Ac||f==dBc||f==aBc||f==_Ac)&&++e}s=Vmb(tJb,M5c,94,r,0);for(g=0;g<r;++g){s[g]=new vBc;s[g].c=$doc.createElement(Rcd);brc(b,s[g].c)}n=0;o=e-1;p=0;t=r-1;c=null;for(i=new xPc(a.k);i.c<i.d.d;){d=vPc(i);k=enb(d.fb,93);u=$doc.createElement(Scd);k.d=u;Bs(k.d,ycd,k.c);Ot(k.d.style,zcd,k.e);Bs(k.d,H8c,f8c);Bs(k.d,G8c,f8c);if(k.b==bBc){erc(s[p].c,u,s[p].b);brc(u,d.hb);As(u,Led,o-n+1);++p}else if(k.b==cBc){erc(s[t].c,u,s[t].b);brc(u,d.hb);As(u,Led,o-n+1);--t}else if(k.b==ZAc){c=u}else if(lBc(k.b)){q=s[p];erc(q.c,u,q.b++);brc(u,d.hb);As(u,Efd,t-p+1);++n}else if(mBc(k.b)){q=s[p];erc(q.c,u,q.b);brc(u,d.hb);As(u,Efd,t-p+1);--o}}if(a.b){q=s[p];erc(q.c,c,q.b);brc(c,$i(a.b))}}\nJKb(807,1,z6c);_.xc=function r6b(){var a,b,c;nNb(this.b,(a=new nBc,xs((arc(),a.hb),'cw-DockPanel'),As(a.f,Tcd,4),kBc(a,(kDc(),eDc)),fBc(a,new yzc('This is the first north component'),(eBc(),bBc)),fBc(a,new yzc('This is the first south component'),cBc),fBc(a,new yzc('This is the east component'),$Ac),fBc(a,new yzc('This is the west component'),dBc),fBc(a,new yzc('This is the second north component'),bBc),fBc(a,new yzc('This is the second south component'),cBc),b=new yzc(\"This is a <code>ScrollPanel<\\/code> contained at the center of a <code>DockPanel<\\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!\"),c=new rwc(b),c.hb.style[H8c]=Cfd,c.hb.style[G8c]=Dfd,fBc(a,c,ZAc),gBc(a,'cwDockPanel'),a))};JKb(1111,1067,Q5c,nBc);_.Mb=function oBc(a){gBc(this,a)};_.dc=function pBc(a){var b;b=Utc(this,a);if(b){a==this.b&&(this.b=null);hBc(this)}return b};var ZAc,$Ac,_Ac,aBc,bBc,cBc,dBc;JKb(1112,1,{},rBc);JKb(1113,1,{93:1},tBc);JKb(1114,1,{94:1},vBc);_.b=0;var MDb=LWc(Hdd,'DockPanel',1111),LDb=LWc(Hdd,'DockPanel$TmpRow',1114),tJb=KWc(Odd,'DockPanel$TmpRow;',1445,LDb),JDb=LWc(Hdd,'DockPanel$DockLayoutConstant',1112),KDb=LWc(Hdd,'DockPanel$LayoutData',1113);m7c(lo)(11);\n//# sourceURL=showcase-11.js\n")