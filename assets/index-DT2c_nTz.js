import{C as ut,E as y,L as ct}from"./index-DHcB3wFH.js";import{s as pt,t as b,p as dt,L as mt,b as ft,f as St,l as gt,e as ht,E as xt,a as N,m as bt}from"./index-BUVihqM6.js";import{cssLanguage as L,css as Pt}from"./index-DVP7Bj8F.js";import{typescriptLanguage as Vt,jsxLanguage as wt,tsxLanguage as Tt,javascriptLanguage as A,javascript as vt}from"./index-bwtYyulD.js";const F=20,Xt=22,H=23,yt=24,Q=26,K=27,kt=28,$t=31,qt=34,_t=37,Qt={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},Ct={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},E={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function J(t){return t==9||t==10||t==13||t==32}let B=null,z=null,W=0;function C(t,l){let r=t.pos+l;if(W==r&&z==t)return B;let a=t.peek(l);for(;J(a);)a=t.peek(++l);let e="";for(;(s=a)==45||s==46||s==58||s>=65&&s<=90||s==95||s>=97&&s<=122||s>=161;)e+=String.fromCharCode(a),a=t.peek(++l);var s;return z=t,W=r,B=e?e.toLowerCase():a==At||a==Yt?void 0:null}const At=63,Yt=33;function D(t,l){this.name=t,this.parent=l}const Mt=[6,10,7,8,9],Rt=new ut({start:null,shift:(t,l,r,a)=>Mt.indexOf(l)>-1?new D(C(a,1)||"",t):t,reduce:(t,l)=>l==F&&t?t.parent:t,reuse(t,l,r,a){let e=l.type.id;return e==6||e==36?new D(C(a,1)||"",t):t},strict:!1}),Zt=new y((t,l)=>{if(t.next!=60)return void(t.next<0&&l.context&&t.acceptToken(57));t.advance();let r=t.next==47;r&&t.advance();let a=C(t,0);if(a===void 0)return;if(!a)return t.acceptToken(r?14:6);let e=l.context?l.context.name:null;if(r){if(a==e)return t.acceptToken(11);if(e&&Ct[e])return t.acceptToken(57,-2);if(l.dialectEnabled(0))return t.acceptToken(12);for(let s=l.context;s;s=s.parent)if(s.name==a)return;t.acceptToken(13)}else{if(a=="script")return t.acceptToken(7);if(a=="style")return t.acceptToken(8);if(a=="textarea")return t.acceptToken(9);if(Qt.hasOwnProperty(a))return t.acceptToken(10);e&&E[e]&&E[e][a]?t.acceptToken(57,-1):t.acceptToken(6)}},{contextual:!0}),Et=new y(t=>{for(let l=0,r=0;;r++){if(t.next<0){r&&t.acceptToken(58);break}if(t.next==45)l++;else{if(t.next==62&&l>=2){r>=3&&t.acceptToken(58,-2);break}l=0}t.advance()}}),Bt=new y((t,l)=>{if(t.next==47&&t.peek(1)==62){let r=l.dialectEnabled(1)||function(a){for(;a;a=a.parent)if(a.name=="svg"||a.name=="math")return!0;return!1}(l.context);t.acceptToken(r?5:4,2)}else t.next==62&&t.acceptToken(4,1)});function Y(t,l,r){let a=2+t.length;return new y(e=>{for(let s=0,O=0,o=0;;o++){if(e.next<0){o&&e.acceptToken(l);break}if(s==0&&e.next==60||s==1&&e.next==47||s>=2&&s<a&&e.next==t.charCodeAt(s-2))s++,O++;else if(s!=2&&s!=a||!J(e.next)){if(s==a&&e.next==62){o>O?e.acceptToken(l,-O):e.acceptToken(r,-(O-2));break}if((e.next==10||e.next==13)&&o){e.acceptToken(l,1);break}s=O=0}else O++;e.advance()}})}const zt=Y("script",54,1),Wt=Y("style",55,2),Dt=Y("textarea",56,3),Gt=pt({"Text RawText":b.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":b.angleBracket,TagName:b.tagName,"MismatchedCloseTag/TagName":[b.tagName,b.invalid],AttributeName:b.attributeName,"AttributeValue UnquotedAttributeValue":b.attributeValue,Is:b.definitionOperator,"EntityReference CharacterReference":b.character,Comment:b.blockComment,ProcessingInst:b.processingInstruction,DoctypeDecl:b.documentMeta}),jt=ct.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:Rt,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"],["isolate",-11,21,29,30,32,33,35,36,37,38,41,42,"ltr",-3,26,27,39,""]],propSources:[Gt],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[zt,Wt,Dt,Bt,Zt,Et,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:509},tokenPrec:511});function tt(t,l){let r=Object.create(null);for(let a of t.getChildren(H)){let e=a.getChild(yt),s=a.getChild(Q)||a.getChild(K);e&&(r[l.read(e.from,e.to)]=s?s.type.id==Q?l.read(s.from+1,s.to-1):l.read(s.from,s.to):"")}return r}function G(t,l){let r=t.getChild(Xt);return r?l.read(r.from,r.to):" "}function k(t,l,r){let a;for(let e of r)if(!e.attrs||e.attrs(a||(a=tt(t.node.parent.firstChild,l))))return{parser:e.parser};return null}function et(t=[],l=[]){let r=[],a=[],e=[],s=[];for(let o of t)(o.tag=="script"?r:o.tag=="style"?a:o.tag=="textarea"?e:s).push(o);let O=l.length?Object.create(null):null;for(let o of l)(O[o.name]||(O[o.name]=[])).push(o);return dt((o,u)=>{let m=o.type.id;if(m==kt)return k(o,u,r);if(m==$t)return k(o,u,a);if(m==qt)return k(o,u,e);if(m==F&&s.length){let p,d=o.node,c=d.firstChild,f=c&&G(c,u);if(f){for(let i of s)if(i.tag==f&&(!i.attrs||i.attrs(p||(p=tt(c,u))))){let g=d.lastChild,S=g.type.id==_t?g.from:d.to;if(S>c.to)return{parser:i.parser,overlay:[{from:c.to,to:S}]}}}}if(O&&m==H){let p,d=o.node;if(p=d.firstChild){let c=O[u.read(p.from,p.to)];if(c)for(let f of c){if(f.tagName&&f.tagName!=G(d.parent,u))continue;let i=d.lastChild;if(i.type.id==Q){let g=i.from+1,S=i.lastChild,h=i.to-(S&&S.isError?0:1);if(h>g)return{parser:f.parser,overlay:[{from:g,to:h}]}}else if(i.type.id==K)return{parser:f.parser,overlay:[{from:i.from,to:i.to}]}}}}return null})}const T=["_blank","_self","_top","_parent"],$=["ascii","utf-8","utf-16","latin1","latin1"],q=["get","post","put","delete"],_=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],x=["true","false"],n={},It={a:{attrs:{href:null,ping:null,type:null,media:null,target:T,hreflang:null}},abbr:n,address:n,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:n,aside:n,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:n,base:{attrs:{href:null,target:T}},bdi:n,bdo:n,blockquote:{attrs:{cite:null}},body:n,br:n,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:_,formmethod:q,formnovalidate:["novalidate"],formtarget:T,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:n,center:n,cite:n,code:n,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:n,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:n,div:n,dl:n,dt:n,em:n,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:n,figure:n,footer:n,form:{attrs:{action:null,name:null,"accept-charset":$,autocomplete:["on","off"],enctype:_,method:q,novalidate:["novalidate"],target:T}},h1:n,h2:n,h3:n,h4:n,h5:n,h6:n,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:n,hgroup:n,hr:n,html:{attrs:{manifest:null}},i:n,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:_,formmethod:q,formnovalidate:["novalidate"],formtarget:T,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:n,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:n,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:n,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:$,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:n,noscript:n,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:n,param:{attrs:{name:null,value:null}},pre:n,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:n,rt:n,ruby:n,samp:n,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:$}},section:n,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:n,source:{attrs:{src:null,type:null,media:null}},span:n,strong:n,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:n,summary:n,sup:n,table:n,tbody:n,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:n,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:n,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:n,time:{attrs:{datetime:null}},title:n,tr:n,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:n,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:n},at={accesskey:null,class:null,contenteditable:x,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:x,autocorrect:x,autocapitalize:x,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":x,"aria-autocomplete":["inline","list","both","none"],"aria-busy":x,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":x,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":x,"aria-hidden":x,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":x,"aria-multiselectable":x,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":x,"aria-relevant":null,"aria-required":x,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},lt="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(t=>"on"+t);for(let t of lt)at[t]=null;class v{constructor(l,r){this.tags=Object.assign(Object.assign({},It),l),this.globalAttrs=Object.assign(Object.assign({},at),r),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}function V(t,l,r=t.length){if(!l)return"";let a=l.firstChild,e=a&&a.getChild("TagName");return e?t.sliceString(e.from,Math.min(e.to,r)):""}function w(t,l=!1){for(;t;t=t.parent)if(t.name=="Element"){if(!l)return t;l=!1}return null}function rt(t,l,r){let a=r.tags[V(t,w(l))];return(a==null?void 0:a.children)||r.allTags}function M(t,l){let r=[];for(let a=w(l);a&&!a.type.isTop;a=w(a.parent)){let e=V(t,a);if(e&&a.lastChild.name=="CloseTag")break;e&&r.indexOf(e)<0&&(l.name=="EndTag"||l.from>=a.firstChild.to)&&r.push(e)}return r}v.default=new v;const nt=/^[:\-\.\w\u00b7-\uffff]*$/;function j(t,l,r,a,e){let s=/\s*>/.test(t.sliceDoc(e,e+5))?"":">",O=w(r,!0);return{from:a,to:e,options:rt(t.doc,O,l).map(o=>({label:o,type:"type"})).concat(M(t.doc,r).map((o,u)=>({label:"/"+o,apply:"/"+o+s,type:"type",boost:99-u}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function I(t,l,r,a){let e=/\s*>/.test(t.sliceDoc(a,a+5))?"":">";return{from:r,to:a,options:M(t.doc,l).map((s,O)=>({label:s,apply:s+e,type:"type",boost:99-O})),validFor:nt}}function st(t,l){let{state:r,pos:a}=l,e=N(r).resolveInner(a,-1),s=e.resolve(a);for(let O,o=a;s==e&&(O=e.childBefore(o));){let u=O.lastChild;if(!u||!u.type.isError||u.from<u.to)break;s=e=O,o=u.from}return e.name=="TagName"?e.parent&&/CloseTag$/.test(e.parent.name)?I(r,e,e.from,a):j(r,t,e,e.from,a):e.name=="StartTag"?j(r,t,e,a,a):e.name=="StartCloseTag"||e.name=="IncompleteCloseTag"?I(r,e,a,a):e.name=="OpenTag"||e.name=="SelfClosingTag"||e.name=="AttributeName"?function(O,o,u,m,p){let d=w(u),c=d?o.tags[V(O.doc,d)]:null,f=c&&c.attrs?Object.keys(c.attrs):[];return{from:m,to:p,options:(c&&c.globalAttrs===!1?f:f.length?f.concat(o.globalAttrNames):o.globalAttrNames).map(i=>({label:i,type:"property"})),validFor:nt}}(r,t,e,e.name=="AttributeName"?e.from:a,a):e.name=="Is"||e.name=="AttributeValue"||e.name=="UnquotedAttributeValue"?function(O,o,u,m,p){var d;let c,f=(d=u.parent)===null||d===void 0?void 0:d.getChild("AttributeName"),i=[];if(f){let g=O.sliceDoc(f.from,f.to),S=o.globalAttrs[g];if(!S){let h=w(u),P=h?o.tags[V(O.doc,h)]:null;S=(P==null?void 0:P.attrs)&&P.attrs[g]}if(S){let h=O.sliceDoc(m,p).toLowerCase(),P='"',R='"';/^['"]/.test(h)?(c=h[0]=='"'?/^[^"]*$/:/^[^']*$/,P="",R=O.sliceDoc(p,p+1)==h[0]?"":h[0],h=h.slice(1),m++):c=/^[^\s<>='"]*$/;for(let Z of S)i.push({label:Z,apply:P+Z+R,type:"constant"})}}return{from:m,to:p,options:i,validFor:c}}(r,t,e,e.name=="Is"?a:e.from,a):!l.explicit||s.name!="Element"&&s.name!="Text"&&s.name!="Document"?null:function(O,o,u,m){let p=[],d=0;for(let c of rt(O.doc,u,o))p.push({label:"<"+c,type:"type"});for(let c of M(O.doc,u))p.push({label:"</"+c+">",type:"type",boost:99-d++});return{from:m,to:m,options:p,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(r,t,e,a)}function te(t){return st(v.default,t)}function Ut(t){let{extraTags:l,extraGlobalAttributes:r}=t,a=r||l?new v(l,r):v.default;return e=>st(a,e)}const Nt=A.parser.configure({top:"SingleExpression"}),ot=[{tag:"script",attrs:t=>t.type=="text/typescript"||t.lang=="ts",parser:Vt.parser},{tag:"script",attrs:t=>t.type=="text/babel"||t.type=="text/jsx",parser:wt.parser},{tag:"script",attrs:t=>t.type=="text/typescript-jsx",parser:Tt.parser},{tag:"script",attrs:t=>/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(t.type),parser:Nt},{tag:"script",attrs:t=>!t.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(t.type),parser:A.parser},{tag:"style",attrs:t=>(!t.lang||t.lang=="css")&&(!t.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(t.type)),parser:L.parser}],Ot=[{name:"style",parser:L.parser.configure({top:"Styles"})}].concat(lt.map(t=>({name:t,parser:A.parser}))),it=mt.define({name:"html",parser:jt.configure({props:[ft.add({Element(t){let l=/^(\s*)(<\/)?/.exec(t.textAfter);return t.node.to<=t.pos+l[0].length?t.continue():t.lineIndent(t.node.from)+(l[2]?0:t.unit)},"OpenTag CloseTag SelfClosingTag":t=>t.column(t.node.from)+t.unit,Document(t){if(t.pos+/\s*/.exec(t.textAfter)[0].length<t.node.to)return t.continue();let l,r=null;for(let a=t.node;;){let e=a.lastChild;if(!e||e.name!="Element"||e.to!=a.to)break;r=a=e}return r&&(!(l=r.lastChild)||l.name!="CloseTag"&&l.name!="SelfClosingTag")?t.lineIndent(r.from)+t.unit:null}}),St.add({Element(t){let l=t.firstChild,r=t.lastChild;return l&&l.name=="OpenTag"?{from:l.to,to:r.name=="CloseTag"?r.from:t.to}:null}}),gt.add({"OpenTag CloseTag":t=>t.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),X=it.configure({wrap:et(ot,Ot)});function ee(t={}){let l,r="";t.matchClosingTags===!1&&(r="noMatch"),t.selfClosingTags===!0&&(r=(r?r+" ":"")+"selfClosing"),(t.nestedLanguages&&t.nestedLanguages.length||t.nestedAttributes&&t.nestedAttributes.length)&&(l=et((t.nestedLanguages||[]).concat(ot),(t.nestedAttributes||[]).concat(Ot)));let a=l?it.configure({wrap:l,dialect:r}):r?X.configure({dialect:r}):X;return new ht(a,[X.data.of({autocomplete:Ut(t)}),t.autoCloseTags!==!1?Lt:[],vt().support,Pt().support])}const U=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),Lt=xt.inputHandler.of((t,l,r,a,e)=>{if(t.composing||t.state.readOnly||l!=r||a!=">"&&a!="/"||!X.isActiveAt(t.state,l,-1))return!1;let s=e(),{state:O}=s,o=O.changeByRange(u=>{var m,p,d;let c,f=O.doc.sliceString(u.from-1,u.to)==a,{head:i}=u,g=N(O).resolveInner(i,-1);if(f&&a==">"&&g.name=="EndTag"){let S=g.parent;if(((p=(m=S.parent)===null||m===void 0?void 0:m.lastChild)===null||p===void 0?void 0:p.name)!="CloseTag"&&(c=V(O.doc,S.parent,i))&&!U.has(c))return{range:u,changes:{from:i,to:i+(O.doc.sliceString(i,i+1)===">"?1:0),insert:`</${c}>`}}}else if(f&&a=="/"&&g.name=="IncompleteCloseTag"){let S=g.parent;if(g.from==i-2&&((d=S.lastChild)===null||d===void 0?void 0:d.name)!="CloseTag"&&(c=V(O.doc,S,i))&&!U.has(c)){let h=i+(O.doc.sliceString(i,i+1)===">"?1:0),P=`${c}>`;return{range:bt.cursor(i+P.length,-1),changes:{from:i,to:h,insert:P}}}}return{range:u}});return!o.changes.empty&&(t.dispatch([s,O.update(o,{userEvent:"input.complete",scrollIntoView:!0})]),!0)});export{Lt as autoCloseTags,ee as html,te as htmlCompletionSource,Ut as htmlCompletionSourceWith,X as htmlLanguage,it as htmlPlain};
