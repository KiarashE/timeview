$wnd.showcase.runAsyncCallback11("function aWb(){}\nfunction eWb(){}\nfunction VVb(a,b){a.b=b}\nfunction WVb(a){if(a==LVb){return true}EF();return a==OVb}\nfunction XVb(a){if(a==KVb){return true}EF();return a==JVb}\nfunction cWb(a){this.b=(WXb(),RXb).a;this.d=(bYb(),aYb).a;this.a=a}\nfunction TVb(a,b){var c;c=tJ(a.eb,94);c.b=b.a;!!c.c&&PPb(c.c,b)}\nfunction UVb(a,b){var c;c=tJ(a.eb,94);c.d=b.a;!!c.c&&RPb(c.c,b)}\nfunction PVb(){PVb=tqc;IVb=new aWb;LVb=new aWb;KVb=new aWb;JVb=new aWb;MVb=new aWb;NVb=new aWb;OVb=new aWb}\nfunction YVb(){PVb();TPb.call(this);this.b=(WXb(),RXb);this.c=(bYb(),aYb);ls((fMb(),this.e),dxc,0);ls(this.e,exc,0)}\nfunction QVb(a,b,c){var d;if(c==IVb){if(b==a.a){return}else if(a.a){throw new Ofc('Only one CENTER widget may be added')}}Bj(b);b8b(a.j,b);c==IVb&&(a.a=b);d=new cWb(c);b.eb=d;TVb(b,a.b);UVb(b,a.c);SVb(a);Dj(b,a)}\nfunction RVb(a,b){var c,d,e,f,g,i,j;A7b((fMb(),a.gb),Usc,b);i=new Ync;j=new m8b(a.j);while(j.b<j.c.c){c=k8b(j);g=tJ(c.eb,94).a;e=tJ(i.od(g),141);d=!e?1:e.a;f=g==MVb?'north'+d:g==NVb?'south'+d:g==OVb?'west'+d:g==JVb?'east'+d:g==LVb?'linestart'+d:g==KVb?'lineend'+d:Ywc;A7b(Fs(c.gb),b,f);i.qd(g,cgc(d+1))}}\nfunction SVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(fMb(),a.d);while(b.children.length>0){Vr(b,b.children[0])}r=1;e=1;for(j=new m8b(a.j);j.b<j.c.c;){d=k8b(j);f=tJ(d.eb,94).a;f==MVb||f==NVb?++r:(f==JVb||f==OVb||f==LVb||f==KVb)&&++e}s=iJ(e2,yqc,95,r,0);for(g=0;g<r;++g){s[g]=new eWb;s[g].b=Os($doc,bxc);gMb(b,s[g].b)}n=0;o=e-1;p=0;t=r-1;c=null;for(i=new m8b(a.j);i.b<i.c.c;){d=k8b(i);k=tJ(d.eb,94);u=Os($doc,cxc);k.c=u;ms(k.c,Qwc,k.b);Et(k.c.style,Rwc,k.d);ms(k.c,utc,Usc);ms(k.c,ttc,Usc);if(k.a==MVb){jMb(s[p].b,u,s[p].a);gMb(u,d.gb);ls(u,Vyc,o-n+1);++p}else if(k.a==NVb){jMb(s[t].b,u,s[t].a);gMb(u,d.gb);ls(u,Vyc,o-n+1);--t}else if(k.a==IVb){c=u}else if(WVb(k.a)){q=s[p];jMb(q.b,u,q.a++);gMb(u,d.gb);ls(u,Szc,t-p+1);++n}else if(XVb(k.a)){q=s[p];jMb(q.b,u,q.a);gMb(u,d.gb);ls(u,Szc,t-p+1);--o}}if(a.a){q=s[p];jMb(q.b,c,q.a);gMb(c,Pi(a.a))}}\nu3(725,1,lrc);_.sc=function grb(){var a,b,c;d6(this.a,(a=new YVb,is((fMb(),a.gb),'cw-DockPanel'),ls(a.e,dxc,4),VVb(a,(WXb(),QXb)),QVb(a,new hUb(Kzc),(PVb(),MVb)),QVb(a,new hUb(Lzc),NVb),QVb(a,new hUb(Mzc),JVb),QVb(a,new hUb(Nzc),OVb),QVb(a,new hUb(Ozc),MVb),QVb(a,new hUb(Pzc),NVb),b=new hUb('\\u8FD9\\u4E2A\\u793A\\u4F8B\\u4E2D\\u5728<code>DockPanel<\\/code> \\u7684\\u4E2D\\u95F4\\u4F4D\\u7F6E\\u6709\\u4E00\\u4E2A<code>ScrollPanel<\\/code>\\u3002\\u5982\\u679C\\u5728\\u4E2D\\u95F4\\u653E\\u5165\\u5F88\\u591A\\u5185\\u5BB9\\uFF0C\\u5B83\\u5C31\\u4F1A\\u53D8\\u6210\\u9875\\u9762\\u5185\\u7684\\u53EF\\u6EDA\\u52A8\\u533A\\u57DF\\uFF0C\\u65E0\\u9700\\u4F7F\\u7528IFRAME\\u3002<br><br>\\u6B64\\u5904\\u4F7F\\u7528\\u4E86\\u76F8\\u5F53\\u591A\\u65E0\\u610F\\u4E49\\u7684\\u6587\\u5B57\\uFF0C\\u4E3B\\u8981\\u662F\\u4E3A\\u4E86\\u53EF\\u4EE5\\u6EDA\\u52A8\\u81F3\\u53EF\\u89C6\\u533A\\u57DF\\u7684\\u5E95\\u90E8\\u3002\\u5426\\u5219\\uFF0C\\u60A8\\u6050\\u6015\\u4E0D\\u5F97\\u4E0D\\u628A\\u5B83\\u7F29\\u5230\\u5F88\\u5C0F\\u624D\\u80FD\\u770B\\u5230\\u90A3\\u5C0F\\u5DE7\\u7684\\u6EDA\\u52A8\\u6761\\u3002'),c=new aRb(b),c.gb.style[utc]=Qzc,c.gb.style[ttc]=Rzc,QVb(a,c,IVb),RVb(a,'cwDockPanel'),a))};u3(1029,985,Cqc,YVb);_.Hb=function ZVb(a){RVb(this,a)};_.$b=function $Vb(a){var b;b=DOb(this,a);if(b){a==this.a&&(this.a=null);SVb(this)}return b};var IVb,JVb,KVb,LVb,MVb,NVb,OVb;u3(1030,1,{},aWb);u3(1031,1,{94:1},cWb);u3(1032,1,{95:1},eWb);_.a=0;var xY=yfc(Txc,'DockPanel',1029),wY=yfc(Txc,'DockPanel$TmpRow',1032),e2=xfc($xc,'DockPanel$TmpRow;',1364,wY),uY=yfc(Txc,'DockPanel$DockLayoutConstant',1030),vY=yfc(Txc,'DockPanel$LayoutData',1031);_rc(Zn)(11);\n//# sourceURL=showcase-11.js\n")