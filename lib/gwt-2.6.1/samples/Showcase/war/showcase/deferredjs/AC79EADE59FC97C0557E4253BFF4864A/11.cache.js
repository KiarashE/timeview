$wnd.showcase.runAsyncCallback11("function rWb(){}\nfunction vWb(){}\nfunction kWb(a,b){a.c=b}\nfunction lWb(a){if(a==aWb){return true}TF();return a==dWb}\nfunction mWb(a){if(a==_Vb){return true}TF();return a==$Vb}\nfunction tWb(a){this.c=(mYb(),hYb).b;this.e=(tYb(),sYb).b;this.b=a}\nfunction jWb(a,b){var c;c=MJ(a.fb,92);c.e=b.b;!!c.d&&gQb(c.d,b)}\nfunction iWb(a,b){var c;c=MJ(a.fb,92);c.c=b.b;!!c.d&&eQb(c.d,b)}\nfunction eWb(){eWb=Nqc;ZVb=new rWb;aWb=new rWb;_Vb=new rWb;$Vb=new rWb;bWb=new rWb;cWb=new rWb;dWb=new rWb}\nfunction nWb(){eWb();iQb.call(this);this.c=(mYb(),hYb);this.d=(tYb(),sYb);Vs((eMb(),this.f),Exc,0);Vs(this.f,Fxc,0)}\nfunction fWb(a,b,c){var d;if(c==ZVb){if(b==a.b){return}else if(a.b){throw new fgc('Only one CENTER widget may be added')}}Oj(b);o8b(a.k,b);c==ZVb&&(a.b=b);d=new tWb(c);b.fb=d;iWb(b,a.c);jWb(b,a.d);hWb(a);Qj(b,a)}\nfunction gWb(a,b){var c,d,e,f,g,i,j;N7b((eMb(),a.hb),otc,b);i=new qoc;j=new z8b(a.k);while(j.c<j.d.d){c=x8b(j);g=MJ(c.fb,92).b;e=MJ(i.Bd(g),139);d=!e?1:e.b;f=g==bWb?'north'+d:g==cWb?'south'+d:g==dWb?'west'+d:g==$Vb?'east'+d:g==aWb?'linestart'+d:g==_Vb?'lineend'+d:uxc;N7b(ot(c.hb),b,f);i.Dd(g,vgc(d+1))}}\nfunction hWb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(eMb(),a.e);while(PNb(b)>0){Bs(b,ONb(b,0))}r=1;e=1;for(j=new z8b(a.k);j.c<j.d.d;){d=x8b(j);f=MJ(d.fb,92).b;f==bWb||f==cWb?++r:(f==$Vb||f==dWb||f==aWb||f==_Vb)&&++e}s=BJ(z2,Tqc,93,r,0);for(g=0;g<r;++g){s[g]=new vWb;s[g].c=$doc.createElement(Cxc);fMb(b,s[g].c)}n=0;o=e-1;p=0;t=r-1;c=null;for(i=new z8b(a.k);i.c<i.d.d;){d=x8b(i);k=MJ(d.fb,92);u=$doc.createElement(Dxc);k.d=u;Ws(k.d,lxc,k.c);du(k.d.style,mxc,k.e);Ws(k.d,Qtc,otc);Ws(k.d,Ptc,otc);if(k.b==bWb){iMb(s[p].c,u,s[p].b);fMb(u,d.hb);Vs(u,vzc,o-n+1);++p}else if(k.b==cWb){iMb(s[t].c,u,s[t].b);fMb(u,d.hb);Vs(u,vzc,o-n+1);--t}else if(k.b==ZVb){c=u}else if(lWb(k.b)){q=s[p];iMb(q.c,u,q.b++);fMb(u,d.hb);Vs(u,oAc,t-p+1);++n}else if(mWb(k.b)){q=s[p];iMb(q.c,u,q.b);fMb(u,d.hb);Vs(u,oAc,t-p+1);--o}}if(a.b){q=s[p];iMb(q.c,c,q.b);fMb(c,_i(a.b))}}\nP3(724,1,Hrc);_.xc=function xrb(){var a,b,c;t6(this.b,(a=new nWb,Ss((eMb(),a.hb),'cw-DockPanel'),Vs(a.f,Exc,4),kWb(a,(mYb(),gYb)),fWb(a,new yUb('This is the first north component'),(eWb(),bWb)),fWb(a,new yUb('This is the first south component'),cWb),fWb(a,new yUb('This is the east component'),$Vb),fWb(a,new yUb('This is the west component'),dWb),fWb(a,new yUb('This is the second north component'),bWb),fWb(a,new yUb('This is the second south component'),cWb),b=new yUb(\"This is a <code>ScrollPanel<\\/code> contained at the center of a <code>DockPanel<\\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!\"),c=new rRb(b),c.hb.style[Qtc]=mAc,c.hb.style[Ptc]=nAc,fWb(a,c,ZVb),gWb(a,'cwDockPanel'),a))};P3(1028,984,Xqc,nWb);_.Mb=function oWb(a){gWb(this,a)};_.dc=function pWb(a){var b;b=SOb(this,a);if(b){a==this.b&&(this.b=null);hWb(this)}return b};var ZVb,$Vb,_Vb,aWb,bWb,cWb,dWb;P3(1029,1,{},rWb);P3(1030,1,{92:1},tWb);P3(1031,1,{93:1},vWb);_.b=0;var QY=Rfc(ryc,'DockPanel',1028),PY=Rfc(ryc,'DockPanel$TmpRow',1031),z2=Qfc(yyc,'DockPanel$TmpRow;',1363,PY),NY=Rfc(ryc,'DockPanel$DockLayoutConstant',1029),OY=Rfc(ryc,'DockPanel$LayoutData',1030);usc(lo)(11);\n//# sourceURL=showcase-11.js\n")