var A="function"==typeof Object.defineProperties?Object.defineProperty:function(e,k,h){e!=Array.prototype&&e!=Object.prototype&&(e[k]=h.value)},D="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function E(e,k){if(k){var h=D;e=e.split(".");for(var a=0;a<e.length-1;a++){var f=e[a];f in h||(h[f]={});h=h[f]}e=e[e.length-1];a=h[e];k=k(a);k!=a&&null!=k&&A(h,e,{configurable:!0,writable:!0,value:k})}}
E("Object.is",function(e){return e?e:function(e,h){return e===h?0!==e||1/e===1/h:e!==e&&h!==h}});E("Array.prototype.includes",function(e){return e?e:function(e,h){var a=this;a instanceof String&&(a=String(a));var f=a.length;for(h=h||0;h<f;h++)if(a[h]==e||Object.is(a[h],e))return!0;return!1}});
(function(e){function k(a){if(h[a])return h[a].c;var f=h[a]={Va:a,wa:!1,c:{}};e[a].call(f.c,f,f.c,k);f.wa=!0;return f.c}var h={};k.j=e;k.g=h;k.b=function(a,f){k.f(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:f})};k.h=function(a){var f=a&&a.Ja?function(){return a["default"]}:function(){return a};k.b(f,f);return f};k.f=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};k.i="";return k(k.m=1)})([function(e,k,h){function a(b,g,a){g.be&&B(b,g.offset);var c=b.length;if(10!=
a)for(var m=0;m<c;m++)b[m]=parseInt(b[m],a);a=[];c-=g.offset-1;for(m=0;m<c;m+=g.offset)a.push(x(b,m));return a}function f(b,g,a){for(var c=0,m=[],d=b.length,f=0;f<d;f++)c=y(m,b[f],c);g.be&&B(m,g.offset);if(10!=a)for(b=(2==a?8:2)+1,d=m.length,g=0;g<d;g++)m[g]=m[g].toString(a),m[g]=Array(b-m[g].length).join("0")+m[g];return m}function r(b,g){return t.read(b,g)}function u(b,g){b=t.read(b,g);g=(b&31744)>>10;var a=b&1023;return(g?Math.pow(2,g-15)*(1+a/1024):a/1024*.00006103515625)*(b>>15?-1:1)}function q(b,
g){v[0]=t.read(b,g);return z[0]}function d(b,g){v[0]=t.read(b,g);v[1]=t.read(b,g+4);return C[0]}function p(b,g){for(var a="",c=0;c<t.offset;c++)a+=String.fromCharCode(b[g+c]);return a}function l(b,g,a){return t.write(b,g,a)}function c(b,g,a){z[0]=g;var c=v[0];g=c>>16&32768;var m=c>>12&2047;c=c>>23&255;103<=c&&(g=(g|c-112<<10|m>>1)+(m&1));b[a++]=g&255;b[a++]=g>>>8&255;return a}function n(b,g,a){z[0]=g;return t.write(b,v[0],a)}function w(b,g,a){C[0]=g;a=t.write(b,v[0],a);return t.write(b,v[1],a)}function b(b,
g,a){for(var c=0;c<g.length;c++)b[a++]=g.charCodeAt(c);return a}function g(g){if(!g)throw Error("Undefined type.");if(g["float"]){if(-1==[16,32,64].indexOf(g.bits))throw Error("Not a supported float type.");}else if(g["char"]){if(8>g.bits||g.bits%2)throw Error("Wrong offset for type char.");}else if(1>g.bits||53<g.bits)throw Error("Not a supported type.");g.offset=8>g.bits?1:Math.ceil(g.bits/8);g["float"]?16==g.bits?x=u:32==g.bits?x=q:64==g.bits&&(x=d):g["char"]?x=p:x=r;g["float"]?16==g.bits?y=c:
32==g.bits?y=n:64==g.bits&&(y=w):g["char"]?y=b:y=l;g["char"]?t.offset=8>g.bits?1:Math.ceil(g.bits/8):t=new F(64==g.bits?32:g.bits,g["float"]?!1:g.signed)}function m(b,g){b.constructor==String&&(b=b.length>=g.offset?b.slice(0,g.offset):"");return b}var B=h(4),F=h(5);k=new Int8Array(8);var v=new Uint32Array(k.buffer),z=new Float32Array(k.buffer),C=new Float64Array(k.buffer),x,y,t={};e.c.La={bits:8,"char":!0};e.c.Ua={bits:32,"char":!0};e.c.Ka={bits:1};e.c.Ya={bits:2,signed:!0};e.c.lb={bits:2};e.c.cb=
{bits:4,signed:!0};e.c.qb={bits:4};e.c.ib={bits:8,signed:!0};e.c.vb={bits:8};e.c.Wa={bits:16,signed:!0};e.c.jb={bits:16};e.c.Oa={bits:16,"float":!0};e.c.Za={bits:24,signed:!0};e.c.mb={bits:24};e.c.ab={bits:32,signed:!0};e.c.ob={bits:32};e.c.Qa={bits:32,"float":!0};e.c.eb={bits:40,signed:!0};e.c.rb={bits:40};e.c.gb={bits:48,signed:!0};e.c.tb={bits:48};e.c.Sa={bits:64,"float":!0};e.c.Xa={bits:16,signed:!0,be:!0};e.c.kb={bits:16,be:!0};e.c.Pa={bits:16,"float":!0,be:!0};e.c.$a={bits:24,signed:!0,be:!0};
e.c.nb={bits:24,be:!0};e.c.bb={bits:32,signed:!0,be:!0};e.c.pb={bits:32,be:!0};e.c.Ra={bits:32,"float":!0,be:!0};e.c.fb={bits:40,signed:!0,be:!0};e.c.sb={bits:40,be:!0};e.c.hb={bits:48,signed:!0,be:!0};e.c.ub={bits:48,be:!0};e.c.Ta={bits:64,"float":!0,be:!0};e.c.a=function(b,a){var c=void 0===c?10:c;g(a);var d=[];if(void 0===b)return d;b=m(b,a);return f([b],a,c)};e.c.l=function(b,c){var m=void 0===m?10:m;g(c);return(b=a(b.slice(0,c.offset),c,m))?b[0]:c["char"]?"":null};e.c.T=function(b,a){var c=void 0===
c?10:c;g(a);if(a["char"])for(var d=b.length,e=0;e<d;e++)b[e]=m(b[e],a);return f(b,a,c)};e.c.Ha=function(b,c){var m=void 0===m?10:m;g(c);return a(b,c,m)}},function(e,k,h){function a(b){b=void 0===b?null:b;this.container="";this.chunkSize=0;this.format="";this.fmt={chunkId:"",chunkSize:0,audioFormat:0,numChannels:0,sampleRate:0,byteRate:0,blockAlign:0,bitsPerSample:0,cbSize:0,validBitsPerSample:0,dwChannelMask:0,subformat:[]};this.fact={chunkId:"",chunkSize:0,dwSampleLength:0};this.cue={chunkId:"",
chunkSize:0,dwCuePoints:0,points:[]};this.smpl={chunkId:"",chunkSize:0,dwManufacturer:0,dwProduct:0,dwSamplePeriod:0,dwMIDIUnityNote:0,dwMIDIPitchFraction:0,dwSMPTEFormat:0,dwSMPTEOffset:0,dwNumSampleLoops:0,dwSamplerData:0,loops:[]};this.bext={chunkId:"",chunkSize:0,description:"",originator:"",originatorReference:"",originationDate:"",originationTime:"",timeReference:[],version:0,UMID:"",loudnessValue:0,loudnessRange:0,maxTruePeakLevel:0,maxMomentaryLoudness:0,maxShortTermLoudness:0,reserved:"",
codingHistory:""};this.ds64={chunkId:"",chunkSize:0,riffSizeHigh:0,riffSizeLow:0,dataSizeHigh:0,dataSizeLow:0,originationTime:0,sampleCountHigh:0,sampleCountLow:0};this.data={chunkId:"",chunkSize:0,samples:[]};this.LIST=[];this.junk={chunkId:"",chunkSize:0,chunkData:[]};this.isInterleaved=!0;this.bitDepth="0";this.v={4:17,8:1,"8a":6,"8m":7,16:1,24:1,32:1,"32f":3,64:3};this.f=0;b&&this.fromBuffer(b)}var f=h(2),r=h(3),u=h(6),q=h(7),d=h(0),p=h(10),l={bits:16},c={bits:32},n={bits:32,"char":!0},w={bits:8,
"char":!0};a.prototype.fromScratch=function(b,g,a,c,d){d=void 0===d?{}:d;d.container||(d.container="RIFF");this.bitDepth=a;this.data.samples=c;0<c.length&&c[0].constructor===Array&&(this.isInterleaved=!1,this.s());c=((parseInt(a,10)-1|7)+1)/8;this.w(a,b,g,c,d);"4"==a?this.W(a,b,g,c,d):"8a"==a||"8m"==a?this.X(a,b,g,c,d):(-1==Object.keys(this.v).indexOf(a)||2<this.fmt.numChannels)&&this.Y(a,b,g,c,d);this.data.chunkId="data";this.data.chunkSize=this.data.samples.length*c;this.L();this.u()};a.prototype.fromBuffer=
function(b){this.G();this.za(b);b=r.read(b);this.ra(b.subChunks);this.ta(b.subChunks);this.sa(b.subChunks);this.ma(b.subChunks);this.oa(b.subChunks);this.Aa(b.subChunks);this.qa(b.subChunks);this.xa(b.subChunks);this.va(b.subChunks);this.V()};a.prototype.toBuffer=function(){this.L();this.s();return this.Z()};a.prototype.fromBase64=function(b){this.fromBuffer(new Uint8Array(p.decode(b)))};a.prototype.toBase64=function(){return p.encode(this.toBuffer())};a.prototype.toDataURI=function(){return"data:audio/wav;base64,"+
this.toBase64()};a.prototype.fromDataURI=function(b){this.fromBase64(b.replace("data:audio/wav;base64,",""))};a.prototype.toRIFF=function(){"RF64"==this.container?this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,this.data.samples):(this.container="RIFF",this.u())};a.prototype.toRIFX=function(){"RF64"==this.container?this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,this.data.samples,{container:"RIFX"}):(this.container="RIFX",this.u())};a.prototype.toBitDepth=
function(b,g){var a=b,c=this.bitDepth;void 0===g||g||(a=this.K(b),c=this.K(this.bitDepth));this.s();this.F();f.toBitDepth(this.data.samples,c,a);this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,b,this.data.samples,{container:this.j()})};a.prototype.interleave=function(){if(!this.isInterleaved){for(var b=[],g=0;g<this.data.samples[0].length;g++)for(var a=0;a<this.data.samples.length;a++)b.push(this.data.samples[a][g]);this.data.samples=b;this.isInterleaved=!0}};a.prototype.deInterleave=function(){if(this.isInterleaved){for(var b=
[],g=0;g<this.fmt.numChannels;g++)b[g]=[];g=this.data.samples.length;for(var a=0;a<g;a+=this.fmt.numChannels)for(var c=0;c<this.fmt.numChannels;c++)b[c].push(this.data.samples[a+c]);this.data.samples=b;this.isInterleaved=!1}};a.prototype.toIMAADPCM=function(){if(8E3!=this.fmt.sampleRate)throw Error("Only 8000 Hz files can be compressed as IMA-ADPCM.");if(1!=this.fmt.numChannels)throw Error("Only mono files can be compressed as IMA-ADPCM.");this.B();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,
"4",u.encode(this.data.samples),{container:this.j()})};a.prototype.fromIMAADPCM=function(b){b=void 0===b?"16":b;this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"16",u.decode(this.data.samples,this.fmt.blockAlign),{container:this.j()});"16"!=b&&this.toBitDepth(b)};a.prototype.toALaw=function(){this.B();this.s();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"8a",q.M.encode(this.data.samples),{container:this.j()})};a.prototype.fromALaw=function(b){b=void 0===b?"16":b;this.fromScratch(this.fmt.numChannels,
this.fmt.sampleRate,"16",q.M.decode(this.data.samples),{container:this.j()});"16"!=b&&this.toBitDepth(b)};a.prototype.toMuLaw=function(){this.B();this.s();this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"8m",q.N.encode(this.data.samples),{container:this.j()})};a.prototype.fromMuLaw=function(b){b=void 0===b?"16":b;this.fromScratch(this.fmt.numChannels,this.fmt.sampleRate,"16",q.N.decode(this.data.samples),{container:this.j()});"16"!=b&&this.toBitDepth(b)};a.prototype.setTag=function(b,g){b=
this.$(b);var a=this.D(b);null!==a.o?(this.LIST[a.LIST].subChunks[a.o].chunkSize=g.length+1,this.LIST[a.LIST].subChunks[a.o].value=g):null!==a.LIST?this.LIST[a.LIST].subChunks.push({chunkId:b,chunkSize:g.length+1,value:g}):(this.LIST.push({chunkId:"LIST",chunkSize:g.length+9,format:"INFO",chunkData:[],subChunks:[]}),this.LIST[this.LIST.length-1].subChunks.push({chunkId:b,chunkSize:g.length+1,value:g}))};a.prototype.getTag=function(b){b=this.D(b);return null!==b.o?this.LIST[b.LIST].subChunks[b.o].value:
null};a.prototype.deleteTag=function(b){b=this.D(b);return null!==b.o?(this.LIST[b.LIST].subChunks.splice(b.o,1),!0):!1};a.prototype.setCuePoint=function(b,g){g=void 0===g?"":g;this.cue.chunkId="cue ";b=b*this.fmt.sampleRate/1E3;var a=this.H();this.C();var c=this.cue.points.length;this.cue.points=[];var d=!1;if(0==c)this.m(b,1,g);else{for(var f=0;f<c;f++)a[f].dwPosition>b&&!d?(this.m(b,f+1,g),this.m(a[f].dwPosition,f+2,a[f].label),d=!0):this.m(a[f].dwPosition,f+1,a[f].label);d||this.m(b,this.cue.points.length+
1,g)}this.cue.dwCuePoints=this.cue.points.length};a.prototype.deleteCuePoint=function(b){this.cue.chunkId="cue ";var g=this.H();this.C();var a=this.cue.points.length;this.cue.points=[];for(var c=0;c<a;c++)c+1!=b&&this.m(g[c].dwPosition,c+1,g[c].label);this.cue.dwCuePoints=this.cue.points.length;this.cue.dwCuePoints?this.cue.chunkId="cue ":(this.cue.chunkId="",this.C())};a.prototype.updateLabel=function(b,g){var a=this.A();if(null!==a)for(var c=0;c<this.LIST[a].subChunks.length;c++)this.LIST[a].subChunks[c].dwName==
b&&(this.LIST[a].subChunks[c].value=g)};a.prototype.m=function(b,g,a){this.cue.points.push({dwName:g,dwPosition:b,fccChunk:"data",dwChunkStart:0,dwBlockStart:0,dwSampleOffset:b});this.Ea(g,a)};a.prototype.H=function(){for(var b=[],a=0;a<this.cue.points.length;a++)b.push({dwPosition:this.cue.points[a].dwPosition,label:this.ja(this.cue.points[a].dwName)});return b};a.prototype.ja=function(b){var a=this.A();if(null!==a)for(var c=0;c<this.LIST[a].subChunks.length;c++)if(this.LIST[a].subChunks[c].dwName==
b)return this.LIST[a].subChunks[c].value;return""};a.prototype.C=function(){for(var b=0;b<this.LIST.length;b++)"adtl"==this.LIST[b].format&&this.LIST.splice(b)};a.prototype.Ea=function(b,a){var g=this.A();null===g&&(this.LIST.push({chunkId:"LIST",chunkSize:4,format:"adtl",chunkData:[],subChunks:[]}),g=this.LIST.length-1);this.Da(null===g?0:g,b,a)};a.prototype.Da=function(b,a,c){this.LIST[b].subChunks.push({chunkId:"labl",chunkSize:c.length,dwName:a,value:c});this.LIST[b].chunkSize+=c.length+13};a.prototype.A=
function(){for(var b=0;b<this.LIST.length;b++)if("adtl"==this.LIST[b].format)return b;return null};a.prototype.D=function(b){for(var a={LIST:null,o:null},c=0;c<this.LIST.length;c++)if("INFO"==this.LIST[c].format){a.LIST=c;for(var d=0;d<this.LIST[c].subChunks.length;d++)if(this.LIST[c].subChunks[d].chunkId==b){a.o=d;break}break}return a};a.prototype.$=function(b){if(b.constructor!==String)throw Error("Invalid tag name.");if(4>b.length)for(var a=0;a<4-b.length;a++)b+=" ";return b};a.prototype.W=function(b,
a,c,d,f){this.w(b,a,c,d,f);this.chunkSize=40+this.data.samples.length;this.fmt.chunkSize=20;this.fmt.byteRate=4055;this.fmt.blockAlign=256;this.fmt.bitsPerSample=4;this.fmt.cbSize=2;this.fmt.validBitsPerSample=505;this.fact.chunkId="fact";this.fact.chunkSize=4;this.fact.dwSampleLength=2*this.data.samples.length;this.data.chunkSize=this.data.samples.length};a.prototype.Y=function(b,a,c,d,f){this.w(b,a,c,d,f);this.chunkSize=60+this.data.samples.length*d;this.fmt.chunkSize=40;this.fmt.bitsPerSample=
(parseInt(b,10)-1|7)+1;this.fmt.cbSize=22;this.fmt.validBitsPerSample=parseInt(b,10);this.fmt.dwChannelMask=this.ea();this.fmt.subformat=[1,1048576,2852126848,1905997824]};a.prototype.ea=function(){var b=0;1==this.fmt.numChannels?b=4:2==this.fmt.numChannels?b=3:4==this.fmt.numChannels?b=51:6==this.fmt.numChannels?b=63:8==this.fmt.numChannels&&(b=1599);return b};a.prototype.X=function(b,a,c,d,f){this.w(b,a,c,d,f);this.chunkSize=40+this.data.samples.length;this.fmt.chunkSize=20;this.fmt.cbSize=2;this.fmt.validBitsPerSample=
8;this.fact.chunkId="fact";this.fact.chunkSize=4;this.fact.dwSampleLength=this.data.samples.length};a.prototype.w=function(b,a,c,d,f){this.G();this.container=f.container;this.chunkSize=36+this.data.samples.length*d;this.format="WAVE";this.fmt.chunkId="fmt ";this.fmt.chunkSize=16;this.fmt.byteRate=a*d*c;this.fmt.blockAlign=a*d;this.fmt.audioFormat=this.v[b]?this.v[b]:65534;this.fmt.numChannels=a;this.fmt.sampleRate=c;this.fmt.bitsPerSample=parseInt(b,10);this.fmt.cbSize=0;this.fmt.validBitsPerSample=
0};a.prototype.K=function(b){"32f"!=b&&(b=((parseInt(b,10)-1|7)+1).toString());return b};a.prototype.L=function(){this.Fa();this.Ga();this.Ia()};a.prototype.Fa=function(){if(!(this.v[this.bitDepth]||8<parseInt(this.bitDepth,10)&&54>parseInt(this.bitDepth,10)))throw Error("Invalid bit depth.");};a.prototype.Ga=function(){var b=this.fmt.numChannels*this.fmt.bitsPerSample/8;if(1>this.fmt.numChannels||65535<b)throw Error("Invalid number of channels.");};a.prototype.Ia=function(){var b=this.fmt.bitsPerSample/
8*this.fmt.numChannels*this.fmt.sampleRate;if(1>this.fmt.sampleRate||4294967295<b)throw Error("Invalid sample rate.");};a.prototype.G=function(){this.fmt.cbSize=0;this.fmt.validBitsPerSample=0;this.fact.chunkId="";this.ds64.chunkId=""};a.prototype.B=function(){this.F();"16"!=this.bitDepth&&this.toBitDepth("16")};a.prototype.F=function(){"8a"==this.bitDepth?this.fromALaw():"8m"==this.bitDepth?this.fromMuLaw():"4"==this.bitDepth&&this.fromIMAADPCM()};a.prototype.s=function(){this.isInterleaved||this.interleave()};
a.prototype.u=function(){var b="RIFX"===this.container;l.be=b;c.be=b};a.prototype.i=function(b,a,c){c=void 0===c?!1:c;for(var g=[],d=0;d<b.length;d++)if(b[d].chunkId==a)if(c)g.push(b[d]);else return b[d];return"LIST"==a?g.length?g:null:null};a.prototype.za=function(b){this.f=0;this.container=this.g(b,4);if(-1===["RIFF","RIFX","RF64"].indexOf(this.container))throw Error("Not a supported format.");this.u();this.chunkSize=this.b(b,c);this.format=this.g(b,4);if("WAVE"!=this.format)throw Error("Could not find the 'WAVE' format identifier");
};a.prototype.ta=function(b){if(b=this.i(b,"fmt ")){this.f=0;var a=b.chunkData;this.fmt.chunkId=b.chunkId;this.fmt.chunkSize=b.chunkSize;this.fmt.audioFormat=this.b(a,l);this.fmt.numChannels=this.b(a,l);this.fmt.sampleRate=this.b(a,c);this.fmt.byteRate=this.b(a,c);this.fmt.blockAlign=this.b(a,l);this.fmt.bitsPerSample=this.b(a,l);this.ua(a)}else throw Error("Could not find the 'fmt ' chunk");};a.prototype.ua=function(b){16<this.fmt.chunkSize&&(this.fmt.cbSize=this.b(b,l),18<this.fmt.chunkSize&&(this.fmt.validBitsPerSample=
this.b(b,l),20<this.fmt.chunkSize&&(this.fmt.dwChannelMask=this.b(b,c),this.fmt.subformat=[this.b(b,c),this.b(b,c),this.b(b,c),this.b(b,c)])))};a.prototype.sa=function(b){if(b=this.i(b,"fact"))this.f=0,this.fact.chunkId=b.chunkId,this.fact.chunkSize=b.chunkSize,this.fact.dwSampleLength=this.b(b.chunkData,c)};a.prototype.oa=function(b){var a=this.i(b,"cue ");if(a)for(this.f=0,b=a.chunkData,this.cue.chunkId=a.chunkId,this.cue.chunkSize=a.chunkSize,this.cue.dwCuePoints=this.b(b,c),a=0;a<this.cue.dwCuePoints;a++)this.cue.points.push({dwName:this.b(b,
c),dwPosition:this.b(b,c),fccChunk:this.g(b,4),dwChunkStart:this.b(b,c),dwBlockStart:this.b(b,c),dwSampleOffset:this.b(b,c)})};a.prototype.Aa=function(b){var a=this.i(b,"smpl");if(a)for(this.f=0,b=a.chunkData,this.smpl.chunkId=a.chunkId,this.smpl.chunkSize=a.chunkSize,this.smpl.dwManufacturer=this.b(b,c),this.smpl.dwProduct=this.b(b,c),this.smpl.dwSamplePeriod=this.b(b,c),this.smpl.dwMIDIUnityNote=this.b(b,c),this.smpl.dwMIDIPitchFraction=this.b(b,c),this.smpl.dwSMPTEFormat=this.b(b,c),this.smpl.dwSMPTEOffset=
this.b(b,c),this.smpl.dwNumSampleLoops=this.b(b,c),this.smpl.dwSamplerData=this.b(b,c),a=0;a<this.smpl.dwNumSampleLoops;a++)this.smpl.loops.push({dwName:this.b(b,c),dwType:this.b(b,c),dwStart:this.b(b,c),dwEnd:this.b(b,c),dwFraction:this.b(b,c),dwPlayCount:this.b(b,c)})};a.prototype.qa=function(b){if(b=this.i(b,"data"))this.data.chunkId="data",this.data.chunkSize=b.chunkSize,this.Ba(b.chunkData);else throw Error("Could not find the 'data' chunk");};a.prototype.ma=function(b){if(b=this.i(b,"bext")){this.f=
0;var a=b.chunkData;this.bext.chunkId=b.chunkId;this.bext.chunkSize=b.chunkSize;this.bext.description=this.g(a,256);this.bext.originator=this.g(a,32);this.bext.originatorReference=this.g(a,32);this.bext.originationDate=this.g(a,10);this.bext.originationTime=this.g(a,8);this.bext.timeReference=[this.b(a,c),this.b(a,c)];this.bext.version=this.b(a,l);this.bext.UMID=this.g(a,64);this.bext.loudnessValue=this.b(a,l);this.bext.loudnessRange=this.b(a,l);this.bext.maxTruePeakLevel=this.b(a,l);this.bext.maxMomentaryLoudness=
this.b(a,l);this.bext.maxShortTermLoudness=this.b(a,l);this.bext.reserved=this.g(a,180);this.bext.codingHistory=this.g(a,this.bext.chunkSize-602)}};a.prototype.ra=function(b){if(b=this.i(b,"ds64")){this.f=0;var a=b.chunkData;this.ds64.chunkId=b.chunkId;this.ds64.chunkSize=b.chunkSize;this.ds64.riffSizeHigh=this.b(a,c);this.ds64.riffSizeLow=this.b(a,c);this.ds64.dataSizeHigh=this.b(a,c);this.ds64.dataSizeLow=this.b(a,c);this.ds64.originationTime=this.b(a,c);this.ds64.sampleCountHigh=this.b(a,c);this.ds64.sampleCountLow=
this.b(a,c)}else if("RF64"==this.container)throw Error("Could not find the 'ds64' chunk");};a.prototype.xa=function(b){b=this.i(b,"LIST",!0);if(null!==b)for(var a=0;a<b.length;a++){var c=b[a];this.LIST.push({chunkId:c.chunkId,chunkSize:c.chunkSize,format:c.format,chunkData:c.chunkData,subChunks:[]});for(var d=0;d<c.subChunks.length;d++)this.ya(c.subChunks[d],c.format)}};a.prototype.ya=function(b,a){"adtl"==a?-1<["labl","note","ltxt"].indexOf(b.chunkId)&&(a={chunkId:b.chunkId,chunkSize:b.chunkSize,
dwName:d.l(b.chunkData.slice(0,4),c)},"ltxt"!=b.chunkId&&(a.value=this.J(b.chunkData.slice(4))),this.LIST[this.LIST.length-1].subChunks.push(a)):"INFO"==a&&this.LIST[this.LIST.length-1].subChunks.push({chunkId:b.chunkId,chunkSize:b.chunkSize,value:this.J(b.chunkData.slice(0))})};a.prototype.va=function(b){if(b=this.i(b,"junk"))this.junk={chunkId:b.chunkId,chunkSize:b.chunkSize,chunkData:b.chunkData}};a.prototype.J=function(b){for(var a="",c=0;c<b.length&&0!==b[c];c++)a+=d.l([b[c]],w);return a};a.prototype.g=
function(b,a){for(var c="",g=0;g<a;g++)c+=d.l([b[this.f]],w),this.f++;return c};a.prototype.b=function(b,a){var c=a.bits/8;b=d.l(b.slice(this.f,this.f+c),a);this.f+=c;return b};a.prototype.h=function(b,a){var c=void 0===c?!0:c;b=d.T(b,w);if(c)for(c=b.length;c<a;c++)b.push(0);return b};a.prototype.Ca=function(){return d.T(this.data.samples,this.I())};a.prototype.Ba=function(b){this.data.samples=d.Ha(b,this.I())};a.prototype.I=function(){var b={be:"RIFX"===this.container,bits:4==this.fmt.bitsPerSample?
8:this.fmt.bitsPerSample,"float":3==this.fmt.audioFormat?!0:!1};b.signed=8==b.bits?!1:!0;return b};a.prototype.aa=function(){var b=[];this.bext.chunkId&&(b=b.concat(d.a(this.bext.chunkId,n),d.a(602+this.bext.codingHistory.length,c),this.h(this.bext.description,256),this.h(this.bext.originator,32),this.h(this.bext.originatorReference,32),this.h(this.bext.originationDate,10),this.h(this.bext.originationTime,8),d.a(this.bext.timeReference[0],c),d.a(this.bext.timeReference[1],c),d.a(this.bext.version,
l),this.h(this.bext.UMID,64),d.a(this.bext.loudnessValue,l),d.a(this.bext.loudnessRange,l),d.a(this.bext.maxTruePeakLevel,l),d.a(this.bext.maxMomentaryLoudness,l),d.a(this.bext.maxShortTermLoudness,l),this.h(this.bext.reserved,180),this.h(this.bext.codingHistory,this.bext.codingHistory.length)));return b};a.prototype.da=function(){var b=[];this.ds64.chunkId&&(b=b.concat(d.a(this.ds64.chunkId,n),d.a(this.ds64.chunkSize,c),d.a(this.ds64.riffSizeHigh,c),d.a(this.ds64.riffSizeLow,c),d.a(this.ds64.dataSizeHigh,
c),d.a(this.ds64.dataSizeLow,c),d.a(this.ds64.originationTime,c),d.a(this.ds64.sampleCountHigh,c),d.a(this.ds64.sampleCountLow,c)));return b};a.prototype.ba=function(){var b=[];if(this.cue.chunkId){var a=this.ca();b=b.concat(d.a(this.cue.chunkId,n),d.a(a.length+4,c),d.a(this.cue.dwCuePoints,c),a)}return b};a.prototype.ca=function(){for(var b=[],a=0;a<this.cue.dwCuePoints;a++)b=b.concat(d.a(this.cue.points[a].dwName,c),d.a(this.cue.points[a].dwPosition,c),d.a(this.cue.points[a].fccChunk,n),d.a(this.cue.points[a].dwChunkStart,
c),d.a(this.cue.points[a].dwBlockStart,c),d.a(this.cue.points[a].dwSampleOffset,c));return b};a.prototype.ka=function(){var b=[];if(this.smpl.chunkId){var a=this.la();b=b.concat(d.a(this.smpl.chunkId,n),d.a(a.length+36,c),d.a(this.smpl.dwManufacturer,c),d.a(this.smpl.dwProduct,c),d.a(this.smpl.dwSamplePeriod,c),d.a(this.smpl.dwMIDIUnityNote,c),d.a(this.smpl.dwMIDIPitchFraction,c),d.a(this.smpl.dwSMPTEFormat,c),d.a(this.smpl.dwSMPTEOffset,c),d.a(this.smpl.dwNumSampleLoops,c),d.a(this.smpl.dwSamplerData,
c),a)}return b};a.prototype.la=function(){for(var b=[],a=0;a<this.smpl.dwNumSampleLoops;a++)b=b.concat(d.a(this.smpl.loops[a].dwName,c),d.a(this.smpl.loops[a].dwType,c),d.a(this.smpl.loops[a].dwStart,c),d.a(this.smpl.loops[a].dwEnd,c),d.a(this.smpl.loops[a].dwFraction,c),d.a(this.smpl.loops[a].dwPlayCount,c));return b};a.prototype.fa=function(){var b=[];this.fact.chunkId&&(b=b.concat(d.a(this.fact.chunkId,n),d.a(this.fact.chunkSize,c),d.a(this.fact.dwSampleLength,c)));return b};a.prototype.ga=function(){if(this.fmt.chunkId)return[].concat(d.a(this.fmt.chunkId,
n),d.a(this.fmt.chunkSize,c),d.a(this.fmt.audioFormat,l),d.a(this.fmt.numChannels,l),d.a(this.fmt.sampleRate,c),d.a(this.fmt.byteRate,c),d.a(this.fmt.blockAlign,l),d.a(this.fmt.bitsPerSample,l),this.ha());throw Error("Could not find the 'fmt ' chunk");};a.prototype.ha=function(){var b=[];16<this.fmt.chunkSize&&(b=b.concat(d.a(this.fmt.cbSize,l)));18<this.fmt.chunkSize&&(b=b.concat(d.a(this.fmt.validBitsPerSample,l)));20<this.fmt.chunkSize&&(b=b.concat(d.a(this.fmt.dwChannelMask,c)));24<this.fmt.chunkSize&&
(b=b.concat(d.a(this.fmt.subformat[0],c),d.a(this.fmt.subformat[1],c),d.a(this.fmt.subformat[2],c),d.a(this.fmt.subformat[3],c)));return b};a.prototype.getLISTBytes_=function(){for(var b=[],a=0;a<this.LIST.length;a++){var f=this.U(this.LIST[a].subChunks,this.LIST[a].format);b=b.concat(d.a(this.LIST[a].chunkId,n),d.a(f.length+4,c),d.a(this.LIST[a].format,n),f)}return b};a.prototype.U=function(b,a){for(var g=[],f=0;f<b.length;f++)"INFO"==a?(g=g.concat(d.a(b[f].chunkId,n),d.a(b[f].value.length+1,c),
this.h(b[f].value,b[f].value.length)),g.push(0)):"adtl"==a&&-1<["labl","note"].indexOf(b[f].chunkId)&&(g=g.concat(d.a(b[f].chunkId,n),d.a(b[f].value.length+4+1,c),d.a(b[f].dwName,c),this.h(b[f].value,b[f].value.length)),g.push(0)),g.length%2&&g.push(0);return g};a.prototype.ia=function(){var a=[];return this.junk.chunkId?a.concat(d.a(this.junk.chunkId,n),d.a(this.junk.chunkData.length,c),this.junk.chunkData):a};a.prototype.j=function(){return"RF64"==this.container?"RIFF":this.container};a.prototype.V=
function(){3==this.fmt.audioFormat&&32==this.fmt.bitsPerSample?this.bitDepth="32f":6==this.fmt.audioFormat?this.bitDepth="8a":7==this.fmt.audioFormat?this.bitDepth="8m":this.bitDepth=this.fmt.bitsPerSample.toString()};a.prototype.Z=function(){var a=this.Ca();a=[].concat(d.a(this.format,n),this.ia(),this.da(),this.aa(),this.ga(),this.fa(),d.a(this.data.chunkId,n),d.a(a.length,c),a,this.ba(),this.ka(),this.getLISTBytes_());return new Uint8Array([].concat(d.a(this.container,n),d.a(a.length,c),a))};window.WaveFile=
a},function(e){function k(a,d,c,f){q(d);q(c);f=f||a;var e=u(d,c),b={S:Math.pow(2,parseInt(d,10))/2,P:Math.pow(2,parseInt(c,10))/2,R:Math.pow(2,parseInt(d,10))/2-1,O:Math.pow(2,parseInt(c,10))/2-1},g=a.length;if("8"==d)for(d=0;d<g;d++)f[d]=a[d]-=128;for(d=0;d<g;d++)f[d]=e(a[d],b);if("8"==c)for(a=0;a<g;a++)f[a]=f[a]+=128}function h(a,d){return a=0<a?parseInt(a/d.R*d.O,10):parseInt(a/d.S*d.P,10)}function a(a,d){return parseInt(0<a?a*d.O:a*d.P,10)}function f(a,d){return 0<a?a/d.R:a/d.S}function r(a){d[0]=
a;return d[0]}function u(d,e){var c;["32f","64"].includes(d)?["32f","64"].includes(e)?c=r:c=a:c=["32f","64"].includes(e)?f:h;d==e&&(c=function(a){return a});return c}function q(a){if("32f"!=a&&"64"!=a&&("8">parseInt(a,10)||"53"<parseInt(a,10)))throw Error("Invalid bit depth.");}var d=new Float32Array(1);e.c=k;e.c.toBitDepth=k},function(e,k,h){function a(a,e){e=void 0===e?!1:e;p.be="RIFX"==a.chunkId;a=d.a(a.chunkId,l).concat(d.a(a.chunkSize,p),d.a(a.format,l),f(a.subChunks));e||(a=new Uint8Array(a));
return a}function f(c){for(var f=[],e=0;e<c.length;)f="LIST"==c[e].chunkId?f.concat(a(c[e],!0)):f.concat(d.a(c[e].chunkId,l),d.a(c[e].chunkSize,p),c[e].chunkData),e++;return f}function r(a){for(var c=[],d=q(a,12);d<=a.length-8;)c.push(u(a,d)),d+=8+c[c.length-1].chunkSize;return c}function u(a,f){f=q(a,f);var c={chunkId:d.l(a.slice(f,f+4),l),chunkSize:d.l(a.slice(f+4,f+8),p)};"LIST"==c.chunkId?(c.format=d.l(a.slice(f+8,f+12),l),c.subChunks=r(a.slice(f))):c.chunkData=a.slice(f+8,f+8+c.chunkSize);return c}
function q(a,d){for(;0==a[d]||0==a[d+1]||0==a[d+2]||0==a[d+3];)d++;return d}var d=h(0),p={bits:32},l={bits:32,"char":!0};e.c.read=function(a){a=[].slice.call(a);var c=d.l(a.slice(0,4),l);p.be="RIFX"==c;return{chunkId:c,chunkSize:d.l(a.slice(4,8),p),format:d.l(a.slice(8,12),l),subChunks:r(a)}};e.c.write=a},function(e){e.c=function(e,h){for(var a=e.length,f=0;f<a;){for(var r=e,k=f,q=0,d=h-1,p=parseInt(h/2,10);q<p;){var l=r[k+q];r[k+q]=r[k+d];r[k+d]=l;q++;d--}f+=h}}},function(e){function k(e,a){this.b=
e;this.w=void 0===a?!1:a;this.offset=0;this.min=-Infinity;this.max=Infinity;this.g=this.b;this.h=255;this.j()}k.prototype.read=function(e,a){a=void 0===a?0:a;for(var f=0,h=this.offset-1;0<h;)f|=e[h+a]<<8*h,h--;f=(e[a]|f)>>>0;return this.f(this.i(f))};k.prototype.write=function(e,a,f){f=void 0===f?0:f;a=this.f(a);e[f++]=a&255;for(var h=2;h<=this.offset;h++)e[f++]=Math.floor(a/Math.pow(2,8*(h-1)))&255;return f};k.prototype.C=function(e,a,f){a=this.f(a);f=this.A(e,a,void 0===f?0:f);for(var h=2;h<this.offset;h++)e[f++]=
Math.floor(a/Math.pow(2,8*(h-1)))&255;8<this.b&&(e[f++]=Math.floor(a/Math.pow(2,8*(this.offset-1)))&this.h);return f};k.prototype.m=function(e,a){a=void 0===a?0:a;for(var f="",h=0;h<this.offset;){var k=e[a+h].toString(2);f=Array(9-k.length).join("0")+k+f;h++}return this.f(this.i(parseInt(f,2)))};k.prototype.j=function(){this.B();this.v();this.s();this.u();this.offset=8>this.b?1:Math.ceil(this.g/8);if(this.g!=this.b||8>this.b||32<this.b)this.write=this.C,this.read=this.m};k.prototype.i=function(e){e>
this.max&&(e-=2*this.max+2);return e};k.prototype.f=function(e){e>this.max?e=this.max:e<this.min&&(e=this.min);return e};k.prototype.u=function(){var e=Math.pow(2,this.b);this.w?(this.max=e/2-1,this.min=-e/2):(this.max=e-1,this.min=0)};k.prototype.B=function(){if(1>this.b||64<this.b)throw Error("Not a supported type.");};k.prototype.v=function(){8<this.b&&(this.g=(this.b-1|7)+1)};k.prototype.s=function(){var e=8-(this.g-this.b);this.h=Math.pow(2,0<e?e:8)-1};k.prototype.A=function(e,a,f){8>this.b?
e[f++]=0>a?a+Math.pow(2,this.b):a:e[f++]=a&255;return f};e.c=k},function(e){function k(a){return 32768<a?a-65536:a}function h(a){var b=a-d;0<=b?a=0:(a=8,b=-b);var c=q[p],f=c>>3;b>c&&(a|=4,b-=c,f+=c);c>>=1;b>c&&(a|=2,b-=c,f+=c);c>>=1;b>c&&(a|=1,f+=c);b=a;d=b&8?d-f:d+f;-32768>d?d=-32768:32767<d&&(d=32767);p+=u[b&7];0>p?p=0:88<p&&(p=88);return a}function a(a){var b=0;a&4&&(b+=n);a&2&&(b+=n>>1);a&1&&(b+=n>>2);b+=n>>3;a&8&&(b=-b);l+=b;32767<l?l=32767:-32767>l&&(l=-32767);c+=u[a];0>c?c=0:88<c&&(c=88);n=
q[c];return l}function f(a){var b=a[0];h(b);var c=[];c.push(b&255);c.push(b>>8&255);c.push(p);c.push(0);for(b=3;b<a.length;b+=2){var d=h(a[b]),f=h(a[b+1]);c.push(f<<4|d)}for(;256>c.length;)c.push(0);return c}function r(d){l=k(d[1]<<8|d[0]);c=d[2];n=q[c];for(var b=[l,k(d[3]<<8|d[2])],f=4;f<d.length;f++){var e=d[f],h=e>>4;b.push(a(h<<4^e));b.push(a(h))}return b}var u=[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],q=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,
130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],d=0,p=0,l=0,c=0,n=7;e.c.encode=function(a){for(var b=[],c=[],d=0;d<a.length;d++)if(c.push(a[d]),0==d%505&&0!=d||d==a.length-1)b=b.concat(f(c)),c=[];return b};e.c.decode=function(a,b){b=void 0===b?256:b;for(var c=[],
d=[],f=0;f<a.length;f++)0==f%b&&0!=f&&(c=c.concat(r(d)),d=[]),d.push(a[f]);return c};e.c.Na=f;e.c.Ma=r},function(e,k,h){e.c.M=h(8);e.c.N=h(9)},function(e){function k(a){var f=[1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],e;a=-32768==a?-32767:a;(e=~a>>8&128)||(a*=-1);32635<a&&(a=32635);256<=
a?(f=f[a>>8&127],a=f<<4|a>>f+3&15):a>>=4;return a^e^85}function h(a){var f=0;a^=85;a&128&&(a&=-129,f=-1);var e=((a&240)>>4)+4;a=4!=e?1<<e|(a&15)<<e-4|1<<e-5:a<<1|1;return-8*(0===f?a:-a)}e.c.pa=k;e.c.na=h;e.c.encode=function(a){for(var f=[],e=0;e<a.length;e++)f.push(k(a[e]));return f};e.c.decode=function(a){for(var f=[],e=0;e<a.length;e++)f.push(h(a[e]));return f}},function(e){function k(a){if(0>a){a=132-a;var f=127}else a+=132,f=255;32767<a&&(a=32767);var e=0;var h=a>>7;h&240&&(h>>=4,e+=4);h&12&&
(h>>=2,e+=2);h&2&&(e+=1);h=e;return(h<<4|a>>h+3&15)^f}function h(a){a=~a;var f=((a&15)<<3)+132<<((a&112)>>4);return a&128?132-f:f-132}e.c.pa=k;e.c.na=h;e.c.encode=function(a){for(var f=[],e=0;e<a.length;e++)f.push(k(a[e]));return f};e.c.decode=function(a){for(var e=[],k=0;k<a.length;k++)e.push(h(a[k]));return e}},function(e,k){(function(){for(var e=new Uint8Array(256),a=0;64>a;a++)e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)]=a;k.encode=function(a){a=new Uint8Array(a);
var e,f=a.length,h="";for(e=0;e<f;e+=3)h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[e]>>2],h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[e]&3)<<4|a[e+1]>>4],h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[e+1]&15)<<2|a[e+2]>>6],h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[e+2]&63];2===f%3?h=h.substring(0,h.length-1)+"\x3d":1===f%3&&(h=h.substring(0,h.length-2)+"\x3d\x3d");return h};k.decode=function(a){var f=
.75*a.length,h=a.length,k=0;"\x3d"===a[a.length-1]&&(f--,"\x3d"===a[a.length-2]&&f--);var d=new ArrayBuffer(f),p=new Uint8Array(d);for(f=0;f<h;f+=4){var l=e[a.charCodeAt(f)];var c=e[a.charCodeAt(f+1)];var n=e[a.charCodeAt(f+2)];var w=e[a.charCodeAt(f+3)];p[k++]=l<<2|c>>4;p[k++]=(c&15)<<4|n>>2;p[k++]=(n&3)<<6|w&63}return d}})()}]);