$wnd.showcase.runAsyncCallback11("function BWb(){}\nfunction FWb(){}\nfunction uWb(a,b){a.c=b}\nfunction vWb(a){if(a==kWb){return true}bG();return a==nWb}\nfunction wWb(a){if(a==jWb){return true}bG();return a==iWb}\nfunction DWb(a){this.c=(wYb(),rYb).b;this.e=(DYb(),CYb).b;this.b=a}\nfunction tWb(a,b){var c;c=SJ(a.fb,93);c.e=b.b;!!c.d&&qQb(c.d,b)}\nfunction sWb(a,b){var c;c=SJ(a.fb,93);c.c=b.b;!!c.d&&oQb(c.d,b)}\nfunction oWb(){oWb=Xqc;hWb=new BWb;kWb=new BWb;jWb=new BWb;iWb=new BWb;lWb=new BWb;mWb=new BWb;nWb=new BWb}\nfunction xWb(){oWb();sQb.call(this);this.c=(wYb(),rYb);this.d=(DYb(),CYb);Vs((oMb(),this.f),Nxc,0);Vs(this.f,Oxc,0)}\nfunction pWb(a,b,c){var d;if(c==hWb){if(b==a.b){return}else if(a.b){throw new pgc('Only one CENTER widget may be added')}}Oj(b);y8b(a.k,b);c==hWb&&(a.b=b);d=new DWb(c);b.fb=d;sWb(b,a.c);tWb(b,a.d);rWb(a);Qj(b,a)}\nfunction qWb(a,b){var c,d,e,f,g,i,j;X7b((oMb(),a.hb),ytc,b);i=new Aoc;j=new J8b(a.k);while(j.c<j.d.d){c=H8b(j);g=SJ(c.fb,93).b;e=SJ(i.wd(g),140);d=!e?1:e.b;f=g==lWb?'north'+d:g==mWb?'south'+d:g==nWb?'west'+d:g==iWb?'east'+d:g==kWb?'linestart'+d:g==jWb?'lineend'+d:Dxc;X7b(ot(c.hb),b,f);i.yd(g,Fgc(d+1))}}\nfunction rWb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(oMb(),a.e);while(ZNb(b)>0){Bs(b,YNb(b,0))}r=1;e=1;for(j=new J8b(a.k);j.c<j.d.d;){d=H8b(j);f=SJ(d.fb,93).b;f==lWb||f==mWb?++r:(f==iWb||f==nWb||f==kWb||f==jWb)&&++e}s=HJ(K2,brc,94,r,0);for(g=0;g<r;++g){s[g]=new FWb;s[g].c=$doc.createElement(Lxc);pMb(b,s[g].c)}n=0;o=e-1;p=0;t=r-1;c=null;for(i=new J8b(a.k);i.c<i.d.d;){d=H8b(i);k=SJ(d.fb,93);u=$doc.createElement(Mxc);k.d=u;Ws(k.d,uxc,k.c);du(k.d.style,vxc,k.e);Ws(k.d,$tc,ytc);Ws(k.d,Ztc,ytc);if(k.b==lWb){sMb(s[p].c,u,s[p].b);pMb(u,d.hb);Vs(u,Czc,o-n+1);++p}else if(k.b==mWb){sMb(s[t].c,u,s[t].b);pMb(u,d.hb);Vs(u,Czc,o-n+1);--t}else if(k.b==hWb){c=u}else if(vWb(k.b)){q=s[p];sMb(q.c,u,q.b++);pMb(u,d.hb);Vs(u,zAc,t-p+1);++n}else if(wWb(k.b)){q=s[p];sMb(q.c,u,q.b);pMb(u,d.hb);Vs(u,zAc,t-p+1);--o}}if(a.b){q=s[p];sMb(q.c,c,q.b);pMb(c,_i(a.b))}}\n$3(727,1,Rrc);_.xc=function Hrb(){var a,b,c;E6(this.b,(a=new xWb,Ss((oMb(),a.hb),'cw-DockPanel'),Vs(a.f,Nxc,4),uWb(a,(wYb(),qYb)),pWb(a,new IUb(rAc),(oWb(),lWb)),pWb(a,new IUb(sAc),mWb),pWb(a,new IUb(tAc),iWb),pWb(a,new IUb(uAc),nWb),pWb(a,new IUb(vAc),lWb),pWb(a,new IUb(wAc),mWb),b=new IUb('\\u8FD9\\u4E2A\\u793A\\u4F8B\\u4E2D\\u5728<code>DockPanel<\\/code> \\u7684\\u4E2D\\u95F4\\u4F4D\\u7F6E\\u6709\\u4E00\\u4E2A<code>ScrollPanel<\\/code>\\u3002\\u5982\\u679C\\u5728\\u4E2D\\u95F4\\u653E\\u5165\\u5F88\\u591A\\u5185\\u5BB9\\uFF0C\\u5B83\\u5C31\\u4F1A\\u53D8\\u6210\\u9875\\u9762\\u5185\\u7684\\u53EF\\u6EDA\\u52A8\\u533A\\u57DF\\uFF0C\\u65E0\\u9700\\u4F7F\\u7528IFRAME\\u3002<br><br>\\u6B64\\u5904\\u4F7F\\u7528\\u4E86\\u76F8\\u5F53\\u591A\\u65E0\\u610F\\u4E49\\u7684\\u6587\\u5B57\\uFF0C\\u4E3B\\u8981\\u662F\\u4E3A\\u4E86\\u53EF\\u4EE5\\u6EDA\\u52A8\\u81F3\\u53EF\\u89C6\\u533A\\u57DF\\u7684\\u5E95\\u90E8\\u3002\\u5426\\u5219\\uFF0C\\u60A8\\u6050\\u6015\\u4E0D\\u5F97\\u4E0D\\u628A\\u5B83\\u7F29\\u5230\\u5F88\\u5C0F\\u624D\\u80FD\\u770B\\u5230\\u90A3\\u5C0F\\u5DE7\\u7684\\u6EDA\\u52A8\\u6761\\u3002'),c=new BRb(b),c.hb.style[$tc]=xAc,c.hb.style[Ztc]=yAc,pWb(a,c,hWb),qWb(a,'cwDockPanel'),a))};$3(1031,987,frc,xWb);_.Mb=function yWb(a){qWb(this,a)};_.dc=function zWb(a){var b;b=aPb(this,a);if(b){a==this.b&&(this.b=null);rWb(this)}return b};var hWb,iWb,jWb,kWb,lWb,mWb,nWb;$3(1032,1,{},BWb);$3(1033,1,{93:1},DWb);$3(1034,1,{94:1},FWb);_.b=0;var _Y=_fc(Ayc,'DockPanel',1031),$Y=_fc(Ayc,'DockPanel$TmpRow',1034),K2=$fc(Hyc,'DockPanel$TmpRow;',1366,$Y),YY=_fc(Ayc,'DockPanel$DockLayoutConstant',1032),ZY=_fc(Ayc,'DockPanel$LayoutData',1033);Esc(lo)(11);\n//# sourceURL=showcase-11.js\n")