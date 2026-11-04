var R3D=(()=>{var zc=Object.defineProperty;var lm=Object.getOwnPropertyDescriptor;var cm=Object.getOwnPropertyNames;var hm=Object.prototype.hasOwnProperty;var Ed=(r,e)=>{for(var t in e)zc(r,t,{get:e[t],enumerable:!0})},um=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of cm(e))!hm.call(r,n)&&n!==t&&zc(r,n,{get:()=>e[n],enumerable:!(i=lm(e,n))||i.enumerable});return r};var dm=r=>um(zc({},"__esModule",{value:!0}),r);var v_={};Ed(v_,{create:()=>Kf,portrait:()=>$f});var B={};Ed(B,{ACESFilmicToneMapping:()=>lc,AddEquation:()=>Rn,AddOperation:()=>lf,AdditiveAnimationBlendMode:()=>cd,AdditiveBlending:()=>wa,AgXToneMapping:()=>cc,AlphaFormat:()=>nd,AlwaysCompare:()=>P0,AlwaysDepth:()=>Hm,AlwaysStencilFunc:()=>S0,AmbientLight:()=>Yl,AnimationAction:()=>nc,AnimationClip:()=>yr,AnimationLoader:()=>au,AnimationMixer:()=>bu,AnimationObjectGroup:()=>Mu,AnimationUtils:()=>e_,ArcCurve:()=>xl,ArrayCamera:()=>al,ArrowHelper:()=>Xu,AttachedBindMode:()=>Ch,Audio:()=>tc,AudioAnalyser:()=>yu,AudioContext:()=>Sa,AudioListener:()=>_u,AudioLoader:()=>gu,AxesHelper:()=>ju,BackSide:()=>Xt,BasicDepthPacking:()=>n0,BasicShadowMap:()=>ym,BatchedMesh:()=>fl,Bone:()=>aa,BooleanKeyframeTrack:()=>an,Box2:()=>Lu,Box3:()=>jt,Box3Helper:()=>Vu,BoxGeometry:()=>Bi,BoxHelper:()=>Hu,BufferAttribute:()=>tt,BufferGeometry:()=>ze,BufferGeometryLoader:()=>ec,ByteType:()=>ed,Cache:()=>hn,Camera:()=>Kr,CameraHelper:()=>Gu,CanvasTexture:()=>la,CapsuleGeometry:()=>is,CatmullRomCurve3:()=>yl,CineonToneMapping:()=>oc,CircleGeometry:()=>Tl,ClampToEdgeWrapping:()=>Si,Clock:()=>cs,Color:()=>me,ColorKeyframeTrack:()=>xa,ColorManagement:()=>et,CompressedArrayTexture:()=>eu,CompressedCubeTexture:()=>tu,CompressedTexture:()=>es,CompressedTextureLoader:()=>ou,ConeGeometry:()=>ns,ConstantAlphaFactor:()=>zm,ConstantColorFactor:()=>Fm,Controls:()=>Yu,CubeCamera:()=>rl,CubeReflectionMapping:()=>pn,CubeRefractionMapping:()=>Pn,CubeTexture:()=>cr,CubeTextureLoader:()=>lu,CubeUVReflectionMapping:()=>hs,CubicBezierCurve:()=>ca,CubicBezierCurve3:()=>Ml,CubicInterpolant:()=>Hl,CullFaceBack:()=>vm,CullFaceFront:()=>_m,CullFaceFrontBack:()=>xm,CullFaceNone:()=>gm,Curve:()=>gi,CurvePath:()=>wl,CustomBlending:()=>Sm,CustomToneMapping:()=>cf,CylinderGeometry:()=>Dn,Cylindrical:()=>Pu,Data3DTexture:()=>$s,DataArrayTexture:()=>Yr,DataTexture:()=>Mi,DataTextureLoader:()=>cu,DataUtils:()=>eg,DecrementStencilOp:()=>d0,DecrementWrapStencilOp:()=>f0,DefaultLoadingManager:()=>Pf,DepthFormat:()=>jr,DepthStencilFormat:()=>or,DepthTexture:()=>ia,DetachedBindMode:()=>hf,DirectionalLight:()=>ql,DirectionalLightHelper:()=>ku,DiscreteInterpolant:()=>Vl,DisplayP3ColorSpace:()=>_c,DodecahedronGeometry:()=>rs,DoubleSide:()=>rc,DstAlphaFactor:()=>Lm,DstColorFactor:()=>Dm,DynamicCopyUsage:()=>F0,DynamicDrawUsage:()=>I0,DynamicReadUsage:()=>D0,EdgesGeometry:()=>El,EllipseCurve:()=>ts,EqualCompare:()=>E0,EqualDepth:()=>Xm,EqualStencilFunc:()=>_0,EquirectangularReflectionMapping:()=>Gs,EquirectangularRefractionMapping:()=>Hs,Euler:()=>ai,EventDispatcher:()=>wi,ExtrudeGeometry:()=>Al,FileLoader:()=>zi,Float16BufferAttribute:()=>zh,Float32BufferAttribute:()=>Se,FloatType:()=>ui,Fog:()=>ll,FogExp2:()=>ol,FramebufferTexture:()=>Qh,FrontSide:()=>bi,Frustum:()=>hr,GLBufferAttribute:()=>Eu,GLSL1:()=>z0,GLSL3:()=>Ph,GreaterCompare:()=>A0,GreaterDepth:()=>qm,GreaterEqualCompare:()=>C0,GreaterEqualDepth:()=>jm,GreaterEqualStencilFunc:()=>b0,GreaterStencilFunc:()=>y0,GridHelper:()=>Bu,Group:()=>Cn,HalfFloatType:()=>Ei,HemisphereLight:()=>Xl,HemisphereLightHelper:()=>Fu,IcosahedronGeometry:()=>ss,ImageBitmapLoader:()=>mu,ImageLoader:()=>Mr,ImageUtils:()=>il,IncrementStencilOp:()=>u0,IncrementWrapStencilOp:()=>p0,InstancedBufferAttribute:()=>mn,InstancedBufferGeometry:()=>Ql,InstancedInterleavedBuffer:()=>Tu,InstancedMesh:()=>pl,Int16BufferAttribute:()=>Fh,Int32BufferAttribute:()=>Bh,Int8BufferAttribute:()=>Dh,IntType:()=>dc,InterleavedBuffer:()=>ur,InterleavedBufferAttribute:()=>Un,Interpolant:()=>gr,InterpolateDiscrete:()=>Ws,InterpolateLinear:()=>tl,InterpolateSmooth:()=>To,InvertStencilOp:()=>m0,KeepStencilOp:()=>Qn,KeyframeTrack:()=>mi,LOD:()=>hl,LatheGeometry:()=>fa,Layers:()=>Zr,LessCompare:()=>T0,LessDepth:()=>Vm,LessEqualCompare:()=>hd,LessEqualDepth:()=>Wm,LessEqualStencilFunc:()=>x0,LessStencilFunc:()=>v0,Light:()=>Zi,LightProbe:()=>Kl,Line:()=>qi,Line3:()=>Uu,LineBasicMaterial:()=>qt,LineCurve:()=>ha,LineCurve3:()=>bl,LineDashedMaterial:()=>Gl,LineLoop:()=>vl,LineSegments:()=>Ti,LinearDisplayP3ColorSpace:()=>Aa,LinearFilter:()=>Nt,LinearInterpolant:()=>_a,LinearMipMapLinearFilter:()=>$m,LinearMipMapNearestFilter:()=>Km,LinearMipmapLinearFilter:()=>ln,LinearMipmapNearestFilter:()=>Is,LinearSRGBColorSpace:()=>gn,LinearToneMapping:()=>sc,LinearTransfer:()=>js,Loader:()=>ei,LoaderUtils:()=>ba,LoadingManager:()=>ya,LoopOnce:()=>e0,LoopPingPong:()=>i0,LoopRepeat:()=>t0,LuminanceAlphaFormat:()=>ad,LuminanceFormat:()=>sd,MOUSE:()=>fm,Material:()=>Vt,MaterialLoader:()=>$l,MathUtils:()=>k0,Matrix2:()=>Iu,Matrix3:()=>We,Matrix4:()=>De,MaxEquation:()=>Am,Mesh:()=>Je,MeshBasicMaterial:()=>Qt,MeshDepthMaterial:()=>na,MeshDistanceMaterial:()=>ra,MeshLambertMaterial:()=>zl,MeshMatcapMaterial:()=>kl,MeshNormalMaterial:()=>Bl,MeshPhongMaterial:()=>Ol,MeshPhysicalMaterial:()=>Nl,MeshStandardMaterial:()=>Yi,MeshToonMaterial:()=>Fl,MinEquation:()=>Em,MirroredRepeatWrapping:()=>Vs,MixOperation:()=>of,MultiplyBlending:()=>bm,MultiplyOperation:()=>Ta,NearestFilter:()=>$t,NearestMipMapLinearFilter:()=>Jm,NearestMipMapNearestFilter:()=>Zm,NearestMipmapLinearFilter:()=>kr,NearestMipmapNearestFilter:()=>Qu,NeutralToneMapping:()=>hc,NeverCompare:()=>w0,NeverDepth:()=>Gm,NeverStencilFunc:()=>g0,NoBlending:()=>Ku,NoColorSpace:()=>rn,NoToneMapping:()=>un,NormalAnimationBlendMode:()=>uf,NormalBlending:()=>$u,NotEqualCompare:()=>R0,NotEqualDepth:()=>Ym,NotEqualStencilFunc:()=>M0,NumberKeyframeTrack:()=>vr,Object3D:()=>nt,ObjectLoader:()=>fu,ObjectSpaceNormalMap:()=>l0,OctahedronGeometry:()=>fr,OneFactor:()=>Cm,OneMinusConstantAlphaFactor:()=>km,OneMinusConstantColorFactor:()=>Bm,OneMinusDstAlphaFactor:()=>Um,OneMinusDstColorFactor:()=>Nm,OneMinusSrcAlphaFactor:()=>Ro,OneMinusSrcColorFactor:()=>Im,OrthographicCamera:()=>Ln,P3Primaries:()=>Ys,PCFShadowMap:()=>Ju,PCFSoftShadowMap:()=>af,PMREMGenerator:()=>ta,Path:()=>dr,PerspectiveCamera:()=>Dt,Plane:()=>Vi,PlaneGeometry:()=>$r,PlaneHelper:()=>Wu,PointLight:()=>ls,PointLightHelper:()=>Ou,Points:()=>_l,PointsMaterial:()=>oa,PolarGridHelper:()=>zu,PolyhedronGeometry:()=>Nn,PositionalAudio:()=>xu,PropertyBinding:()=>ot,PropertyMixer:()=>ic,QuadraticBezierCurve:()=>ua,QuadraticBezierCurve3:()=>da,Quaternion:()=>Gt,QuaternionKeyframeTrack:()=>_r,QuaternionLinearInterpolant:()=>Wl,RED_GREEN_RGTC2_Format:()=>Qo,RED_RGTC1_Format:()=>ld,REVISION:()=>pm,RGBADepthPacking:()=>r0,RGBAFormat:()=>si,RGBAIntegerFormat:()=>vc,RGBA_ASTC_10x10_Format:()=>qo,RGBA_ASTC_10x5_Format:()=>Wo,RGBA_ASTC_10x6_Format:()=>Xo,RGBA_ASTC_10x8_Format:()=>jo,RGBA_ASTC_12x10_Format:()=>Yo,RGBA_ASTC_12x12_Format:()=>Zo,RGBA_ASTC_4x4_Format:()=>Oo,RGBA_ASTC_5x4_Format:()=>Fo,RGBA_ASTC_5x5_Format:()=>Bo,RGBA_ASTC_6x5_Format:()=>zo,RGBA_ASTC_6x6_Format:()=>ko,RGBA_ASTC_8x5_Format:()=>Go,RGBA_ASTC_8x6_Format:()=>Ho,RGBA_ASTC_8x8_Format:()=>Vo,RGBA_BPTC_Format:()=>Os,RGBA_ETC2_EAC_Format:()=>No,RGBA_PVRTC_2BPPV1_Format:()=>Lo,RGBA_PVRTC_4BPPV1_Format:()=>Io,RGBA_S3TC_DXT1_Format:()=>Us,RGBA_S3TC_DXT3_Format:()=>Ds,RGBA_S3TC_DXT5_Format:()=>Ns,RGBDepthPacking:()=>s0,RGBFormat:()=>rd,RGBIntegerFormat:()=>Qm,RGB_BPTC_SIGNED_Format:()=>Jo,RGB_BPTC_UNSIGNED_Format:()=>Ko,RGB_ETC1_Format:()=>Uo,RGB_ETC2_Format:()=>Do,RGB_PVRTC_2BPPV1_Format:()=>Po,RGB_PVRTC_4BPPV1_Format:()=>Co,RGB_S3TC_DXT1_Format:()=>Ls,RGDepthPacking:()=>a0,RGFormat:()=>od,RGIntegerFormat:()=>gc,RawShaderMaterial:()=>os,Ray:()=>In,Raycaster:()=>Au,Rec709Primaries:()=>qs,RectAreaLight:()=>Zl,RedFormat:()=>mc,RedIntegerFormat:()=>Ea,ReinhardToneMapping:()=>ac,RenderTarget:()=>nl,RepeatWrapping:()=>sr,ReplaceStencilOp:()=>h0,ReverseSubtractEquation:()=>Tm,RingGeometry:()=>Rl,SIGNED_RED_GREEN_RGTC2_Format:()=>el,SIGNED_RED_RGTC1_Format:()=>$o,SRGBColorSpace:()=>hi,SRGBTransfer:()=>dt,Scene:()=>Qr,ShaderChunk:()=>qe,ShaderLib:()=>Fi,ShaderMaterial:()=>Rt,ShadowMaterial:()=>Dl,Shape:()=>dn,ShapeGeometry:()=>Cl,ShapePath:()=>qu,ShapeUtils:()=>Xi,ShortType:()=>td,Skeleton:()=>dl,SkeletonHelper:()=>Nu,SkinnedMesh:()=>ul,Source:()=>cn,Sphere:()=>Ht,SphereGeometry:()=>mr,Spherical:()=>Cu,SphericalHarmonics3:()=>Jl,SplineCurve:()=>pa,SpotLight:()=>jl,SpotLightHelper:()=>Du,Sprite:()=>cl,SpriteMaterial:()=>sa,SrcAlphaFactor:()=>Ao,SrcAlphaSaturateFactor:()=>Om,SrcColorFactor:()=>Pm,StaticCopyUsage:()=>O0,StaticDrawUsage:()=>Zs,StaticReadUsage:()=>U0,StereoCamera:()=>vu,StreamCopyUsage:()=>B0,StreamDrawUsage:()=>L0,StreamReadUsage:()=>N0,StringKeyframeTrack:()=>on,SubtractEquation:()=>wm,SubtractiveBlending:()=>Mm,TOUCH:()=>mm,TangentSpaceNormalMap:()=>o0,TetrahedronGeometry:()=>Pl,Texture:()=>Lt,TextureLoader:()=>hu,TextureUtils:()=>Rv,TorusGeometry:()=>as,TorusKnotGeometry:()=>Il,Triangle:()=>Wi,TriangleFanDrawMode:()=>ff,TriangleStripDrawMode:()=>pf,TrianglesDrawMode:()=>df,TubeGeometry:()=>Ll,UVMapping:()=>uc,Uint16BufferAttribute:()=>Qs,Uint32BufferAttribute:()=>ea,Uint8BufferAttribute:()=>Nh,Uint8ClampedBufferAttribute:()=>Oh,Uniform:()=>Su,UniformsGroup:()=>wu,UniformsLib:()=>ge,UniformsUtils:()=>vn,UnsignedByteType:()=>ji,UnsignedInt248Type:()=>ar,UnsignedInt5999Type:()=>id,UnsignedIntType:()=>fn,UnsignedShort4444Type:()=>pc,UnsignedShort5551Type:()=>fc,UnsignedShortType:()=>Xr,VSMShadowMap:()=>Hi,Vector2:()=>ne,Vector3:()=>R,Vector4:()=>it,VectorKeyframeTrack:()=>xr,VideoTexture:()=>$h,WebGL3DRenderTarget:()=>Uh,WebGLArrayRenderTarget:()=>Lh,WebGLCoordinateSystem:()=>lr,WebGLCubeRenderTarget:()=>sl,WebGLMultipleRenderTargets:()=>Zu,WebGLRenderTarget:()=>Ot,WebGLRenderer:()=>Zh,WebGLUtils:()=>wf,WebGPUCoordinateSystem:()=>Js,WireframeGeometry:()=>Ul,WrapAroundEnding:()=>Xs,ZeroCurvatureEnding:()=>tr,ZeroFactor:()=>Rm,ZeroSlopeEnding:()=>ir,ZeroStencilOp:()=>c0,createCanvasElement:()=>gf});var pm="169",fm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gm=0,vm=1,_m=2,xm=3,ym=0,Ju=1,af=2,Hi=3,bi=0,Xt=1,rc=2,Ku=0,$u=1,wa=2,Mm=3,bm=4,Sm=5,Rn=100,wm=101,Tm=102,Em=103,Am=104,Rm=200,Cm=201,Pm=202,Im=203,Ao=204,Ro=205,Lm=206,Um=207,Dm=208,Nm=209,Om=210,Fm=211,Bm=212,zm=213,km=214,Gm=0,Hm=1,Vm=2,Wm=3,Xm=4,jm=5,qm=6,Ym=7,Ta=0,of=1,lf=2,un=0,sc=1,ac=2,oc=3,lc=4,cf=5,cc=6,hc=7,Ch="attached",hf="detached",uc=300,pn=301,Pn=302,Gs=303,Hs=304,hs=306,sr=1e3,Si=1001,Vs=1002,$t=1003,Qu=1004,Zm=1004,kr=1005,Jm=1005,Nt=1006,Is=1007,Km=1007,ln=1008,$m=1008,ji=1009,ed=1010,td=1011,Xr=1012,dc=1013,fn=1014,ui=1015,Ei=1016,pc=1017,fc=1018,ar=1020,id=35902,nd=1021,rd=1022,si=1023,sd=1024,ad=1025,jr=1026,or=1027,mc=1028,Ea=1029,od=1030,gc=1031,Qm=1032,vc=1033,Ls=33776,Us=33777,Ds=33778,Ns=33779,Co=35840,Po=35841,Io=35842,Lo=35843,Uo=36196,Do=37492,No=37496,Oo=37808,Fo=37809,Bo=37810,zo=37811,ko=37812,Go=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,jo=37818,qo=37819,Yo=37820,Zo=37821,Os=36492,Jo=36494,Ko=36495,ld=36283,$o=36284,Qo=36285,el=36286,e0=2200,t0=2201,i0=2202,Ws=2300,tl=2301,To=2302,tr=2400,ir=2401,Xs=2402,uf=2500,cd=2501,df=0,pf=1,ff=2,n0=3200,r0=3201,s0=3202,a0=3203,o0=0,l0=1,rn="",hi="srgb",gn="srgb-linear",_c="display-p3",Aa="display-p3-linear",js="linear",dt="srgb",qs="rec709",Ys="p3",c0=0,Qn=7680,h0=7681,u0=7682,d0=7683,p0=34055,f0=34056,m0=5386,g0=512,v0=513,_0=514,x0=515,y0=516,M0=517,b0=518,S0=519,w0=512,T0=513,E0=514,hd=515,A0=516,R0=517,C0=518,P0=519,Zs=35044,I0=35048,L0=35040,U0=35045,D0=35049,N0=35041,O0=35046,F0=35050,B0=35042,z0="100",Ph="300 es",lr=2e3,Js=2001,wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=1234567,rr=Math.PI/180,qr=180/Math.PI;function fi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Zt[255&r]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[255&e]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[63&t|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[255&i]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function Ih(r,e){return(r%e+e)%e}function Fs(r,e,t){return(1-t)*r+t*e}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var k0={DEG2RAD:rr,RAD2DEG:qr,generateUUID:fi,clamp:bt,euclideanModulo:Ih,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Fs,damp:function(r,e,t,i){return Fs(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Ih(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Ad=r);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*rr},radToDeg:function(r){return r*qr},isPowerOfTwo:function(r){return(r&r-1)==0&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Xe,denormalize:ri},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],v=n[0],g=n[3],m=n[6],_=n[1],x=n[4],y=n[7],P=n[2],C=n[5],U=n[8];return s[0]=a*v+o*_+l*P,s[3]=a*g+o*x+l*C,s[6]=a*m+o*y+l*U,s[1]=c*v+h*_+u*P,s[4]=c*g+h*x+u*C,s[7]=c*m+h*y+u*U,s[2]=d*v+p*_+f*P,s[5]=d*g+p*x+f*C,s[8]=d*m+p*y+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kc=new We;function mf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}var G0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Gr(r,e){return new G0[r](e)}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gf(){let r=Ks("canvas");return r.style.display="block",r}var Rd={};function Eo(r){r in Rd||(Rd[r]=!0,console.warn(r))}var Cd=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pd=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ms={[gn]:{transfer:js,primaries:qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[hi]:{transfer:dt,primaries:qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Aa]:{transfer:js,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Pd),fromReference:r=>r.applyMatrix3(Cd)},[_c]:{transfer:dt,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Pd),fromReference:r=>r.applyMatrix3(Cd).convertLinearToSRGB()}},H0=new Set([gn,Aa]),et={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!H0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=ms[e].toReference;return(0,ms[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ms[r].primaries},getTransfer:function(r){return r===rn?js:ms[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ms[e].luminanceCoefficients)}};function Vr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Gc(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Sr,il=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Ks("canvas")),Sr.width=e.width,Sr.height=e.height;let i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Vr(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Vr(t[i]/255)):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,cn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Hc(n[a].image)):s.push(Hc(n[a]))}else s=Hc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Hc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?il.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var W0=0,Lt=class r extends wi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=si,l=ji,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=fi(),this.name="",this.source=new cn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=uc,Lt.DEFAULT_ANISOTROPY=1;var it=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,P=(m+1)/2,C=(h+d)/4,U=(u+v)/4,k=(f+g)/4;return x>y&&x>P?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=C/i,s=U/i):y>P?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=C/n,s=k/n):P<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(P),i=U/s,n=k/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-f)*(g-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new cn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yr=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=$t,this.minFilter=$t,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Lh=class extends Ot{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Yr(null,e,t,i),this.texture.isRenderTargetTexture=!0}},$s=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=$t,this.minFilter=$t,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uh=class extends Ot{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new $s(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Gt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let g=1-o,m=l*d+c*p+h*f+u*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let P=Math.sqrt(x),C=Math.atan2(P,m*_);g=Math.sin(g*C)/P,o=Math.sin(o*C)/P}let y=o*_;if(l=l*g+d*y,c=c*g+p*y,h=h*g+f*y,u=u*g+v*y,g===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new R,Id=new Gt,jt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Di):Di.fromBufferAttribute(s,a),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Da.subVectors(this.max,gs),wr.subVectors(e.a,gs),Tr.subVectors(e.b,gs),Er.subVectors(e.c,gs),yn.subVectors(Tr,wr),Mn.subVectors(Er,Tr),Gn.subVectors(wr,Er);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Gn.z,Gn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Gn.z,0,-Gn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Gn.y,Gn.x,0];return!!Wc(t,wr,Tr,Er,Da)&&(t=[1,0,0,0,1,0,0,0,1],!!Wc(t,wr,Tr,Er,Da)&&(Na.crossVectors(yn,Mn),t=[Na.x,Na.y,Na.z],Wc(t,wr,Tr,Er,Da)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Di).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ki=[new R,new R,new R,new R,new R,new R,new R,new R],Di=new R,Ua=new jt,wr=new R,Tr=new R,Er=new R,yn=new R,Mn=new R,Gn=new R,gs=new R,Da=new R,Na=new R,Hn=new R;function Wc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Hn.fromArray(r,s);let o=n.x*Math.abs(Hn.x)+n.y*Math.abs(Hn.y)+n.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=i.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var X0=new jt,vs=new R,Xc=new R,Ht=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):X0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(vs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Xc)),this.expandByPoint(vs.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new R,jc=new R,Oa=new R,bn=new R,qc=new R,Fa=new R,Yc=new R,In=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){jc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(jc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Oa),o=bn.dot(this.direction),l=-bn.dot(Oa),c=bn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(jc).addScaledVector(Oa,d),p}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let i=$i.dot(this.direction),n=$i.dot($i)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,n,s){qc.subVectors(t,e),Fa.subVectors(i,e),Yc.crossVectors(qc,Fa);let a,o=this.direction.dot(Yc);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}bn.subVectors(this.origin,e);let l=a*this.direction.dot(Fa.crossVectors(bn,Fa));if(l<0)return null;let c=a*this.direction.dot(qc.cross(bn));if(c<0||l+c>o)return null;let h=-a*bn.dot(Yc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,p,f,v,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,p,f,v,g)}set(e,t,i,n,s,a,o,l,c,h,u,d,p,f,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,q0)}lookAt(e,t,i){let n=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Sn.crossVectors(i,di),Sn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Sn.crossVectors(i,di)),Sn.normalize(),Ba.crossVectors(di,Sn),n[0]=Sn.x,n[4]=Ba.x,n[8]=di.x,n[1]=Sn.y,n[5]=Ba.y,n[9]=di.y,n[2]=Sn.z,n[6]=Ba.z,n[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],v=i[6],g=i[10],m=i[14],_=i[3],x=i[7],y=i[11],P=i[15],C=n[0],U=n[4],k=n[8],M=n[12],X=n[1],Z=n[5],j=n[9],K=n[13],q=n[2],$=n[6],te=n[10],de=n[14],pe=n[3],we=n[7],Ie=n[11],se=n[15];return s[0]=a*C+o*X+l*q+c*pe,s[4]=a*U+o*Z+l*$+c*we,s[8]=a*k+o*j+l*te+c*Ie,s[12]=a*M+o*K+l*de+c*se,s[1]=h*C+u*X+d*q+p*pe,s[5]=h*U+u*Z+d*$+p*we,s[9]=h*k+u*j+d*te+p*Ie,s[13]=h*M+u*K+d*de+p*se,s[2]=f*C+v*X+g*q+m*pe,s[6]=f*U+v*Z+g*$+m*we,s[10]=f*k+v*j+g*te+m*Ie,s[14]=f*M+v*K+g*de+m*se,s[3]=_*C+x*X+y*q+P*pe,s[7]=_*U+x*Z+y*$+P*we,s[11]=_*k+x*j+y*te+P*Ie,s[15]=_*M+x*K+y*de+P*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],g=e[14],m=e[15],_=u*g*c-v*d*c+v*l*p-o*g*p-u*l*m+o*d*m,x=f*d*c-h*g*c-f*l*p+a*g*p+h*l*m-a*d*m,y=h*v*c-f*u*c+f*o*p-a*v*p-h*o*m+a*u*m,P=f*u*l-h*v*l-f*o*d+a*v*d+h*o*g-a*u*g,C=t*_+i*x+n*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=_*U,e[1]=(v*d*s-u*g*s-v*n*p+i*g*p+u*n*m-i*d*m)*U,e[2]=(o*g*s-v*l*s+v*n*c-i*g*c-o*n*m+i*l*m)*U,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*U,e[4]=x*U,e[5]=(h*g*s-f*d*s+f*n*p-t*g*p-h*n*m+t*d*m)*U,e[6]=(f*l*s-a*g*s-f*n*c+t*g*c+a*n*m-t*l*m)*U,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*U,e[8]=y*U,e[9]=(f*u*s-h*v*s-f*i*p+t*v*p+h*i*m-t*u*m)*U,e[10]=(a*v*s-f*o*s+f*i*c-t*v*c-a*i*m+t*o*m)*U,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*U,e[12]=P*U,e[13]=(h*v*n-f*u*n+f*i*d-t*v*d-h*i*g+t*u*g)*U,e[14]=(f*o*n-a*v*n-f*i*l+t*v*l+a*i*g-t*o*g)*U,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*U,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,g=a*u,m=o*u,_=l*c,x=l*h,y=l*u,P=i.x,C=i.y,U=i.z;return n[0]=(1-(v+m))*P,n[1]=(p+y)*P,n[2]=(f-x)*P,n[3]=0,n[4]=(p-y)*C,n[5]=(1-(d+m))*C,n[6]=(g+_)*C,n[7]=0,n[8]=(f+x)*U,n[9]=(g-_)*U,n[10]=(1-(d+v))*U,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Ar.set(n[0],n[1],n[2]).length(),a=Ar.set(n[4],n[5],n[6]).length(),o=Ar.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ni.copy(this);let l=1/s,c=1/a,h=1/o;return Ni.elements[0]*=l,Ni.elements[1]*=l,Ni.elements[2]*=l,Ni.elements[4]*=c,Ni.elements[5]*=c,Ni.elements[6]*=c,Ni.elements[8]*=h,Ni.elements[9]*=h,Ni.elements[10]*=h,t.setFromRotationMatrix(Ni),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,f;if(o===lr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Js)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,p=(i+n)*h,f,v;if(o===lr)f=(a+s)*u,v=-2*u;else{if(o!==Js)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ar=new R,Ni=new De,j0=new R(0,0,0),q0=new R(1,1,1),Sn=new R,Ba=new R,di=new R,Ld=new De,Ud=new Gt,ai=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Y0=0,Dd=new R,Rr=new Gt,Qi=new De,za=new R,_s=new R,Z0=new R,J0=new Gt,Nd=new R(1,0,0),Od=new R(0,1,0),Fd=new R(0,0,1),Bd={type:"added"},K0={type:"removed"},Cr={type:"childadded",child:null},Zc={type:"childremoved",child:null},nt=class r extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new ai,i=new Gt,n=new R(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new De},normalMatrix:{value:new We}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(_s,za,this.up):Qi.lookAt(za,_s,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),Rr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K0),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,J0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};nt.DEFAULT_UP=new R(0,1,0),nt.DEFAULT_MATRIX_AUTO_UPDATE=!0,nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new R,en=new R,Jc=new R,tn=new R,Pr=new R,Ir=new R,zd=new R,Kc=new R,$c=new R,Qc=new R,eh=new it,th=new it,ih=new it,Wi=class r{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Oi.subVectors(e,t),n.cross(Oi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Oi.subVectors(n,t),en.subVectors(i,t),Jc.subVectors(e,t);let a=Oi.dot(Oi),o=Oi.dot(en),l=Oi.dot(Jc),c=en.dot(en),h=en.dot(Jc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,tn)!==null&&tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return eh.setScalar(0),th.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(e,t),th.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(eh,s.x),a.addScaledVector(th,s.y),a.addScaledVector(ih,s.z),a}static isFrontFacing(e,t,i,n){return Oi.subVectors(i,t),en.subVectors(e,t),Oi.cross(en).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),en.subVectors(this.a,this.b),.5*Oi.cross(en).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Pr.subVectors(n,i),Ir.subVectors(s,i),Kc.subVectors(e,i);let l=Pr.dot(Kc),c=Ir.dot(Kc);if(l<=0&&c<=0)return t.copy(i);$c.subVectors(e,n);let h=Pr.dot($c),u=Ir.dot($c);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pr,a);Qc.subVectors(e,s);let p=Pr.dot(Qc),f=Ir.dot(Qc);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Ir,o);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return zd.subVectors(s,n),o=(u-h)/(u-h+(p-f)),t.copy(n).addScaledVector(zd,o);let m=1/(g+v+d);return a=v*m,o=d*m,t.copy(i).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function nh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=Ih(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nh(a,s,e+1/3),this.g=nh(a,s,e),this.b=nh(a,s,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){let i=vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return et.fromWorkingColorSpace(Jt.copy(this),e),65536*Math.round(bt(255*Jt.r,0,255))+256*Math.round(bt(255*Jt.g,0,255))+Math.round(bt(255*Jt.b,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Jt.copy(this),t);let i=Jt.r,n=Jt.g,s=Jt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=hi){et.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,n=Jt.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ka);let i=Fs(wn.h,ka.h,t),n=Fs(wn.s,ka.s,t),s=Fs(wn.l,ka.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new me;me.NAMES=vf;var $0=0,Vt=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=1,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==Ro&&(i.blendDst=this.blendDst),this.blendEquation!==Rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends Vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sn=Q0();function Q0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function ci(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=bt(r,-65504,65504),sn.floatView[0]=r;let e=sn.uint32View[0],t=e>>23&511;return sn.baseTable[t]+((8388607&e)>>sn.shiftTable[t])}function Ps(r){let e=r>>10;return sn.uint32View[0]=sn.mantissaTable[sn.offsetTable[e]+(1023&r)]+sn.exponentTable[e],sn.floatView[0]}var eg={toHalfFloat:ci,fromHalfFloat:Ps},It=new R,Ga=new ne,tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zs,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zs&&(e.usage=this.usage),e}},Dh=class extends tt{constructor(e,t,i){super(new Int8Array(e),t,i)}},Nh=class extends tt{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Oh=class extends tt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Fh=class extends tt{constructor(e,t,i){super(new Int16Array(e),t,i)}},Qs=class extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Bh=class extends tt{constructor(e,t,i){super(new Int32Array(e),t,i)}},ea=class extends tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},zh=class extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ps(this.array[e*this.itemSize]);return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=ci(t),this}getY(e){let t=Ps(this.array[e*this.itemSize+1]);return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=ci(t),this}getZ(e){let t=Ps(this.array[e*this.itemSize+2]);return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=ci(t),this}getW(e){let t=Ps(this.array[e*this.itemSize+3]);return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=ci(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(i),this.array[e+2]=ci(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(i),this.array[e+2]=ci(n),this.array[e+3]=ci(s),this}},Se=class extends tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},tg=0,yi=new De,rh=new nt,Lr=new R,pi=new jt,xs=new jt,kt=new R,ze=class r extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?ea:Qs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(pi.min,xs.min),pi.expandByPoint(kt),kt.addVectors(pi.max,xs.max),pi.expandByPoint(kt)):(pi.expandByPoint(xs.min),pi.expandByPoint(xs.max))}pi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),kt.add(Lr)),n=Math.max(n,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new R,l[k]=new R;let c=new R,h=new R,u=new R,d=new ne,p=new ne,f=new ne,v=new R,g=new R;function m(k,M,X){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,X),d.fromBufferAttribute(s,k),p.fromBufferAttribute(s,M),f.fromBufferAttribute(s,X),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let Z=1/(p.x*f.y-f.x*p.y);isFinite(Z)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(Z),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(Z),o[k].add(v),o[M].add(v),o[X].add(v),l[k].add(g),l[M].add(g),l[X].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,M=_.length;k<M;++k){let X=_[k],Z=X.start;for(let j=Z,K=Z+X.count;j<K;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let x=new R,y=new R,P=new R,C=new R;function U(k){P.fromBufferAttribute(n,k),C.copy(P);let M=o[k];x.copy(M),x.sub(P.multiplyScalar(P.dot(M))).normalize(),y.crossVectors(C,M);let X=y.dot(l[k])<0?-1:1;a.setXYZW(k,x.x,x.y,x.z,X)}for(let k=0,M=_.length;k<M;++k){let X=_[k],Z=X.start;for(let j=Z,K=Z+X.count;j<K;j+=3)U(e.getX(j+0)),U(e.getX(j+1)),U(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,g=l.length;v<g;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kd=new De,Vn=new In,Ha=new Ht,Gd=new R,Va=new R,Wa=new R,Xa=new R,sh=new R,ja=new R,Hd=new R,qa=new R,Je=class extends nt{constructor(e=new ze,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(sh.fromBufferAttribute(u,e),a?ja.addScaledVector(sh,h):ja.addScaledVector(sh.sub(t),h))}t.add(ja)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),Ha.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ha,Gd)===null||Vn.origin.distanceToSquared(Gd)>(e.far-e.near)**2))return;kd.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(kd),i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Vn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=a[g.materialIndex];for(let _=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));_<x;_+=3)n=Ya(this,m,e,i,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)n=Ya(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=a[g.materialIndex];for(let _=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));_<x;_+=3)n=Ya(this,m,e,i,c,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)n=Ya(this,a,e,i,c,h,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Ya(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Va),r.getVertexPosition(l,Wa),r.getVertexPosition(c,Xa);let h=(function(u,d,p,f,v,g,m,_){let x;if(x=d.side===Xt?f.intersectTriangle(m,g,v,!0,_):f.intersectTriangle(v,g,m,d.side===bi,_),x===null)return null;qa.copy(_),qa.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(qa);return y<p.near||y>p.far?null:{distance:y,point:qa.clone(),object:u}})(r,e,t,i,Va,Wa,Xa,Hd);if(h){let u=new R;Wi.getBarycoord(Hd,Va,Wa,Xa,u),n&&(h.uv=Wi.getInterpolatedAttribute(n,o,l,c,u,new ne)),s&&(h.uv1=Wi.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Wi.getNormal(Va,Wa,Xa,d.normal),h.face=d,h.barycoord=u}return h}var Bi=class r extends ze{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,g,m,_,x,y,P,C,U,k,M){let X=y/U,Z=P/k,j=y/2,K=P/2,q=C/2,$=U+1,te=k+1,de=0,pe=0,we=new R;for(let Ie=0;Ie<te;Ie++){let se=Ie*Z-K;for(let he=0;he<$;he++){let Te=he*X-j;we[v]=Te*_,we[g]=se*x,we[m]=q,c.push(we.x,we.y,we.z),we[v]=0,we[g]=0,we[m]=C>0?1:-1,h.push(we.x,we.y,we.z),u.push(he/U),u.push(1-Ie/k),de+=1}}for(let Ie=0;Ie<k;Ie++)for(let se=0;se<U;se++){let he=d+se+$*Ie,Te=d+se+$*(Ie+1),Me=d+(se+1)+$*(Ie+1),D=d+(se+1)+$*Ie;l.push(he,Te,D),l.push(Te,Me,D),pe+=6}o.addGroup(p,pe,M),p+=pe,d+=de}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ni(r){let e={};for(let t=0;t<r.length;t++){let i=Jr(r[t]);for(let n in i)e[n]=i[n]}return e}function _f(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var vn={clone:Jr,merge:ni},Rt=class extends Vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Kr=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=lr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=new R,Vd=new ne,Wd=new ne,Dt=class extends Kr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*qr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*rr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*qr*Math.atan(Math.tan(.5*rr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Wd),t.subVectors(Wd,Vd)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*rr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,rl=class extends nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Dt(Ur,1,e,t);n.layers=this.layers,this.add(n);let s=new Dt(Ur,1,e,t);s.layers=this.layers,this.add(s);let a=new Dt(Ur,1,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Ur,1,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Ur,1,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Ur,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===lr)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Js)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},cr=class extends Lt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:pn,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sl=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new cr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Bi(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:0});s.uniforms.tEquirect.value=t;let a=new Je(n,s),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=Nt),new rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},ah=new R,ig=new R,ng=new We,Vi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ah.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ah),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ng.getNormalMatrix(e),n=this.coplanarPoint(ah).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Ht,Za=new R,hr=class{constructor(e=new Vi,t=new Vi,i=new Vi,n=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],f=n[9],v=n[10],g=n[11],m=n[12],_=n[13],x=n[14],y=n[15];if(i[0].setComponents(l-s,d-c,g-p,y-m).normalize(),i[1].setComponents(l+s,d+c,g+p,y+m).normalize(),i[2].setComponents(l+a,d+h,g+f,y+_).normalize(),i[3].setComponents(l-a,d-h,g-f,y-_).normalize(),i[4].setComponents(l-o,d-u,g-v,y-x).normalize(),t===lr)i[5].setComponents(l+o,d+u,g+v,y+x).normalize();else{if(t!==Js)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,v,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Za.x=n.normal.x>0?e.max.x:e.min.x,Za.y=n.normal.y>0?e.max.y:e.min.y,Za.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xf(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rg(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var $r=class r extends ze{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let x=0;x<c;x++){let y=x*u-s;f.push(y,-_,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let x=_+c*m,y=_+c*(m+1),P=_+1+c*(m+1),C=_+1+c*m;p.push(x,y,C),p.push(y,P,C)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},qe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ge={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fi={basic:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new me(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:ni([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:ni([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:ni([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:ni([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:ni([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:ni([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:ni([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:ni([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:ni([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:ni([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:ni([ge.lights,ge.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Fi.physical={uniforms:ni([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ja={r:0,b:0,g:0},Xn=new ai,sg=new De;function ag(r,e,t,i,n,s,a){let o=new me(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(g){let m=g.isScene===!0?g.background:null;return m&&m.isTexture&&(m=(g.backgroundBlurriness>0?t:e).get(m)),m}function v(g,m){g.getRGB(Ja,_f(r)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,v(o,h)},render:function(g){let m=!1,_=f(g);_===null?v(o,h):_&&_.isColor&&(v(_,1),m=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(g,m){let _=f(m);_&&(_.isCubeTexture||_.mapping===hs)?(c===void 0&&(c=new Je(new Bi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Jr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Xn.copy(m.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Xn)),c.material.toneMapped=et.getTransfer(_.colorSpace)!==dt,u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Je(new $r(2,2),new Rt({name:"BackgroundMaterial",uniforms:Jr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=et.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function og(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(m){return r.bindVertexArray(m)}function l(m){return r.deleteVertexArray(m)}function c(m){let _=[],x=[],y=[];for(let P=0;P<t;P++)_[P]=0,x[P]=0,y[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:y,object:m,attributes:{},index:null}}function h(){let m=s.newAttributes;for(let _=0,x=m.length;_<x;_++)m[_]=0}function u(m){d(m,0)}function d(m,_){let x=s.newAttributes,y=s.enabledAttributes,P=s.attributeDivisors;x[m]=1,y[m]===0&&(r.enableVertexAttribArray(m),y[m]=1),P[m]!==_&&(r.vertexAttribDivisor(m,_),P[m]=_)}function p(){let m=s.newAttributes,_=s.enabledAttributes;for(let x=0,y=_.length;x<y;x++)_[x]!==m[x]&&(r.disableVertexAttribArray(x),_[x]=0)}function f(m,_,x,y,P,C,U){U===!0?r.vertexAttribIPointer(m,_,x,P,C):r.vertexAttribPointer(m,_,x,y,P,C)}function v(){g(),a=!0,s!==n&&(s=n,o(s.object))}function g(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(m,_,x,y,P){let C=!1,U=(function(k,M,X){let Z=X.wireframe===!0,j=i[k.id];j===void 0&&(j={},i[k.id]=j);let K=j[M.id];K===void 0&&(K={},j[M.id]=K);let q=K[Z];return q===void 0&&(q=c(r.createVertexArray()),K[Z]=q),q})(y,x,_);s!==U&&(s=U,o(s.object)),C=(function(k,M,X,Z){let j=s.attributes,K=M.attributes,q=0,$=X.getAttributes();for(let te in $)if($[te].location>=0){let de=j[te],pe=K[te];if(pe===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(pe=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(pe=k.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;q++}return s.attributesNum!==q||s.index!==Z})(m,y,x,P),C&&(function(k,M,X,Z){let j={},K=M.attributes,q=0,$=X.getAttributes();for(let te in $)if($[te].location>=0){let de=K[te];de===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(de=k.instanceColor));let pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),j[te]=pe,q++}s.attributes=j,s.attributesNum=q,s.index=Z})(m,y,x,P),P!==null&&e.update(P,r.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,(function(k,M,X,Z){h();let j=Z.attributes,K=X.getAttributes(),q=M.defaultAttributeValues;for(let $ in K){let te=K[$];if(te.location>=0){let de=j[$];if(de===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(de=k.instanceColor)),de!==void 0){let pe=de.normalized,we=de.itemSize,Ie=e.get(de);if(Ie===void 0)continue;let se=Ie.buffer,he=Ie.type,Te=Ie.bytesPerElement,Me=he===r.INT||he===r.UNSIGNED_INT||de.gpuType===dc;if(de.isInterleavedBufferAttribute){let D=de.data,S=D.stride,z=de.offset;if(D.isInstancedInterleavedBuffer){for(let Y=0;Y<te.locationSize;Y++)d(te.location+Y,D.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Y=0;Y<te.locationSize;Y++)u(te.location+Y);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Y=0;Y<te.locationSize;Y++)f(te.location+Y,we/te.locationSize,he,pe,S*Te,(z+we/te.locationSize*Y)*Te,Me)}else{if(de.isInstancedBufferAttribute){for(let D=0;D<te.locationSize;D++)d(te.location+D,de.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let D=0;D<te.locationSize;D++)u(te.location+D);r.bindBuffer(r.ARRAY_BUFFER,se);for(let D=0;D<te.locationSize;D++)f(te.location+D,we/te.locationSize,he,pe,we*Te,we/te.locationSize*D*Te,Me)}}else if(q!==void 0){let pe=q[$];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(te.location,pe);break;case 3:r.vertexAttrib3fv(te.location,pe);break;case 4:r.vertexAttrib4fv(te.location,pe);break;default:r.vertexAttrib1fv(te.location,pe)}}}}p()})(m,_,x,y),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))},reset:v,resetDefaultState:g,dispose:function(){v();for(let m in i){let _=i[m];for(let x in _){let y=_[x];for(let P in y)l(y[P].object),delete y[P];delete _[x]}delete i[m]}},releaseStatesOfGeometry:function(m){if(i[m.id]===void 0)return;let _=i[m.id];for(let x in _){let y=_[x];for(let P in y)l(y[P].object),delete y[P];delete _[x]}delete i[m.id]},releaseStatesOfProgram:function(m){for(let _ in i){let x=i[_];if(x[m.id]===void 0)continue;let y=x[m.id];for(let P in y)l(y[P].object),delete y[P];delete x[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function lg(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,i,l[u])}}}function cg(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}let h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===si||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==ji&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==ui&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function hg(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Vi,o=new We,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let g=d+4*f,m=u.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let _=0,x=d;_!==f;++_,x+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,g=r.get(h);if(!n||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let m=s?0:i,_=4*m,x=g.clippingState||null;l.value=x,x=c(p,u,_,d);for(let y=0;y!==_;++y)x[y]=t[y];g.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}}}function ug(r){let e=new WeakMap;function t(n,s){return s===Gs?n.mapping=pn:s===Hs&&(n.mapping=Pn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Gs||s===Hs){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new sl(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Ln=class extends Kr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xd=[.125,.215,.35,.446,.526,.582],ys=20,oh=new Ln,jd=new me,lh=null,ch=0,hh=0,uh=!1,er=(1+Math.sqrt(5))/2,Dr=1/er,qd=[new R(-er,Dr,0),new R(er,Dr,0),new R(-Dr,0,er),new R(Dr,0,er),new R(0,er,-Dr),new R(0,er,Dr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pn||e.mapping===Pn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ei,format:si,colorSpace:gn,depthBuffer:!1},n=Yd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Xd.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Xd[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),g=-v,m=1+v,_=[g,g,m,g,m,m,g,g,m,m,g,m],x=6,y=6,P=3,C=2,U=1,k=new Float32Array(P*y*x),M=new Float32Array(C*y*x),X=new Float32Array(U*y*x);for(let j=0;j<x;j++){let K=j%3*2/3-1,q=j>2?0:-1,$=[K,q,0,K+2/3,q,0,K+2/3,q+1,0,K,q,0,K+2/3,q+1,0,K,q+1,0];k.set($,P*y*j),M.set(_,C*y*j);let te=[j,j,j,j,j,j];X.set(te,U*y*j)}let Z=new ze;Z.setAttribute("position",new tt(k,P)),Z.setAttribute("uv",new tt(M,C)),Z.setAttribute("faceIndex",new tt(X,U)),o.push(Z),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ys),h=new R(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,oh)}_sceneToCubeUV(e,t,i,n){let s=new Dt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(jd),l.toneMapping=un,l.autoClear=!1;let u=new Qt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),d=new Je(new Bi,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(jd),p=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):g===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let m=this._cubeSize;Ka(n,g*m,v>2?m:0,m,m),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===pn||e.mapping===Pn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Ka(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,oh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qd[(n-s-1)%qd.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Je(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):ys;v>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let g=[],m=0;for(let y=0;y<ys;++y){let P=y/f,C=Math.exp(-P*P/2);g.push(C),y===0?m+=C:y<v&&(m+=2*C)}for(let y=0;y<g.length;y++)g[y]=g[y]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-i;let x=this._sizeLods[n];Ka(t,3*x*(n>_-4?n-_+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,oh)}};function Yd(r,e,t){let i=new Ot(r,e,t);return i.texture.mapping=hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Zd(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jd(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dg(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Gs||s===Hs,o=s===pn||s===Pn;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new ta(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ta(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function pg(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function fg(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let g=0,m=v.length;g<m;g+=3){let _=v[g+0],x=v[g+1],y=v[g+2];c.push(_,x,x,y,y,_)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let g=0,m=v.length/3-1;g<m;g+=3){let _=g+0,x=g+1,y=g+2;c.push(_,x,x,y,y,_)}}}let p=new(mf(c)?ea:Qs)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function mg(r,e,t){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,i,h[p])}}}function gg(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function vg(r,e,t){let i=new WeakMap,n=new it;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let k=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let x=a.attributes.position.count*_,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let P=new Float32Array(x*y*4*h),C=new Yr(P,x,y,h);C.type=ui,C.needsUpdate=!0;let U=4*_;for(let M=0;M<h;M++){let X=v[M],Z=g[M],j=m[M],K=x*y*4*M;for(let q=0;q<X.count;q++){let $=q*U;d===!0&&(n.fromBufferAttribute(X,q),P[K+$+0]=n.x,P[K+$+1]=n.y,P[K+$+2]=n.z,P[K+$+3]=0),p===!0&&(n.fromBufferAttribute(Z,q),P[K+$+4]=n.x,P[K+$+5]=n.y,P[K+$+6]=n.z,P[K+$+7]=0),f===!0&&(n.fromBufferAttribute(j,q),P[K+$+8]=n.x,P[K+$+9]=n.y,P[K+$+10]=n.z,P[K+$+11]=j.itemSize===4?n.w:1)}}u={count:h,texture:C,size:new ne(x,y)},i.set(a,u),a.addEventListener("dispose",k)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function _g(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var ia=class extends Lt{constructor(e,t,i,n,s,a,o,l,c,h=1026){if(h!==jr&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jr&&(i=fn),i===void 0&&h===or&&(i=ar),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yf=new Lt,Kd=new ia(1,1),Mf=new Yr,bf=new $s,Sf=new cr,$d=[],Qd=[],ep=new Float32Array(16),tp=new Float32Array(9),ip=new Float32Array(4);function us(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=$d[n];if(s===void 0&&(s=new Float32Array(n),$d[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ft(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function xc(r,e){let t=Qd[e];t===void 0&&(t=new Int32Array(e),Qd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function xg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function Mg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function bg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function Sg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;ip.set(i),r.uniformMatrix2fv(this.addr,!1,ip),Bt(t,i)}}function wg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;tp.set(i),r.uniformMatrix3fv(this.addr,!1,tp),Bt(t,i)}}function Tg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;ep.set(i),r.uniformMatrix4fv(this.addr,!1,ep),Bt(t,i)}}function Eg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ag(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function Rg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function Cg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function Pg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ig(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function Lg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function Ug(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function Dg(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Kd.compareFunction=hd,s=Kd):s=yf,t.setTexture2D(e||s,n)}function Ng(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||bf,n)}function Og(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Sf,n)}function Fg(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Mf,n)}function Bg(r,e){r.uniform1fv(this.addr,e)}function zg(r,e){let t=us(e,this.size,2);r.uniform2fv(this.addr,t)}function kg(r,e){let t=us(e,this.size,3);r.uniform3fv(this.addr,t)}function Gg(r,e){let t=us(e,this.size,4);r.uniform4fv(this.addr,t)}function Hg(r,e){let t=us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vg(r,e){let t=us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wg(r,e){let t=us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xg(r,e){r.uniform1iv(this.addr,e)}function jg(r,e){r.uniform2iv(this.addr,e)}function qg(r,e){r.uniform3iv(this.addr,e)}function Yg(r,e){r.uniform4iv(this.addr,e)}function Zg(r,e){r.uniform1uiv(this.addr,e)}function Jg(r,e){r.uniform2uiv(this.addr,e)}function Kg(r,e){r.uniform3uiv(this.addr,e)}function $g(r,e){r.uniform4uiv(this.addr,e)}function Qg(r,e,t){let i=this.cache,n=e.length,s=xc(t,n);Ft(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||yf,s[a])}function ev(r,e,t){let i=this.cache,n=e.length,s=xc(t,n);Ft(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||bf,s[a])}function tv(r,e,t){let i=this.cache,n=e.length,s=xc(t,n);Ft(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Sf,s[a])}function iv(r,e,t){let i=this.cache,n=e.length,s=xc(t,n);Ft(i,s)||(r.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Mf,s[a])}var kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return bg;case 35674:return Sg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}})(t.type)}},Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return jg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return Kg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return iv}})(t.type)}},Hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},dh=/(\w+)(\])?(\[|\.)?/g;function np(r,e){r.seq.push(e),r.map[e.id]=e}function nv(r,e,t){let i=r.name,n=i.length;for(dh.lastIndex=0;;){let s=dh.exec(i),a=dh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){np(t,c===void 0?new kh(o,r,e):new Gh(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Hh(o),np(t,h)),t=h}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);nv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function rp(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var rv=37297,sv=0;function sp(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function av(r,e){let t=(function(i){let n=et.getPrimaries(et.workingColorSpace),s=et.getPrimaries(i),a;switch(n===s?a="":n===Ys&&s===qs?a="LinearDisplayP3ToLinearSRGB":n===qs&&s===Ys&&(a="LinearSRGBToLinearDisplayP3"),i){case gn:case Aa:return[a,"LinearTransferOETF"];case hi:case _c:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ov(r,e){let t;switch(e){case sc:t="Linear";break;case ac:t="Reinhard";break;case oc:t="Cineon";break;case lc:t="ACESFilmic";break;case cc:t="AgX";break;case hc:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new R;function lv(){return et.getLuminanceCoefficients($a),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$a.x.toFixed(4)}, ${$a.y.toFixed(4)}, ${$a.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ms(r){return r!==""}function ap(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(r){return r.replace(cv,uv)}var hv=new Map;function uv(r,e){let t=qe[e];if(t===void 0){let i=hv.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Vh(t)}var dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(r){return r.replace(dv,pv)}function pv(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function cp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fv(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(Z){let j="SHADOWMAP_TYPE_BASIC";return Z.shadowMapType===Ju?j="SHADOWMAP_TYPE_PCF":Z.shadowMapType===af?j="SHADOWMAP_TYPE_PCF_SOFT":Z.shadowMapType===Hi&&(j="SHADOWMAP_TYPE_VSM"),j})(t),c=(function(Z){let j="ENVMAP_TYPE_CUBE";if(Z.envMap)switch(Z.envMapMode){case pn:case Pn:j="ENVMAP_TYPE_CUBE";break;case hs:j="ENVMAP_TYPE_CUBE_UV"}return j})(t),h=(function(Z){let j="ENVMAP_MODE_REFLECTION";return Z.envMap&&Z.envMapMode===Pn&&(j="ENVMAP_MODE_REFRACTION"),j})(t),u=(function(Z){let j="ENVMAP_BLENDING_NONE";if(Z.envMap)switch(Z.combine){case Ta:j="ENVMAP_BLENDING_MULTIPLY";break;case of:j="ENVMAP_BLENDING_MIX";break;case lf:j="ENVMAP_BLENDING_ADD"}return j})(t),d=(function(Z){let j=Z.envMapCubeUVHeight;if(j===null)return null;let K=Math.log2(j)-2,q=1/j;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:q,maxMip:K}})(t),p=(function(Z){return[Z.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Z.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)})(t),f=(function(Z){let j=[];for(let K in Z){let q=Z[K];q!==!1&&j.push("#define "+K+" "+q)}return j.join(`
`)})(s),v=n.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(g=[cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?qe.tonemapping_pars_fragment:"",t.toneMapping!==un?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Vh(a),a=ap(a,t),a=op(a,t),o=Vh(o),o=ap(o,t),o=op(o,t),a=lp(a),o=lp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=_+g+a,y=_+m+o,P=rp(n,n.VERTEX_SHADER,x),C=rp(n,n.FRAGMENT_SHADER,y);function U(Z){if(r.debug.checkShaderErrors){let j=n.getProgramInfoLog(v).trim(),K=n.getShaderInfoLog(P).trim(),q=n.getShaderInfoLog(C).trim(),$=!0,te=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,P,C);else{let de=sp(n,P,"vertex"),pe=sp(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+j+`
`+de+`
`+pe)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):K!==""&&q!==""||(te=!1);te&&(Z.diagnostics={runnable:$,programLog:j,vertexShader:{log:K,prefix:g},fragmentShader:{log:q,prefix:m}})}n.deleteShader(P),n.deleteShader(C),k=new Wr(n,v),M=(function(j,K){let q={},$=j.getProgramParameter(K,j.ACTIVE_ATTRIBUTES);for(let te=0;te<$;te++){let de=j.getActiveAttrib(K,te),pe=de.name,we=1;de.type===j.FLOAT_MAT2&&(we=2),de.type===j.FLOAT_MAT3&&(we=3),de.type===j.FLOAT_MAT4&&(we=4),q[pe]={type:de.type,location:j.getAttribLocation(K,pe),locationSize:we}}return q})(n,v)}let k,M;n.attachShader(v,P),n.attachShader(v,C),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),this.getUniforms=function(){return k===void 0&&U(this),k},this.getAttributes=function(){return M===void 0&&U(this),M};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=n.getProgramParameter(v,rv)),X},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}var mv=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xh(e),t.set(e,i)),i}},Xh=class{constructor(e){this.id=mv++,this.code=e,this.usedTimes=0}};function gv(r,e,t,i,n,s,a){let o=new Zr,l=new Wh,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,p=n.vertexTextures,f=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,x,y,P){let C=y.fog,U=P.geometry,k=m.isMeshStandardMaterial?y.environment:null,M=(m.isMeshStandardMaterial?t:e).get(m.envMap||k),X=M&&M.mapping===hs?M.image.height:null,Z=v[m.type];m.precision!==null&&(f=n.getMaxPrecision(m.precision),f!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=j!==void 0?j.length:0,q,$,te,de,pe=0;if(U.morphAttributes.position!==void 0&&(pe=1),U.morphAttributes.normal!==void 0&&(pe=2),U.morphAttributes.color!==void 0&&(pe=3),Z){let le=Fi[Z];q=le.vertexShader,$=le.fragmentShader}else q=m.vertexShader,$=m.fragmentShader,l.update(m),te=l.getVertexShaderID(m),de=l.getFragmentShaderID(m);let we=r.getRenderTarget(),Ie=P.isInstancedMesh===!0,se=P.isBatchedMesh===!0,he=!!m.map,Te=!!m.matcap,Me=!!M,D=!!m.aoMap,S=!!m.lightMap,z=!!m.bumpMap,Y=!!m.normalMap,L=!!m.displacementMap,N=!!m.emissiveMap,w=!!m.metalnessMap,F=!!m.roughnessMap,O=m.anisotropy>0,ee=m.clearcoat>0,G=m.dispersion>0,Q=m.iridescence>0,ae=m.sheen>0,ie=m.transmission>0,re=O&&!!m.anisotropyMap,Ee=ee&&!!m.clearcoatMap,ve=ee&&!!m.clearcoatNormalMap,Ne=ee&&!!m.clearcoatRoughnessMap,je=Q&&!!m.iridescenceMap,Ae=Q&&!!m.iridescenceThicknessMap,Re=ae&&!!m.sheenColorMap,Le=ae&&!!m.sheenRoughnessMap,$e=!!m.specularMap,Ze=!!m.specularColorMap,be=!!m.specularIntensityMap,Ve=ie&&!!m.transmissionMap,Qe=ie&&!!m.thicknessMap,Ri=!!m.gradientMap,_n=!!m.alphaMap,Yt=m.alphaTest>0,Ci=!!m.alphaHash,H=!!m.extensions,T=un;m.toneMapped&&(we!==null&&we.isXRRenderTarget!==!0||(T=r.toneMapping));let oe={shaderID:Z,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:$,defines:m.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:se,batchingColor:se&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:gn,alphaToCoverage:!!m.alphaToCoverage,map:he,matcap:Te,envMap:Me,envMapMode:Me&&M.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:S,bumpMap:z,normalMap:Y,displacementMap:p&&L,emissiveMap:N,normalMapObjectSpace:Y&&m.normalMapType===1,normalMapTangentSpace:Y&&m.normalMapType===0,metalnessMap:w,roughnessMap:F,anisotropy:O,anisotropyMap:re,clearcoat:ee,clearcoatMap:Ee,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:G,iridescence:Q,iridescenceMap:je,iridescenceThicknessMap:Ae,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:Le,specularMap:$e,specularColorMap:Ze,specularIntensityMap:be,transmission:ie,transmissionMap:Ve,thicknessMap:Qe,gradientMap:Ri,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:_n,alphaTest:Yt,alphaHash:Ci,combine:m.combine,mapUv:he&&g(m.map.channel),aoMapUv:D&&g(m.aoMap.channel),lightMapUv:S&&g(m.lightMap.channel),bumpMapUv:z&&g(m.bumpMap.channel),normalMapUv:Y&&g(m.normalMap.channel),displacementMapUv:L&&g(m.displacementMap.channel),emissiveMapUv:N&&g(m.emissiveMap.channel),metalnessMapUv:w&&g(m.metalnessMap.channel),roughnessMapUv:F&&g(m.roughnessMap.channel),anisotropyMapUv:re&&g(m.anisotropyMap.channel),clearcoatMapUv:Ee&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(m.sheenRoughnessMap.channel),specularMapUv:$e&&g(m.specularMap.channel),specularColorMapUv:Ze&&g(m.specularColorMap.channel),specularIntensityMapUv:be&&g(m.specularIntensityMap.channel),transmissionMapUv:Ve&&g(m.transmissionMap.channel),thicknessMapUv:Qe&&g(m.thicknessMap.channel),alphaMapUv:_n&&g(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Y||O),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(he||_n),fog:!!C,useFog:m.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:T,decodeVideoTexture:he&&m.map.isVideoTexture===!0&&et.getTransfer(m.map.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:H&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(H&&m.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let x in m.defines)_.push(x),_.push(m.defines[x]);return m.isRawShaderMaterial===!1&&((function(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)})(_,m),(function(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=v[m.type],x;if(_){let y=Fi[_];x=vn.clone(y.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,_){let x;for(let y=0,P=h.length;y<P;y++){let C=h[y];if(C.cacheKey===_){x=C,++x.usedTimes;break}}return x===void 0&&(x=new fv(r,_,m,s),h.push(x)),x},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function vv(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function _v(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function hp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function up(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||_v),i.length>1&&i.sort(o||hp),n.length>1&&n.sort(o||hp)}}}function xv(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new up,r.set(e,[n])):t>=i.length?(n=new up,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function yv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new me};break;case"SpotLight":t={position:new R,direction:new R,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new R,halfWidth:new R,halfHeight:new R}}return r[e.id]=t,t}}}var Mv=0;function bv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Sv(r){let e=new yv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new R);let n=new R,s=new De,a=new De;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,g=0,m=0,_=0,x=0,y=0,P=0;o.sort(bv);for(let U=0,k=o.length;U<k;U++){let M=o[U],X=M.color,Z=M.intensity,j=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)l+=X.r*Z,c+=X.g*Z,h+=X.b*Z;else if(M.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(M.sh.coefficients[q],Z);P++}else if(M.isDirectionalLight){let q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let $=M.shadow,te=t.get(M);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.directionalShadow[u]=te,i.directionalShadowMap[u]=K,i.directionalShadowMatrix[u]=M.shadow.matrix,g++}i.directional[u]=q,u++}else if(M.isSpotLight){let q=e.get(M);q.position.setFromMatrixPosition(M.matrixWorld),q.color.copy(X).multiplyScalar(Z),q.distance=j,q.coneCos=Math.cos(M.angle),q.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),q.decay=M.decay,i.spot[p]=q;let $=M.shadow;if(M.map&&(i.spotLightMap[x]=M.map,x++,$.updateMatrices(M),M.castShadow&&y++),i.spotLightMatrix[p]=$.matrix,M.castShadow){let te=t.get(M);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=K,_++}p++}else if(M.isRectAreaLight){let q=e.get(M);q.color.copy(X).multiplyScalar(Z),q.halfWidth.set(.5*M.width,0,0),q.halfHeight.set(0,.5*M.height,0),i.rectArea[f]=q,f++}else if(M.isPointLight){let q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),q.distance=M.distance,q.decay=M.decay,M.castShadow){let $=M.shadow,te=t.get(M);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=K,i.pointShadowMatrix[d]=M.shadow.matrix,m++}i.point[d]=q,d++}else if(M.isHemisphereLight){let q=e.get(M);q.skyColor.copy(M.color).multiplyScalar(Z),q.groundColor.copy(M.groundColor).multiplyScalar(Z),i.hemi[v]=q,v++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let C=i.hash;C.directionalLength===u&&C.pointLength===d&&C.spotLength===p&&C.rectAreaLength===f&&C.hemiLength===v&&C.numDirectionalShadows===g&&C.numPointShadows===m&&C.numSpotShadows===_&&C.numSpotMaps===x&&C.numLightProbes===P||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=_+x-y,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=P,C.directionalLength=u,C.pointLength=d,C.spotLength=p,C.rectAreaLength=f,C.hemiLength=v,C.numDirectionalShadows=g,C.numPointShadows=m,C.numSpotShadows=_,C.numSpotMaps=x,C.numLightProbes=P,i.version=Mv++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let v=0,g=o.length;v<g;v++){let m=o[v];if(m.isDirectionalLight){let _=i.directional[c];_.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),c++}else if(m.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),u++}else if(m.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(m.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*m.width,0,0),_.halfHeight.set(0,.5*m.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),h++}else if(m.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),p++}}},state:i}}function dp(r){let e=new Sv(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function wv(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new dp(r),e.set(t,[s])):i>=n.length?(s=new dp(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var na=class extends Vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends Vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tv(r,e,t){let i=new hr,n=new ne,s=new ne,a=new it,o=new na({depthPacking:3201}),l=new ra,c={},h=t.maxTextureSize,u={[bi]:Xt,[Xt]:bi,2:2},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ze;f.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;function _(C,U){let k=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ot(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(U,null,k,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(U,null,k,p,v,null)}function x(C,U,k,M){let X=null,Z=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Z!==void 0)X=Z;else if(X=k.isPointLight===!0?l:o,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let j=X.uuid,K=U.uuid,q=c[j];q===void 0&&(q={},c[j]=q);let $=q[K];$===void 0&&($=X.clone(),q[K]=$,U.addEventListener("dispose",P)),X=$}return X.visible=U.visible,X.wireframe=U.wireframe,X.side=M===Hi?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],X.alphaMap=U.alphaMap,X.alphaTest=U.alphaTest,X.map=U.map,X.clipShadows=U.clipShadows,X.clippingPlanes=U.clippingPlanes,X.clipIntersection=U.clipIntersection,X.displacementMap=U.displacementMap,X.displacementScale=U.displacementScale,X.displacementBias=U.displacementBias,X.wireframeLinewidth=U.wireframeLinewidth,X.linewidth=U.linewidth,k.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(r.properties.get(X).light=k),X}function y(C,U,k,M,X){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&X===Hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let j=e.update(C),K=C.material;if(Array.isArray(K)){let q=j.groups;for(let $=0,te=q.length;$<te;$++){let de=q[$],pe=K[de.materialIndex];if(pe&&pe.visible){let we=x(C,pe,M,X);C.onBeforeShadow(r,C,U,k,j,we,de),r.renderBufferDirect(k,null,j,we,C,de),C.onAfterShadow(r,C,U,k,j,we,de)}}}else if(K.visible){let q=x(C,K,M,X);C.onBeforeShadow(r,C,U,k,j,q,null),r.renderBufferDirect(k,null,j,q,C,null),C.onAfterShadow(r,C,U,k,j,q,null)}}let Z=C.children;for(let j=0,K=Z.length;j<K;j++)y(Z[j],U,k,M,X)}function P(C){C.target.removeEventListener("dispose",P);for(let U in c){let k=c[U],M=C.target.uuid;M in k&&(k[M].dispose(),delete k[M])}}this.render=function(C,U,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let M=r.getRenderTarget(),X=r.getActiveCubeFace(),Z=r.getActiveMipmapLevel(),j=r.state;j.setBlending(0),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let K=m!==Hi&&this.type===Hi,q=m===Hi&&this.type!==Hi;for(let $=0,te=C.length;$<te;$++){let de=C[$],pe=de.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;n.copy(pe.mapSize);let we=pe.getFrameExtents();if(n.multiply(we),s.copy(pe.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/we.x),n.x=s.x*we.x,pe.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/we.y),n.y=s.y*we.y,pe.mapSize.y=s.y)),pe.map===null||K===!0||q===!0){let se=this.type!==Hi?{minFilter:$t,magFilter:$t}:{};pe.map!==null&&pe.map.dispose(),pe.map=new Ot(n.x,n.y,se),pe.map.texture.name=de.name+".shadowMap",pe.camera.updateProjectionMatrix()}r.setRenderTarget(pe.map),r.clear();let Ie=pe.getViewportCount();for(let se=0;se<Ie;se++){let he=pe.getViewport(se);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),j.viewport(a),pe.updateMatrices(de,se),i=pe.getFrustum(),y(U,k,pe.camera,de,this.type)}pe.isPointLightShadow!==!0&&this.type===Hi&&_(pe,k),pe.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,X,Z)}}var Ev={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Av(r){let e=new function(){let w=!1,F=new it,O=null,ee=new it(0,0,0,0);return{setMask:function(G){O===G||w||(r.colorMask(G,G,G,G),O=G)},setLocked:function(G){w=G},setClear:function(G,Q,ae,ie,re){re===!0&&(G*=ie,Q*=ie,ae*=ie),F.set(G,Q,ae,ie),ee.equals(F)===!1&&(r.clearColor(G,Q,ae,ie),ee.copy(F))},reset:function(){w=!1,O=null,ee.set(-1,0,0,0)}}},t=new function(){let w=!1,F=!1,O=null,ee=null,G=null;return{setReversed:function(Q){F=Q},setTest:function(Q){Q?Te(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Q){O===Q||w||(r.depthMask(Q),O=Q)},setFunc:function(Q){if(F&&(Q=Ev[Q]),ee!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ee=Q}},setLocked:function(Q){w=Q},setClear:function(Q){G!==Q&&(r.clearDepth(Q),G=Q)},reset:function(){w=!1,O=null,ee=null,G=null}}},i=new function(){let w=!1,F=null,O=null,ee=null,G=null,Q=null,ae=null,ie=null,re=null;return{setTest:function(Ee){w||(Ee?Te(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Ee){F===Ee||w||(r.stencilMask(Ee),F=Ee)},setFunc:function(Ee,ve,Ne){O===Ee&&ee===ve&&G===Ne||(r.stencilFunc(Ee,ve,Ne),O=Ee,ee=ve,G=Ne)},setOp:function(Ee,ve,Ne){Q===Ee&&ae===ve&&ie===Ne||(r.stencilOp(Ee,ve,Ne),Q=Ee,ae=ve,ie=Ne)},setLocked:function(Ee){w=Ee},setClear:function(Ee){re!==Ee&&(r.clearStencil(Ee),re=Ee)},reset:function(){w=!1,F=null,O=null,ee=null,G=null,Q=null,ae=null,ie=null,re=null}}},n=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,v=null,g=null,m=null,_=null,x=new me(0,0,0),y=0,P=!1,C=null,U=null,k=null,M=null,X=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,K=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=K>=2);let $=null,te={},de=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),we=new it().fromArray(de),Ie=new it().fromArray(pe);function se(w,F,O,ee){let G=new Uint8Array(4),Q=r.createTexture();r.bindTexture(w,Q),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<O;ae++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,G):r.texImage2D(F+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,G);return Q}let he={};function Te(w){a[w]!==!0&&(r.enable(w),a[w]=!0)}function Me(w){a[w]!==!1&&(r.disable(w),a[w]=!1)}he[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),i.setClear(0),Te(r.DEPTH_TEST),t.setFunc(3),Y(!1),L(1),Te(r.CULL_FACE),z(0);let D={[Rn]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};D[103]=r.MIN,D[104]=r.MAX;let S={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Ao]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Ro]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function z(w,F,O,ee,G,Q,ae,ie,re,Ee){if(w!==0){if(u===!1&&(Te(r.BLEND),u=!0),w===5)G=G||F,Q=Q||O,ae=ae||ee,F===p&&G===g||(r.blendEquationSeparate(D[F],D[G]),p=F,g=G),O===f&&ee===v&&Q===m&&ae===_||(r.blendFuncSeparate(S[O],S[ee],S[Q],S[ae]),f=O,v=ee,m=Q,_=ae),ie.equals(x)!==!1&&re===y||(r.blendColor(ie.r,ie.g,ie.b,re),x.copy(ie),y=re),d=w,P=!1;else if(w!==d||Ee!==P){if(p===Rn&&g===Rn||(r.blendEquation(r.FUNC_ADD),p=Rn,g=Rn),Ee)switch(w){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}f=null,v=null,m=null,_=null,x.set(0,0,0),y=0,d=w,P=Ee}}else u===!0&&(Me(r.BLEND),u=!1)}function Y(w){C!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),C=w)}function L(w){w!==0?(Te(r.CULL_FACE),w!==U&&(w===1?r.cullFace(r.BACK):w===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),U=w}function N(w,F,O){w?(Te(r.POLYGON_OFFSET_FILL),M===F&&X===O||(r.polygonOffset(F,O),M=F,X=O)):Me(r.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:i},enable:Te,disable:Me,bindFramebuffer:function(w,F){return o[w]!==F&&(r.bindFramebuffer(w,F),o[w]=F,w===r.DRAW_FRAMEBUFFER&&(o[r.FRAMEBUFFER]=F),w===r.FRAMEBUFFER&&(o[r.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(w,F){let O=c,ee=!1;if(w){O=l.get(F),O===void 0&&(O=[],l.set(F,O));let G=w.textures;if(O.length!==G.length||O[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ae=G.length;Q<ae;Q++)O[Q]=r.COLOR_ATTACHMENT0+Q;O.length=G.length,ee=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,ee=!0);ee&&r.drawBuffers(O)},useProgram:function(w){return h!==w&&(r.useProgram(w),h=w,!0)},setBlending:z,setMaterial:function(w,F){w.side===2?Me(r.CULL_FACE):Te(r.CULL_FACE);let O=w.side===Xt;F&&(O=!O),Y(O),w.blending===1&&w.transparent===!1?z(0):z(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),t.setFunc(w.depthFunc),t.setTest(w.depthTest),t.setMask(w.depthWrite),e.setMask(w.colorWrite);let ee=w.stencilWrite;i.setTest(ee),ee&&(i.setMask(w.stencilWriteMask),i.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),i.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),N(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Y,setCullFace:L,setLineWidth:function(w){w!==k&&(j&&r.lineWidth(w),k=w)},setPolygonOffset:N,setScissorTest:function(w){w?Te(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=r.TEXTURE0+Z-1),$!==w&&(r.activeTexture(w),$=w)},bindTexture:function(w,F,O){O===void 0&&(O=$===null?r.TEXTURE0+Z-1:$);let ee=te[O];ee===void 0&&(ee={type:void 0,texture:void 0},te[O]=ee),ee.type===w&&ee.texture===F||($!==O&&(r.activeTexture(O),$=O),r.bindTexture(w,F||he[w]),ee.type=w,ee.texture=F)},unbindTexture:function(){let w=te[$];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,F){let O=s.get(F);O===void 0&&(O=new WeakMap,s.set(F,O));let ee=O.get(w);ee===void 0&&(ee=r.getUniformBlockIndex(F,w.name),O.set(w,ee))},uniformBlockBinding:function(w,F){let O=s.get(F).get(w);n.get(F)!==O&&(r.uniformBlockBinding(F,O,w.__bindingPointIndex),n.set(F,O))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){we.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),we.copy(w))},viewport:function(w){Ie.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),Ie.copy(w))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),a={},$=null,te={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,v=null,g=null,m=null,_=null,x=new me(0,0,0),y=0,P=!1,C=null,U=null,k=null,M=null,X=null,we.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),e.reset(),t.reset(),i.reset()}}}function jh(r,e,t,i){let n=(function(s){switch(s){case ji:case ed:return{byteLength:1,components:1};case Xr:case td:case Ei:return{byteLength:2,components:1};case pc:case fc:return{byteLength:2,components:4};case fn:case dc:case ui:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case nd:case sd:return r*e;case ad:return r*e*2;case mc:case Ea:return r*e/n.components*n.byteLength;case od:case gc:return r*e*2/n.components*n.byteLength;case rd:return r*e*3/n.components*n.byteLength;case si:case vc:return r*e*4/n.components*n.byteLength;case Ls:case Us:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Ns:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Po:case Lo:return Math.max(r,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(r,8)*Math.max(e,8)/2;case Uo:case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case No:case Oo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Os:case Jo:case Ko:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ld:case $o:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}var Rv={contain:function(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r},cover:function(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r},fill:function(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r},getByteLength:jh};function Cv(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(D,S){return p?new OffscreenCanvas(D,S):Ks("canvas")}function v(D,S,z){let Y=1,L=Me(D);if((L.width>z||L.height>z)&&(Y=z/Math.max(L.width,L.height)),Y<1){if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let N=Math.floor(Y*L.width),w=Math.floor(Y*L.height);u===void 0&&(u=f(N,w));let F=S?f(N,w):u;return F.width=N,F.height=w,F.getContext("2d").drawImage(D,0,0,N,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+N+"x"+w+")."),F}return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),D}return D}function g(D){return D.generateMipmaps&&D.minFilter!==$t&&D.minFilter!==Nt}function m(D){r.generateMipmap(D)}function _(D,S,z,Y,L=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let N=S;if(S===r.RED&&(z===r.FLOAT&&(N=r.R32F),z===r.HALF_FLOAT&&(N=r.R16F),z===r.UNSIGNED_BYTE&&(N=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(N=r.R8UI),z===r.UNSIGNED_SHORT&&(N=r.R16UI),z===r.UNSIGNED_INT&&(N=r.R32UI),z===r.BYTE&&(N=r.R8I),z===r.SHORT&&(N=r.R16I),z===r.INT&&(N=r.R32I)),S===r.RG&&(z===r.FLOAT&&(N=r.RG32F),z===r.HALF_FLOAT&&(N=r.RG16F),z===r.UNSIGNED_BYTE&&(N=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(N=r.RG8UI),z===r.UNSIGNED_SHORT&&(N=r.RG16UI),z===r.UNSIGNED_INT&&(N=r.RG32UI),z===r.BYTE&&(N=r.RG8I),z===r.SHORT&&(N=r.RG16I),z===r.INT&&(N=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(N=r.RGB8UI),z===r.UNSIGNED_SHORT&&(N=r.RGB16UI),z===r.UNSIGNED_INT&&(N=r.RGB32UI),z===r.BYTE&&(N=r.RGB8I),z===r.SHORT&&(N=r.RGB16I),z===r.INT&&(N=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(N=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(N=r.RGBA16UI),z===r.UNSIGNED_INT&&(N=r.RGBA32UI),z===r.BYTE&&(N=r.RGBA8I),z===r.SHORT&&(N=r.RGBA16I),z===r.INT&&(N=r.RGBA32I)),S===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(N=r.RGB9_E5),S===r.RGBA){let w=L?js:et.getTransfer(Y);z===r.FLOAT&&(N=r.RGBA32F),z===r.HALF_FLOAT&&(N=r.RGBA16F),z===r.UNSIGNED_BYTE&&(N=w===dt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(N=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(N=r.RGB5_A1)}return N!==r.R16F&&N!==r.R32F&&N!==r.RG16F&&N!==r.RG32F&&N!==r.RGBA16F&&N!==r.RGBA32F||e.get("EXT_color_buffer_float"),N}function x(D,S){let z;return D?S===null||S===fn||S===ar?z=r.DEPTH24_STENCIL8:S===ui?z=r.DEPTH32F_STENCIL8:S===Xr&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fn||S===ar?z=r.DEPTH_COMPONENT24:S===ui?z=r.DEPTH_COMPONENT32F:S===Xr&&(z=r.DEPTH_COMPONENT16),z}function y(D,S){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==$t&&D.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function P(D){let S=D.target;S.removeEventListener("dispose",P),(function(z){let Y=i.get(z);if(Y.__webglInit===void 0)return;let L=z.source,N=d.get(L);if(N){let w=N[Y.__cacheKey];w.usedTimes--,w.usedTimes===0&&U(z),Object.keys(N).length===0&&d.delete(L)}i.remove(z)})(S),S.isVideoTexture&&h.delete(S)}function C(D){let S=D.target;S.removeEventListener("dispose",C),(function(z){let Y=i.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(Y.__webglFramebuffer[N]))for(let w=0;w<Y.__webglFramebuffer[N].length;w++)r.deleteFramebuffer(Y.__webglFramebuffer[N][w]);else r.deleteFramebuffer(Y.__webglFramebuffer[N]);Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[N])}else{if(Array.isArray(Y.__webglFramebuffer))for(let N=0;N<Y.__webglFramebuffer.length;N++)r.deleteFramebuffer(Y.__webglFramebuffer[N]);else r.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let N=0;N<Y.__webglColorRenderbuffer.length;N++)Y.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[N]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}let L=z.textures;for(let N=0,w=L.length;N<w;N++){let F=i.get(L[N]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(L[N])}i.remove(z)})(S)}function U(D){let S=i.get(D);r.deleteTexture(S.__webglTexture);let z=D.source;delete d.get(z)[S.__cacheKey],a.memory.textures--}let k=0;function M(D,S){let z=i.get(D);if(D.isVideoTexture&&(function(Y){let L=a.render.frame;h.get(Y)!==L&&(h.set(Y,L),Y.update())})(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){let Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Y.complete!==!1)return void $(z,D,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}let X={[sr]:r.REPEAT,[Si]:r.CLAMP_TO_EDGE,[Vs]:r.MIRRORED_REPEAT},Z={[$t]:r.NEAREST,[Qu]:r.NEAREST_MIPMAP_NEAREST,[kr]:r.NEAREST_MIPMAP_LINEAR,[Nt]:r.LINEAR,[Is]:r.LINEAR_MIPMAP_NEAREST,[ln]:r.LINEAR_MIPMAP_LINEAR},j={512:r.NEVER,519:r.ALWAYS,513:r.LESS,[hd]:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function K(D,S){if(S.type!==ui||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Nt&&S.magFilter!==Is&&S.magFilter!==kr&&S.magFilter!==ln&&S.minFilter!==Nt&&S.minFilter!==Is&&S.minFilter!==kr&&S.minFilter!==ln||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,X[S.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,X[S.wrapT]),D!==r.TEXTURE_3D&&D!==r.TEXTURE_2D_ARRAY||r.texParameteri(D,r.TEXTURE_WRAP_R,X[S.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Z[S.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,j[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==kr&&S.minFilter!==ln||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(D,S){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",P));let Y=S.source,L=d.get(Y);L===void 0&&(L={},d.set(Y,L));let N=(function(w){let F=[];return F.push(w.wrapS),F.push(w.wrapT),F.push(w.wrapR||0),F.push(w.magFilter),F.push(w.minFilter),F.push(w.anisotropy),F.push(w.internalFormat),F.push(w.format),F.push(w.type),F.push(w.generateMipmaps),F.push(w.premultiplyAlpha),F.push(w.flipY),F.push(w.unpackAlignment),F.push(w.colorSpace),F.join()})(S);if(N!==D.__cacheKey){L[N]===void 0&&(L[N]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),L[N].usedTimes++;let w=L[D.__cacheKey];w!==void 0&&(L[D.__cacheKey].usedTimes--,w.usedTimes===0&&U(S)),D.__cacheKey=N,D.__webglTexture=L[N].texture}return z}function $(D,S,z){let Y=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=r.TEXTURE_3D);let L=q(D,S),N=S.source;t.bindTexture(Y,D.__webglTexture,r.TEXTURE0+z);let w=i.get(N);if(N.version!==w.__version||L===!0){t.activeTexture(r.TEXTURE0+z);let F=et.getPrimaries(et.workingColorSpace),O=S.colorSpace===rn?null:et.getPrimaries(S.colorSpace),ee=S.colorSpace===rn||F===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let G=v(S.image,!1,n.maxTextureSize);G=Te(S,G);let Q=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),ie,re=_(S.internalFormat,Q,ae,S.colorSpace,S.isVideoTexture);K(Y,S);let Ee=S.mipmaps,ve=S.isVideoTexture!==!0,Ne=w.__version===void 0||L===!0,je=N.dataReady,Ae=y(S,G);if(S.isDepthTexture)re=x(S.format===or,S.type),Ne&&(ve?t.texStorage2D(r.TEXTURE_2D,1,re,G.width,G.height):t.texImage2D(r.TEXTURE_2D,0,re,G.width,G.height,0,Q,ae,null));else if(S.isDataTexture)if(Ee.length>0){ve&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ae,re,Ee[0].width,Ee[0].height);for(let Re=0,Le=Ee.length;Re<Le;Re++)ie=Ee[Re],ve?je&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,ie.width,ie.height,Q,ae,ie.data):t.texImage2D(r.TEXTURE_2D,Re,re,ie.width,ie.height,0,Q,ae,ie.data);S.generateMipmaps=!1}else ve?(Ne&&t.texStorage2D(r.TEXTURE_2D,Ae,re,G.width,G.height),je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,G.width,G.height,Q,ae,G.data)):t.texImage2D(r.TEXTURE_2D,0,re,G.width,G.height,0,Q,ae,G.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ve&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,re,Ee[0].width,Ee[0].height,G.depth);for(let Re=0,Le=Ee.length;Re<Le;Re++)if(ie=Ee[Re],S.format!==si)if(Q!==null)if(ve){if(je)if(S.layerUpdates.size>0){let $e=jh(ie.width,ie.height,S.format,S.type);for(let Ze of S.layerUpdates){let be=ie.data.subarray(Ze*$e/ie.data.BYTES_PER_ELEMENT,(Ze+1)*$e/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,Ze,ie.width,ie.height,1,Q,be,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ie.width,ie.height,G.depth,Q,ie.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,re,ie.width,ie.height,G.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?je&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ie.width,ie.height,G.depth,Q,ae,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Re,re,ie.width,ie.height,G.depth,0,Q,ae,ie.data)}else{ve&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ae,re,Ee[0].width,Ee[0].height);for(let Re=0,Le=Ee.length;Re<Le;Re++)ie=Ee[Re],S.format!==si?Q!==null?ve?je&&t.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,ie.width,ie.height,Q,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,Re,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?je&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,ie.width,ie.height,Q,ae,ie.data):t.texImage2D(r.TEXTURE_2D,Re,re,ie.width,ie.height,0,Q,ae,ie.data)}else if(S.isDataArrayTexture)if(ve){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,re,G.width,G.height,G.depth),je)if(S.layerUpdates.size>0){let Re=jh(G.width,G.height,S.format,S.type);for(let Le of S.layerUpdates){let $e=G.data.subarray(Le*Re/G.data.BYTES_PER_ELEMENT,(Le+1)*Re/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,G.width,G.height,1,Q,ae,$e)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Q,ae,G.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,G.width,G.height,G.depth,0,Q,ae,G.data);else if(S.isData3DTexture)ve?(Ne&&t.texStorage3D(r.TEXTURE_3D,Ae,re,G.width,G.height,G.depth),je&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Q,ae,G.data)):t.texImage3D(r.TEXTURE_3D,0,re,G.width,G.height,G.depth,0,Q,ae,G.data);else if(S.isFramebufferTexture){if(Ne)if(ve)t.texStorage2D(r.TEXTURE_2D,Ae,re,G.width,G.height);else{let Re=G.width,Le=G.height;for(let $e=0;$e<Ae;$e++)t.texImage2D(r.TEXTURE_2D,$e,re,Re,Le,0,Q,ae,null),Re>>=1,Le>>=1}}else if(Ee.length>0){if(ve&&Ne){let Re=Me(Ee[0]);t.texStorage2D(r.TEXTURE_2D,Ae,re,Re.width,Re.height)}for(let Re=0,Le=Ee.length;Re<Le;Re++)ie=Ee[Re],ve?je&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,Q,ae,ie):t.texImage2D(r.TEXTURE_2D,Re,re,Q,ae,ie);S.generateMipmaps=!1}else if(ve){if(Ne){let Re=Me(G);t.texStorage2D(r.TEXTURE_2D,Ae,re,Re.width,Re.height)}je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,ae,G)}else t.texImage2D(r.TEXTURE_2D,0,re,Q,ae,G);g(S)&&m(Y),w.__version=N.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function te(D,S,z,Y,L,N){let w=s.convert(z.format,z.colorSpace),F=s.convert(z.type),O=_(z.internalFormat,w,F,z.colorSpace);if(!i.get(S).__hasExternalTextures){let ee=Math.max(1,S.width>>N),G=Math.max(1,S.height>>N);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?t.texImage3D(L,N,O,ee,G,S.depth,0,w,F,null):t.texImage2D(L,N,O,ee,G,0,w,F,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),he(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,L,i.get(z).__webglTexture,0,se(S)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,L,i.get(z).__webglTexture,N),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(D,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),S.depthBuffer){let Y=S.depthTexture,L=Y&&Y.isDepthTexture?Y.type:null,N=x(S.stencilBuffer,L),w=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=se(S);he(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,N,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,N,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,N,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,w,r.RENDERBUFFER,D)}else{let Y=S.textures;for(let L=0;L<Y.length;L++){let N=Y[L],w=s.convert(N.format,N.colorSpace),F=s.convert(N.type),O=_(N.internalFormat,w,F,N.colorSpace),ee=se(S);z&&he(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,O,S.width,S.height):he(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,O,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,O,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(D){let S=i.get(D),z=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let Y=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let L=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",L)};Y.addEventListener("dispose",L),S.__depthDisposeCallback=L}S.__boundDepthTexture=Y}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");(function(Y,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Y),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),M(L.depthTexture,0);let N=i.get(L.depthTexture).__webglTexture,w=se(L);if(L.depthTexture.format===jr)he(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0,w):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0);else{if(L.depthTexture.format!==or)throw new Error("Unknown depthTexture format");he(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0,w):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0)}})(S.__webglFramebuffer,D)}else if(z){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=r.createRenderbuffer(),de(S.__webglDepthbuffer[Y],D,!1);else{let L=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,N),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,N)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),de(S.__webglDepthbuffer,D,!1);else{let Y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,L)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let we=[],Ie=[];function se(D){return Math.min(n.maxSamples,D.samples)}function he(D){let S=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(D,S){let z=D.colorSpace,Y=D.format,L=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==gn&&z!==rn&&(et.getTransfer(z)===dt?Y===si&&L===ji||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Me(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=function(){let D=k;return D>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),k+=1,D},this.resetTextureUnits=function(){k=0},this.setTexture2D=M,this.setTexture2DArray=function(D,S){let z=i.get(D);D.version>0&&z.__version!==D.version?$(z,D,S):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(D,S){let z=i.get(D);D.version>0&&z.__version!==D.version?$(z,D,S):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(D,S){let z=i.get(D);D.version>0&&z.__version!==D.version?(function(Y,L,N){if(L.image.length!==6)return;let w=q(Y,L),F=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+N);let O=i.get(F);if(F.version!==O.__version||w===!0){t.activeTexture(r.TEXTURE0+N);let ee=et.getPrimaries(et.workingColorSpace),G=L.colorSpace===rn?null:et.getPrimaries(L.colorSpace),Q=L.colorSpace===rn||ee===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ae=L.isCompressedTexture||L.image[0].isCompressedTexture,ie=L.image[0]&&L.image[0].isDataTexture,re=[];for(let be=0;be<6;be++)re[be]=ae||ie?ie?L.image[be].image:L.image[be]:v(L.image[be],!0,n.maxCubemapSize),re[be]=Te(L,re[be]);let Ee=re[0],ve=s.convert(L.format,L.colorSpace),Ne=s.convert(L.type),je=_(L.internalFormat,ve,Ne,L.colorSpace),Ae=L.isVideoTexture!==!0,Re=O.__version===void 0||w===!0,Le=F.dataReady,$e,Ze=y(L,Ee);if(K(r.TEXTURE_CUBE_MAP,L),ae){Ae&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,je,Ee.width,Ee.height);for(let be=0;be<6;be++){$e=re[be].mipmaps;for(let Ve=0;Ve<$e.length;Ve++){let Qe=$e[Ve];L.format!==si?ve!==null?Ae?Le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,Qe.width,Qe.height,ve,Qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,je,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,Qe.width,Qe.height,ve,Ne,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,je,Qe.width,Qe.height,0,ve,Ne,Qe.data)}}}else{if($e=L.mipmaps,Ae&&Re){$e.length>0&&Ze++;let be=Me(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,je,be.width,be.height)}for(let be=0;be<6;be++)if(ie){Ae?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,re[be].width,re[be].height,ve,Ne,re[be].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,je,re[be].width,re[be].height,0,ve,Ne,re[be].data);for(let Ve=0;Ve<$e.length;Ve++){let Qe=$e[Ve].image[be].image;Ae?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,Qe.width,Qe.height,ve,Ne,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,je,Qe.width,Qe.height,0,ve,Ne,Qe.data)}}else{Ae?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ve,Ne,re[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,je,ve,Ne,re[be]);for(let Ve=0;Ve<$e.length;Ve++){let Qe=$e[Ve];Ae?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,ve,Ne,Qe.image[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,je,ve,Ne,Qe.image[be])}}}g(L)&&m(r.TEXTURE_CUBE_MAP),O.__version=F.version,L.onUpdate&&L.onUpdate(L)}Y.__version=L.version})(z,D,S):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(D,S,z){let Y=i.get(D);S!==void 0&&te(Y.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&pe(D)},this.setupRenderTarget=function(D){let S=D.texture,z=i.get(D),Y=i.get(S);D.addEventListener("dispose",C);let L=D.textures,N=D.isWebGLCubeRenderTarget===!0,w=L.length>1;if(w||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=S.version,a.memory.textures++),N){z.__webglFramebuffer=[];for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[F]=[];for(let O=0;O<S.mipmaps.length;O++)z.__webglFramebuffer[F][O]=r.createFramebuffer()}else z.__webglFramebuffer[F]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let F=0;F<S.mipmaps.length;F++)z.__webglFramebuffer[F]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(w)for(let F=0,O=L.length;F<O;F++){let ee=i.get(L[F]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&he(D)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){let O=L[F];z.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[F]);let ee=s.convert(O.format,O.colorSpace),G=s.convert(O.type),Q=_(O.internalFormat,ee,G,O.colorSpace,D.isXRRenderTarget===!0),ae=se(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Q,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,z.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),de(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),K(r.TEXTURE_CUBE_MAP,S);for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0)for(let O=0;O<S.mipmaps.length;O++)te(z.__webglFramebuffer[F][O],D,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,O);else te(z.__webglFramebuffer[F],D,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);g(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){for(let F=0,O=L.length;F<O;F++){let ee=L[F],G=i.get(ee);t.bindTexture(r.TEXTURE_2D,G.__webglTexture),K(r.TEXTURE_2D,ee),te(z.__webglFramebuffer,D,ee,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),g(ee)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let F=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(F=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(F,Y.__webglTexture),K(F,S),S.mipmaps&&S.mipmaps.length>0)for(let O=0;O<S.mipmaps.length;O++)te(z.__webglFramebuffer[O],D,S,r.COLOR_ATTACHMENT0,F,O);else te(z.__webglFramebuffer,D,S,r.COLOR_ATTACHMENT0,F,0);g(S)&&m(F),t.unbindTexture()}D.depthBuffer&&pe(D)},this.updateRenderTargetMipmap=function(D){let S=D.textures;for(let z=0,Y=S.length;z<Y;z++){let L=S[z];if(g(L)){let N=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,w=i.get(L).__webglTexture;t.bindTexture(N,w),m(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(D){if(D.samples>0){if(he(D)===!1){let S=D.textures,z=D.width,Y=D.height,L=r.COLOR_BUFFER_BIT,N=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=i.get(D),F=S.length>1;if(F)for(let O=0;O<S.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let O=0;O<S.length;O++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),F){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,w.__webglColorRenderbuffer[O]);let ee=i.get(S[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,z,Y,0,0,z,Y,L,r.NEAREST),l===!0&&(we.length=0,Ie.length=0,we.push(r.COLOR_ATTACHMENT0+O),D.depthBuffer&&D.resolveDepthBuffer===!1&&(we.push(N),Ie.push(N),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let O=0;O<S.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,w.__webglColorRenderbuffer[O]);let ee=i.get(S[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let S=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=he}function wf(r,e){return{convert:function(t,i=""){let n,s=et.getTransfer(i);if(t===ji)return r.UNSIGNED_BYTE;if(t===pc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===fc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===id)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===ed)return r.BYTE;if(t===td)return r.SHORT;if(t===Xr)return r.UNSIGNED_SHORT;if(t===dc)return r.INT;if(t===fn)return r.UNSIGNED_INT;if(t===ui)return r.FLOAT;if(t===Ei)return r.HALF_FLOAT;if(t===nd)return r.ALPHA;if(t===rd)return r.RGB;if(t===si)return r.RGBA;if(t===sd)return r.LUMINANCE;if(t===ad)return r.LUMINANCE_ALPHA;if(t===jr)return r.DEPTH_COMPONENT;if(t===or)return r.DEPTH_STENCIL;if(t===mc)return r.RED;if(t===Ea)return r.RED_INTEGER;if(t===od)return r.RG;if(t===gc)return r.RG_INTEGER;if(t===vc)return r.RGBA_INTEGER;if(t===Ls||t===Us||t===Ds||t===Ns)if(s===dt){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Ls)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Us)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ds)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ns)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Ls)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Us)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ds)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ns)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Co||t===Po||t===Io||t===Lo){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Co)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Po)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Io)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Lo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Uo||t===Do||t===No){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Uo||t===Do)return s===dt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===No)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Oo||t===Fo||t===Bo||t===zo||t===ko||t===Go||t===Ho||t===Vo||t===Wo||t===Xo||t===jo||t===qo||t===Yo||t===Zo){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Oo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Fo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Bo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===zo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ko)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Go)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ho)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Vo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Wo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Xo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===jo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===qo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Yo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Zo)return s===dt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Os||t===Jo||t===Ko){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Os)return s===dt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Jo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ko)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ld||t===$o||t===Qo||t===el){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Os)return n.COMPRESSED_RED_RGTC1_EXT;if(t===$o)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Qo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===el)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ar?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var al=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Cn=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pv={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Lt;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new $r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends wi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new qh,g=t.getContextAttributes(),m=null,_=null,x=[],y=[],P=new ne,C=null,U=new Dt;U.layers.enable(1),U.viewport=new it;let k=new Dt;k.layers.enable(2),k.viewport=new it;let M=[U,k],X=new al;X.layers.enable(1),X.layers.enable(2);let Z=null,j=null;function K(se){let he=y.indexOf(se.inputSource);if(he===-1)return;let Te=x[he];Te!==void 0&&(Te.update(se.inputSource,se.frame,c||a),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function q(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",$);for(let se=0;se<x.length;se++){let he=y[se];he!==null&&(y[se]=null,x[se].disconnect(he))}Z=null,j=null,v.reset(),e.setRenderTarget(m),p=null,d=null,u=null,n=null,_=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function $(se){for(let he=0;he<se.removed.length;he++){let Te=se.removed[he],Me=y.indexOf(Te);Me>=0&&(y[Me]=null,x[Me].disconnect(Te))}for(let he=0;he<se.added.length;he++){let Te=se.added[he],Me=y.indexOf(Te);if(Me===-1){for(let S=0;S<x.length;S++){if(S>=y.length){y.push(Te),Me=S;break}if(y[S]===null){y[S]=Te,Me=S;break}}if(Me===-1)break}let D=x[Me];D&&D.connect(Te)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=x[se];return he===void 0&&(he=new Bs,x[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=x[se];return he===void 0&&(he=new Bs,x[se]=he),he.getGripSpace()},this.getHand=function(se){let he=x[se];return he===void 0&&(he=new Bs,x[se]=he),he.getHandSpace()},this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(se){if(n=se,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",q),n.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){let he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,he),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ot(p.framebufferWidth,p.framebufferHeight,{format:si,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,Te=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?or:jr,Te=g.stencil?ar:fn);let D={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(D),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ot(d.textureWidth,d.textureHeight,{format:si,type:ji,depthTexture:new ia(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ie.setContext(n),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let te=new R,de=new R;function pe(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(n===null)return;let he=se.near,Te=se.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),X.near=k.near=U.near=he,X.far=k.far=U.far=Te,Z===X.near&&j===X.far||(n.updateRenderState({depthNear:X.near,depthFar:X.far}),Z=X.near,j=X.far);let Me=se.parent,D=X.cameras;pe(X,Me);for(let S=0;S<D.length;S++)pe(D[S],Me);D.length===2?(function(S,z,Y){te.setFromMatrixPosition(z.matrixWorld),de.setFromMatrixPosition(Y.matrixWorld);let L=te.distanceTo(de),N=z.projectionMatrix.elements,w=Y.projectionMatrix.elements,F=N[14]/(N[10]-1),O=N[14]/(N[10]+1),ee=(N[9]+1)/N[5],G=(N[9]-1)/N[5],Q=(N[8]-1)/N[0],ae=(w[8]+1)/w[0],ie=F*Q,re=F*ae,Ee=L/(-Q+ae),ve=Ee*-Q;if(z.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(ve),S.translateZ(Ee),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),N[10]===-1)S.projectionMatrix.copy(z.projectionMatrix),S.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let Ne=F+Ee,je=O+Ee,Ae=ie-ve,Re=re+(L-ve),Le=ee*O/je*Ne,$e=G*O/je*Ne;S.projectionMatrix.makePerspective(Ae,Re,Le,$e,Ne,je),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}})(X,U,k):X.projectionMatrix.copy(U.projectionMatrix),(function(S,z,Y){Y===null?S.matrix.copy(z.matrixWorld):(S.matrix.copy(Y.matrixWorld),S.matrix.invert(),S.matrix.multiply(z.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(z.projectionMatrix),S.projectionMatrixInverse.copy(z.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*qr*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(se,X,Me)},this.getCamera=function(){return X},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)};let we=null,Ie=new xf;Ie.setAnimationLoop((function(se,he){if(h=he.getViewerPose(c||a),f=he,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Me=!1;Te.length!==X.cameras.length&&(X.cameras.length=0,Me=!0);for(let S=0;S<Te.length;S++){let z=Te[S],Y=null;if(p!==null)Y=p.getViewport(z);else{let N=u.getViewSubImage(d,z);Y=N.viewport,S===0&&(e.setRenderTargetTextures(_,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(_))}let L=M[S];L===void 0&&(L=new Dt,L.layers.enable(S),L.viewport=new it,M[S]=L),L.matrix.fromArray(z.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(z.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Y.x,Y.y,Y.width,Y.height),S===0&&(X.matrix.copy(L.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Me===!0&&X.cameras.push(L)}let D=n.enabledFeatures;if(D&&D.includes("depth-sensing")){let S=u.getDepthInformation(Te[0]);S&&S.isValid&&S.texture&&v.init(e,S,n.renderState)}}for(let Te=0;Te<x.length;Te++){let Me=y[Te],D=x[Te];Me!==null&&D!==void 0&&D.update(Me,he,c||a)}we&&we(se,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),f=null})),this.setAnimationLoop=function(se){we=se},this.dispose=function(){}}},jn=new ai,Iv=new De;function Lv(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Xt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Xt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,jn.copy(l),jn.x*=-1,jn.y*=-1,jn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),n.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(jn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,_f(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Uv(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let v=u.value,g=d+"_"+p;if(f[g]===void 0)return f[g]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let m=f[g];if(typeof v=="number"||typeof v=="boolean"){if(m!==v)return f[g]=v,!0}else if(m.equals(v)===!1)return m.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(g){let m=g.uniforms,_=0,x=16;for(let P=0,C=m.length;P<C;P++){let U=Array.isArray(m[P])?m[P]:[m[P]];for(let k=0,M=U.length;k<M;k++){let X=U[k],Z=Array.isArray(X.value)?X.value:[X.value];for(let j=0,K=Z.length;j<K;j++){let q=c(Z[j]),$=_%x,te=$%q.boundary,de=$+te;_+=te,de!==0&&x-de<q.storage&&(_+=x-de),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=q.storage}}}let y=_%x;y>0&&(_+=x-y),g.__size=_,g.__cache={}})(u),p=(function(g){let m=(function(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=m;let _=r.createBuffer(),x=g.__size,y=g.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,m,_),_})(u),n[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(g){let m=n[g.id],_=g.uniforms,x=g.__cache;r.bindBuffer(r.UNIFORM_BUFFER,m);for(let y=0,P=_.length;y<P;y++){let C=Array.isArray(_[y])?_[y]:[_[y]];for(let U=0,k=C.length;U<k;U++){let M=C[U];if(l(M,y,U,x)===!0){let X=M.__offset,Z=Array.isArray(M.value)?M.value:[M.value],j=0;for(let K=0;K<Z.length;K++){let q=Z[K],$=c(q);typeof q=="number"||typeof q=="boolean"?(M.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,X+j,M.__data)):q.isMatrix3?(M.__data[0]=q.elements[0],M.__data[1]=q.elements[1],M.__data[2]=q.elements[2],M.__data[3]=0,M.__data[4]=q.elements[3],M.__data[5]=q.elements[4],M.__data[6]=q.elements[5],M.__data[7]=0,M.__data[8]=q.elements[6],M.__data[9]=q.elements[7],M.__data[10]=q.elements[8],M.__data[11]=0):(q.toArray(M.__data,j),j+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Zh=class{constructor(e={}){let{canvas:t=gf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),f=new Int32Array(4),v=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=un,this.toneMappingExposure=1;let x=this,y=!1,P=0,C=0,U=null,k=-1,M=null,X=new it,Z=new it,j=null,K=new me(0),q=0,$=t.width,te=t.height,de=1,pe=null,we=null,Ie=new it(0,0,$,te),se=new it(0,0,$,te),he=!1,Te=new hr,Me=!1,D=!1,S=new De,z=new De,Y=new R,L=new it,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},w=!1;function F(){return U===null?de:1}let O,ee,G,Q,ae,ie,re,Ee,ve,Ne,je,Ae,Re,Le,$e,Ze,be,Ve,Qe,Ri,_n,Yt,Ci,H,T=i;function oe(A,W){return t.getContext(A,W)}try{let A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",st,!1),T===null){let W="webgl2";if(T=oe(W,A),T===null)throw oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function le(){O=new pg(T),O.init(),Yt=new wf(T,O),ee=new cg(T,O,e,Yt),G=new Av(T),ee.reverseDepthBuffer&&G.buffers.depth.setReversed(!0),Q=new gg(T),ae=new vv,ie=new Cv(T,O,G,ae,ee,Yt,Q),re=new ug(x),Ee=new dg(x),ve=new rg(T),Ci=new og(T,ve),Ne=new fg(T,ve,Q,Ci),je=new _g(T,Ne,ve,Q),Qe=new vg(T,ee,ie),Ze=new hg(ae),Ae=new gv(x,re,Ee,O,ee,Ci,Ze),Re=new Lv(x,ae),Le=new xv,$e=new wv(O),Ve=new ag(x,re,Ee,G,je,d,l),be=new Tv(x,je,ee),H=new Uv(T,Q,ee,G),Ri=new lg(T,O,Q),_n=new mg(T,O,Q),Q.programs=Ae.programs,x.capabilities=ee,x.extensions=O,x.properties=ae,x.renderLists=Le,x.shadowMap=be,x.state=G,x.info=Q}le();let _e=new Yh(x,T);function Pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=Q.autoReset,W=be.enabled,J=be.autoUpdate,b=be.needsUpdate,I=be.type;le(),Q.autoReset=A,be.enabled=W,be.autoUpdate=J,be.needsUpdate=b,be.type=I}function st(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Tt(A){let W=A.target;W.removeEventListener("dispose",Tt),(function(J){(function(b){let I=ae.get(b).programs;I!==void 0&&(I.forEach((function(V){Ae.releaseProgram(V)})),b.isShaderMaterial&&Ae.releaseShaderCache(b))})(J),ae.remove(J)})(W)}function zt(A,W,J){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,ct(A,W,J),A.side=bi,A.needsUpdate=!0,ct(A,W,J),A.side=2):ct(A,W,J)}this.xr=_e,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize($,te,!1))},this.getSize=function(A){return A.set($,te)},this.setSize=function(A,W,J=!0){_e.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=A,te=W,t.width=Math.floor(A*de),t.height=Math.floor(W*de),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W))},this.getDrawingBufferSize=function(A){return A.set($*de,te*de).floor()},this.setDrawingBufferSize=function(A,W,J){$=A,te=W,de=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,W,J,b){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,W,J,b),G.viewport(X.copy(Ie).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,W,J,b){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,W,J,b),G.scissor(Z.copy(se).multiplyScalar(de).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){G.setScissorTest(he=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,W=!0,J=!0){let b=0;if(A){let I=!1;if(U!==null){let V=U.texture.format;I=V===vc||V===gc||V===Ea}if(I){let V=U.texture.type,ce=V===ji||V===fn||V===Xr||V===ar||V===pc||V===fc,fe=Ve.getClearColor(),xe=Ve.getClearAlpha(),ye=fe.r,Ce=fe.g,Ue=fe.b;ce?(p[0]=ye,p[1]=Ce,p[2]=Ue,p[3]=xe,T.clearBufferuiv(T.COLOR,0,p)):(f[0]=ye,f[1]=Ce,f[2]=Ue,f[3]=xe,T.clearBufferiv(T.COLOR,0,f))}else b|=T.COLOR_BUFFER_BIT}W&&(b|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(b|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",st,!1),Le.dispose(),$e.dispose(),ae.dispose(),re.dispose(),Ee.dispose(),je.dispose(),Ci.dispose(),H.dispose(),Ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",oi),_e.removeEventListener("sessionend",Ut),gt.stop()},this.renderBufferDirect=function(A,W,J,b,I,V){W===null&&(W=N);let ce=I.isMesh&&I.matrixWorld.determinant()<0,fe=(function(Ye,ut,Pt,Ge,He){ut.isScene!==!0&&(ut=N),ie.resetTextureUnits();let Ii=ut.fog,Qf=Ge.isMeshStandardMaterial?ut.environment:null,em=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:gn,La=(Ge.isMeshStandardMaterial?Ee:re).get(Ge.envMap||Qf),tm=Ge.vertexColors===!0&&!!Pt.attributes.color&&Pt.attributes.color.itemSize===4,im=!!Pt.attributes.tangent&&(!!Ge.normalMap||Ge.anisotropy>0),nm=!!Pt.morphAttributes.position,rm=!!Pt.morphAttributes.normal,sm=!!Pt.morphAttributes.color,bd=un;Ge.toneMapped&&(U!==null&&U.isXRRenderTarget!==!0||(bd=x.toneMapping));let Sd=Pt.morphAttributes.position||Pt.morphAttributes.normal||Pt.morphAttributes.color,am=Sd!==void 0?Sd.length:0,Ke=ae.get(Ge),om=g.state.lights;if(Me===!0&&(D===!0||Ye!==M)){let xi=Ye===M&&Ge.id===k;Ze.setState(Ge,Ye,xi)}let Li=!1;Ge.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==om.state.version||Ke.outputColorSpace!==em||He.isBatchedMesh&&Ke.batching===!1?Li=!0:He.isBatchedMesh||Ke.batching!==!0?He.isBatchedMesh&&Ke.batchingColor===!0&&He.colorTexture===null||He.isBatchedMesh&&Ke.batchingColor===!1&&He.colorTexture!==null||He.isInstancedMesh&&Ke.instancing===!1?Li=!0:He.isInstancedMesh||Ke.instancing!==!0?He.isSkinnedMesh&&Ke.skinning===!1?Li=!0:He.isSkinnedMesh||Ke.skinning!==!0?He.isInstancedMesh&&Ke.instancingColor===!0&&He.instanceColor===null||He.isInstancedMesh&&Ke.instancingColor===!1&&He.instanceColor!==null||He.isInstancedMesh&&Ke.instancingMorph===!0&&He.morphTexture===null||He.isInstancedMesh&&Ke.instancingMorph===!1&&He.morphTexture!==null||Ke.envMap!==La||Ge.fog===!0&&Ke.fog!==Ii?Li=!0:Ke.numClippingPlanes===void 0||Ke.numClippingPlanes===Ze.numPlanes&&Ke.numIntersection===Ze.numIntersection?(Ke.vertexAlphas!==tm||Ke.vertexTangents!==im||Ke.morphTargets!==nm||Ke.morphNormals!==rm||Ke.morphColors!==sm||Ke.toneMapping!==bd||Ke.morphTargetsCount!==am)&&(Li=!0):Li=!0:Li=!0:Li=!0:Li=!0:(Li=!0,Ke.__version=Ge.version);let zn=Ke.currentProgram;Li===!0&&(zn=ct(Ge,ut,He));let wd=!1,fs=!1,Fc=!1,Et=zn.getUniforms(),xn=Ke.uniforms;if(G.useProgram(zn.program)&&(wd=!0,fs=!0,Fc=!0),Ge.id!==k&&(k=Ge.id,fs=!0),wd||M!==Ye){ee.reverseDepthBuffer?(S.copy(Ye.projectionMatrix),(function(kn){let xt=kn.elements;xt[2]=.5*xt[2]+.5*xt[3],xt[6]=.5*xt[6]+.5*xt[7],xt[10]=.5*xt[10]+.5*xt[11],xt[14]=.5*xt[14]+.5*xt[15]})(S),(function(kn){let xt=kn.elements;xt[11]===-1?(xt[10]=-xt[10]-1,xt[14]=-xt[14]):(xt[10]=-xt[10],xt[14]=1-xt[14])})(S),Et.setValue(T,"projectionMatrix",S)):Et.setValue(T,"projectionMatrix",Ye.projectionMatrix),Et.setValue(T,"viewMatrix",Ye.matrixWorldInverse);let xi=Et.map.cameraPosition;xi!==void 0&&xi.setValue(T,Y.setFromMatrixPosition(Ye.matrixWorld)),ee.logarithmicDepthBuffer&&Et.setValue(T,"logDepthBufFC",2/(Math.log(Ye.far+1)/Math.LN2)),(Ge.isMeshPhongMaterial||Ge.isMeshToonMaterial||Ge.isMeshLambertMaterial||Ge.isMeshBasicMaterial||Ge.isMeshStandardMaterial||Ge.isShaderMaterial)&&Et.setValue(T,"isOrthographic",Ye.isOrthographicCamera===!0),M!==Ye&&(M=Ye,fs=!0,Fc=!0)}if(He.isSkinnedMesh){Et.setOptional(T,He,"bindMatrix"),Et.setOptional(T,He,"bindMatrixInverse");let xi=He.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),Et.setValue(T,"boneTexture",xi.boneTexture,ie))}He.isBatchedMesh&&(Et.setOptional(T,He,"batchingTexture"),Et.setValue(T,"batchingTexture",He._matricesTexture,ie),Et.setOptional(T,He,"batchingIdTexture"),Et.setValue(T,"batchingIdTexture",He._indirectTexture,ie),Et.setOptional(T,He,"batchingColorTexture"),He._colorsTexture!==null&&Et.setValue(T,"batchingColorTexture",He._colorsTexture,ie));let Bc=Pt.morphAttributes;Bc.position===void 0&&Bc.normal===void 0&&Bc.color===void 0||Qe.update(He,Pt,zn),(fs||Ke.receiveShadow!==He.receiveShadow)&&(Ke.receiveShadow=He.receiveShadow,Et.setValue(T,"receiveShadow",He.receiveShadow)),Ge.isMeshGouraudMaterial&&Ge.envMap!==null&&(xn.envMap.value=La,xn.flipEnvMap.value=La.isCubeTexture&&La.isRenderTargetTexture===!1?-1:1),Ge.isMeshStandardMaterial&&Ge.envMap===null&&ut.environment!==null&&(xn.envMapIntensity.value=ut.environmentIntensity),fs&&(Et.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&(Ui=Fc,(Gi=xn).ambientLightColor.needsUpdate=Ui,Gi.lightProbe.needsUpdate=Ui,Gi.directionalLights.needsUpdate=Ui,Gi.directionalLightShadows.needsUpdate=Ui,Gi.pointLights.needsUpdate=Ui,Gi.pointLightShadows.needsUpdate=Ui,Gi.spotLights.needsUpdate=Ui,Gi.spotLightShadows.needsUpdate=Ui,Gi.rectAreaLights.needsUpdate=Ui,Gi.hemisphereLights.needsUpdate=Ui),Ii&&Ge.fog===!0&&Re.refreshFogUniforms(xn,Ii),Re.refreshMaterialUniforms(xn,Ge,de,te,g.state.transmissionRenderTarget[Ye.id]),Wr.upload(T,ht(Ke),xn,ie));var Gi,Ui;if(Ge.isShaderMaterial&&Ge.uniformsNeedUpdate===!0&&(Wr.upload(T,ht(Ke),xn,ie),Ge.uniformsNeedUpdate=!1),Ge.isSpriteMaterial&&Et.setValue(T,"center",He.center),Et.setValue(T,"modelViewMatrix",He.modelViewMatrix),Et.setValue(T,"normalMatrix",He.normalMatrix),Et.setValue(T,"modelMatrix",He.matrixWorld),Ge.isShaderMaterial||Ge.isRawShaderMaterial){let xi=Ge.uniformsGroups;for(let kn=0,xt=xi.length;kn<xt;kn++){let Td=xi[kn];H.update(Td,zn),H.bind(Td,zn)}}return zn})(A,W,J,b,I);G.setMaterial(b,ce);let xe=J.index,ye=1;if(b.wireframe===!0){if(xe=Ne.getWireframeAttribute(J),xe===void 0)return;ye=2}let Ce=J.drawRange,Ue=J.attributes.position,Be=Ce.start*ye,vt=(Ce.start+Ce.count)*ye;V!==null&&(Be=Math.max(Be,V.start*ye),vt=Math.min(vt,(V.start+V.count)*ye)),xe!==null?(Be=Math.max(Be,0),vt=Math.min(vt,xe.count)):Ue!=null&&(Be=Math.max(Be,0),vt=Math.min(vt,Ue.count));let _t=vt-Be;if(_t<0||_t===1/0)return;let Ct;Ci.setup(I,b,fe,J,xe);let at=Ri;if(xe!==null&&(Ct=ve.get(xe),at=_n,at.setIndex(Ct)),I.isMesh)b.wireframe===!0?(G.setLineWidth(b.wireframeLinewidth*F()),at.setMode(T.LINES)):at.setMode(T.TRIANGLES);else if(I.isLine){let Ye=b.linewidth;Ye===void 0&&(Ye=1),G.setLineWidth(Ye*F()),I.isLineSegments?at.setMode(T.LINES):I.isLineLoop?at.setMode(T.LINE_LOOP):at.setMode(T.LINE_STRIP)}else I.isPoints?at.setMode(T.POINTS):I.isSprite&&at.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)at.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))at.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ye=I._multiDrawStarts,ut=I._multiDrawCounts,Pt=I._multiDrawCount,Ge=xe?ve.get(xe).bytesPerElement:1,He=ae.get(b).currentProgram.getUniforms();for(let Ii=0;Ii<Pt;Ii++)He.setValue(T,"_gl_DrawID",Ii),at.render(Ye[Ii]/Ge,ut[Ii])}else if(I.isInstancedMesh)at.renderInstances(Be,_t,I.count);else if(J.isInstancedBufferGeometry){let Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ut=Math.min(J.instanceCount,Ye);at.renderInstances(Be,_t,ut)}else at.render(Be,_t)},this.compile=function(A,W,J=null){J===null&&(J=A),g=$e.get(J),g.init(W),_.push(g),J.traverseVisible((function(I){I.isLight&&I.layers.test(W.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))})),A!==J&&A.traverseVisible((function(I){I.isLight&&I.layers.test(W.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))})),g.setupLights();let b=new Set;return A.traverse((function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let V=I.material;if(V)if(Array.isArray(V))for(let ce=0;ce<V.length;ce++){let fe=V[ce];zt(fe,J,I),b.add(fe)}else zt(V,J,I),b.add(V)})),_.pop(),g=null,b},this.compileAsync=function(A,W,J=null){let b=this.compile(A,W,J);return new Promise((I=>{function V(){b.forEach((function(ce){ae.get(ce).currentProgram.isReady()&&b.delete(ce)})),b.size!==0?setTimeout(V,10):I(A)}O.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)}))};let Pi=null;function oi(){gt.stop()}function Ut(){gt.start()}let gt=new xf;function li(A,W,J,b){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){b&&L.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);let V=je.update(A),ce=A.material;ce.visible&&v.push(A,V,ce,J,L.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){let V=je.update(A),ce=A.material;if(b&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),L.copy(A.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),L.copy(V.boundingSphere.center)),L.applyMatrix4(A.matrixWorld).applyMatrix4(z)),Array.isArray(ce)){let fe=V.groups;for(let xe=0,ye=fe.length;xe<ye;xe++){let Ce=fe[xe],Ue=ce[Ce.materialIndex];Ue&&Ue.visible&&v.push(A,V,Ue,J,L.z,Ce)}}else ce.visible&&v.push(A,V,ce,J,L.z,null)}}let I=A.children;for(let V=0,ce=I.length;V<ce;V++)li(I[V],W,J,b)}function ti(A,W,J,b){let I=A.opaque,V=A.transmissive,ce=A.transparent;g.setupLightsView(J),Me===!0&&Ze.setGlobalState(x.clippingPlanes,J),b&&G.viewport(X.copy(b)),I.length>0&&ki(I,W,J),V.length>0&&ki(V,W,J),ce.length>0&&ki(ce,W,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function _i(A,W,J,b){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[b.id]===void 0&&(g.state.transmissionRenderTarget[b.id]=new Ot(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Ei:ji,minFilter:ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let I=g.state.transmissionRenderTarget[b.id],V=b.viewport||X;I.setSize(V.z,V.w);let ce=x.getRenderTarget();x.setRenderTarget(I),x.getClearColor(K),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),w&&Ve.render(J);let fe=x.toneMapping;x.toneMapping=un;let xe=b.viewport;if(b.viewport!==void 0&&(b.viewport=void 0),g.setupLightsView(b),Me===!0&&Ze.setGlobalState(x.clippingPlanes,b),ki(A,J,b),ie.updateMultisampleRenderTarget(I),ie.updateRenderTargetMipmap(I),O.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ce=0,Ue=W.length;Ce<Ue;Ce++){let Be=W[Ce],vt=Be.object,_t=Be.geometry,Ct=Be.material,at=Be.group;if(Ct.side===2&&vt.layers.test(b.layers)){let Ye=Ct.side;Ct.side=Xt,Ct.needsUpdate=!0,ft(vt,J,b,_t,Ct,at),Ct.side=Ye,Ct.needsUpdate=!0,ye=!0}}ye===!0&&(ie.updateMultisampleRenderTarget(I),ie.updateRenderTargetMipmap(I))}x.setRenderTarget(ce),x.setClearColor(K,q),xe!==void 0&&(b.viewport=xe),x.toneMapping=fe}function ki(A,W,J){let b=W.isScene===!0?W.overrideMaterial:null;for(let I=0,V=A.length;I<V;I++){let ce=A[I],fe=ce.object,xe=ce.geometry,ye=b===null?ce.material:b,Ce=ce.group;fe.layers.test(J.layers)&&ft(fe,W,J,xe,ye,Ce)}}function ft(A,W,J,b,I,V){A.onBeforeRender(x,W,J,b,I,V),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),I.onBeforeRender(x,W,J,b,A,V),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=Xt,I.needsUpdate=!0,x.renderBufferDirect(J,W,b,I,A,V),I.side=bi,I.needsUpdate=!0,x.renderBufferDirect(J,W,b,I,A,V),I.side=2):x.renderBufferDirect(J,W,b,I,A,V),A.onAfterRender(x,W,J,b,I,V)}function ct(A,W,J){W.isScene!==!0&&(W=N);let b=ae.get(A),I=g.state.lights,V=g.state.shadowsArray,ce=I.state.version,fe=Ae.getParameters(A,I.state,V,W,J),xe=Ae.getProgramCacheKey(fe),ye=b.programs;b.environment=A.isMeshStandardMaterial?W.environment:null,b.fog=W.fog,b.envMap=(A.isMeshStandardMaterial?Ee:re).get(A.envMap||b.environment),b.envMapRotation=b.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ye===void 0&&(A.addEventListener("dispose",Tt),ye=new Map,b.programs=ye);let Ce=ye.get(xe);if(Ce!==void 0){if(b.currentProgram===Ce&&b.lightsStateVersion===ce)return Bn(A,fe),Ce}else fe.uniforms=Ae.getUniforms(A),A.onBeforeCompile(fe,x),Ce=Ae.acquireProgram(fe,xe),ye.set(xe,Ce),b.uniforms=fe.uniforms;let Ue=b.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ue.clippingPlanes=Ze.uniform),Bn(A,fe),b.needsLights=(function(Be){return Be.isMeshLambertMaterial||Be.isMeshToonMaterial||Be.isMeshPhongMaterial||Be.isMeshStandardMaterial||Be.isShadowMaterial||Be.isShaderMaterial&&Be.lights===!0})(A),b.lightsStateVersion=ce,b.needsLights&&(Ue.ambientLightColor.value=I.state.ambient,Ue.lightProbe.value=I.state.probe,Ue.directionalLights.value=I.state.directional,Ue.directionalLightShadows.value=I.state.directionalShadow,Ue.spotLights.value=I.state.spot,Ue.spotLightShadows.value=I.state.spotShadow,Ue.rectAreaLights.value=I.state.rectArea,Ue.ltc_1.value=I.state.rectAreaLTC1,Ue.ltc_2.value=I.state.rectAreaLTC2,Ue.pointLights.value=I.state.point,Ue.pointLightShadows.value=I.state.pointShadow,Ue.hemisphereLights.value=I.state.hemi,Ue.directionalShadowMap.value=I.state.directionalShadowMap,Ue.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ue.spotShadowMap.value=I.state.spotShadowMap,Ue.spotLightMatrix.value=I.state.spotLightMatrix,Ue.spotLightMap.value=I.state.spotLightMap,Ue.pointShadowMap.value=I.state.pointShadowMap,Ue.pointShadowMatrix.value=I.state.pointShadowMatrix),b.currentProgram=Ce,b.uniformsList=null,Ce}function ht(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Wr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Bn(A,W){let J=ae.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}gt.setAnimationLoop((function(A){Pi&&Pi(A)})),typeof self!="undefined"&&gt.setContext(self),this.setAnimationLoop=function(A){Pi=A,_e.setAnimationLoop(A),A===null?gt.stop():gt.start()},_e.addEventListener("sessionstart",oi),_e.addEventListener("sessionend",Ut),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,U),g=$e.get(A,_.length),g.init(W),_.push(g),z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Te.setFromProjectionMatrix(z),D=this.localClippingEnabled,Me=Ze.init(this.clippingPlanes,D),v=Le.get(A,m.length),v.init(),m.push(v),_e.enabled===!0&&_e.isPresenting===!0){let V=x.xr.getDepthSensingMesh();V!==null&&li(V,W,-1/0,x.sortObjects)}li(A,W,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(pe,we),w=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,w&&Ve.addToRenderList(v,A),this.info.render.frame++,Me===!0&&Ze.beginShadows();let J=g.state.shadowsArray;be.render(J,A,W),Me===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset();let b=v.opaque,I=v.transmissive;if(g.setupLights(),W.isArrayCamera){let V=W.cameras;if(I.length>0)for(let ce=0,fe=V.length;ce<fe;ce++)_i(b,I,A,V[ce]);w&&Ve.render(A);for(let ce=0,fe=V.length;ce<fe;ce++){let xe=V[ce];ti(v,A,xe,xe.viewport)}}else I.length>0&&_i(b,I,A,W),w&&Ve.render(A),ti(v,A,W);U!==null&&(ie.updateMultisampleRenderTarget(U),ie.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(x,A,W),Ci.resetDefaultState(),k=-1,M=null,_.pop(),_.length>0?(g=_[_.length-1],Me===!0&&Ze.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),v=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,W,J){ae.get(A.texture).__webglTexture=W,ae.get(A.depthTexture).__webglTexture=J;let b=ae.get(A);b.__hasExternalTextures=!0,b.__autoAllocateDepthBuffer=J===void 0,b.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),b.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){let J=ae.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){U=A,P=W,C=J;let b=!0,I=null,V=!1,ce=!1;if(A){let fe=ae.get(A);if(fe.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(T.FRAMEBUFFER,null),b=!1;else if(fe.__webglFramebuffer===void 0)ie.setupRenderTarget(A);else if(fe.__hasExternalTextures)ie.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ce=A.depthTexture;if(fe.__boundDepthTexture!==Ce){if(Ce!==null&&ae.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(A)}}let xe=A.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ce=!0);let ye=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(I=Array.isArray(ye[W])?ye[W][J]:ye[W],V=!0):I=A.samples>0&&ie.useMultisampledRTT(A)===!1?ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ye)?ye[J]:ye,X.copy(A.viewport),Z.copy(A.scissor),j=A.scissorTest}else X.copy(Ie).multiplyScalar(de).floor(),Z.copy(se).multiplyScalar(de).floor(),j=he;if(G.bindFramebuffer(T.FRAMEBUFFER,I)&&b&&G.drawBuffers(A,I),G.viewport(X),G.scissor(Z),G.setScissorTest(j),V){let fe=ae.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe.__webglTexture,J)}else if(ce){let fe=ae.get(A.texture),xe=W||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,fe.__webglTexture,J||0,xe)}k=-1},this.readRenderTargetPixels=function(A,W,J,b,I,V,ce){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){G.bindFramebuffer(T.FRAMEBUFFER,fe);try{let xe=A.texture,ye=xe.format,Ce=xe.type;if(!ee.textureFormatReadable(ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=A.width-b&&J>=0&&J<=A.height-I&&T.readPixels(W,J,b,I,Yt.convert(ye),Yt.convert(Ce),V)}finally{let xe=U!==null?ae.get(U).__webglFramebuffer:null;G.bindFramebuffer(T.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(A,W,J,b,I,V,ce){if(!A||!A.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){let xe=A.texture,ye=xe.format,Ce=xe.type;if(!ee.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-b&&J>=0&&J<=A.height-I){G.bindFramebuffer(T.FRAMEBUFFER,fe);let Ue=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.bufferData(T.PIXEL_PACK_BUFFER,V.byteLength,T.STREAM_READ),T.readPixels(W,J,b,I,Yt.convert(ye),Yt.convert(Ce),0);let Be=U!==null?ae.get(U).__webglFramebuffer:null;G.bindFramebuffer(T.FRAMEBUFFER,Be);let vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await(function(_t,Ct,at){return new Promise((function(Ye,ut){setTimeout((function Pt(){switch(_t.clientWaitSync(Ct,_t.SYNC_FLUSH_COMMANDS_BIT,0)){case _t.WAIT_FAILED:ut();break;case _t.TIMEOUT_EXPIRED:setTimeout(Pt,at);break;default:Ye()}}),at)}))})(T,vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,V),T.deleteBuffer(Ue),T.deleteSync(vt),V}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,J=0){A.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);let b=Math.pow(2,-J),I=Math.floor(A.image.width*b),V=Math.floor(A.image.height*b),ce=W!==null?W.x:0,fe=W!==null?W.y:0;ie.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,ce,fe,I,V),G.unbindTexture()},this.copyTextureToTexture=function(A,W,J=null,b=null,I=0){let V,ce,fe,xe,ye,Ce;A.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),b=arguments[0]||null,A=arguments[1],W=arguments[2],I=arguments[3]||0,J=null),J!==null?(V=J.max.x-J.min.x,ce=J.max.y-J.min.y,fe=J.min.x,xe=J.min.y):(V=A.image.width,ce=A.image.height,fe=0,xe=0),b!==null?(ye=b.x,Ce=b.y):(ye=0,Ce=0);let Ue=Yt.convert(W.format),Be=Yt.convert(W.type);ie.setTexture2D(W,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,W.unpackAlignment);let vt=T.getParameter(T.UNPACK_ROW_LENGTH),_t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ct=T.getParameter(T.UNPACK_SKIP_PIXELS),at=T.getParameter(T.UNPACK_SKIP_ROWS),Ye=T.getParameter(T.UNPACK_SKIP_IMAGES),ut=A.isCompressedTexture?A.mipmaps[I]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fe),T.pixelStorei(T.UNPACK_SKIP_ROWS,xe),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,I,ye,Ce,V,ce,Ue,Be,ut.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,I,ye,Ce,ut.width,ut.height,Ue,ut.data):T.texSubImage2D(T.TEXTURE_2D,I,ye,Ce,V,ce,Ue,Be,ut),T.pixelStorei(T.UNPACK_ROW_LENGTH,vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ct),T.pixelStorei(T.UNPACK_SKIP_ROWS,at),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ye),I===0&&W.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J=null,b=null,I=0){let V,ce,fe,xe,ye,Ce,Ue,Be,vt;A.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,b=arguments[1]||null,A=arguments[2],W=arguments[3],I=arguments[4]||0);let _t=A.isCompressedTexture?A.mipmaps[I]:A.image;J!==null?(V=J.max.x-J.min.x,ce=J.max.y-J.min.y,fe=J.max.z-J.min.z,xe=J.min.x,ye=J.min.y,Ce=J.min.z):(V=_t.width,ce=_t.height,fe=_t.depth,xe=0,ye=0,Ce=0),b!==null?(Ue=b.x,Be=b.y,vt=b.z):(Ue=0,Be=0,vt=0);let Ct=Yt.convert(W.format),at=Yt.convert(W.type),Ye;if(W.isData3DTexture)ie.setTexture3D(W,0),Ye=T.TEXTURE_3D;else{if(!W.isDataArrayTexture&&!W.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ie.setTexture2DArray(W,0),Ye=T.TEXTURE_2D_ARRAY}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,W.unpackAlignment);let ut=T.getParameter(T.UNPACK_ROW_LENGTH),Pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ge=T.getParameter(T.UNPACK_SKIP_PIXELS),He=T.getParameter(T.UNPACK_SKIP_ROWS),Ii=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,_t.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xe),T.pixelStorei(T.UNPACK_SKIP_ROWS,ye),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ce),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Ye,I,Ue,Be,vt,V,ce,fe,Ct,at,_t.data):W.isCompressedArrayTexture?T.compressedTexSubImage3D(Ye,I,Ue,Be,vt,V,ce,fe,Ct,_t.data):T.texSubImage3D(Ye,I,Ue,Be,vt,V,ce,fe,Ct,at,_t),T.pixelStorei(T.UNPACK_ROW_LENGTH,ut),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,He),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ii),I===0&&W.generateMipmaps&&T.generateMipmap(Ye),G.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),G.unbindTexture()},this.resetState=function(){P=0,C=0,U=null,G.reset(),Ci.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_c?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Aa?"display-p3":"srgb"}},ol=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ll=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zs,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new R,Un=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sa=class extends Vt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,bs=new R,Or=new R,Fr=new R,Br=new ne,Ss=new ne,Tf=new De,Qa=new R,ws=new R,eo=new R,pp=new ne,ph=new ne,fp=new ne,cl=class extends nt{constructor(e=new sa){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ur(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new Un(i,3,0,!1)),Nr.setAttribute("uv",new Un(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Tf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;to(Qa.set(-.5,-.5,0),Fr,a,Or,n,s),to(ws.set(.5,-.5,0),Fr,a,Or,n,s),to(eo.set(.5,.5,0),Fr,a,Or,n,s),pp.set(0,0),ph.set(1,0),fp.set(1,1);let o=e.ray.intersectTriangle(Qa,ws,eo,!1,bs);if(o===null&&(to(ws.set(-.5,.5,0),Fr,a,Or,n,s),ph.set(0,1),o=e.ray.intersectTriangle(Qa,eo,ws,!1,bs),o===null))return;let l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||t.push({distance:l,point:bs.clone(),uv:Wi.getInterpolation(bs,Qa,ws,eo,pp,ph,fp,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function to(r,e,t,i,n,s){Br.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Ss.x=s*Br.x-n*Br.y,Ss.y=n*Br.x+s*Br.y):Ss.copy(Br),r.copy(e),r.x+=Ss.x,r.y+=Ss.y,r.applyMatrix4(Tf)}var io=new R,mp=new R,hl=class extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let n=this.levels,s;for(s=0;s<n.length&&!(t<n[s].distance);s++);return n.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){io.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(io);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){io.setFromMatrixPosition(e.matrixWorld),mp.setFromMatrixPosition(this.matrixWorld);let i=io.distanceTo(mp)/e.zoom,n,s;for(t[0].object.visible=!0,n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),!(i>=a))break;t[n-1].object.visible=!1,t[n].object.visible=!0}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let n=0,s=i.length;n<s;n++){let a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},gp=new R,vp=new it,_p=new it,Dv=new R,xp=new De,no=new R,fh=new Ht,yp=new De,mh=new In,ul=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(n),e.ray.intersectsSphere(fh)!==!1&&(yp.copy(n).invert(),mh.copy(e.ray).applyMatrix4(yp),this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;vp.fromBufferAttribute(n.attributes.skinIndex,e),_p.fromBufferAttribute(n.attributes.skinWeight,e),gp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=_p.getComponent(s);if(a!==0){let o=vp.getComponent(s);xp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Dv.copy(gp).applyMatrix4(xp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},aa=class extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mi=class extends Lt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mp=new De,Nv=new De,dl=class r{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Nv;Mp.multiplyMatrices(o,t[s]),Mp.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Mi(t,e,e,si,ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new aa),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},mn=class extends tt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new De,bp=new De,ro=[],Sp=new jt,Ov=new De,Ts=new Je,Es=new Ht,pl=class extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mn(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ov)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Sp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Sp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Es.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[s+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,zr),bp.multiplyMatrices(i,zr),Ts.matrixWorld=bp,Ts.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let l=ro[a];l.instanceId=s,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mn(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(n*this.count),n,this.count,mc,ui));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Fv(r,e){return r.z-e.z}function Bv(r,e){return e.z-r.z}var Jh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){let n=this.pool,s=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});let a=n[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=i}reset(){this.list.length=0,this.index=0}},En=new De,gh=new De,zv=new De,kv=new me(1,1,1),wp=new De,vh=new hr,so=new jt,qn=new Ht,As=new R,Tp=new R,Gv=new R,_h=new Jh,Kt=new Je,ao=[];function Hv(r,e,t=0){let i=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){let n=r.count;for(let s=0;s<n;s++)for(let a=0;a<i;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*i);e.needsUpdate=!0}var fl=class extends Je{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,i=2*t,n){super(new ze,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(4*this._maxInstanceCount);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Mi(t,e,e,si,ui);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Mi(t,e,e,Ea,fn);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Mi(t,e,e,si,ui);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new tt(h,l,c);t.setAttribute(s,u)}if(e.getIndex()!==null){let s=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new tt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let n=e.getAttribute(i),s=t.getAttribute(i);if(n.itemSize!==s.itemSize||n.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,En),this.getBoundingBoxAt(s,so).applyMatrix4(En),e.union(so)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,En),this.getBoundingSphereAt(s,qn).applyMatrix4(En),e.union(qn)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let t={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=t):(i=this._drawInfo.length,this._drawInfo.push(t));let n=this._matricesTexture,s=n.image.data;zv.toArray(s,16*i),n.needsUpdate=!0;let a=this._colorsTexture;return a&&(kv.toArray(a.image.data,4*i),a.needsUpdate=!0),i}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");let n={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},s=null,a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),n.vertexCount=t===-1?e.getAttribute("position").count:t,n.vertexStart=s===null?0:s.vertexStart+s.vertexCount;let c=e.getIndex(),h=c!==null;if(h&&(n.indexCount=i===-1?c.count:i,n.indexStart=s===null?0:s.indexStart+s.indexCount),n.indexStart!==-1&&n.indexStart+n.indexCount>this._maxIndexCount||n.vertexStart+n.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._geometryCount;return this._geometryCount++,a.push(n),o.push({start:h?n.indexStart:n.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new jt,sphereInitialized:!1,sphere:new Ht}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,n=i.getIndex()!==null,s=i.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(n&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.vertexCount;for(let p in i.attributes){let f=t.getAttribute(p),v=i.getAttribute(p);Hv(f,v,l);let g=f.itemSize;for(let m=f.count,_=c;m<_;m++){let x=l+m;for(let y=0;y<g;y++)v.setComponent(x,y,0)}v.needsUpdate=!0,v.addUpdateRange(l*g,c*g)}if(n){let p=o.indexStart;for(let f=0;f<a.count;f++)s.setX(p+f,l+a.getX(f));for(let f=a.count,v=o.indexCount;f<v;f++)s.setX(p+f,l);s.needsUpdate=!0,s.addUpdateRange(p,o.indexCount)}let h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[e],d=t.getAttribute("position");return u.count=n?a.count:d.count,this._visibilityChanged=!0,e}deleteInstance(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1||(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0),this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this._bounds[e],n=i.box,s=this.geometry;if(i.boxInitialized===!1){n.makeEmpty();let a=s.index,o=s.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;a&&(u=a.getX(u)),n.expandByPoint(As.fromBufferAttribute(o,u))}i.boxInitialized=!0}return t.copy(n),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this._bounds[e],n=i.sphere,s=this.geometry;if(i.sphereInitialized===!1){n.makeEmpty(),this.getBoundingBoxAt(e,so),so.getCenter(n.center);let a=s.index,o=s.attributes.position,l=this._drawRanges[e],c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let d=h;a&&(d=a.getX(d)),As.fromBufferAttribute(o,d),c=Math.max(c,n.center.distanceToSquared(As))}n.radius=Math.sqrt(c),i.sphereInitialized=!0}return t.copy(n),t}setMatrixAt(e,t){let i=this._drawInfo,n=this._matricesTexture,s=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1||(t.toArray(s,16*e),n.needsUpdate=!0),this}getMatrixAt(e,t){let i=this._drawInfo,n=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(n,16*e)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let i=this._colorsTexture,n=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1||(t.toArray(n,4*e),i.needsUpdate=!0),this}getColorAt(e,t){let i=this._colorsTexture.image.data,n=this._drawInfo;return e>=n.length||n[e].active===!1?null:t.fromArray(i,4*e)}setVisibleAt(e,t){let i=this._drawInfo;return e>=i.length||i[e].active===!1||i[e].visible===t||(i[e].visible=t,this._visibilityChanged=!0),this}getVisibleAt(e){let t=this._drawInfo;return!(e>=t.length||t[e].active===!1)&&t[e].visible}setGeometryIdAt(e,t){let i=this._drawInfo;return e>=i.length||i[e].active===!1||t<0||t>=this._geometryCount?null:(i[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let i=this._drawRanges[e];return t.start=i.start,t.count=i.count,t}raycast(e,t){let i=this._drawInfo,n=this._drawRanges,s=this.matrixWorld,a=this.geometry;Kt.material=this.material,Kt.geometry.index=a.index,Kt.geometry.attributes=a.attributes,Kt.geometry.boundingBox===null&&(Kt.geometry.boundingBox=new jt),Kt.geometry.boundingSphere===null&&(Kt.geometry.boundingSphere=new Ht);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;let c=i[o].geometryIndex,h=n[c];Kt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Kt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Kt.geometry.boundingBox),this.getBoundingSphereAt(c,Kt.geometry.boundingSphere),Kt.raycast(e,ao);for(let u=0,d=ao.length;u<d;u++){let p=ao[u];p.object=this,p.batchId=o,t.push(p)}ao.length=0}Kt.material=null,Kt.geometry.index=null,Kt.geometry.attributes={},Kt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map((t=>({...t}))),this._reservedRanges=e._reservedRanges.map((t=>({...t}))),this._drawInfo=e._drawInfo.map((t=>({...t}))),this._bounds=e._bounds.map((t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()}))),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,n,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,d=this.perObjectFrustumCulled,p=this._indirectTexture,f=p.image.data;d&&(wp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),vh.setFromProjectionMatrix(wp,e.coordinateSystem));let v=0;if(this.sortObjects){gh.copy(this.matrixWorld).invert(),As.setFromMatrixPosition(i.matrixWorld).applyMatrix4(gh),Tp.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(gh);for(let _=0,x=l.length;_<x;_++)if(l[_].visible&&l[_].active){let y=l[_].geometryIndex;this.getMatrixAt(_,En),this.getBoundingSphereAt(y,qn).applyMatrix4(En);let P=!1;if(d&&(P=!vh.intersectsSphere(qn)),!P){let C=Gv.subVectors(qn.center,As).dot(Tp);_h.push(u[y],C,_)}}let g=_h.list,m=this.customSort;m===null?g.sort(s.transparent?Bv:Fv):m.call(this,g,i);for(let _=0,x=g.length;_<x;_++){let y=g[_];c[v]=y.start*o,h[v]=y.count,f[v]=y.index,v++}_h.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){let _=l[g].geometryIndex,x=!1;if(d&&(this.getMatrixAt(g,En),this.getBoundingSphereAt(_,qn).applyMatrix4(En),x=!vh.intersectsSphere(qn)),!x){let y=u[_];c[v]=y.start*o,h[v]=y.count,f[v]=g,v++}}p.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,s,a){this.onBeforeRender(e,null,n,s,a)}},qt=class extends Vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ml=new R,gl=new R,Ep=new De,Rs=new In,oo=new Ht,xh=new R,Ap=new R,qi=class extends nt{constructor(e=new ze,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ml.fromBufferAttribute(t,n-1),gl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ml.distanceTo(gl);e.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(n),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;Ep.copy(n).invert(),Rs.copy(e.ray).applyMatrix4(Ep);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,v=p-1;f<v;f+=c){let g=h.getX(f),m=h.getX(f+1),_=lo(this,e,Rs,l,g,m);_&&t.push(_)}if(this.isLineLoop){let f=h.getX(p-1),v=h.getX(d),g=lo(this,e,Rs,l,f,v);g&&t.push(g)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,v=p-1;f<v;f+=c){let g=lo(this,e,Rs,l,f,f+1);g&&t.push(g)}if(this.isLineLoop){let f=lo(this,e,Rs,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function lo(r,e,t,i,n,s){let a=r.geometry.attributes.position;if(ml.fromBufferAttribute(a,n),gl.fromBufferAttribute(a,s),t.distanceSqToSegment(ml,gl,xh,Ap)>i)return;xh.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(xh);return o<e.near||o>e.far?void 0:{distance:o,point:Ap.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}var Rp=new R,Cp=new R,Ti=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Rp.fromBufferAttribute(t,n),Cp.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},vl=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},oa=class extends Vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new De,Kh=new In,co=new Ht,ho=new R,_l=class extends nt{constructor(e=new ze,t=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(n),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Pp.copy(n).invert(),Kh.copy(e.ray).applyMatrix4(Pp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ho.fromBufferAttribute(h,p),Ip(ho,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ho.fromBufferAttribute(h,u),Ip(ho,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Ip(r,e,t,i,n,s,a){let o=Kh.distanceSqToPoint(r);if(o<t){let l=new R;Kh.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $h=class extends Lt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Nt,this.magFilter=s!==void 0?s:Nt,this.generateMipmaps=!1;let h=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback((function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Qh=class extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}},es=class extends Lt{constructor(e,t,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},eu=class extends es{constructor(e,t,i,n,s,a){super(e,t,i,s,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Si,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tu=class extends es{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,pn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},la=class extends Lt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ne:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,n=[],s=[],a=[],o=new R,l=new De;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(bt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(bt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ts=class extends gi{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends ts{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dd(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var uo=new R,yh=new dd,Mh=new dd,bh=new dd,yl=class extends gi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(uo.subVectors(n[0],n[1]).add(n[0]),o=uo);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(uo.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),yh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,g),Mh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,g),bh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,g)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Mh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),bh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(yh.calc(h),Mh.calc(h),bh.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lp(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function zs(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function ks(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var ca=class extends gi{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ks(e,n.x,s.x,a.x,o.x),ks(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ml=class extends gi{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ks(e,n.x,s.x,a.x,o.x),ks(e,n.y,s.y,a.y,o.y),ks(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends gi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends gi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends gi{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(zs(e,n.x,s.x,a.x),zs(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends gi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(zs(e,n.x,s.x,a.x),zs(e,n.y,s.y,a.y),zs(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Lp(o,l.x,c.x,h.x,u.x),Lp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Sl=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:yl,CubicBezierCurve:ca,CubicBezierCurve3:Ml,EllipseCurve:ts,LineCurve:ha,LineCurve3:bl,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:pa}),wl=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Sl[n.type]().fromJSON(n))}return this}},dr=class extends wl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ha(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new ua(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new ca(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new pa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new ts(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fa=class r extends ze{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=bt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new ne,p=new R,f=new R,v=new R,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=t;_++){let x=i+_*h*n,y=Math.sin(x),P=Math.cos(x);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*P,a.push(u.x,u.y,u.z),d.x=_/t,d.y=C/(e.length-1),o.push(d.x,d.y);let U=l[3*C+0]*y,k=l[3*C+1],M=l[3*C+0]*P;c.push(U,k,M)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let y=x+_*e.length,P=y,C=y+e.length,U=y+e.length+1,k=y+1;s.push(P,C,k),s.push(U,k,C)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},is=class r extends fa{constructor(e=1,t=1,i=4,n=8){let s=new dr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Tl=class r extends ze{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class r extends ze{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],g=i/2,m=0;function _(x){let y=f,P=new ne,C=new R,U=0,k=x===!0?e:t,M=x===!0?1:-1;for(let Z=1;Z<=n;Z++)u.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),f++;let X=f;for(let Z=0;Z<=n;Z++){let j=Z/n*l+o,K=Math.cos(j),q=Math.sin(j);C.x=k*q,C.y=g*M,C.z=k*K,u.push(C.x,C.y,C.z),d.push(0,M,0),P.x=.5*K+.5,P.y=.5*q*M+.5,p.push(P.x,P.y),f++}for(let Z=0;Z<n;Z++){let j=y+Z,K=X+Z;x===!0?h.push(K,K+1,j):h.push(K+1,K,j),U+=3}c.addGroup(m,U,x===!0?1:2),m+=U}(function(){let x=new R,y=new R,P=0,C=(t-e)/i;for(let U=0;U<=s;U++){let k=[],M=U/s,X=M*(t-e)+e;for(let Z=0;Z<=n;Z++){let j=Z/n,K=j*l+o,q=Math.sin(K),$=Math.cos(K);y.x=X*q,y.y=-M*i+g,y.z=X*$,u.push(y.x,y.y,y.z),x.set(q,C,$).normalize(),d.push(x.x,x.y,x.z),p.push(j,1-M),k.push(f++)}v.push(k)}for(let U=0;U<n;U++)for(let k=0;k<s;k++){let M=v[k][U],X=v[k+1][U],Z=v[k+1][U+1],j=v[k][U+1];e>0&&(h.push(M,X,j),P+=3),t>0&&(h.push(X,Z,j),P+=3)}c.addGroup(m,P,0),m+=P})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ns=class r extends Dn{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nn=class r extends ze{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,f,v){let g=v+1,m=[];for(let _=0;_<=g;_++){m[_]=[];let x=d.clone().lerp(f,_/g),y=p.clone().lerp(f,_/g),P=g-_;for(let C=0;C<=P;C++)m[_][C]=C===0&&_===g?x:x.clone().lerp(y,C/P)}for(let _=0;_<g;_++)for(let x=0;x<2*(g-_)-1;x++){let y=Math.floor(x/2);x%2==0?(l(m[_][y+1]),l(m[_+1][y]),l(m[_][y])):(l(m[_][y+1]),l(m[_+1][y+1]),l(m[_+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,v){v<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new R,f=new R,v=new R;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],f),c(t[g+2],v),o(p,f,v,d)})(n),(function(d){let p=new R;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(i),(function(){let d=new R;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let v=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-g)}var p;(function(){let f=new R,v=new R,g=new R,m=new R,_=new ne,x=new ne,y=new ne;for(let P=0,C=0;P<s.length;P+=9,C+=6){f.set(s[P+0],s[P+1],s[P+2]),v.set(s[P+3],s[P+4],s[P+5]),g.set(s[P+6],s[P+7],s[P+8]),_.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),m.copy(f).add(v).add(g).divideScalar(3);let U=u(m);h(_,C+0,f,U),h(x,C+2,v,U),h(y,C+4,g,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],g=a[f+2],m=a[f+4],_=Math.max(v,g,m),x=Math.min(v,g,m);_>.9&&x<.1&&(v<.2&&(a[f+0]+=1),g<.2&&(a[f+2]+=1),m<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},rs=class r extends Nn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},po=new R,fo=new R,Sh=new R,mo=new Wi,El=class extends ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(rr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:g,c:m}=mo;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),mo.getNormal(Sh),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let x=(_+1)%3,y=u[_],P=u[x],C=mo[h[_]],U=mo[h[x]],k=`${y}_${P}`,M=`${P}_${y}`;M in d&&d[M]?(Sh.dot(d[M].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(U.x,U.y,U.z)),d[M]=null):k in d||(d[k]={index0:c[_],index1:c[x],normal:Sh.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:g}=d[f];po.fromBufferAttribute(o,v),fo.fromBufferAttribute(o,g),p.push(po.x,po.y,po.z),p.push(fo.x,fo.y,fo.z)}this.setAttribute("position",new Se(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},dn=class extends dr{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new dr().fromJSON(n))}return this}},Vv=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Up(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(f,v,g,m){let _=[],x,y,P,C,U;for(x=0,y=v.length;x<y;x++)P=v[x]*m,C=x<y-1?v[x+1]*m:f.length,U=Up(f,P,C,m,!1),U===U.next&&(U.steiner=!0),_.push(Kv(U));for(_.sort(Yv),x=0;x<_.length;x++)g=Zv(_[x],g);return g})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<n;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ma(s,a,t,o,l,p,0),a};function Up(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Dp(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Dp(s,r[s],r[s+1],a);return a&&yc(a,a.next)&&(va(a),a=a.next),a}function pr(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!yc(i,i.next)&&yt(i.prev,i,i.next)!==0)i=i.next;else{if(va(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ma(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=iu(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(v){let g,m,_,x,y,P,C,U,k=1;do{for(m=v,v=null,y=null,P=0;m;){for(P++,_=m,C=0,g=0;g<k&&(C++,_=_.nextZ,_);g++);for(U=k;C>0||U>0&&_;)C!==0&&(U===0||!_||m.z<=_.z)?(x=m,m=m.nextZ,C--):(x=_,_=_.nextZ,U--),y?y.nextZ=x:v=x,x.prevZ=y,y=x;m=_}y.nextZ=null,k*=2}while(P>1)})(f)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Xv(r,i,n,s):Wv(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),va(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?ma(r=jv(pr(r),e,t),e,t,i,n,s,2):a===2&&qv(r,e,t,i,n,s):ma(pr(r),e,t,i,n,s,1);break}}function Wv(r){let e=r.prev,t=r,i=r.next;if(yt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Hr(n,o,s,l,a,c,f.x,f.y)&&yt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Xv(r,e,t,i){let n=r.prev,s=r,a=r.next;if(yt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=iu(p,f,e,t,i),_=iu(v,g,e,t,i),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=g&&x!==n&&x!==a&&Hr(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=f&&y.y<=g&&y!==n&&y!==a&&Hr(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=g&&x!==n&&x!==a&&Hr(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=g&&y!==n&&y!==a&&Hr(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jv(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!yc(n,s)&&Ef(n,i,i.next,s)&&ga(n,s)&&ga(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),va(i),va(i.next),i=r=s),i=i.next}while(i!==r);return pr(i)}function qv(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$v(a,o)){let l=Af(a,o);return a=pr(a,a.next),l=pr(l,l.next),ma(a,e,t,i,n,s,0),void ma(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Yv(r,e){return r.x-e.x}function Zv(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Hr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),ga(o,n)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&Jv(a,o)))&&(a=o,v=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=Af(t,r);return pr(i,i.next),pr(t,t.next)}function Jv(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function iu(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Kv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hr(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function $v(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Ef(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(ga(r,e)&&ga(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||yc(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function yc(r,e){return r.x===e.x&&r.y===e.y}function Ef(r,e,t,i){let n=vo(yt(r,e,t)),s=vo(yt(r,e,i)),a=vo(yt(t,i,r)),o=vo(yt(t,i,e));return n!==s&&a!==o||!(n!==0||!go(r,t,e))||!(s!==0||!go(r,i,e))||!(a!==0||!go(t,r,i))||!(o!==0||!go(t,e,i))}function go(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function vo(r){return r>0?1:r<0?-1:0}function ga(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function Af(r,e){let t=new nu(r.i,r.x,r.y),i=new nu(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Dp(r,e,t,i){let n=new nu(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function va(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Xi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Np(e),Op(i,e);let a=e.length;t.forEach(Np);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Op(i,t[l]);let o=Vv(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Np(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Op(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Al=class r extends ze{constructor(e=new dn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Qv,x,y,P,C,U,k=!1;m&&(x=m.getSpacedPoints(h),k=!0,d=!1,y=m.computeFrenetFrames(h,!1),P=new R,C=new R,U=new R),d||(g=0,p=0,f=0,v=0);let M=o.extractPoints(c),X=M.shape,Z=M.holes;if(!Xi.isClockWise(X)){X=X.reverse();for(let L=0,N=Z.length;L<N;L++){let w=Z[L];Xi.isClockWise(w)&&(Z[L]=w.reverse())}}let j=Xi.triangulateShape(X,Z),K=X;for(let L=0,N=Z.length;L<N;L++){let w=Z[L];X=X.concat(w)}function q(L,N,w){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(N,w)}let $=X.length,te=j.length;function de(L,N,w){let F,O,ee,G=L.x-N.x,Q=L.y-N.y,ae=w.x-L.x,ie=w.y-L.y,re=G*G+Q*Q,Ee=G*ie-Q*ae;if(Math.abs(Ee)>Number.EPSILON){let ve=Math.sqrt(re),Ne=Math.sqrt(ae*ae+ie*ie),je=N.x-Q/ve,Ae=N.y+G/ve,Re=((w.x-ie/Ne-je)*ie-(w.y+ae/Ne-Ae)*ae)/(G*ie-Q*ae);F=je+G*Re-L.x,O=Ae+Q*Re-L.y;let Le=F*F+O*O;if(Le<=2)return new ne(F,O);ee=Math.sqrt(Le/2)}else{let ve=!1;G>Number.EPSILON?ae>Number.EPSILON&&(ve=!0):G<-Number.EPSILON?ae<-Number.EPSILON&&(ve=!0):Math.sign(Q)===Math.sign(ie)&&(ve=!0),ve?(F=-Q,O=G,ee=Math.sqrt(re)):(F=G,O=Q,ee=Math.sqrt(re/2))}return new ne(F/ee,O/ee)}let pe=[];for(let L=0,N=K.length,w=N-1,F=L+1;L<N;L++,w++,F++)w===N&&(w=0),F===N&&(F=0),pe[L]=de(K[L],K[w],K[F]);let we=[],Ie,se=pe.concat();for(let L=0,N=Z.length;L<N;L++){let w=Z[L];Ie=[];for(let F=0,O=w.length,ee=O-1,G=F+1;F<O;F++,ee++,G++)ee===O&&(ee=0),G===O&&(G=0),Ie[F]=de(w[F],w[ee],w[G]);we.push(Ie),se=se.concat(Ie)}for(let L=0;L<g;L++){let N=L/g,w=p*Math.cos(N*Math.PI/2),F=f*Math.sin(N*Math.PI/2)+v;for(let O=0,ee=K.length;O<ee;O++){let G=q(K[O],pe[O],F);Me(G.x,G.y,-w)}for(let O=0,ee=Z.length;O<ee;O++){let G=Z[O];Ie=we[O];for(let Q=0,ae=G.length;Q<ae;Q++){let ie=q(G[Q],Ie[Q],F);Me(ie.x,ie.y,-w)}}}let he=f+v;for(let L=0;L<$;L++){let N=d?q(X[L],se[L],he):X[L];k?(C.copy(y.normals[0]).multiplyScalar(N.x),P.copy(y.binormals[0]).multiplyScalar(N.y),U.copy(x[0]).add(C).add(P),Me(U.x,U.y,U.z)):Me(N.x,N.y,0)}for(let L=1;L<=h;L++)for(let N=0;N<$;N++){let w=d?q(X[N],se[N],he):X[N];k?(C.copy(y.normals[L]).multiplyScalar(w.x),P.copy(y.binormals[L]).multiplyScalar(w.y),U.copy(x[L]).add(C).add(P),Me(U.x,U.y,U.z)):Me(w.x,w.y,u/h*L)}for(let L=g-1;L>=0;L--){let N=L/g,w=p*Math.cos(N*Math.PI/2),F=f*Math.sin(N*Math.PI/2)+v;for(let O=0,ee=K.length;O<ee;O++){let G=q(K[O],pe[O],F);Me(G.x,G.y,u+w)}for(let O=0,ee=Z.length;O<ee;O++){let G=Z[O];Ie=we[O];for(let Q=0,ae=G.length;Q<ae;Q++){let ie=q(G[Q],Ie[Q],F);k?Me(ie.x,ie.y+x[h-1].y,x[h-1].x+w):Me(ie.x,ie.y,u+w)}}}function Te(L,N){let w=L.length;for(;--w>=0;){let F=w,O=w-1;O<0&&(O=L.length-1);for(let ee=0,G=h+2*g;ee<G;ee++){let Q=$*ee,ae=$*(ee+1);S(N+F+Q,N+O+Q,N+O+ae,N+F+ae)}}}function Me(L,N,w){l.push(L),l.push(N),l.push(w)}function D(L,N,w){z(L),z(N),z(w);let F=n.length/3,O=_.generateTopUV(i,n,F-3,F-2,F-1);Y(O[0]),Y(O[1]),Y(O[2])}function S(L,N,w,F){z(L),z(N),z(F),z(N),z(w),z(F);let O=n.length/3,ee=_.generateSideWallUV(i,n,O-6,O-3,O-2,O-1);Y(ee[0]),Y(ee[1]),Y(ee[3]),Y(ee[1]),Y(ee[2]),Y(ee[3])}function z(L){n.push(l[3*L+0]),n.push(l[3*L+1]),n.push(l[3*L+2])}function Y(L){s.push(L.x),s.push(L.y)}(function(){let L=n.length/3;if(d){let N=0,w=$*N;for(let F=0;F<te;F++){let O=j[F];D(O[2]+w,O[1]+w,O[0]+w)}N=h+2*g,w=$*N;for(let F=0;F<te;F++){let O=j[F];D(O[0]+w,O[1]+w,O[2]+w)}}else{for(let N=0;N<te;N++){let w=j[N];D(w[2],w[1],w[0])}for(let N=0;N<te;N++){let w=j[N];D(w[0]+$*h,w[1]+$*h,w[2]+$*h)}}i.addGroup(L,n.length/3-L,0)})(),(function(){let L=n.length/3,N=0;Te(K,N),N+=K.length;for(let w=0,F=Z.length;w<F;w++){let O=Z[w];Te(O,N),N+=O.length}i.addGroup(L,n.length/3-L,1)})()}this.setAttribute("position",new Se(n,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Sl[n.type]().fromJSON(n)),new r(i,e.options)}},Qv={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],v=e[3*s],g=e[3*s+1],m=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-f),new ne(v,1-m)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-f),new ne(g,1-m)]}},ss=class r extends Nn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fr=class r extends Nn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Rl=class r extends ze{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new R,f=new ne;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){let m=s+g/i*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<n;v++){let g=v*(i+1);for(let m=0;m<i;m++){let _=m+g,x=_,y=_+i+1,P=_+i+2,C=_+1;o.push(x,y,C),o.push(y,P,C)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Cl=class r extends ze{constructor(e=new dn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Xi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){let _=f[g];Xi.isClockWise(_)===!0&&(f[g]=_.reverse())}let v=Xi.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){let _=f[g];p=p.concat(_)}for(let g=0,m=p.length;g<m;g++){let _=p[g];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){let _=v[g],x=_[0]+u,y=_[1]+u,P=_[2]+u;i.push(x,y,P),l+=3}}this.setIndex(i),this.setAttribute("position",new Se(n,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},mr=class r extends ze{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,p=[],f=[],v=[],g=[];for(let m=0;m<=i;m++){let _=[],x=m/i,y=0;m===0&&a===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let C=P/t;u.x=-e*Math.cos(n+C*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(n+C*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(C+y,1-x),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let x=h[m][_+1],y=h[m][_],P=h[m+1][_],C=h[m+1][_+1];(m!==0||a>0)&&p.push(x,y,C),(m!==i-1||l<Math.PI)&&p.push(y,P,C)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Pl=class r extends Nn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},as=class r extends ze{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let v=f/n*s,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let v=(n+1)*p+f-1,g=(n+1)*(p-1)+f-1,m=(n+1)*(p-1)+f,_=(n+1)*p+f;a.push(v,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Il=class r extends ze{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new R,d=new R,p=new R,f=new R,v=new R,g=new R,m=new R;for(let x=0;x<=i;++x){let y=x/i*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,f),g.subVectors(f,p),m.addVectors(f,p),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let P=0;P<=n;++P){let C=P/n*Math.PI*2,U=-t*Math.cos(C),k=t*Math.sin(C);u.x=p.x+(U*m.x+k*v.x),u.y=p.y+(U*m.y+k*v.y),u.z=p.z+(U*m.z+k*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(P/n)}}for(let x=1;x<=i;x++)for(let y=1;y<=n;y++){let P=(n+1)*(x-1)+(y-1),C=(n+1)*x+(y-1),U=(n+1)*x+y,k=(n+1)*(x-1)+y;o.push(P,C,k),o.push(C,U,k)}function _(x,y,P,C,U){let k=Math.cos(x),M=Math.sin(x),X=P/y*x,Z=Math.cos(X);U.x=C*(2+Z)*.5*k,U.y=C*(2+Z)*M*.5,U.z=C*Math.sin(X)*.5}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ll=class r extends ze{constructor(e=new da(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ne,h=new R,u=[],d=[],p=[],f=[];function v(g){h=e.getPointAt(g/t,h);let m=a.normals[g],_=a.binormals[g];for(let x=0;x<=n;x++){let y=x/n*Math.PI*2,P=Math.sin(y),C=-Math.cos(y);l.x=C*m.x+P*_.x,l.y=C*m.y+P*_.y,l.z=C*m.z+P*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)v(g);v(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let m=0;m<=n;m++)c.x=g/t,c.y=m/n,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let m=1;m<=n;m++){let _=(n+1)*(g-1)+(m-1),x=(n+1)*g+(m-1),y=(n+1)*g+m,P=(n+1)*(g-1)+m;f.push(_,x,P),f.push(x,y,P)}})()})(),this.setIndex(f),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ul=class extends ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let g=o.getX(p+v),m=o.getX(p+(v+1)%3);n.fromBufferAttribute(a,g),s.fromBufferAttribute(a,m),Fp(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Fp(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fp(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Bp=Object.freeze({__proto__:null,BoxGeometry:Bi,CapsuleGeometry:is,CircleGeometry:Tl,ConeGeometry:ns,CylinderGeometry:Dn,DodecahedronGeometry:rs,EdgesGeometry:El,ExtrudeGeometry:Al,IcosahedronGeometry:ss,LatheGeometry:fa,OctahedronGeometry:fr,PlaneGeometry:$r,PolyhedronGeometry:Nn,RingGeometry:Rl,ShapeGeometry:Cl,SphereGeometry:mr,TetrahedronGeometry:Pl,TorusGeometry:as,TorusKnotGeometry:Il,TubeGeometry:Ll,WireframeGeometry:Ul}),Dl=class extends Vt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},os=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yi=class extends Vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nl=class extends Yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ol=class extends Vt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fl=class extends Vt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bl=class extends Vt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},zl=class extends Vt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kl=class extends Vt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gl=class extends qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function nr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Rf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Cf(r){let e=r.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort((function(i,n){return r[i]-r[n]})),t}function ru(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function pd(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var e_={convertArray:nr,isTypedArray:Rf,getKeyframeOrder:Cf,sortedArray:ru,flattenJSON:pd,subclip:function(r,e,t,i,n=30){let s=r.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*n;if(!(f<t||f>=i)){u.push(c.times[p]);for(let v=0;v<h;++v)d.push(c.values[p*h+v])}}u.length!==0&&(c.times=nr(u,c.times.constructor),c.values=nr(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,i=30){i<=0&&(i=30);let n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find((function(m){return m.name===o.name&&m.ValueTypeName===l}));if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=o.times.length-1,v;if(s<=o.times[0]){let m=h,_=u-h;v=o.values.slice(m,_)}else if(s>=o.times[f]){let m=f*u+h,_=m+u-h;v=o.values.slice(m,_)}else{let m=o.createInterpolant(),_=h,x=u-h;m.evaluate(s),v=m.resultBuffer.slice(_,x)}l==="quaternion"&&new Gt().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let m=0;m<g;++m){let _=m*p+d;if(l==="quaternion")Gt.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{let x=p-2*d;for(let y=0;y<x;++y)c.values[_+y]-=v[y]}}}return r.blendMode=cd,r}},gr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends gr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ir:s=e,o=2*t-i;break;case Xs:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ir:a=e,l=2*i-t;break;case Xs:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),v=f*f,g=v*f,m=-d*g+2*d*v-d*f,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*f+1,x=(-1-p)*g+(1.5+p)*v+.5*f,y=p*g-p*v;for(let P=0;P!==o;++P)s[P]=m*a[h+P]+_*a[c+P]+x*a[l+P]+y*a[u+P];return s}},_a=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Vl=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Rf(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===To,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};mi.prototype.TimeBufferType=Float32Array,mi.prototype.ValueBufferType=Float32Array,mi.prototype.DefaultInterpolation=tl;var an=class extends mi{constructor(e,t,i){super(e,t,i)}};an.prototype.ValueTypeName="bool",an.prototype.ValueBufferType=Array,an.prototype.DefaultInterpolation=Ws,an.prototype.InterpolantFactoryMethodLinear=void 0,an.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends mi{};xa.prototype.ValueTypeName="color";var vr=class extends mi{};vr.prototype.ValueTypeName="number";var Wl=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gt.slerpFlat(s,0,a,c-o,a,c,l);return s}},_r=class extends mi{InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion",_r.prototype.InterpolantFactoryMethodSmooth=void 0;var on=class extends mi{constructor(e,t,i){super(e,t,i)}};on.prototype.ValueTypeName="string",on.prototype.ValueBufferType=Array,on.prototype.DefaultInterpolation=Ws,on.prototype.InterpolantFactoryMethodLinear=void 0,on.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends mi{};xr.prototype.ValueTypeName="vector";var yr=class{constructor(e="",t=-1,i=[],n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(t_(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(mi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Cf(l);l=ru(l,1,h),c=ru(c,1,h),n||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new vr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,u,d,p,f){if(d.length!==0){let v=[],g=[];pd(d,v,g,p),v.length!==0&&f.push(new h(u,v,g))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let v=[],g=[];for(let m=0;m!==u[p].morphTargets.length;++m){let _=u[p];v.push(_.time),g.push(_.morphTarget===f?1:0)}n.push(new vr(".morphTargetInfluence["+f+"]",v,g))}l=d.length*a}else{let d=".bones["+t[h].name+"]";i(xr,d+".position",u,"pos",n),i(_r,d+".quaternion",u,"rot",n),i(xr,d+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function t_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return xa;case"quaternion":return _r;case"bool":case"boolean":return an;case"string":return on}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],i=[];pd(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var hn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ya=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Pf=new ya,ei=class{constructor(e){this.manager=e!==void 0?e:Pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var nn={},su=class extends Error{constructor(e,t){super(e),this.response=t}},zi=class extends ei{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(nn[e]!==void 0)return void nn[e].push({onLoad:t,onProgress:i,onError:n});nn[e]=[],nn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=nn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,v=0,g=new ReadableStream({start(m){(function _(){u.read().then((({done:x,value:y})=>{if(x)m.close();else{v+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:f,loaded:v,total:p});for(let C=0,U=h.length;C<U;C++){let k=h[C];k.onProgress&&k.onProgress(P)}m.enqueue(y),_()}}),(x=>{m.error(x)}))})()}});return new Response(g)}throw new su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{hn.add(e,c);let h=nn[e];delete nn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete nn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},au=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new zi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}}),i,n)}parse(e){let t=[];for(let i=0;i<e.length;i++){let n=yr.parse(e[i]);t.push(n)}return t}},ou=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=[],o=new es,l=new zi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],(function(d){let p=s.parse(d,!0);a[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=Nt),o.image=a,o.format=p.format,o.needsUpdate=!0,t&&t(o))}),i,n)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,(function(u){let d=s.parse(u,!0);if(d.isCubemap){let p=d.mipmaps.length/d.mipmapCount;for(let f=0;f<p;f++){a[f]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+v]),a[f].format=d.format,a[f].width=d.width,a[f].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Nt),o.format=d.format,o.needsUpdate=!0,t&&t(o)}),i,n);return o}},Mr=class extends ei{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Ks("img");function l(){h(),hn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},lu=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=new cr;s.colorSpace=hi;let a=new Mr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],(function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))}),void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}},cu=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Mi,o=new zi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,(function(l){let c;try{c=s.parse(l)}catch(h){if(n===void 0)return void console.error(h);n(h)}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Si,a.wrapT=c.wrapT!==void 0?c.wrapT:Si,a.magFilter=c.magFilter!==void 0?c.magFilter:Nt,a.minFilter=c.minFilter!==void 0?c.minFilter:Nt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ln),c.mipmapCount===1&&(a.minFilter=Nt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)}),i,n),a}},hu=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=new Lt,a=new Mr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),i,n),s}},Zi=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Xl=class extends Zi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wh=new De,zp=new R,kp=new R,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uu=class extends Ma{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*qr*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},jl=class extends Zi{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gp=new De,Cs=new R,Th=new R,du=class extends Ma{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),Th.copy(i.position),Th.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Th),i.updateMatrixWorld(),n.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Gp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gp)}},ls=class extends Zi{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new du}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pu=class extends Ma{constructor(){super(new Ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ql=class extends Zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new pu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yl=class extends Zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Zl=class extends Zi{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Jl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],i*n*1.092548),t.addScaledVector(a[5],n*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],i*s*1.092548),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*n),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*i),t.addScaledVector(a[4],.858086*i*n),t.addScaledVector(a[5],.858086*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+3*n);return this}toArray(e=[],t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+3*n);return e}static getBasisAt(e,t){let i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}},Kl=class extends Zi{constructor(e=new Jl,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},$l=class r extends ei{constructor(e){super(e),this.textures={}}load(e,t,i,n){let s=this,a=new zi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,(function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}}),i,n)}parse(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let n=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(n.dispersion=e.dispersion),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(n.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(n.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(n.depthFunc=e.depthFunc),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(n.blendSrc=e.blendSrc),e.blendDst!==void 0&&(n.blendDst=e.blendDst),e.blendEquation!==void 0&&(n.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(n.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(n.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(n.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&n.blendColor!==void 0&&n.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(n.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==void 0&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(n.uniforms[s]={},a.type){case"t":n.uniforms[s].value=i(a.value);break;case"c":n.uniforms[s].value=new me().setHex(a.value);break;case"v2":n.uniforms[s].value=new ne().fromArray(a.value);break;case"v3":n.uniforms[s].value=new R().fromArray(a.value);break;case"v4":n.uniforms[s].value=new it().fromArray(a.value);break;case"m3":n.uniforms[s].value=new We().fromArray(a.value);break;case"m4":n.uniforms[s].value=new De().fromArray(a.value);break;default:n.uniforms[s].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)n.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(n.lights=e.lights),e.clipping!==void 0&&(n.clipping=e.clipping),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new ne().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapRotation!==void 0&&n.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(n.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return r.createMaterialFromType(e)}static createMaterialFromType(e){return new{ShadowMaterial:Dl,SpriteMaterial:sa,RawShaderMaterial:os,ShaderMaterial:Rt,PointsMaterial:oa,MeshPhysicalMaterial:Nl,MeshStandardMaterial:Yi,MeshPhongMaterial:Ol,MeshToonMaterial:Fl,MeshNormalMaterial:Bl,MeshLambertMaterial:zl,MeshDepthMaterial:na,MeshDistanceMaterial:ra,MeshBasicMaterial:Qt,MeshMatcapMaterial:kl,LineDashedMaterial:Gl,LineBasicMaterial:qt,Material:Vt}[e]}},ba=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ql=class extends ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ec=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new zi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,(function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}}),i,n)}parse(e){let t={},i={};function n(u,d){if(t[d]!==void 0)return t[d];let p=u.interleavedBuffers[d],f=(function(m,_){if(i[_]!==void 0)return i[_];let x=m.arrayBuffers,y=x[_],P=new Uint32Array(y).buffer;return i[_]=P,P})(u,p.buffer),v=Gr(p.type,f),g=new ur(v,p.stride);return g.uuid=p.uuid,t[d]=g,g}let s=e.isInstancedBufferGeometry?new Ql:new ze,a=e.data.index;if(a!==void 0){let u=Gr(a.type,a.array);s.setIndex(new tt(u,1))}let o=e.data.attributes;for(let u in o){let d=o[u],p;if(d.isInterleavedBufferAttribute){let f=n(e.data,d.data);p=new Un(f,d.itemSize,d.offset,d.normalized)}else{let f=Gr(d.type,d.array);p=new(d.isInstancedBufferAttribute?mn:tt)(f,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),s.setAttribute(u,p)}let l=e.data.morphAttributes;if(l)for(let u in l){let d=l[u],p=[];for(let f=0,v=d.length;f<v;f++){let g=d[f],m;if(g.isInterleavedBufferAttribute){let _=n(e.data,g.data);m=new Un(_,g.itemSize,g.offset,g.normalized)}else{let _=Gr(g.type,g.array);m=new tt(_,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[u]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let u=0,d=c.length;u!==d;++u){let p=c[u];s.addGroup(p.start,p.count,p.materialIndex)}let h=e.data.boundingSphere;if(h!==void 0){let u=new R;h.center!==void 0&&u.fromArray(h.center),s.boundingSphere=new Ht(u,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},fu=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=this.path===""?ba.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new zi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(l){let c=null;try{c=JSON.parse(l)}catch(u){return n!==void 0&&n(u),void console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message)}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry")return n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),void console.error("THREE.ObjectLoader: Can't load "+e);s.parse(c,t)}),i,n)}async loadAsync(e,t){let i=this.path===""?ba.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let n=new zi(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);let s=await n.loadAsync(e,t),a=JSON.parse(s),o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await this.parseAsync(a)}parse(e,t){let i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,(function(){t!==void 0&&t(c)})),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){let t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){let s=new dn().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){let i={},n={};if(t.traverse((function(s){s.isBone&&(n[s.uuid]=s)})),e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=new dl().fromJSON(e[s],n);i[o.uuid]=o}return i}parseGeometries(e,t){let i={};if(e!==void 0){let n=new ec;for(let s=0,a=e.length;s<a;s++){let o,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in Bp?o=Bp[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){let i={},n={};if(e!==void 0){let s=new $l;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let n=e[i],s=yr.parse(n);t[s.uuid]=s}return t}parseImages(e,t){let i=this,n={},s;function a(o){if(typeof o=="string"){let l=o;return(function(c){return i.manager.itemStart(c),s.load(c,(function(){i.manager.itemEnd(c)}),void 0,(function(){i.manager.itemError(c),i.manager.itemEnd(c)}))})(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}return o.data?{data:Gr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){let o=new ya(t);s=new Mr(o),s.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){let h=e[l],u=h.url;if(Array.isArray(u)){let d=[];for(let p=0,f=u.length;p<f;p++){let v=a(u[p]);v!==null&&(v instanceof HTMLImageElement?d.push(v):d.push(new Mi(v.data,v.width,v.height)))}n[h.uuid]=new cn(d)}else{let d=a(h.url);n[h.uuid]=new cn(d)}}}return n}async parseImagesAsync(e){let t=this,i={},n;async function s(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}return a.data?{data:Gr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new Mr(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=await s(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new Mi(f.data,f.width,f.height)))}i[l.uuid]=new cn(h)}else{let h=await s(l.url);i[l.uuid]=new cn(h)}}}return i}parseTextures(e,t){function i(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}let n={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new cr,c.length===6&&(h.needsUpdate=!0)):(h=c&&c.data?new Mi:new Lt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,i_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Hp),h.wrapT=i(o.wrap[1],Hp)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Vp)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Vp)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,s){let a,o,l;function c(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function h(d){if(d!==void 0){if(Array.isArray(d)){let p=[];for(let f=0,v=d.length;f<v;f++){let g=d[f];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),p.push(i[g])}return p}return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),i[d]}}function u(d){return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),n[d]}switch(e.type){case"Scene":a=new Qr,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new me(e.background):a.background=u(e.background)),e.environment!==void 0&&(a.environment=u(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new ll(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ol(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ln(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Yl(e.color,e.intensity);break;case"DirectionalLight":a=new ql(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new ls(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Zl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new jl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Xl(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Kl().fromJSON(e);break;case"SkinnedMesh":o=c(e.geometry),l=h(e.material),a=new ul(o,l),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":o=c(e.geometry),l=h(e.material),a=new Je(o,l);break;case"InstancedMesh":o=c(e.geometry),l=h(e.material);let d=e.count,p=e.instanceMatrix,f=e.instanceColor;a=new pl(o,l,d),a.instanceMatrix=new mn(new Float32Array(p.array),16),f!==void 0&&(a.instanceColor=new mn(new Float32Array(f.array),f.itemSize));break;case"BatchedMesh":o=c(e.geometry),l=h(e.material),a=new fl(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,l),a.geometry=o,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map((v=>{let g=new jt;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);let m=new Ht;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}})),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=u(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=u(e.colorsTexture.uuid));break;case"LOD":a=new hl;break;case"Line":a=new qi(c(e.geometry),h(e.material));break;case"LineLoop":a=new vl(c(e.geometry),h(e.material));break;case"LineSegments":a=new Ti(c(e.geometry),h(e.material));break;case"PointCloud":case"Points":a=new _l(c(e.geometry),h(e.material));break;case"Sprite":a=new cl(h(e.material));break;case"Group":a=new Cn;break;case"Bone":a=new aa;break;default:a=new nt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let p=0;p<d.length;p++)a.add(this.parseObject(d[p],t,i,n,s))}if(e.animations!==void 0){let d=e.animations;for(let p=0;p<d.length;p++){let f=d[p];a.animations.push(s[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let p=0;p<d.length;p++){let f=d[p],v=a.getObjectByProperty("uuid",f.object);v!==void 0&&a.addLevel(v,f.distance,f.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse((function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let n=t[i.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}}))}bindLightTargets(e){e.traverse((function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,n=e.getObjectByProperty("uuid",i);t.target=n!==void 0?n:new nt}}))}},i_={UVMapping:uc,CubeReflectionMapping:pn,CubeRefractionMapping:Pn,EquirectangularReflectionMapping:Gs,EquirectangularRefractionMapping:Hs,CubeUVReflectionMapping:hs},Hp={RepeatWrapping:sr,ClampToEdgeWrapping:Si,MirroredRepeatWrapping:Vs},Vp={NearestFilter:$t,NearestMipmapNearestFilter:Qu,NearestMipmapLinearFilter:kr,LinearFilter:Nt,LinearMipmapNearestFilter:Is,LinearMipmapLinearFilter:ln},mu=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hn.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{n&&n(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return hn.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){n&&n(c),hn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));hn.add(e,l),s.manager.itemStart(e)}},_o,Sa=class{static getContext(){return _o===void 0&&(_o=new(window.AudioContext||window.webkitAudioContext)),_o}static setContext(e){_o=e}},gu=class extends ei{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new zi(this.manager);function o(l){n?n(l):console.error(l),s.manager.itemError(e)}a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(l){try{let c=l.slice(0);Sa.getContext().decodeAudioData(c,(function(h){t(h)})).catch(o)}catch(c){o(c)}}),i,n)}},Wp=new De,Xp=new De,Yn=new De,vu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Dt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Dt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Yn.copy(e.projectionMatrix);let i=t.eyeSep/2,n=i*t.near/t.focus,s=t.near*Math.tan(rr*t.fov*.5)/t.zoom,a,o;Xp.elements[12]=-i,Wp.elements[12]=i,a=-s*t.aspect+n,o=s*t.aspect+n,Yn.elements[0]=2*t.near/(o-a),Yn.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(Yn),a=-s*t.aspect-n,o=s*t.aspect-n,Yn.elements[0]=2*t.near/(o-a),Yn.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(Yn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Xp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Wp)}},cs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jp(){return performance.now()}var Zn=new R,qp=new Gt,n_=new R,Jn=new R,_u=class extends nt{constructor(){super(),this.type="AudioListener",this.context=Sa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new cs}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zn,qp,n_),Jn.set(0,0,-1).applyQuaternion(qp),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Zn.x,n),t.positionY.linearRampToValueAtTime(Zn.y,n),t.positionZ.linearRampToValueAtTime(Zn.z,n),t.forwardX.linearRampToValueAtTime(Jn.x,n),t.forwardY.linearRampToValueAtTime(Jn.y,n),t.forwardZ.linearRampToValueAtTime(Jn.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(Zn.x,Zn.y,Zn.z),t.setOrientation(Jn.x,Jn.y,Jn.z,i.x,i.y,i.z)}},tc=class extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(e=0){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Kn=new R,Yp=new Gt,r_=new R,$n=new R,xu=class extends tc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Kn,Yp,r_),$n.set(0,0,1).applyQuaternion(Yp);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Kn.x,i),t.positionY.linearRampToValueAtTime(Kn.y,i),t.positionZ.linearRampToValueAtTime(Kn.z,i),t.orientationX.linearRampToValueAtTime($n.x,i),t.orientationY.linearRampToValueAtTime($n.y,i),t.orientationZ.linearRampToValueAtTime($n.z,i)}else t.setPosition(Kn.x,Kn.y,Kn.z),t.setOrientation($n.x,$n.y,$n.z)}},yu=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},ic=class{constructor(e,t,i){let n,s,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Gt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Gt.multiplyQuaternionsFlat(e,a,e,t,e,i),Gt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},fd="\\[\\]\\.:\\/",s_=new RegExp("["+fd+"]","g"),Eh="[^"+fd+"]",a_="[^"+fd.replace("\\.","")+"]",o_=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Eh)+/(WCOD+)?/.source.replace("WCOD",a_)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh)+"$"),l_=["material","materials","bones","map"],ot=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(e){let t=o_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);l_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(r,e,t){let i=t||ot.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=fi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],p=d.uuid,f=t[p];if(f===void 0){f=l++,t[p]=f,e.push(d);for(let v=0,g=a;v!==g;++v)s[v].push(new ot(d,i[v],n[v]))}else if(f<c){o=e[f];let v=--c,g=e[v];t[g.uuid]=f,e[f]=g,t[p]=v,e[v]=d;for(let m=0,_=a;m!==_;++m){let x=s[m],y=x[v],P=x[f];x[f]=y,P===void 0&&(P=new ot(d,i[m],n[m])),x[v]=P}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let p=0,f=n;p!==f;++p){let v=i[p],g=v[u],m=v[h];v[h]=g,v[u]=m}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o].uuid,h=t[c];if(h!==void 0)if(delete t[c],h<s){let u=--s,d=e[u],p=--a,f=e[p];t[d.uuid]=h,e[h]=d,t[f.uuid]=u,e[u]=f,e.pop();for(let v=0,g=n;v!==g;++v){let m=i[v],_=m[u],x=m[p];m[h]=_,m[u]=x,m.pop()}}else{let u=--a,d=e[u];u>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,f=n;p!==f;++p){let v=i[p];v[h]=v[u],v.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,n=i[e],s=this._bindings;if(n!==void 0)return s[n];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=s.length,i[e]=n,a.push(e),o.push(t),s.push(u);for(let d=h,p=l.length;d!==p;++d){let f=l[d];u[d]=new ot(f,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let n=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o];t[e[o]]=i,a[i]=l,a.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}},nc=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:tr,endingEnd:tr};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===cd)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===2202;if(e===0)return s===-1?n:a&&(1&s)==1?t-n:n;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else{if(!(n<0)){this.time=n;break e}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(1&s)==1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=ir,n.endingEnd=ir):(n.endingStart=e?this.zeroSlopeAtStart?ir:tr:Xs,n.endingEnd=t?this.zeroSlopeAtEnd?ir:tr:Xs)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},c_=new Float32Array(1),bu=class extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=n[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;f=new ic(ot.create(i,p,v),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new _a(new Float32Array(2),new Float32Array(2),1,c_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,a=typeof e=="string"?yr.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(i=a!==null?a.blendMode:uf),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new nc(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?yr.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let s in i){let a=i[s].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let n=this._bindingsByRootAndName[t];if(n!==void 0)for(let s in n){let a=n[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},Su=class r{constructor(e){this.value=e}clone(){return new r(this.value.clone===void 0?this.value:this.value.clone())}},h_=0,wu=class extends wi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.usage=Zs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){let s=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}},Tu=class extends ur{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Eu=class{constructor(e,t,i,n,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Zp=new De,Au=class{constructor(e,t,i=0,n=1/0){this.ray=new In(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zp),this}intersectObject(e,t=!0,i=[]){return Ru(e,this,i,t),i.sort(Jp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Ru(e[n],this,i,t);return i.sort(Jp),i}};function Jp(r,e){return r.distance-e.distance}function Ru(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Ru(s[a],e,t,!0)}}var Cu=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Pu=class{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},Iu=class r{constructor(e,t,i,n){r.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}},Kp=new ne,Lu=class{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$p=new R,xo=new R,Uu=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){$p.subVectors(e,this.start),xo.subVectors(this.end,this.start);let i=xo.dot(xo),n=xo.dot($p)/i;return t&&(n=bt(n,0,1)),n}closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Qp=new R,Du=class extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new ze,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Se(n,3));let s=new qt({fog:!1,toneMapped:!1});this.cone=new Ti(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Qp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Qp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},An=new R,yo=new De,Ah=new De,Nu=class extends Ti{constructor(e){let t=If(e),i=new ze,n=[],s=[],a=new me(0,0,1),o=new me(0,1,0);for(let l=0;l<t.length;l++){let c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new Se(n,3)),i.setAttribute("color",new Se(s,3)),super(i,new qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,n=i.getAttribute("position");Ah.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){let o=t[s];o.parent&&o.parent.isBone&&(yo.multiplyMatrices(Ah,o.matrixWorld),An.setFromMatrixPosition(yo),n.setXYZ(a,An.x,An.y,An.z),yo.multiplyMatrices(Ah,o.parent.matrixWorld),An.setFromMatrixPosition(yo),n.setXYZ(a+1,An.x,An.y,An.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function If(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,If(r.children[t]));return e}var Ou=class extends Je{constructor(e,t,i){super(new mr(t,4,2),new Qt({wireframe:!0,fog:!1,toneMapped:!1})),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},u_=new R,ef=new me,tf=new me,Fu=class extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let n=new fr(t);n.rotateY(.5*Math.PI),this.material=new Qt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=n.getAttribute("position"),a=new Float32Array(3*s.count);n.setAttribute("color",new tt(a,3)),this.add(new Je(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");ef.copy(this.light.color),tf.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){let s=i<n/2?ef:tf;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(u_.setFromMatrixPosition(this.light.matrixWorld).negate())}},Bu=class extends Ti{constructor(e=10,t=10,i=4473924,n=8947848){i=new me(i),n=new me(n);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let f=u===s?i:n;f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3}let h=new ze;h.setAttribute("position",new Se(l,3)),h.setAttribute("color",new Se(c,3)),super(h,new qt({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},zu=class extends Ti{constructor(e=10,t=16,i=8,n=64,s=4473924,a=8947848){s=new me(s),a=new me(a);let o=[],l=[];if(t>1)for(let h=0;h<t;h++){let u=h/t*(2*Math.PI),d=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,p);let f=1&h?s:a;l.push(f.r,f.g,f.b),l.push(f.r,f.g,f.b)}for(let h=0;h<i;h++){let u=1&h?s:a,d=e-e/i*h;for(let p=0;p<n;p++){let f=p/n*(2*Math.PI),v=Math.sin(f)*d,g=Math.cos(f)*d;o.push(v,0,g),l.push(u.r,u.g,u.b),f=(p+1)/n*(2*Math.PI),v=Math.sin(f)*d,g=Math.cos(f)*d,o.push(v,0,g),l.push(u.r,u.g,u.b)}}let c=new ze;c.setAttribute("position",new Se(o,3)),c.setAttribute("color",new Se(l,3)),super(c,new qt({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},nf=new R,Mo=new R,rf=new R,ku=class extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new ze;n.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new qt({fog:!1,toneMapped:!1});this.lightPlane=new qi(n,s),this.add(this.lightPlane),n=new ze,n.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new qi(n,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),nf.setFromMatrixPosition(this.light.matrixWorld),Mo.setFromMatrixPosition(this.light.target.matrixWorld),rf.subVectors(Mo,nf),this.lightPlane.lookAt(Mo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Mo),this.targetLine.scale.z=rf.length()}},bo=new R,Mt=new Kr,Gu=class extends Ti{constructor(e){let t=new ze,i=new qt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],a={};function o(f,v){l(f),l(v)}function l(f){n.push(0,0,0),s.push(0,0,0),a[f]===void 0&&(a[f]=[]),a[f].push(n.length/3-1)}o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4"),t.setAttribute("position",new Se(n,3)),t.setAttribute("color",new Se(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new me(16755200),h=new me(16711680),u=new me(43775),d=new me(16777215),p=new me(3355443);this.setColors(c,h,u,d,p)}setColors(e,t,i,n,s){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,i.r,i.g,i.b),a.setXYZ(33,i.r,i.g,i.b),a.setXYZ(34,i.r,i.g,i.b),a.setXYZ(35,i.r,i.g,i.b),a.setXYZ(36,i.r,i.g,i.b),a.setXYZ(37,i.r,i.g,i.b),a.setXYZ(38,n.r,n.g,n.b),a.setXYZ(39,n.r,n.g,n.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap;Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),At("c",t,e,Mt,0,0,-1),At("t",t,e,Mt,0,0,1),At("n1",t,e,Mt,-1,-1,-1),At("n2",t,e,Mt,1,-1,-1),At("n3",t,e,Mt,-1,1,-1),At("n4",t,e,Mt,1,1,-1),At("f1",t,e,Mt,-1,-1,1),At("f2",t,e,Mt,1,-1,1),At("f3",t,e,Mt,-1,1,1),At("f4",t,e,Mt,1,1,1),At("u1",t,e,Mt,.7,1.1,-1),At("u2",t,e,Mt,-.7,1.1,-1),At("u3",t,e,Mt,0,2,-1),At("cf1",t,e,Mt,-1,0,1),At("cf2",t,e,Mt,1,0,1),At("cf3",t,e,Mt,0,-1,1),At("cf4",t,e,Mt,0,1,1),At("cn1",t,e,Mt,-1,0,-1),At("cn2",t,e,Mt,1,0,-1),At("cn3",t,e,Mt,0,-1,-1),At("cn4",t,e,Mt,0,1,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function At(r,e,t,i,n,s,a){bo.set(n,s,a).unproject(i);let o=e[r];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],bo.x,bo.y,bo.z)}}var So=new jt,Hu=class extends Ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),s=new ze;s.setIndex(new tt(i,1)),s.setAttribute("position",new tt(n,3)),super(s,new qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&So.setFromObject(this.object),So.isEmpty())return;let t=So.min,i=So.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Vu=class extends Ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new ze;n.setIndex(new tt(i,1)),n.setAttribute("position",new Se([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},Wu=class extends qi{constructor(e,t=1,i=16776960){let n=i,s=new ze;s.setAttribute("position",new Se([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),s.computeBoundingSphere(),super(s,new qt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=new ze;a.setAttribute("position",new Se([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),a.computeBoundingSphere(),this.add(new Je(a,new Qt({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},sf=new R,wo,Rh,Xu=class extends nt{constructor(e=new R(0,0,1),t=new R(0,0,0),i=1,n=16776960,s=.2*i,a=.2*s){super(),this.type="ArrowHelper",wo===void 0&&(wo=new ze,wo.setAttribute("position",new Se([0,0,0,0,1,0],3)),Rh=new Dn(0,.5,1,5,1),Rh.translate(0,-.5,0)),this.position.copy(t),this.line=new qi(wo,new qt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Je(Rh,new Qt({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{sf.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(sf,t)}}setLength(e,t=.2*e,i=.2*t){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},ju=class extends Ti{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=new ze;i.setAttribute("position",new Se(t,3)),i.setAttribute("color",new Se([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(i,new qt({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,i){let n=new me,s=this.geometry.attributes.color.array;return n.set(e),n.toArray(s,0),n.toArray(s,3),n.set(t),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},qu=class{constructor(){this.type="ShapePath",this.color=new me,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new dr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,s,a){return this.currentPath.bezierCurveTo(e,t,i,n,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g,m){let _=m.length,x=!1;for(let y=_-1,P=0;P<_;y=P++){let C=m[y],U=m[P],k=U.x-C.x,M=U.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=m[P],k=-k,U=m[y],M=-M),g.y<C.y||g.y>U.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{let X=M*(g.x-C.x)-k*(g.y-C.y);if(X===0)return!0;if(X<0)continue;x=!x}}else{if(g.y!==C.y)continue;if(U.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=U.x)return!0}}return x}let i=Xi.isClockWise,n=this.subPaths;if(n.length===0)return[];let s,a,o,l=[];if(n.length===1)return a=n[0],o=new dn,o.curves=a.curves,l.push(o),l;let c=!i(n[0].getPoints());c=e?!c:c;let h=[],u=[],d,p,f=[],v=0;u[v]=void 0,f[v]=[];for(let g=0,m=n.length;g<m;g++)a=n[g],d=a.getPoints(),s=i(d),s=e?!s:s,s?(!c&&u[v]&&v++,u[v]={s:new dn,p:d},u[v].s.curves=a.curves,c&&v++,f[v]=[]):f[v].push({h:a,p:d[0]});if(!u[0])return(function(g){let m=[];for(let _=0,x=g.length;_<x;_++){let y=g[_],P=new dn;P.curves=y.curves,m.push(P)}return m})(n);if(u.length>1){let g=!1,m=0;for(let _=0,x=u.length;_<x;_++)h[_]=[];for(let _=0,x=u.length;_<x;_++){let y=f[_];for(let P=0;P<y.length;P++){let C=y[P],U=!0;for(let k=0;k<u.length;k++)t(C.p,u[k].p)&&(_!==k&&m++,U?(U=!1,h[k].push(C)):g=!0);U&&h[_].push(C)}}m>0&&g===!1&&(f=h)}for(let g=0,m=u.length;g<m;g++){o=u[g].s,l.push(o),p=f[g];for(let _=0,x=p.length;_<x;_++)o.holes.push(p[_].h)}return l}},Yu=class extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},Zu=class extends Ot{constructor(e=1,t=1,i=1,n={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...n,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Uf(r,e=!1){let t=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ze,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Lf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][d]);let f=Lf(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Lf(r){let e,t,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new tt(a,t,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let v=h.getComponent(d,f);o.setComponent(d+u,f,v)}}else a.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}var St=Math.PI*2,Fe=(r,e)=>r+Math.random()*(e-r);var Df=new Map;function lt(r,e={}){var n,s,a,o,l;let t="s"+r+JSON.stringify(e),i=Df.get(t);return i||(i=new Yi({color:r,roughness:(n=e.r)!=null?n:.72,metalness:(s=e.m)!=null?s:0,flatShading:!!e.flat,emissive:(a=e.e)!=null?a:0,emissiveIntensity:(o=e.ei)!=null?o:1,side:e.ds?rc:bi,transparent:!!e.t,opacity:(l=e.op)!=null?l:1,vertexColors:!!e.vc}),Df.set(t,i),i)}function rt(r,e=3,t={}){var n,s;let i=new me(r).multiplyScalar(e);return new Qt({color:i,transparent:!!t.t,opacity:(n=t.op)!=null?n:1,blending:t.add?wa:$u,depthWrite:!t.add&&!t.t,side:t.ds?rc:bi,fog:(s=t.fog)!=null?s:!0,map:t.map||null})}function d_(r,e){let t=r.index?r.toNonIndexed():r,i=new me(e),n=t.attributes.position.count,s=new Float32Array(n*3);for(let a=0;a<n;a++)s[a*3]=i.r,s[a*3+1]=i.g,s[a*3+2]=i.b;return t.setAttribute("color",new tt(s,3)),t.attributes.uv&&t.deleteAttribute("uv"),t}function ue(r){let e=r.map(([t,i,n=0,s=0,a=0,o=0,l=0,c=0,h=1,u=1,d=1])=>{let p=d_(t.clone(),i),f=new De().compose(new R(n,s,a),new Gt().setFromEuler(new ai(o,l,c)),new R(h,u,d));return p.applyMatrix4(f),p});return Uf(e,!1)}var Nf=typeof matchMedia!="undefined"&&matchMedia("(pointer: coarse)").matches?1.6:2.2,On=(r,e=3)=>Math.max(e,Math.round(r*Nf)),E={box:(r,e,t)=>new Bi(r,e,t,2,2,2),sph:(r,e=12,t=8)=>new mr(r,On(e),On(t)),cyl:(r,e,t,i=10,n=!1)=>new Dn(r,e,t,On(i),2,n),cone:(r,e,t=8)=>new ns(r,e,On(t),2),cap:(r,e,t=8)=>new is(r,e,On(3,4),On(t)),ico:(r,e=0)=>new ss(r,e+1),dod:r=>new rs(r,Nf>2?1:0),oct:r=>new fr(r,0),tor:(r,e,t=6,i=16,n=St)=>new as(r,e,On(t),On(i),n)};function wt(r,e){return r.translate(0,-e,0),r}function Ji(r,e,t,i={}){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let s=new la(n);return s.colorSpace=i.linear?rn:hi,s.wrapS=s.wrapT=i.clamp?Si:sr,s.anisotropy=4,s}var Mc=null;function Of(){return Mc||(Mc=Ji(64,64,r=>{let e=r.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.7)"),e.addColorStop(.6,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,64,64)},{clamp:!0,linear:!0}),Mc)}var bc=null;function Ai(){return bc||(bc=Ji(8,128,r=>{let e=r.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.55,"rgba(255,255,255,.35)"),e.addColorStop(.88,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,8,128)},{clamp:!0,linear:!0}),bc)}var Sc=null;function Ra(){return Sc||(Sc=Ji(8,128,r=>{let e=r.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,8,128)},{clamp:!0,linear:!0}),Sc)}var wc=null;function Ff(){return wc||(wc=Ji(64,64,r=>{let e=r.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=e,r.fillRect(0,0,64,64)},{clamp:!0,linear:!0}),wc)}var Tc=null;function Bf(){return Tc||(Tc=Ji(256,256,r=>{r.clearRect(0,0,256,256);for(let e=0;e<60;e++){let t=Math.random()*256,i=Math.random()*256,n=30+Math.random()*70;for(let[s,a]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]]){let o=r.createRadialGradient(t+s,i+a,0,t+s,i+a,n);o.addColorStop(0,"rgba(255,255,255,.10)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.beginPath(),r.arc(t+s,i+a,n,0,St),r.fill()}}},{linear:!0}),Tc)}var Ec=null;function zf(){return Ec||(Ec=Ji(256,256,r=>{r.strokeStyle="rgba(255,255,255,1)",r.lineCap="round";for(let t=0;t<9;t++){let i=128,n=128,s=t/9*St+Math.random()*.4;r.lineWidth=6,r.beginPath(),r.moveTo(i,n);for(let a=0;a<7;a++)s+=(Math.random()-.5)*.9,i+=Math.cos(s)*16,n+=Math.sin(s)*16,r.lineWidth=Math.max(1,6-a),r.lineTo(i,n);r.stroke()}let e=r.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,255,255,.35)"),e.addColorStop(.5,"rgba(255,255,255,.08)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,256,256)},{clamp:!0,linear:!0}),Ec)}var Ac=null;function kf(){return Ac||(Ac=Ji(128,128,r=>{let e=r.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,128,128),r.globalCompositeOperation="destination-out";for(let t=0;t<40;t++)r.fillStyle=`rgba(0,0,0,${Math.random()*.5})`,r.beginPath(),r.arc(Math.random()*128,Math.random()*128,4+Math.random()*14,0,St),r.fill()},{clamp:!0,linear:!0}),Ac)}function Oe(r,e,t=0,i=0,n=0,s=0,a=0,o=0){let l=new B.Mesh(r,e);return l.position.set(t,i,n),l.rotation.set(s,a,o),l.castShadow=!0,l}function mt(r,e,t,...i){let n=new B.Group;return n.position.set(r,e,t),i.forEach(s=>n.add(s)),n}function vd(r){let e=new B.Group,t=new B.Group;e.add(t);let i={root:e,body:t,legL:null,legR:null,armR:null,armL:null,cape:null,weapon:null,glowMats:[],flash:[]},n=lt("#ffffff",{vc:!0,r:.62}),s=lt("#ffffff",{vc:!0,r:.32,m:.65}),a=lt("#ffffff",{vc:!0,r:.9,flat:!0});if(r==="iris"){let o=wt(ue([[E.cap(4.2,13),"#3b2c44",0,6.5,0],[E.box(9,6,12),"#d9a65b",0,-3,2]]),13);i.legL=mt(-5,22,0,Oe(o,s)),i.legR=mt(5,22,0,Oe(o,s));let l=ue([[E.cyl(11,8.5,22,12),"#efe2c4",0,33,0],[E.cyl(9,9.5,5,12),"#5a3a2a",0,23.5,0],[E.box(10,16,2),"#e46a2e",0,22,8.6],[E.sph(6.5,10,8),"#ffd27a",-11,42,0,0,0,0,1,.8,1],[E.sph(6.5,10,8),"#ffd27a",11,42,0,0,0,0,1,.8,1],[E.box(2,18,1.5),"#ffd27a",0,33,9.8]]);t.add(Oe(l,s));let c=ue([[E.sph(7.6,14,10),"#f2c9a5",0,52,0],[E.sph(8.4,14,10),"#ffe08a",0,54.5,-1.5,0,0,0,1.02,.9,1.05],[E.cone(4.5,18,8),"#ffd060",0,48,-9,1.9,0,0],[E.box(1.6,1.6,1),"#2a1830",-2.8,52,7.2],[E.box(1.6,1.6,1),"#2a1830",2.8,52,7.2]]);t.add(Oe(c,n));let h=wt(ue([[E.cyl(13,19,34,12,!0),"#c1532e",0,17,0,0,0,0]]),34),u=new B.Mesh(h,lt("#ffffff",{vc:!0,ds:!0,r:.8}));u.scale.set(1,1,.55),u.castShadow=!0,i.cape=mt(0,45,-5,u);let d=wt(ue([[E.cap(3.4,13),"#efe2c4",0,6.5,0],[E.sph(3.8),"#f2c9a5",0,-1,0]]),13);t.add(Oe(ue([[E.cyl(10,13,9,12,!0),"#c9b48a",0,19,0],[E.box(4,4,2),"#ffd27a",0,24,9.4],[E.cone(2.2,7,4),"#fff1c2",-4,61,3,.3,0,.5],[E.cone(2.2,8,4),"#fff1c2",3,62,4,.3,0,-.4],[E.box(4,1.2,1),"#8a5a3a",-3,55,7.2,0,0,.15],[E.box(4,1.2,1),"#8a5a3a",3,55,7.2,0,0,-.15]]),s));let p=Oe(ue([[E.cyl(11,11,2.4,20),"#b88a3a",0,0,0,Math.PI/2,0,0],[E.cyl(8.5,8.5,2.8,20),"#efe2c4",0,0,.4,Math.PI/2,0,0],[E.sph(3.2,10,8),"#ffd27a",0,0,2.2]]),s,0,-8,4,0,.9,0);i.armL=mt(-13,41,0,Oe(d,s),p);let f=rt("#fff1c8",1.6);i.glowMats.push(f);let v=Oe(ue([[E.box(3,40,1.4),"#ffffff",0,24,0],[E.cone(1.6,6,4),"#ffffff",0,47,0]]),lt("#ffffff",{vc:!0}));v.material=f;let g=Oe(ue([[E.box(14,2.4,3),"#ffd27a",0,3,0],[E.cyl(1.4,1.4,8),"#5a3a24",0,-2,0],[E.sph(2.2),"#ffd27a",0,-6.5,0]]),s);i.weapon=mt(0,-13,2,g,v),i.weapon.rotation.x=1.25,i.armR=mt(13,41,0,Oe(d,s),i.weapon),t.add(i.cape,i.armL,i.armR),e.add(i.legL,i.legR),i.light="#ffd9a0"}else if(r==="vale"){let o=wt(ue([[E.cap(3.6,12),"#1f1830",0,6,0]]),12);i.legL=mt(-4,18,0,Oe(o,n)),i.legR=mt(4,18,0,Oe(o,n));let l=ue([[E.cyl(9,17,40,14),"#4a3594",0,22,0],[E.cyl(9.5,11,10,14),"#2a1e5c",0,40,0],[E.box(4,34,1.2),"#d6b3ff",0,22,12.6,-.22,0,0],[E.sph(5,10,8),"#6f58d8",-10,44,0],[E.sph(5,10,8),"#6f58d8",10,44,0]]);t.add(Oe(l,n));let c=new B.Mesh(E.tor(16.5,1,6,28),rt("#c9a6ff",2.2));c.rotation.x=Math.PI/2,c.position.y=3,t.add(c);let h=ue([[E.sph(10,14,10),"#5a44c0",0,53,-1,0,0,0,1,1.05,1.08],[E.cone(6,14,10),"#5a44c0",0,63,-6,-.6,0,0],[E.sph(7.2,12,8),"#0e0a1c",0,52,4.5,0,0,0,1,1,.7]]);t.add(Oe(h,n));let u=new B.Mesh(ue([[E.sph(1.3,8,6),"#ffffff",-2.6,52.5,9],[E.sph(1.3,8,6),"#ffffff",2.6,52.5,9]]),rt("#8fe8ff",4));t.add(u);let d=wt(ue([[E.cap(3.2,12),"#4a3594",0,6,0],[E.sph(3.2),"#e8c8b0",0,-1,0]]),12),p=new B.Mesh(ue([[E.tor(22,.7,4,40,Math.PI*.5),"#fff",0,0,0,Math.PI/2,0,0],[E.tor(22,.7,4,40,Math.PI*.5),"#fff",0,0,0,Math.PI/2,0,Math.PI],[E.oct(2.2),"#fff",22,0,0],[E.oct(2.2),"#fff",-22,0,0],[E.oct(2.2),"#fff",0,0,22],[E.oct(2.2),"#fff",0,0,-22]]),rt("#b89aff",2));p.position.y=30,t.add(p),i.halo=p,t.add(Oe(ue([[E.cyl(10,9,3,14),"#d9b36b",0,33,0],[E.oct(2.6),"#c9a6ff",0,33,10]]),n)),i.armL=mt(-12,43,0,Oe(d,n));let f=Oe(ue([[E.cyl(1.4,1.6,64,6),"#5a3a24",0,18,0],[E.tor(3.4,.9,5,10),"#d9b36b",0,49,0,Math.PI/2,0,0]]),n),v=rt("#c7a2ff",3.2);i.glowMats.push(v);let g=new B.Mesh(E.oct(5.2),v);g.position.y=56,g.scale.set(.8,1.4,.8),i.crystal=g,i.weapon=mt(0,-12,0,f,g),i.weapon.rotation.x=.15,i.armR=mt(12,43,0,Oe(d,n),i.weapon),t.add(i.armL,i.armR),e.add(i.legL,i.legR),i.light="#c9a6ff"}else{let o=wt(ue([[E.dod(7.5),"#6c675e",0,8,0],[E.dod(6.5),"#4e4a43",0,0,1.5]]),12);i.legL=mt(-8,20,0,Oe(o,a)),i.legR=mt(8,20,0,Oe(o,a));let l=ue([[E.dod(18),"#8a857a",0,36,0,.3,.2,0,1.15,1,.95],[E.dod(10),"#77726a",-15,44,0,.4,0,0],[E.dod(10),"#77726a",15,44,0,.1,.5,0],[E.ico(7,0),"#7fb24a",-9,50,-3,0,0,0,1.4,.45,1.2],[E.ico(5,0),"#6aa23e",11,51,2,0,0,0,1.3,.45,1.2],[E.dod(8.5),"#9a958a",0,57,3,.2,.4,0]]);t.add(Oe(l,a));let c=new B.Mesh(ue([[E.box(3.4,1.6,1),"#ffffff",-3,58,11],[E.box(3.4,1.6,1),"#ffffff",3,58,11],[E.box(1,10,1),"#ffffff",-6,36,17,0,0,.4],[E.box(1,8,1),"#ffffff",7,32,16.5,0,0,-.3]]),rt("#ffa040",3.5));t.add(c),i.glowMats.push(c.material);let h=new B.Mesh(ue([[E.cone(3.4,18,5),"#fff",-7,58,-12,-.5,0,.3],[E.cone(4,24,5),"#fff",2,62,-14,-.6,0,-.1],[E.cone(3,14,5),"#fff",10,54,-11,-.4,0,-.4]]),rt("#9dff7a",1.8));t.add(h),i.glowMats.push(h.material);let u=wt(ue([[E.dod(6),"#6c675e",0,6,0],[E.dod(7.5),"#8a857a",0,-4,0],[E.ico(3,0),"#7fb24a",3,8,3,0,0,0,1.4,.5,1]]),10);i.armL=mt(-21,44,0,Oe(u,a));let d=Oe(ue([[E.cyl(1.8,2,40,6),"#4a3020",0,14,0],[E.cyl(2.6,2.6,4,6),"#8a8f99",0,0,0],[E.dod(9.5),"#7a756c",0,37,0,.3,.4,0,1.5,.95,1],[E.cyl(6,6,3,8),"#5a5f6a",-10,37,0,0,0,Math.PI/2],[E.cyl(6,6,3,8),"#5a5f6a",10,37,0,0,0,Math.PI/2],[E.cone(3,7,4),"#8a8f99",0,48,0]]),lt("#ffffff",{vc:!0,r:.6,m:.25,flat:!0}));i.weapon=mt(0,-10,2,d),i.weapon.rotation.x=1.1,i.armR=mt(21,44,0,Oe(u,a),i.weapon),t.add(i.armL,i.armR),e.add(i.legL,i.legR),i.light="#ffb070"}return e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.material&&o.material.isMeshStandardMaterial&&i.flash.push(o))}),i.flash.forEach(o=>{o.material=o.material.clone()}),i}function _d(r,e,t,i,n,s){let a=Math.sin(t),o=Math.cos(t);r.legL.rotation.x=a*.7*i,r.legR.rotation.x=-a*.7*i,r.body.position.y=Math.abs(o)*2.2*i+Math.sin(e*2)*.6*(1-i),r.body.rotation.x=.08*i,r.armL.rotation.x=-a*.5*i,r.armL.rotation.z=.12;let l=n>0?Math.sin(Math.min(1,n)*Math.PI):0;r.armR.rotation.x=a*.35*i-l*1.7,r.armR.rotation.z=-.12-l*.5,r.body.rotation.y=-l*.6,r.cape&&(r.cape.rotation.x=.15+i*.45+Math.sin(e*3)*.05),r.crystal&&(r.crystal.rotation.y=e*2,r.crystal.position.y=56+Math.sin(e*3)*1.5),r.halo&&(r.halo.rotation.y=e*1.2,r.halo.position.y=30+Math.sin(e*2)*3)}var md=r=>e=>[Math.sin(e)*r,0,0,0],gd=r=>e=>[-Math.sin(e)*r,0,0,0],Gf={skel:()=>{let r=wt(ue([[E.cyl(1.6,1.4,16,5),"#e2d9c2",0,8,0],[E.box(4,2,6),"#cfc6ae",0,0,2]]),16);return{fly:0,shadow:15,parts:[{geo:ue([[E.cyl(1.6,1.6,16,5),"#e2d9c2",0,28,0],[E.tor(5.5,1.1,4,10,Math.PI*1.4),"#e9e1cc",0,32,0,Math.PI/2,0,-.7],[E.tor(5,1.1,4,10,Math.PI*1.4),"#e9e1cc",0,28,0,Math.PI/2,0,-.7],[E.box(10,3,4),"#d4caae",0,21,0],[E.cyl(5.5,5,3,8),"#5a4a3a",0,22,0],[E.sph(4.6,10,8),"#7a6e5e",7,36,0,0,0,0,1,.6,1.1],[E.box(3,8,1.6),"#6a4a2e",-3,18,4.5,.1,0,.2],[E.cyl(1.2,1.2,14,6),"#cfc6ae",0,29,-3],[E.tor(5.2,.9,4,10,Math.PI*1.4),"#e9e1cc",0,24.5,0,Math.PI/2,0,-.7]]),mat:"vc",at:[0,0,0],anim:e=>[0,0,0,Math.abs(Math.cos(e))*1.2]},{geo:ue([[E.sph(6.2,10,8),"#efe7d1",0,0,0],[E.box(7,3,5),"#d9d0b8",0,-4.5,1.5],[E.sph(1.9,6,5),"#1a0f12",-2.4,.5,5],[E.sph(1.9,6,5),"#1a0f12",2.4,.5,5],[E.cyl(6.6,6.8,3,12),"#6a6e78",0,3.5,0],[E.cone(6.6,7,12),"#7a7e88",0,8,0],[E.box(1.2,6,1.2),"#6a6e78",0,0,6.6],[E.box(1.2,1.2,1.2),"#efe7d1",-1.5,-6.5,4.2],[E.box(1.2,1.2,1.2),"#efe7d1",1.5,-6.5,4.2]]),mat:"vc",at:[0,42,0],anim:e=>[Math.sin(e*.5)*.12,0,0,Math.abs(Math.cos(e))*1.2]},{geo:ue([[E.sph(1.1,6,4),"#ffffff",-2.4,.5,5.6],[E.sph(1.1,6,4),"#ffffff",2.4,.5,5.6]]),mat:"glow:#ff5030",at:[0,42,0],anim:e=>[Math.sin(e*.5)*.12,0,0,Math.abs(Math.cos(e))*1.2]},{geo:r,mat:"vc",at:[-3,21,0],anim:md(.7)},{geo:r,mat:"vc",at:[3,21,0],anim:gd(.7)},{geo:wt(ue([[E.cyl(1.2,1.2,12,5),"#e2d9c2",0,6,0],[E.box(2.4,26,1),"#9aa3b0",0,-12,4,1.2,0,0],[E.box(8,1.6,2),"#6a5a3a",0,-3,2,1.2,0,0]]),12),mat:"metal",at:[7,35,0],anim:e=>[-.4+Math.sin(e)*.4,0,-.2,0]}]}},ghoul:()=>({fly:0,shadow:15,parts:[{geo:ue([[E.sph(10,10,8),"#7f8f72",0,22,-2,0,0,0,1,.9,1.2],[E.sph(7,10,8),"#6b7a60",0,30,6,0,0,0,1.1,.9,1],[E.cone(2,6,4),"#c9d0b8",-4,33,1,-.6,0,0],[E.cone(2,6,4),"#c9d0b8",4,33,1,-.6,0,0],[E.cone(1.8,7,5),"#d9d0b8",0,32,-8,-1.1,0,0],[E.cone(1.6,6,5),"#d9d0b8",0,27,-11,-1.3,0,0],[E.cone(1.4,5,5),"#d9d0b8",0,22,-12,-1.5,0,0],[E.box(14,4,12),"#3a2a20",0,15,-1]]),mat:"vc",at:[0,0,0],anim:r=>[.15,0,Math.sin(r)*.06,Math.abs(Math.cos(r))*2]},{geo:ue([[E.sph(6,10,8),"#8a9a7c",0,0,0],[E.box(6,2,3),"#2a1414",0,-3,4.5]]),mat:"vc",at:[0,30,11],anim:r=>[.2,Math.sin(r*.5)*.2,0,Math.abs(Math.cos(r))*2]},{geo:ue([[E.sph(1.3,6,4),"#ffffff",-2.4,1,5],[E.sph(1.3,6,4),"#ffffff",2.4,1,5]]),mat:"glow:#e4ff6a",at:[0,30,11],anim:r=>[.2,Math.sin(r*.5)*.2,0,Math.abs(Math.cos(r))*2]},{geo:wt(ue([[E.cap(2.4,16),"#5f6e55",0,8,0],[E.cone(2.5,5,4),"#d9d0b8",0,-4,2,.4,0,0]]),16),mat:"vc",at:[-9,28,4],anim:r=>[-.6+Math.sin(r)*.8,0,.2,0]},{geo:wt(ue([[E.cap(2.4,16),"#5f6e55",0,8,0],[E.cone(2.5,5,4),"#d9d0b8",0,-4,2,.4,0,0]]),16),mat:"vc",at:[9,28,4],anim:r=>[-.6-Math.sin(r)*.8,0,-.2,0]},{geo:wt(ue([[E.cap(2.8,9),"#4b5a46",0,5,0]]),12),mat:"vc",at:[-4,14,-2],anim:md(.9)},{geo:wt(ue([[E.cap(2.8,9),"#4b5a46",0,5,0]]),12),mat:"vc",at:[4,14,-2],anim:gd(.9)}]}),bat:()=>{let r=e=>{let t=new B.Shape;t.moveTo(0,0),t.quadraticCurveTo(e*10,9,e*22,4),t.lineTo(e*18,-1),t.lineTo(e*14,2),t.lineTo(e*10,-3),t.lineTo(e*5,0),t.closePath();let i=new B.ShapeGeometry(t);return i.rotateX(-Math.PI/2),ue([[i,"#3a2350"]])};return{fly:34,shadow:9,parts:[{geo:ue([[E.sph(5,8,6),"#5c3a7e",0,0,0,0,0,0,1,.9,1.3],[E.cone(2,5,6),"#5c3a7e",-2.5,4.5,2],[E.cone(2,5,6),"#5c3a7e",2.5,4.5,2],[E.cone(.6,2,4),"#ffffff",-1,-1.8,5.6,Math.PI,0,0],[E.cone(.6,2,4),"#ffffff",1,-1.8,5.6,Math.PI,0,0],[E.cone(1.6,7,6),"#3a2350",0,-1,-7,-1.6,0,0]]),mat:"vc",at:[0,0,0],anim:(e,t)=>[0,0,0,Math.sin(t*9+e)*3]},{geo:ue([[E.sph(1,5,4),"#ffffff",-1.8,1,5.5],[E.sph(1,5,4),"#ffffff",1.8,1,5.5]]),mat:"glow:#ff4060",at:[0,0,0],anim:(e,t)=>[0,0,0,Math.sin(t*9+e)*3]},{geo:r(-1),mat:"vcds",at:[-2,0,0],anim:(e,t)=>[0,0,Math.sin(t*22+e)*.9,Math.sin(t*9+e)*3]},{geo:r(1),mat:"vcds",at:[2,0,0],anim:(e,t)=>[0,0,-Math.sin(t*22+e)*.9,Math.sin(t*9+e)*3]}]}},brute:()=>({fly:0,shadow:26,parts:[{geo:ue([[E.sph(17,12,10),"#b05a44",0,38,0,0,0,0,1.15,1,1],[E.sph(11,10,8),"#8a3e2e",0,30,8,0,0,0,1.1,.9,1],[E.sph(9,10,8),"#c06a52",-18,48,-2],[E.sph(9,10,8),"#c06a52",18,48,-2],[E.box(30,6,22),"#4a3020",0,24,0],[E.cyl(4,4,2,10),"#c9a46a",0,24,11.4,Math.PI/2,0,0],[E.sph(10,10,8),"#6a6e78",-18,53,-2,0,0,0,1.1,.5,1.1],[E.cone(2,7,5),"#c9c2b4",-18,59,-2],[E.cone(2,6,5),"#c9c2b4",-24,56,-2,0,0,.6],[E.box(4,18,2),"#5a3a22",-6,40,15,.1,0,.6]]),mat:"vc",at:[0,0,0],anim:r=>[.05,0,Math.sin(r)*.05,Math.abs(Math.cos(r))*2.5]},{geo:ue([[E.sph(8.5,10,8),"#c06a52",0,0,0],[E.cone(1.6,6,4),"#efe4d0",-3.5,-3,6,-.8,0,0],[E.cone(1.6,6,4),"#efe4d0",3.5,-3,6,-.8,0,0],[E.sph(2.2,6,5),"#2a1010",-3,2,6.5],[E.sph(2.2,6,5),"#2a1010",3,2,6.5]]),mat:"vc",at:[0,56,8],anim:r=>[.1,0,0,Math.abs(Math.cos(r))*2.5]},{geo:ue([[E.sph(1.3,6,4),"#ffffff",-3,2.2,8.3],[E.sph(1.3,6,4),"#ffffff",3,2.2,8.3]]),mat:"glow:#ffc040",at:[0,56,8],anim:r=>[.1,0,0,Math.abs(Math.cos(r))*2.5]},{geo:wt(ue([[E.cap(5.5,14),"#8a3e2e",0,8,0],[E.box(10,5,13),"#3a2418",0,-2,2]]),18),mat:"vc",at:[-8,22,0],anim:md(.55)},{geo:wt(ue([[E.cap(5.5,14),"#8a3e2e",0,8,0],[E.box(10,5,13),"#3a2418",0,-2,2]]),18),mat:"vc",at:[8,22,0],anim:gd(.55)},{geo:wt(ue([[E.cap(5,16),"#b05a44",0,9,0],[E.cyl(2,2.4,34,6),"#5a3a22",0,-14,10,1.3,0,0],[E.cyl(7,4,18,7),"#6a4a2e",0,-18,28,1.3,0,0],[E.cone(1.8,6,4),"#c9c2b4",6,-18,28,0,0,-1.4],[E.cone(1.8,6,4),"#c9c2b4",-6,-16,24,0,0,1.4]]),18),mat:"vc",at:[22,50,0],anim:r=>[-.3+Math.sin(r)*.3,0,-.15,0]}]}),wraith:()=>({fly:10,shadow:12,parts:[{geo:ue([[E.cone(13,40,10),"#2a1c48",0,22,0],[E.sph(9,10,8),"#3b2a5c",0,42,-1,0,0,0,1,1.1,1.1],[E.sph(6.5,10,8),"#0a0614",0,41,4,0,0,0,1,1,.7],[E.cone(5,14,6),"#2a1c48",9,30,4,.4,0,-.9],[E.cone(5,14,6),"#2a1c48",-9,30,4,.4,0,.9],[E.cone(3,10,5),"#1c1230",-9,-1,6,Math.PI,0,0],[E.cone(3,12,5),"#1c1230",4,-2,9,Math.PI,0,0],[E.cone(3,9,5),"#1c1230",10,-1,-4,Math.PI,0,0],[E.cone(3,11,5),"#1c1230",-4,-2,-10,Math.PI,0,0],[E.tor(9.5,.8,4,14),"#8a7a9a",0,34,0,Math.PI/2,0,0]]),mat:"vc",at:[0,0,0],anim:(r,e)=>[0,0,Math.sin(e*2+r)*.06,Math.sin(e*2.4+r)*3]},{geo:ue([[E.sph(1.4,6,4),"#ffffff",-2.4,41.5,8],[E.sph(1.4,6,4),"#ffffff",2.4,41.5,8]]),mat:"glow:#e08bff",at:[0,0,0],anim:(r,e)=>[0,0,Math.sin(e*2+r)*.06,Math.sin(e*2.4+r)*3]},{geo:ue([[E.oct(3.4),"#ffffff",0,0,0]]),mat:"glow:#b06bff",at:[11,26,10],anim:(r,e)=>[e*3,e*2,0,Math.sin(e*2.4+r)*3]}]}),ember:()=>({fly:0,shadow:13,parts:[{geo:ue([[E.ico(12,1),"#3a1a10",0,13,0,0,0,0,1,.9,1],[E.dod(5),"#2a1008",-7,20,3],[E.dod(4),"#2a1008",6,6,5]]),mat:"stone",at:[0,0,0],anim:(r,e)=>[0,e*1.5,0,Math.abs(Math.sin(r))*4]},{geo:ue([[E.ico(10.5,1),"#ffffff",0,13,0,0,0,0,1.08,.97,1.08]]),mat:"glow:#ff7a20",at:[0,0,0],anim:(r,e)=>[0,e*1.5,0,Math.abs(Math.sin(r))*4],pulse:!0},{geo:ue([[E.sph(1.6,6,4),"#ffffff",-3.5,16,10.5],[E.sph(1.6,6,4),"#ffffff",3.5,16,10.5]]),mat:"glow:#fff0a0",at:[0,0,0],anim:r=>[0,0,0,Math.abs(Math.sin(r))*4]}]})};function Hf(r){let e=new B.Group,t=new B.Group;e.add(t);let i={root:e,body:t,parts:{},glowMats:[],flash:[]},n=lt("#ffffff",{vc:!0,r:.9,flat:!0}),s=lt("#ffffff",{vc:!0,r:.65});if(r==="golem"){t.add(Oe(ue([[E.dod(42),"#8a857a",0,70,0,.2,.3,0,1.2,1.05,.95],[E.dod(22),"#77726a",-40,86,0],[E.dod(22),"#77726a",40,86,0],[E.dod(18),"#9a958a",0,116,10],[E.ico(16,0),"#7fb24a",-20,104,-8,0,0,0,1.6,.4,1.3],[E.ico(12,0),"#6aa23e",24,108,0,0,0,0,1.5,.4,1.2]]),n));let a=new B.Mesh(ue([[E.box(2,30,2),"#fff",-10,70,38,0,0,.4],[E.box(2,24,2),"#fff",12,66,37,0,0,-.3],[E.box(5,2.4,2),"#fff",-6,118,27],[E.box(5,2.4,2),"#fff",6,118,27]]),rt("#ff9040",3.5));t.add(a),i.glowMats.push(a.material);let o=wt(ue([[E.dod(15),"#6c675e",0,14,0],[E.dod(22),"#8a857a",0,-14,6]]),24);i.parts.armL=mt(-56,90,0,Oe(o,n)),i.parts.armR=mt(56,90,0,Oe(o,n));let l=wt(ue([[E.dod(17),"#5e5a52",0,10,0]]),22);i.parts.legL=mt(-20,34,0,Oe(l,n)),i.parts.legR=mt(20,34,0,Oe(l,n)),t.add(i.parts.armL,i.parts.armR),e.add(i.parts.legL,i.parts.legR),i.light="#ff9040",i.h=150}else if(r==="mass"){let a=lt("#ffffff",{vc:!0,r:.5,t:!0,op:.92});t.add(Oe(ue([[E.ico(48,2),"#4b2a7a",0,60,0,0,0,0,1,.95,1],[E.ico(30,1),"#6a3fa0",-30,40,12],[E.ico(28,1),"#6a3fa0",32,46,6]]),a));let o=new B.Group;for(let[c,h,u,d]of[[-20,70,40,1],[18,80,38,.8],[0,48,46,1.1],[-34,44,30,.7],[34,52,30,.75],[4,96,30,.7]]){let p=Oe(ue([[E.sph(9*d,10,8),"#e6d4ff",0,0,0,0,0,0,1,1.15,.6],[E.sph(2*d,6,4),"#1a0a2a",-3*d,2*d,5*d],[E.sph(2*d,6,4),"#1a0a2a",3*d,2*d,5*d],[E.sph(2.6*d,6,4),"#1a0a2a",0,-4*d,5*d,0,0,0,1,1.4,1]]),s,c,h,u);o.add(p)}t.add(o),i.parts.faces=o;let l=new B.Mesh(E.ico(18,1),rt("#c070ff",2.2,{t:!0,op:.7}));l.position.y=60,t.add(l),i.glowMats.push(l.material),i.parts.core=l,i.light="#c070ff",i.h=140,i.float=20}else if(r==="warden"){let a=lt("#ffffff",{vc:!0,r:.45,m:.55,flat:!0});t.add(Oe(ue([[E.cyl(30,24,56,8),"#3a3230",0,70,0],[E.box(64,14,30),"#4a403c",0,98,0],[E.cyl(12,14,34,8),"#2a2220",0,120,0],[E.box(4,50,32),"#ff7a2e",0,70,0],[E.cone(8,18,4),"#4a403c",-32,110,0,0,0,.5],[E.cone(8,18,4),"#4a403c",32,110,0,0,0,-.5]]),a));let o=new B.Mesh(ue([[E.box(18,3,2),"#fff",0,124,15],[E.box(3,40,2),"#fff",0,70,31],[E.box(40,3,2),"#fff",0,84,30]]),rt("#ffb040",3.2));t.add(o),i.glowMats.push(o.material);let l=new B.Mesh(E.cone(12,34,8),rt("#ff8a3a",2.6,{t:!0,op:.85}));l.position.y=152,t.add(l),i.parts.flame=l;let c=wt(ue([[E.cyl(9,7,30,6),"#2b2422",0,15,0],[E.box(16,8,22),"#3a3230",0,-2,4]]),30);i.parts.legL=mt(-14,42,0,Oe(c,a)),i.parts.legR=mt(14,42,0,Oe(c,a));let h=Oe(ue([[E.cyl(2.4,2.4,120,6),"#5a5f6a",0,30,0],[E.cone(10,30,4),"#ff7a2e",0,100,0],[E.box(26,14,3),"#8a8f99",8,84,0]]),a);i.parts.armR=mt(40,96,0,Oe(wt(ue([[E.cyl(7,6,34,6),"#3a3230",0,17,0]]),34),a),mt(0,-34,6,h)),i.parts.armR.children[1].rotation.x=1.4,t.add(i.parts.armR),e.add(i.parts.legL,i.parts.legR),i.light="#ff7a2e",i.h=170}else{let a=lt("#ffffff",{vc:!0,r:.5,m:.1});t.add(Oe(ue([[E.cyl(16,58,96,16),"#7a1c4e",0,48,0],[E.cyl(17,20,14,16),"#d64a8a",0,100,0],[E.cyl(14,17,30,12),"#e8b6c8",0,116,0],[E.sph(14,14,10),"#f5d2dc",0,146,0],[E.tor(57,3,6,32),"#ff6fb0",0,2,0,Math.PI/2,0,0],[E.sph(9,10,8),"#d64a8a",-18,126,0],[E.sph(9,10,8),"#d64a8a",18,126,0]]),a));let o=[];for(let v=-3;v<=3;v++)o.push([E.cone(4.5,30,5),"#ff6fb0",v*4,166+Math.abs(v)*-2,-6,-.5,0,v*.28]);t.add(Oe(ue(o),a));let l=new B.Mesh(ue(Array.from({length:7},(v,g)=>[E.cone(2.6,g%2?16:10,4),"#fff",-12+g*4,168,6])),rt("#ffd66b",2.6));t.add(l),i.glowMats.push(l.material);let c=new B.Mesh(ue([[E.sph(1.8,6,4),"#fff",-4.5,148,12.5],[E.sph(1.8,6,4),"#fff",4.5,148,12.5]]),rt("#ff3d8a",4));t.add(c);let h=wt(ue([[E.cyl(2.6,4,44,6),"#5a1a3a",0,22,0],[E.cone(3,10,4),"#ff3d8a",0,-4,0,Math.PI,0,0]]),44);i.parts.armL=mt(-24,128,0,Oe(h,a)),i.parts.armR=mt(24,128,0,Oe(h,a)),t.add(i.parts.armL,i.parts.armR);let u=new B.Group;for(let v=0;v<12;v++){let g=v/12*St,m=Oe(ue([[E.cone(5,54,5),"#3a1a2a",0,27,0]]),a,Math.cos(g)*66,0,Math.sin(g)*66,Math.sin(g)*.5,0,-Math.cos(g)*.5);u.add(m)}e.add(u),i.parts.roots=u;let d=rt("#ff3d8a",3);i.glowMats.push(d);let p=new B.Mesh(E.ico(6,1),d),f=new B.Mesh(E.ico(6,1),d);p.position.y=-46,f.position.y=-46,i.parts.armL.add(p),i.parts.armR.add(f),i.light="#ff4a9a",i.h=190}return e.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.material&&a.material.isMeshStandardMaterial&&(a.material=a.material.clone(),i.flash.push(a)))}),i}function Vf(r,e,t,i,n,s){let a=Math.sin(i);r.parts.legL&&(r.parts.legL.rotation.x=a*.5*n,r.parts.legR.rotation.x=-a*.5*n),r.body.position.y=(r.float||0)+Math.abs(Math.cos(i))*3*n+Math.sin(t*1.6)*(r.float?6:1);let o=s==="wind",l=s==="dash";r.parts.armL&&(r.parts.armL.rotation.x=o?-1.6:l?.9:-a*.4*n+Math.sin(t*2)*.1),r.parts.armR&&(r.parts.armR.rotation.x=o?-1.8:l?.9:a*.4*n-Math.sin(t*2)*.1),e==="queen"&&(r.parts.armL.rotation.z=.5+Math.sin(t*1.3)*.25,r.parts.armR.rotation.z=-.5-Math.sin(t*1.3)*.25,r.parts.roots.rotation.y=t*.3),e==="mass"&&(r.parts.faces.rotation.y=Math.sin(t*.8)*.4,r.parts.core.scale.setScalar(1+Math.sin(t*5)*.12)),r.parts.flame&&r.parts.flame.scale.set(1+Math.sin(t*13)*.12,1+Math.sin(t*9)*.2,1+Math.cos(t*11)*.12),r.body.rotation.z=o?Math.sin(t*40)*.03:0}function Wf(r,e){let t=new B.Group,i=null,n=lt("#ffffff",{vc:!0,r:.85}),s=e.a,a=e.trim;if(r==="pillar"){t.add(Oe(ue([[E.box(70,16,70),Rc(s,-.25),0,8,0],[E.cyl(30,32,10,16),Rc(s,.05),0,21,0],[E.cyl(26,27,190,16),Rc(s,.12),0,120,0],[E.cyl(31,27,12,16),a,0,218,0],[E.box(74,14,74),Rc(s,-.1),0,231,0]]),n)),t.add(Oe(ue([[E.box(5,18,5),"#3a2a1a",0,120,30,.5,0,0],[E.cyl(6,3,8,8),"#5a4026",0,130,36]]),n));let o=new B.Mesh(E.cone(5,16,6),rt(e.accent,3));o.position.set(0,142,36),t.add(o),t.userData.flame=o,i={y:140,z:36,color:e.accent,k:.85}}else if(r==="brazier"||r==="anvil"){t.add(Oe(ue([[E.cyl(3,4,40,6),"#2a2220",0,20,0],[E.cyl(22,12,14,12),"#6a4a2e",0,44,0],[E.tor(22,2.4,5,16),"#d9a65b",0,51,0,Math.PI/2,0,0],[E.cyl(12,16,6,8),"#2a2220",0,3,0]]),lt("#ffffff",{vc:!0,r:.5,m:.4})));let o=new B.Mesh(E.cone(14,34,8),rt(r==="anvil"?"#ff5a1a":"#ffae4a",2.8,{t:!0,op:.9}));o.position.y=66,t.add(o),t.userData.flame=o;let l=new B.Mesh(E.ico(10,1),rt("#fff3b0",3));l.position.y=54,t.add(l),i={y:70,color:r==="anvil"?"#ff6a2a":"#ffa04a",k:1.2}}else if(r==="hedge"){let o=[];for(let h=0;h<9;h++)o.push([E.ico(16+h%3*3,1),h%2?"#3f6a2a":"#4c7a32",-48+h*12,14+h%2*6,(h%3-1)*6]);t.add(Oe(ue(o),lt("#ffffff",{vc:!0,r:.9,flat:!0})));let l=new B.Mesh(ue(Array.from({length:10},(h,u)=>[E.sph(3,6,4),"#fff",-44+u*10,28+Math.sin(u*2.1)*6,8+Math.cos(u)*6])),rt(e.accent,2.2));t.add(l),t.add(Oe(ue([[E.cyl(2,2,60,6),"#2a2220",60,30,0],[E.box(12,14,12),"#3a2a1a",60,66,0]]),n));let c=new B.Mesh(E.box(8,10,8),rt("#ffd27a",3));c.position.set(60,66,0),t.add(c),i={x:60,y:66,color:"#ffc870",k:.8}}else if(r==="candles"){let o=[],l=[];for(let[h,u,d]of[[-14,22,0],[0,34,6],[12,18,-4],[-5,14,-10],[8,28,10],[18,12,8]])o.push([E.cyl(3,3.4,u,8),"#e8e0cc",h,u/2,d]),l.push([E.cone(2.4,7,5),"#fff",h,u+4,d]);o.push([E.cyl(28,30,4,14),"#2b3b3d",0,1,0]),t.add(Oe(ue(o),n));let c=new B.Mesh(ue(l),rt("#7ff0ff",3.2));t.add(c),t.userData.flame=c,i={y:40,color:"#7ff0ff",k:.8}}else if(r==="crystal"){let o=[];for(let[c,h,u,d,p]of[[-12,70,11,0,.1],[8,96,14,4,-.08],[22,50,9,-6,-.25],[-26,42,8,6,.3]])o.push([E.cone(u,h,6),"#fff",c,h/2,d,0,0,p]);let l=new B.Mesh(ue(o),rt(e.accent,1.6,{t:!0,op:.85}));l.castShadow=!0,t.add(l),i={y:60,color:"#9fe7ff",k:.9}}else if(r==="spire"){t.add(Oe(ue([[E.cone(18,150,6),"#4f5664",0,75,0],[E.box(40,12,40),"#30343d",0,6,0]]),lt("#ffffff",{vc:!0,r:.6,flat:!0})));let o=new B.Mesh(E.ico(10,1),rt("#c8d0ff",3.5));o.position.y=162,t.add(o),t.userData.flame=o,i={y:160,color:"#b8c4ff",k:1}}else if(r==="rune"){t.add(Oe(ue([[E.box(40,90,14),"#3a2f52",0,45,0,0,.2,.05],[E.box(46,8,18),"#1d1630",0,4,0]]),lt("#ffffff",{vc:!0,r:.6,flat:!0})));let o=new B.Mesh(ue([[E.box(3,30,1),"#fff",-6,52,8,0,.2,.3],[E.box(3,24,1),"#fff",6,46,8,0,.2,-.4],[E.box(16,3,1),"#fff",0,64,8,0,.2,0]]),rt(e.accent,3.5));t.add(o),t.userData.flame=o,i={y:50,z:10,color:e.accent,k:.9}}else if(r==="thornpile"){let o=[];for(let c=0;c<10;c++){let h=c/10*St;o.push([E.cone(4,50+c%3*14,5),"#3a0a10",Math.cos(h)*14,26,Math.sin(h)*14,Math.sin(h)*.6,0,-Math.cos(h)*.6])}t.add(Oe(ue(o),lt("#ffffff",{vc:!0,r:.7,flat:!0})));let l=new B.Mesh(ue(Array.from({length:6},(c,h)=>[E.ico(4,0),"#fff",Math.cos(h)*18,30+h*4,Math.sin(h*1.7)*18])),rt("#ff3a4a",3));t.add(l),i={y:40,color:"#ff3a4a",k:.8}}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!1)}),{group:t,light:i}}function Rc(r,e){let t=new B.Color(r);return e<0?t.multiplyScalar(1+e):t.lerp(new B.Color(1,1,1),e),"#"+t.getHexString()}var Cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p_=new Ln(-1,1,1,-1,0,1),xd=class extends ze{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}},f_=new xd,Fn=class{constructor(e){this._mesh=new Je(f_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,p_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pc=class extends vi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vn.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ca=class extends vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ic=class extends vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pc(Cc),this.copyPass.material.blending=Ku,this.clock=new cs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(a instanceof Ca?i=!0:a instanceof Ic&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uc=class extends vi{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Xf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ds=class r extends vi{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(s,a,{type:Ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ot(s,a,{type:Ei});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Ot(s,a,{type:Ei});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=Xf;this.highPassUniforms=vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Cc;this.copyUniforms=vn.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new Fn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ds.BlurDirectionX=new ne(1,0);ds.BlurDirectionY=new ne(0,1);var jf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dc=class extends vi{constructor(){super();let e=jf;this.uniforms=vn.clone(e.uniforms),this.material=new os({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pa=class extends Qr{constructor(){super();let e=new Bi;e.deleteAttribute("uv");let t=new Yi({side:Xt}),i=new Yi,n=new ls(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new Je(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Je(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Je(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Je(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Je(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Je(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Je(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Je(e,ps(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new Je(e,ps(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let f=new Je(e,ps(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let v=new Je(e,ps(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let g=new Je(e,ps(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Je(e,ps(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ps(r){let e=new Qt;return e.color.setScalar(r),e}var qf={iris:{name:"\u0418\u0440\u0438\u0441",title:"\u041A\u043B\u0438\u043D\u043E\u043A \u0417\u0430\u0440\u0438",cost:0,color:"#ffd27a",color2:"#ff9a4d",lore:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u044B\u0446\u0430\u0440\u044C \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430. \u0411\u044B\u0441\u0442\u0440\u0430\u044F, \u0442\u043E\u0447\u043D\u0430\u044F, \u0440\u0435\u0436\u0435\u0442 \u0442\u043E\u043B\u043F\u0443 \u0448\u0438\u0440\u043E\u043A\u0438\u043C\u0438 \u0432\u0437\u043C\u0430\u0445\u0430\u043C\u0438.",hp:120,speed:230,armor:0,regen:.6,start:"crescent",abilities:["crescent","blades","spears","radiance"],tags:["\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439","\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C"]},vale:{name:"\u0412\u0435\u0439\u043B",title:"\u041F\u0435\u043F\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0433",cost:1200,color:"#c49bff",color2:"#6f7dff",lore:"\u0427\u0430\u0440\u043E\u0434\u0435\u0439, \u0441\u0436\u0451\u0433\u0448\u0438\u0439 \u0441\u0432\u043E\u044E \u0431\u0430\u0448\u043D\u044E \u0440\u0430\u0434\u0438 \u0441\u0438\u043B\u044B. \u0411\u044C\u0451\u0442 \u0438\u0437\u0434\u0430\u043B\u0435\u043A\u0430, \u043D\u043E \u0445\u0440\u0443\u043F\u043E\u043A.",hp:95,speed:215,armor:0,regen:.4,start:"missile",abilities:["missile","chain","spirits","frost"],tags:["\u0414\u0430\u043B\u044C\u043D\u0438\u0439 \u0431\u043E\u0439","\u041C\u0430\u0433\u0438\u044F"]},thorn:{name:"\u0422\u043E\u0440\u043D",title:"\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0440\u0430\u0436",cost:2500,color:"#a8e070",color2:"#d89b52",lore:"\u0416\u0438\u0432\u0430\u044F \u0441\u043A\u0430\u043B\u0430 \u0438\u0437 \u0441\u0442\u0430\u0440\u043E\u0439 \u0441\u0442\u0440\u0430\u0436\u0438 \u0442\u0440\u043E\u043D\u0430. \u041C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0446\u0435\u043B\u0443\u044E \u0430\u0440\u043C\u0438\u044E.",hp:175,speed:195,armor:2,regen:1,start:"slam",abilities:["slam","axes","thorns","fissure"],tags:["\u0422\u0430\u043D\u043A","\u041E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u043D\u0438\u0435"]}};var Yf=[null,{name:"\u0422\u0440\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043B",sub:"\u0422\u0451\u043F\u043B\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C \u0438 \u0430\u043B\u044B\u0435 \u043A\u043E\u0432\u0440\u044B",hpM:1,dmgM:1,rateM:1,goldM:1,pal:{a:"#c8936a",b:"#b98260",grout:"#8a5c42",carpet:"#7e1f24",carpet2:"#a8343a",trim:"#d9a65b",accent:"#ffb85c",fog:"rgba(40,14,8,.55)",light:"rgba(255,190,120,.10)"},prop:"brazier",weather:"embers"},{name:"\u0421\u0430\u0434\u044B \u0422\u0435\u0440\u043D\u0438\u0439",sub:"\u0416\u0438\u0432\u044B\u0435 \u0438\u0437\u0433\u043E\u0440\u043E\u0434\u0438 \u0438 \u0440\u043E\u0437\u044B",hpM:1.45,dmgM:1.25,rateM:1.12,goldM:1.25,pal:{a:"#8e9b74",b:"#7f8d68",grout:"#56603f",carpet:"#3f5a2a",carpet2:"#5b7c3a",trim:"#c9b26a",accent:"#ff7aa2",fog:"rgba(10,24,8,.5)",light:"rgba(220,255,170,.08)"},prop:"hedge",weather:"petals"},{name:"\u0417\u0430\u0442\u043E\u043F\u043B\u0435\u043D\u043D\u0430\u044F \u043A\u0440\u0438\u043F\u0442\u0430",sub:"\u0421\u0432\u0435\u0447\u0438 \u0438 \u0447\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u0434\u0430",hpM:2,dmgM:1.5,rateM:1.22,goldM:1.55,pal:{a:"#4f6a6e",b:"#45605f",grout:"#2b3b3d",carpet:"#1b3a46",carpet2:"#245061",trim:"#9cc7c0",accent:"#7ff0ff",fog:"rgba(2,14,20,.62)",light:"rgba(140,240,255,.07)"},prop:"candles",weather:"drips"},{name:"\u041A\u0443\u0437\u043D\u044F \u041F\u0435\u043F\u043B\u0430",sub:"\u041B\u0430\u0432\u0430 \u043F\u043E\u0434 \u0431\u0430\u0437\u0430\u043B\u044C\u0442\u043E\u043C",hpM:2.7,dmgM:1.8,rateM:1.32,goldM:1.9,pal:{a:"#3b302d",b:"#342a27",grout:"#1b1312",carpet:"#5a1a0e",carpet2:"#8a2a10",trim:"#ff7a2e",accent:"#ff8a3a",fog:"rgba(30,6,0,.58)",light:"rgba(255,120,40,.12)"},prop:"anvil",weather:"ash"},{name:"\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0448\u043F\u0438\u043B\u044C",sub:"\u0418\u043D\u0435\u0439 \u0438 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u044B",hpM:3.5,dmgM:2.15,rateM:1.42,goldM:2.3,pal:{a:"#b9cfdc",b:"#a9c1d0",grout:"#7d97a8",carpet:"#2f4f7a",carpet2:"#3f6aa0",trim:"#e8f6ff",accent:"#9fe7ff",fog:"rgba(8,20,40,.5)",light:"rgba(200,240,255,.10)"},prop:"crystal",weather:"snow"},{name:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430",sub:"\u0421\u043B\u0430\u043D\u0435\u0446, \u0434\u043E\u0436\u0434\u044C \u0438 \u043C\u043E\u043B\u043D\u0438\u0438",hpM:4.4,dmgM:2.5,rateM:1.52,goldM:2.8,pal:{a:"#59606e",b:"#4f5664",grout:"#30343d",carpet:"#2c2a4a",carpet2:"#3d3a66",trim:"#b8c0ff",accent:"#c8d0ff",fog:"rgba(6,8,22,.6)",light:"rgba(180,190,255,.08)"},prop:"spire",weather:"rain"},{name:"\u041F\u0443\u0441\u0442\u043E\u0442\u0430 \u041A\u043E\u0440\u043E\u043D\u044B",sub:"\u0420\u0443\u043D\u044B \u043D\u0430\u0434 \u0431\u0435\u0437\u0434\u043D\u043E\u0439",hpM:5.6,dmgM:2.9,rateM:1.62,goldM:3.4,pal:{a:"#3a2f52",b:"#332a49",grout:"#1d1630",carpet:"#4a1d5e",carpet2:"#6c2a86",trim:"#d6a4ff",accent:"#e19bff",fog:"rgba(14,4,26,.62)",light:"rgba(210,150,255,.10)"},prop:"rune",weather:"motes"},{name:"\u041A\u0440\u043E\u0432\u0430\u0432\u043E\u0435 \u0437\u0430\u0442\u043C\u0435\u043D\u0438\u0435",sub:"\u0421\u043A\u0440\u044B\u0442\u044B\u0439 \u044D\u0448\u0435\u043B\u043E\u043D",hidden:!0,hpM:8,dmgM:3.6,rateM:1.8,goldM:5,pal:{a:"#2c1416",b:"#251113",grout:"#120607",carpet:"#5c0710",carpet2:"#8a0b18",trim:"#ff3a4a",accent:"#ff4a5a",fog:"rgba(30,0,4,.66)",light:"rgba(255,40,60,.12)"},prop:"thornpile",weather:"bloodmoon"}];var pt=1250,yd=340;var Zf={1:{hemi:["#ffcfa0","#1a0a06",.3],moon:["#ffd8b0",.75],fog:"#140906",dens:5e-4,exp:.95,mist:"#ffcfa0"},2:{hemi:["#d8f0c0","#0c140a",.32],moon:["#f0ffd8",.8],fog:"#0a1408",dens:5e-4,exp:.95,mist:"#d8ffd0"},3:{hemi:["#90d8f0","#04100f",.26],moon:["#a8e8ff",.6],fog:"#041016",dens:6e-4,exp:.95,mist:"#a0f0ff"},4:{hemi:["#ff9a70","#1a0400",.24],moon:["#ff8a50",.55],fog:"#160401",dens:6e-4,exp:.95,mist:"#ff9a60"},5:{hemi:["#d8ecff","#1a2638",.42],moon:["#e0f0ff",.9],fog:"#121e30",dens:55e-5,exp:.92,mist:"#ffffff"},6:{hemi:["#a8b0f0","#06081a",.26],moon:["#b8c0ff",.6],fog:"#070918",dens:6e-4,exp:.95,mist:"#c0c8ff"},7:{hemi:["#d0a0f0","#0e041a",.26],moon:["#c890ff",.55],fog:"#0e0418",dens:6e-4,exp:.95,mist:"#d6a4ff"},8:{hemi:["#ff8080","#180102",.24],moon:["#ff5060",.55],fog:"#180103",dens:65e-5,exp:.98,mist:"#ff6070"}};function Jf(r){return new B.ShaderMaterial({uniforms:{map:{value:Of()},uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 pcol; varying vec3 vC; varying float vA;
      uniform float uScale;
      void main(){ vC = pcol; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); if (gl_FragColor.a < 0.004) discard; }`,transparent:!0,depthWrite:!1,blending:r?B.AdditiveBlending:B.NormalBlending})}var Nc=class{constructor(e,t){this.n=e,this.i=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.a0=new Float32Array(e);let i=new B.BufferGeometry;i.setAttribute("position",new B.BufferAttribute(this.pos,3).setUsage(B.DynamicDrawUsage)),i.setAttribute("pcol",new B.BufferAttribute(this.col,3).setUsage(B.DynamicDrawUsage)),i.setAttribute("size",new B.BufferAttribute(this.size,1).setUsage(B.DynamicDrawUsage)),i.setAttribute("alpha",new B.BufferAttribute(this.alpha,1).setUsage(B.DynamicDrawUsage)),this.geo=i,this.mat=Jf(t),this.obj=new B.Points(i,this.mat),this.obj.frustumCulled=!1}emit(e,t,i,n,s,a,o,l,c,h,u=0,d=.9,p=1){let f=this.i;this.i=(this.i+1)%this.n,this.pos[f*3]=e,this.pos[f*3+1]=t,this.pos[f*3+2]=i,this.vel[f*3]=n,this.vel[f*3+1]=s,this.vel[f*3+2]=a,this.col[f*3]=h.r,this.col[f*3+1]=h.g,this.col[f*3+2]=h.b,this.life[f]=o,this.max[f]=o,this.s0[f]=l,this.s1[f]=c,this.grav[f]=u,this.drag[f]=d,this.a0[f]=p}update(e){let t=this.pos,i=this.vel;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0,this.size[s]=0;continue}this.life[s]-=e;let a=1-Math.max(0,this.life[s])/this.max[s],o=Math.pow(this.drag[s],e*60);i[s*3]*=o,i[s*3+1]=i[s*3+1]*o-this.grav[s]*e,i[s*3+2]*=o,t[s*3]+=i[s*3]*e,t[s*3+1]+=i[s*3+1]*e,t[s*3+2]+=i[s*3+2]*e,t[s*3+1]<0&&(t[s*3+1]=0,i[s*3+1]*=-.35),this.size[s]=this.s0[s]+(this.s1[s]-this.s0[s])*a,this.alpha[s]=this.a0[s]*(a<.1?a/.1:1-(a-.1)/.9)}let n=this.geo.attributes;n.position.needsUpdate=n.pcol.needsUpdate=n.size.needsUpdate=n.alpha.needsUpdate=!0}},Oc=class{constructor(e){this.n=e,this.c=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e);let t=new B.BufferGeometry;t.setAttribute("position",new B.BufferAttribute(this.pos,3).setUsage(B.DynamicDrawUsage)),t.setAttribute("pcol",new B.BufferAttribute(this.col,3).setUsage(B.DynamicDrawUsage)),t.setAttribute("size",new B.BufferAttribute(this.size,1).setUsage(B.DynamicDrawUsage)),t.setAttribute("alpha",new B.BufferAttribute(this.alpha,1).setUsage(B.DynamicDrawUsage)),this.geo=t,this.mat=Jf(!0),this.obj=new B.Points(t,this.mat),this.obj.frustumCulled=!1}begin(){this.c=0}add(e,t,i,n,s,a=1){if(this.c>=this.n)return;let o=this.c++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=i,this.col[o*3]=s.r,this.col[o*3+1]=s.g,this.col[o*3+2]=s.b,this.size[o]=n,this.alpha[o]=a}end(){this.geo.setDrawRange(0,this.c);let e=this.geo.attributes;e.position.needsUpdate=e.pcol.needsUpdate=e.size.needsUpdate=e.alpha.needsUpdate=!0}};function br(r,e,t=32){let i=[],n=[],s=[];for(let o=0;o<=t;o++){let l=-e/2+o/t*e,c=Math.cos(l),h=Math.sin(l);if(i.push(c*r,0,h*r,c,0,h),n.push(o/t,0,o/t,1),o<t){let u=o*2;s.push(u,u+1,u+2,u+1,u+3,u+2)}}let a=new B.BufferGeometry;return a.setAttribute("position",new B.Float32BufferAttribute(i,3)),a.setAttribute("uv",new B.Float32BufferAttribute(n,2)),a.setIndex(s),a}function Wt(r,e,t){return new B.MeshBasicMaterial({color:new B.Color(r).multiplyScalar(e),map:t,transparent:!0,depthWrite:!1,blending:B.AdditiveBlending,side:B.DoubleSide,fog:!1})}function m_(r){let e=Ji(1024,1024,t=>{for(let n=0;n<8;n++)for(let s=0;s<8;s++){let a=new B.Color((s+n)%2?r.a:r.b),o=.88+(s*7+n*13)%7/30;a.multiplyScalar(o),t.fillStyle="#"+a.getHexString(),t.fillRect(s*128,n*128,128,128),t.fillStyle="rgba(255,255,255,.07)",t.fillRect(s*128+3,n*128+3,122,6),t.fillRect(s*128+3,n*128+3,6,122),t.fillStyle="rgba(0,0,0,.14)",t.fillRect(s*128+3,n*128+128-9,122,6),t.fillRect(s*128+128-9,n*128+3,6,122);for(let c=0;c<70;c++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.06})`,t.fillRect(s*128+Math.random()*128,n*128+Math.random()*128,2+Math.random()*4,2+Math.random()*4);let l=t.createRadialGradient(s*128+64,n*128+64,4,s*128+64,n*128+64,80);if(l.addColorStop(0,"rgba(255,255,255,.05)"),l.addColorStop(1,"rgba(0,0,0,.05)"),t.fillStyle=l,t.fillRect(s*128,n*128,128,128),(s*3+n*5)%5===0){t.strokeStyle="rgba(0,0,0,.28)",t.lineWidth=1.5,t.beginPath();let c=s*128+20+Math.random()*40,h=n*128+20+Math.random()*40;t.moveTo(c,h);for(let u=0;u<5;u++)c+=Math.random()*18-4,h+=Math.random()*18-4,t.lineTo(c,h);t.stroke()}if((s+n)%2===0){t.strokeStyle="rgba(255,240,200,.08)",t.lineWidth=2;let c=s*128+64,h=n*128+64;t.beginPath(),t.moveTo(c,h-22),t.lineTo(c+22,h),t.lineTo(c,h+22),t.lineTo(c-22,h),t.closePath(),t.stroke()}}t.strokeStyle=r.grout,t.lineWidth=4;for(let n=0;n<=8;n++)t.beginPath(),t.moveTo(n*128,0),t.lineTo(n*128,1024),t.stroke(),t.beginPath(),t.moveTo(0,n*128),t.lineTo(1024,n*128),t.stroke()});return e.repeat.set(pt*2/640,pt*2/640),e}function g_(r){return Ji(128,512,e=>{e.fillStyle=r.carpet,e.fillRect(0,0,128,512),e.fillStyle=r.carpet2,e.fillRect(12,0,104,512),e.fillStyle=r.trim,e.fillRect(7,0,4,512),e.fillRect(117,0,4,512),e.globalAlpha=.35,e.strokeStyle=r.trim,e.lineWidth=3;for(let t=0;t<512;t+=128)e.beginPath(),e.moveTo(64,t+20),e.lineTo(100,t+64),e.lineTo(64,t+108),e.lineTo(28,t+64),e.closePath(),e.stroke(),e.beginPath(),e.arc(64,t+64,12,0,St),e.stroke();e.globalAlpha=.12;for(let t=0;t<900;t++)e.fillStyle=Math.random()<.5?"#000":"#fff",e.fillRect(Math.random()*128,Math.random()*512,1,2)})}function Kf(r,e={}){let t=new B.WebGLRenderer({canvas:r,antialias:!1,powerPreference:"high-performance",stencil:!1});t.toneMapping=B.ACESFilmicToneMapping,t.outputColorSpace=B.SRGBColorSpace,t.shadowMap.enabled=!0,t.shadowMap.type=B.PCFSoftShadowMap;let i=new B.Scene,n=new B.PerspectiveCamera(46,1,30,5e3),s=new B.PMREMGenerator(t);i.environment=s.fromScene(new Pa,.04).texture,i.environmentIntensity=.22;let a=e.quality||"high",o=null,l=null;function c(H,T){if(a==="low"){o=null;return}o||(o=new Lc(t),o.addPass(new Uc(i,n)),l=new ds(new B.Vector2(H/2,T/2),.62,.5,.86),o.addPass(l),o.addPass(new Dc)),o.setSize(H,T),l.resolution.set(H/2,T/2)}let h=new B.Group;i.add(h);let u=new Nc(2600,!0),d=new Nc(700,!1),p=new Oc(900);i.add(u.obj,d.obj,p.obj);let f=new B.HemisphereLight("#ffffff","#000000",.5);i.add(f);let v=new B.DirectionalLight("#ffffff",1);v.castShadow=!0,v.shadow.mapSize.set(1024,1024),v.shadow.bias=-8e-4,v.shadow.normalBias=1.5;let g=v.shadow.camera;g.left=-560,g.right=560,g.top=560,g.bottom=-560,g.near=50,g.far=2200,i.add(v,v.target);let _=Array.from({length:a==="low"?3:5},()=>{let H=new B.PointLight("#ffaa55",0,520,1.6);return i.add(H),H}),x=new B.PointLight("#ffd9a0",0,420,1.5);i.add(x);let y=new B.PointLight("#ff4a9a",0,600,1.5);i.add(y);let P=new B.PointLight("#ffffff",0,700,1.4);i.add(P);let C=1,U=1,k=1,M={renderer:t,scene:i,camera:n,quality:a,level:null,hero:null,heroId:null,bosses:new Map,lights:[],target:new B.Vector3,camDist:900,t:0,flashT:0,fx:new Map,spikes:[],zones:new Map,seen:new WeakSet,shake:0},X=br(.84,St,64),Z=br(.93,St,64),j=new B.CylinderGeometry(1,1,1,48,1,!0);j.translate(0,.5,0);let K=new Map,q=(H,T)=>{let oe=H.toFixed(2)+T,le=K.get(oe);return le||K.set(oe,le=br(T,H,32)),le},$=new B.PlaneGeometry(1,1);$.rotateX(-Math.PI/2);let te={},de=lt("#ffffff",{vc:!0,r:.78}),pe=lt("#ffffff",{vc:!0,r:.35,m:.55}),we=lt("#ffffff",{vc:!0,r:.9,flat:!0}),Ie=lt("#ffffff",{vc:!0,r:.8,ds:!0});for(let[H,T]of Object.entries(Gf)){let oe=T();oe.meshes=oe.parts.map(le=>{let _e;le.mat==="vc"?_e=de:le.mat==="metal"?_e=pe:le.mat==="stone"?_e=we:le.mat==="vcds"?_e=Ie:_e=rt(le.mat.slice(5),3.2);let Pe=new B.InstancedMesh(le.geo,_e,yd);Pe.instanceMatrix.setUsage(B.DynamicDrawUsage),Pe.castShadow=!le.mat.startsWith("glow")&&a==="high",Pe.frustumCulled=!1,Pe.count=0;for(let ke=0;ke<yd;ke++)Pe.setColorAt(ke,new B.Color(1,1,1));return i.add(Pe),Pe}),te[H]=oe}let se=new B.InstancedMesh($,new B.MeshBasicMaterial({map:Ff(),transparent:!0,depthWrite:!1,color:"#000000"}),900);se.material.color.set("#ffffff"),se.frustumCulled=!1,se.count=0,i.add(se);let he=new B.InstancedMesh(E.oct(7),new B.MeshBasicMaterial({color:"#ffffff"}),700),Te=new B.InstancedMesh(ue([[E.cyl(7,7,2.2,14),"#ffc93a"],[E.cyl(4.4,4.4,2.6,10),"#fff0a0"]]),lt("#ffffff",{vc:!0,m:.9,r:.28}),400),Me=new B.InstancedMesh(ue([[E.sph(5,8,6),"#fff",-3.5,2,0],[E.sph(5,8,6),"#fff",3.5,2,0],[E.cone(6.8,10,8),"#fff",0,-4.5,0,Math.PI,0,0]]),rt("#ff4d6d",2.6),40);for(let H of[he,Te,Me])H.instanceMatrix.setUsage(B.DynamicDrawUsage),H.frustumCulled=!1,H.count=0,i.add(H);for(let H=0;H<700;H++)he.setColorAt(H,new B.Color(1,1,1));let D=[new B.Color(.5,1.2,3.6),new B.Color(.5,3.2,1.4),new B.Color(3,.7,3.8)],S=(()=>{let H=new B.Group;H.add(new B.Mesh(ue([[E.cyl(1.8,1.8,46,6),"#ffd66b",0,0,0],[E.tor(6,1.4,5,12),"#ffd66b",0,22,0,Math.PI/2,0,0]]),lt("#ffffff",{vc:!0,m:.9,r:.3})));let T=new B.Mesh(E.oct(8),rt("#9fd4ff",3.4));T.position.y=34,T.scale.set(.8,1.5,.8),H.add(T);let oe=new B.Mesh(j,Wt("#6fb0ff",1.4,Ra()));return oe.scale.set(26,260,26),oe.position.y=-40,H.add(oe),H.userData.cr=T,H.visible=!1,i.add(H),H})(),z=new B.InstancedMesh(ue([[E.oct(1),"#fff",0,0,0,0,0,0,3.2,3.2,22],[E.cone(2.2,9,4),"#fff",0,0,24,Math.PI/2,0,0]]),rt("#fff2c0",3),200),Y=new B.InstancedMesh($,Wt("#ffd27a",1.6,Ra()),200),L=new B.InstancedMesh(ue([[E.cyl(1.6,1.6,30,5),"#5a3a24",0,0,0,0,0,Math.PI/2],[E.box(10,2,16),"#e8e2d6",12,0,4],[E.box(10,2,16),"#e8e2d6",-12,0,-4]]),lt("#ffffff",{vc:!0,m:.7,r:.3}),60),N=new B.InstancedMesh(ue([[E.oct(1),"#fff",0,0,0,0,0,0,4,1.4,18]]),rt("#bff4ff",3.2),40),w=new B.InstancedMesh(ue([[E.cone(4,22,5),"#5a4a2a",0,11,0],[E.cone(1.6,7,4),"#d8ff90",0,22,0]]),lt("#ffffff",{vc:!0,r:.6,flat:!0}),40),F=new B.InstancedMesh(ue([[E.cone(11,46,5),"#8a7a64",0,23,0],[E.cone(6,26,5),"#b8a684",6,13,4,.2,0,-.3]]),lt("#ffffff",{vc:!0,r:.9,flat:!0}),260);for(let H of[z,Y,L,N,w,F])H.instanceMatrix.setUsage(B.DynamicDrawUsage),H.frustumCulled=!1,H.count=0,i.add(H);let O=new B.Mesh(Z,Wt("#a8e070",.8,Ai()));O.visible=!1,i.add(O);let ee=new B.Mesh(br(.78,St,48),Wt("#ffd27a",.4,Ai()));ee.position.y=1.5,i.add(ee);let G=new B.MeshBasicMaterial({color:"#ff2a2a",transparent:!0,opacity:.3,depthWrite:!1,fog:!1}),Q=new B.Mesh($,G);Q.visible=!1,i.add(Q);let ae=new B.Mesh(br(.6,St,48),Wt("#ff2a6a",.9,Ai()));ae.visible=!1,i.add(ae);function ie(){M.level&&(i.remove(M.level),M.level.traverse(H=>{H.geometry&&!H.userData.shared&&H.geometry.dispose()})),M.level=null,M.lights=[],M.hero&&(i.remove(M.hero.root),M.hero=null);for(let H of M.bosses.values())i.remove(H.root);M.bosses.clear(),M.fx.forEach(H=>H.objs.forEach(T=>i.remove(T))),M.fx.clear(),M.zones.forEach(H=>i.remove(H.obj)),M.zones.clear()}M.begin=function(H){ie();let T=Yf[H.ech],oe=T.pal,le=Zf[H.ech]||Zf[1];M.pal=oe,M.mood=le,M.ech=H.ech,M.weather=T.weather;let _e=new B.Group;M.level=_e,i.add(_e),i.background=new B.Color(le.fog),i.fog=new B.FogExp2(le.fog,le.dens),t.toneMappingExposure=le.exp,f.color.set(le.hemi[0]),f.groundColor.set(le.hemi[1]),f.intensity=le.hemi[2],v.color.set(le.moon[0]),v.intensity=le.moon[1];let Pe=new B.Mesh(new B.PlaneGeometry(pt*2,pt*2),new B.MeshStandardMaterial({map:m_(oe),color:"#b8b0a8",roughness:.42,metalness:.1}));Pe.rotation.x=-Math.PI/2,Pe.receiveShadow=!0,_e.add(Pe);let ke=g_(oe);ke.repeat.set(1,pt*2.83/600);for(let ft of[Math.PI/4,-Math.PI/4]){let ct=new B.Mesh(new B.PlaneGeometry(150,pt*2.83),new B.MeshStandardMaterial({map:ke,color:"#a09088",roughness:.95}));ct.rotation.x=-Math.PI/2,ct.rotation.z=ft,ct.position.y=.8,ct.receiveShadow=!0,_e.add(ct)}let st=new B.Mesh(br(.86,St,96),Wt(oe.trim,.22,Ai()));st.scale.setScalar(240),st.position.y=1.2,_e.add(st);let Tt=new B.Mesh(br(.95,St,96),Wt(oe.trim,.15,Ai()));Tt.scale.setScalar(200),Tt.position.y=1.2,_e.add(Tt);let zt=lt("#ffffff",{vc:!0,r:.85}),Pi=ue([[E.box(pt*2+60,46,30),Ia(oe.a,-.35),0,23,-pt-15],[E.box(pt*2+60,46,30),Ia(oe.a,-.35),0,23,pt+15],[E.box(30,46,pt*2),Ia(oe.a,-.35),-pt-15,23,0],[E.box(30,46,pt*2),Ia(oe.a,-.35),pt+15,23,0],[E.box(pt*2+70,8,38),oe.trim,0,50,-pt-15],[E.box(pt*2+70,8,38),oe.trim,0,50,pt+15],[E.box(38,8,pt*2),oe.trim,-pt-15,50,0],[E.box(38,8,pt*2),oe.trim,pt+15,50,0]]),oi=new B.Mesh(Pi,zt);oi.receiveShadow=!0,_e.add(oi);let Ut=ue([[E.cyl(9,11,70,8),Ia(oe.a,-.2),0,35,0],[E.sph(11,8,6),oe.trim,0,76,0]]),gt=new B.InstancedMesh(Ut,zt,120),li=0,ti=new B.Matrix4;for(let ft=-pt;ft<=pt;ft+=125)for(let[ct,ht]of[[ft,-pt-15],[ft,pt+15],[-pt-15,ft],[pt+15,ft]])li<120&&gt.setMatrixAt(li++,ti.makeTranslation(ct,0,ht));gt.count=li,_e.add(gt);let _i=new B.Mesh(new B.PlaneGeometry(9e3,9e3),new B.MeshBasicMaterial({color:new B.Color(le.fog).multiplyScalar(.6)}));_i.rotation.x=-Math.PI/2,_i.position.y=-260,_e.add(_i);for(let ft of H.props){let{group:ct,light:ht}=Wf(ft.kind,oe);if(ct.position.set(ft.x,0,ft.y),ct.rotation.y=Math.atan2(-ft.x,-ft.y),_e.add(ct),ht){let Bn=new B.Vector3(ht.x||0,ht.y,ht.z||0).applyEuler(ct.rotation).add(ct.position);M.lights.push({p:Bn,color:new B.Color(ht.color),k:ht.k,flame:ct.userData.flame,ph:Math.random()*10})}}let ki=Bf();M.mist=[];for(let ft=0;ft<3;ft++){let ct=new B.MeshBasicMaterial({map:ki.clone(),color:new B.Color(le.mist).multiplyScalar(.5),transparent:!0,opacity:.2-ft*.05,depthWrite:!1,fog:!1,blending:B.AdditiveBlending});ct.map.needsUpdate=!0,ct.map.wrapS=ct.map.wrapT=B.RepeatWrapping,ct.map.repeat.set(2.2,2.2);let ht=new B.Mesh(new B.PlaneGeometry(2400,2400),ct);ht.rotation.x=-Math.PI/2,ht.position.y=10+ft*16,ht.renderOrder=5,_e.add(ht),M.mist.push(ht)}M.wx&&i.remove(M.wx.obj),M.wx=new Oc(420),M.wx.mat.blending=M.weather==="snow"||M.weather==="ash"?B.NormalBlending:B.AdditiveBlending,M.wxp=Array.from({length:420},()=>({x:Fe(-900,900),y:Fe(0,420),z:Fe(-900,900),s:Math.random()})),i.add(M.wx.obj),M.heroId=H.hero,M.hero=vd(H.hero),i.add(M.hero.root),x.color.set(M.hero.light),ee.material.color.set(qf[H.hero].color).multiplyScalar(.4),M.heroAtk=0,M.heroYaw=0,M.flashT=0,M.hurtT=0,M.lvlFx=[],M.t=0};let re=(H,T=1)=>new B.Color(H).multiplyScalar(T),Ee={skel:["#efe7d1","#9a8f78"],ghoul:["#a8c88a","#4b5a46"],bat:["#9a6ad0","#3a2350"],brute:["#e07a5a","#5c2420"],wraith:["#d68bff","#2a1c48"],ember:["#ffae4a","#ff5a1a"]};function ve(H,T,oe,le,_e,Pe=160,ke=.6,st=9,Tt=300,zt=!0){let Pi=zt?u:d;for(let oi=0;oi<le;oi++){let Ut=Fe(0,St),gt=Fe(.3,1)*Pe;Pi.emit(H,T,oe,Math.cos(Ut)*gt,Fe(.3,1.2)*Pe*.8,Math.sin(Ut)*gt,ke*Fe(.6,1.2),st,st*.2,_e,Tt,.93)}}function Ne(H,T,oe,le,_e=40,Pe=1){for(let ke=0;ke<oe;ke++)d.emit(H+Fe(-14,14),Fe(6,24),T+Fe(-14,14),Fe(-40,40),Fe(10,40),Fe(-40,40),Pe*Fe(.7,1.2),_e*.5,_e,le,-10,.94,.45)}M.events=function(H){for(let T of H)switch(T.k){case"hit":{let oe=T.crit?re("#ff6a3a",3):re("#fff1c8",2.2);ve(T.x,26,T.y,T.crit?9:4,oe,T.crit?240:150,.32,T.crit?10:7,200),T.crit&&u.emit(T.x,30,T.y,0,0,0,.16,70,20,re("#ffd0a0",2));break}case"kill":{let oe=Ee[T.look]||["#ffffff","#888888"];ve(T.x,22,T.y,10,re(oe[0],1.6),200,.7,9,520),Ne(T.x,T.y,3,re(oe[1],.6),34,.8),u.emit(T.x,30,T.y,0,70,0,.9,22,4,re(T.look==="ember"?"#ff8a3a":"#c8e0ff",1.6),-40),T.look==="ember"&&(ve(T.x,20,T.y,26,re("#ff8a3a",3),320,.6,12,200),M.flashAt(T.x,T.y,"#ff7a2a",1.4));break}case"bosskill":{ve(T.x,60,T.y,120,re("#ffd0f0",2.6),520,1.6,16,240),Ne(T.x,T.y,24,re("#3a1a2a",.8),120,2),M.flashAt(T.x,T.y,"#ffffff",5),M.shake=1;break}case"levelup":M.lvlFx.push({t:0,k:"lvl"}),ve(M.target.x,10,M.target.z,40,re("#ffd27a",2.6),260,1.1,10,-60),M.flashAt(M.target.x,M.target.z,"#ffd27a",2.6);break;case"scepter":M.lvlFx.push({t:0,k:"scep"}),ve(M.target.x,10,M.target.z,50,re("#7fd8ff",2.8),300,1.2,11,-80),M.flashAt(M.target.x,M.target.z,"#7fb4ff",3);break;case"pickup":u.emit(M.target.x,40,M.target.z,0,60,0,.3,16,2,T.kind==="coin"?re("#ffd66b",2.4):T.kind==="heal"?re("#ff6f8f",2.4):re("#7fc8ff",2.4));break;case"attack":M.heroAtk=.001,M.atkDir=T.dir;break;case"hurt":M.hurtT=.25,ve(M.target.x,40,M.target.z,8,re("#ff3040",2),180,.4,8,300);break;case"boss":Ne(T.x,T.y,30,re("#140810",.8),120,2.2),ve(T.x,30,T.y,50,re(T.final?"#ff3d8a":"#ff9040",2.4),380,1,12,100),M.flashAt(T.x,T.y,T.final?"#ff3d8a":"#ff9040",4);break;case"phase2":M.fxNova(T.x,T.y,520,"#ff2a6a",.9),ve(T.x,80,T.y,90,re("#ff3d8a",3),480,1.2,14,120),M.flashAt(T.x,T.y,"#ff2a6a",6);break;case"revive":M.lvlFx.push({t:0,k:"lvl"}),M.fxNova(M.target.x,M.target.z,280,"#ffd27a",.6);break}},M.flashAt=(H,T,oe,le)=>{P.position.set(H,90,T),P.color.set(oe),M.flashT=le},M.fxNova=(H,T,oe,le,_e)=>{let Pe={k:"nova",x:H,y:T,r:oe,t:0,life:_e,col:le,own:!0};M.ownFx=M.ownFx||[],M.ownFx.push(Pe)},M.resize=function(H,T,oe){C=H,U=T,k=oe,t.setPixelRatio(k),t.setSize(H,T,!1),n.aspect=H/T;let le=n.fov*Math.PI/360,_e=190/(Math.tan(le)*n.aspect),Pe=235/Math.tan(le);M.camDist=M.camOverride||Math.min(1300,Math.max(_e,Pe,480)),n.updateProjectionMatrix(),c(H*k,T*k);let ke=T*k/2/Math.tan(le);for(let st of[u.mat,d.mat,p.mat])st.uniforms.uScale.value=ke;M.wx&&(M.wx.mat.uniforms.uScale.value=ke),M.uScale=ke},M.setQuality=function(H){if(H!==a){a=H,M.quality=H,t.shadowMap.enabled=H!=="low",v.castShadow=H!=="low";for(let T of Object.values(te))T.meshes.forEach(oe=>{oe.castShadow=H==="high"&&!oe.material.isMeshBasicMaterial});i.traverse(T=>{T.material&&(T.material.needsUpdate=!0)}),H==="low"?o=null:c(C*k,U*k)}};let je=new B.Vector3;M.project=function(H,T,oe=0){return je.set(H,oe,T).project(n),{x:(je.x*.5+.5)*C,y:(-je.y*.5+.5)*U,vis:je.z<1}};let Ae=new B.Matrix4,Re=new B.Matrix4,Le=new B.Quaternion,$e=new B.Euler,Ze=new B.Vector3,be=new B.Vector3(1,1,1),Ve=new B.Vector3(1,1,1),Qe=new B.Color,Ri=new B.Vector3(0,1,0);M.frame=function(H,T,oe){M.t=T;let le=H.pl;M.target.set(H.cam.x,0,H.cam.y);let _e=.98,Pe=(H.shake||0)*.9+M.shake*10;M.shake=Math.max(0,M.shake-oe*2),n.position.set(M.target.x+Fe(-Pe,Pe),Math.sin(_e)*M.camDist,M.target.z+Math.cos(_e)*M.camDist+Fe(-Pe,Pe)),n.lookAt(M.target.x,20,M.target.z-30),v.position.set(M.target.x-380,900,M.target.z+260),v.target.position.copy(M.target);let ke=M.lights;for(let b of ke)b.d=(b.p.x-M.target.x)**2+(b.p.z-M.target.z)**2;ke.sort((b,I)=>b.d-I.d),_.forEach((b,I)=>{let V=ke[I];if(!V){b.intensity=0;return}let ce=.85+Math.sin(M.t*11+V.ph)*.08+Math.sin(M.t*23+V.ph*2)*.05;b.position.copy(V.p),b.color.copy(V.color),b.intensity=5200*V.k*ce});for(let b of ke)if(b.flame){let I=.9+Math.sin(M.t*12+b.ph)*.12;b.flame.scale.set(I,1+Math.sin(M.t*9+b.ph)*.18,I)}x.position.set(le.x,130,le.y+40),x.intensity=1500+M.flashT*400,M.flashT=Math.max(0,M.flashT-oe*4),P.intensity=M.flashT*3e3,M.mist&&M.mist.forEach((b,I)=>{b.position.x=Math.round(M.target.x/50)*50,b.position.z=Math.round(M.target.z/50)*50,b.material.map.offset.set(b.position.x/2400*2.2+M.t*(.006+I*.004),-b.position.z/2400*2.2+M.t*.003*(I+1))});let st=M.hero;if(st){let b=Math.min(1,Math.hypot(le.vx,le.vy)/Math.max(1,le.speed)),I=M.heroYaw;M.heroAtk>0&&M.atkDir!=null?I=Math.atan2(Math.cos(M.atkDir),Math.sin(M.atkDir)):b>.1&&(I=Math.atan2(le.vx,le.vy));let V=I-M.heroYaw;V=Math.atan2(Math.sin(V),Math.cos(V)),M.heroYaw+=V*Math.min(1,oe*14),st.root.position.set(le.x,0,le.y),st.root.rotation.y=M.heroYaw,M.heroAtk>0&&(M.heroAtk+=oe*4.5,M.heroAtk>=1&&(M.heroAtk=0)),_d(st,M.t,le.anim*.55*Math.PI,b,M.heroAtk,M.heroId),M.hurtT=Math.max(0,M.hurtT-oe);let ce=le.inv>0&&Math.floor(M.t*18)%2===0;st.flash.forEach(fe=>{fe.material.emissive.setRGB(M.hurtT>0?.9:0,M.hurtT>0?.08:0,M.hurtT>0?.08:0)}),st.root.visible=!(ce&&le.inv>.6),st.glowMats.forEach(fe=>{fe.color}),ee.position.set(le.x,1.5,le.y),ee.scale.setScalar(34+Math.sin(M.t*3)*2),Math.random()<.3&&M.heroId==="vale"&&u.emit(le.x+Fe(-14,14),Fe(10,50),le.y+Fe(-14,14),0,30,0,.9,5,1,re("#c9a6ff",2.4),-20)}let Tt={};for(let b in te)Tt[b]=0;let zt=0,Pi=H.t,oi=new Set;for(let b of H.enemies){if(b.dead)continue;let I=b.x-M.target.x,V=b.y-M.target.z;if(b.boss){oi.add(b);continue}if(I*I+V*V>1100*1100)continue;let ce=te[b.T.look];if(!ce)continue;let fe=Tt[b.T.look];if(fe>=yd)continue;Tt[b.T.look]++,M.seen.has(b)||(M.seen.add(b),I*I+V*V<800*800&&Ne(b.x,b.y,2,re("#0a0608",.6),30,.7));let xe=b.born!=null?Pi-b.born:1,ye=Math.min(1,xe/.35),Ce=Math.atan2(le.x-b.x,le.y-b.y);b._yaw=b._yaw==null?Ce:b._yaw+Math.atan2(Math.sin(Ce-b._yaw),Math.cos(Ce-b._yaw))*Math.min(1,oe*8);let Ue=ce.fly||0;Ze.set(b.x,Ue-(1-ye)*30,b.y),Le.setFromAxisAngle(Ri,b._yaw);let Be=b.T.r/({skel:13,ghoul:12,bat:9,brute:22,wraith:13,ember:12}[b.T.look]||13)*(.6+.4*ye);be.set(Be,Be*(b.stun>0?.9:1),Be),Ae.compose(Ze,Le,be);let vt=b.frame*1.7,_t=b.flash>0,Ct=b.slowT>0;for(let at=0;at<ce.parts.length;at++){let Ye=ce.parts[at],ut=Ye.anim(vt,M.t,b);$e.set(ut[0],ut[1],ut[2]),Le.setFromEuler($e),Ze.set(Ye.at[0],Ye.at[1]+(ut[3]||0),Ye.at[2]),Re.compose(Ze,Le,Ve),Re.premultiply(Ae);let Pt=ce.meshes[at];if(Pt.setMatrixAt(fe,Re),_t)Qe.setRGB(4,4,4);else if(Ct)Qe.setRGB(.55,.85,1.6);else if(Ye.pulse){let Ge=.75+Math.sin(M.t*8+b.x)*.25;Qe.setRGB(Ge,Ge,Ge)}else Qe.setRGB(1,1,1);Pt.setColorAt(fe,Qe)}zt<900&&(Ae.compose(Ze.set(b.x,1,b.y),Le.identity(),be.set(ce.shadow*2.4*Be,1,ce.shadow*2.4*Be)),se.setMatrixAt(zt++,Ae)),b.T.look==="ember"&&Math.random()<.15&&u.emit(b.x+Fe(-8,8),20,b.y+Fe(-8,8),0,60,0,.6,6,1,re("#ff8a3a",2.4),-30),b.T.look==="wraith"&&Math.random()<.12&&d.emit(b.x,Fe(4,20),b.y,0,10,0,1,14,30,re("#3a2a5c",.6),-6,.95,.4)}for(let[b,I]of Object.entries(te))I.meshes.forEach(V=>{V.count=Tt[b],V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0)});for(let[b,I]of M.bosses)oi.has(b)||(i.remove(I.root),M.bosses.delete(b));let Ut=null;for(let b of oi){let I=M.bosses.get(b);I||(I=Hf(b.look),i.add(I.root),M.bosses.set(b,I),I.born=M.t),Ut=b;let V=b.state==="dash"||b.state==="wind"?Math.atan2(Math.cos(b.da||0),Math.sin(b.da||0)):Math.atan2(le.x-b.x,le.y-b.y);I.yaw=I.yaw==null?V:I.yaw+Math.atan2(Math.sin(V-I.yaw),Math.cos(V-I.yaw))*Math.min(1,oe*5);let ce=Math.min(1,(M.t-I.born)/.8);I.root.position.set(b.x,-(1-ce)*120,b.y),I.root.rotation.y=I.yaw;let fe=1.45*(b.final?1.15:1)*(b.final&&b.phase2?1.12:1)*(b.state==="wind"?1+Math.sin(M.t*40)*.02:1);I.root.scale.setScalar(fe),Vf(I,b.look,M.t,b.frame*2,b.state==="dash"?1:.6,b.state);let xe=b.flash>0;if(I.flash.forEach(ye=>{xe?ye.material.emissive.setRGB(.9,.9,.9):b.phase2?ye.material.emissive.setRGB(.35+Math.sin(M.t*6)*.15,.02,.1):ye.material.emissive.setRGB(0,0,0)}),y.color.set(I.light),y.position.set(b.x,I.h*1.5+120,b.y+80),y.intensity=2600*(b.phase2?1.5:1),b.state==="wind"){Q.visible=!0;let ye=b.final?380:360,Ce=b.da||0;Q.position.set(b.x+Math.cos(Ce)*ye/2,2,b.y+Math.sin(Ce)*ye/2),Q.rotation.y=-Ce,Q.scale.set(ye,1,b.r*1.7),G.opacity=.18+Math.abs(Math.sin(M.t*14))*.22}b.phase2&&(ae.visible=!0,ae.position.set(b.x,2,b.y),ae.scale.setScalar(b.r*2.4+Math.sin(M.t*6)*8)),b.state==="dash"&&Math.random()<.8&&Ne(b.x,b.y,1,re("#2a2020",.7),50,.7),Math.random()<.25&&u.emit(b.x+Fe(-30,30),Fe(20,I.h),b.y+Fe(-30,30),0,40,0,1,8,2,re(I.light,2.2),-30)}(!Ut||Ut.state!=="wind")&&(Q.visible=!1),(!Ut||!Ut.phase2)&&(ae.visible=!1),Ut||(y.intensity=0);let gt=0,li=0,ti=0;S.visible=!1;for(let b of H.drops){let I=b.x-M.target.x,V=b.y-M.target.z;if(I*I+V*V>1e3*1e3)continue;let ce=Math.sin(M.t*4+b.x*.1)*3;if(b.k==="gem"&&gt<700){Le.setFromAxisAngle(Ri,M.t*2+b.x);let fe=b.tier===2?1.4:b.tier===1?1.15:1;Ae.compose(Ze.set(b.x,12+ce,b.y),Le,be.set(fe,fe*1.4,fe)),he.setMatrixAt(gt,Ae),he.setColorAt(gt,D[b.tier]),gt++,Math.random()<.02&&u.emit(b.x,18,b.y,0,20,0,.5,10,1,D[b.tier])}else b.k==="coin"&&li<400?(Le.setFromEuler($e.set(Math.PI/2,0,M.t*4+b.x)),Ae.compose(Ze.set(b.x,12+ce,b.y),Le,Ve),Te.setMatrixAt(li++,Ae)):b.k==="heal"&&ti<40?(Le.setFromAxisAngle(Ri,M.t*2),Ae.compose(Ze.set(b.x,16+ce,b.y),Le,Ve),Me.setMatrixAt(ti++,Ae)):b.k==="scepter"&&(S.visible=!0,S.position.set(b.x,40+ce*2,b.y),S.rotation.y=M.t*1.5,S.userData.cr.rotation.y=M.t*3,Math.random()<.5&&u.emit(b.x+Fe(-20,20),10,b.y+Fe(-20,20),0,90,0,1,9,2,re("#7fd8ff",2.6),-20))}he.count=gt,Te.count=li,Me.count=ti;for(let b of[he,Te,Me])b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0);p.begin();let _i=0,ki=0,ft=0,ct=0;for(let b of H.shots)if(b.k==="spear"&&_i<200){let I=Math.atan2(b.vx,b.vy);Le.setFromAxisAngle(Ri,I),Ae.compose(Ze.set(b.x,30,b.y),Le,Ve),z.setMatrixAt(_i,Ae),Ae.compose(Ze.set(b.x-Math.sin(I)*40,30,b.y-Math.cos(I)*40),Le,be.set(10,1,80)),Re.makeRotationX(Math.PI/2),Ae.multiply(Re),Y.setMatrixAt(_i,Ae),_i++,p.add(b.x,30,b.y,46,re("#ffd27a",1.2),.9)}else b.k==="missile"?(p.add(b.x,34,b.y,44,re("#b88bff",1.6),1),p.add(b.x,34,b.y,16,re("#ffffff",2.2),1),u.emit(b.x,34,b.y,Fe(-20,20),Fe(-10,10),Fe(-20,20),.4,14,2,re("#a07aff",1.8),0,.9)):b.k==="axe"&&ki<60&&(Le.setFromEuler($e.set(0,b.spin,0)),Ae.compose(Ze.set(b.x,30,b.y),Le,be.set(1.3,1.3,1.3)),L.setMatrixAt(ki++,Ae),Math.random()<.5&&u.emit(b.x,30,b.y,0,0,0,.25,22,6,re("#e0c08a",.9)));z.count=Y.count=_i,L.count=ki;let ht=H.abil||{};if(ht.blades&&ht.blades.s.pos)for(let[b,I,V]of ht.blades.s.pos){if(ft>=40)break;Le.setFromAxisAngle(Ri,-V),Ae.compose(Ze.set(b,30,I),Le,Ve),N.setMatrixAt(ft++,Ae),p.add(b,30,I,40,re("#9fe7ff",1.1),.8),u.emit(b,30,I,0,0,0,.22,16,4,re("#9fe7ff",1.6),0,.9,.7)}if(N.count=ft,ht.spirits&&ht.spirits.s.pos)for(let[b,I]of ht.spirits.s.pos){let V=ht.spirits.s.active;p.add(b,40,I,V?54:30,re("#9dffcf",V?1.6:.9),1),p.add(b,40,I,14,re("#ffffff",2),1),V&&u.emit(b,40,I,0,0,0,.35,16,3,re("#9dffcf",1.6))}if(ht.thorns&&ht.thorns.s.R){let b=ht.thorns.s.R;O.visible=!0,O.position.set(le.x,2,le.y),O.scale.setScalar(b),O.rotation.y=M.t*.5;let I=18;for(let V=0;V<I;V++){let ce=M.t*.8+V/I*St;Le.setFromEuler($e.set(0,0,0)),Ae.compose(Ze.set(le.x+Math.cos(ce)*b*.92,0,le.y+Math.sin(ce)*b*.92),Le,be.set(1,.8+Math.sin(M.t*4+V)*.25,1)),w.setMatrixAt(ct++,Ae)}}else O.visible=!1;w.count=ct;for(let b of H.ebul){let I=b.x-M.target.x,V=b.y-M.target.z;I*I+V*V>1e3*1e3||(p.add(b.x,26,b.y,b.r*5.5,re(b.col,1.5),1),p.add(b.x,26,b.y,b.r*1.8,re("#ffffff",1.6),1))}for(let b of[z,Y,L,N,w])b.instanceMatrix.needsUpdate=!0;let Bn=M.ownFx?H.fx.concat(M.ownFx):H.fx,A=new Set(Bn);for(let[b,I]of M.fx)A.has(b)||(I.objs.forEach(V=>i.remove(V)),M.fx.delete(b));if(M.ownFx){for(let b of M.ownFx)b.t+=oe;M.ownFx=M.ownFx.filter(b=>b.t<b.life)}let W=0;for(let b of Bn){let I=Math.min(1,b.t/b.life),V=M.fx.get(b);if(b.k==="spike"){if(W<260){let ce=Math.sin(Math.min(1,I*4)*Math.PI/2)*(I>.7?(1-I)/.3:1);Le.setFromAxisAngle(Ri,b.x*.37),Ae.compose(Ze.set(b.x,-4,b.y),Le,be.set(b.s,Math.max(.01,ce*b.s),b.s)),F.setMatrixAt(W++,Ae)}V||(M.fx.set(b,{objs:[]}),ve(b.x,6,b.y,5,re("#b89a72",.9),120,.5,8,500,!1),Ne(b.x,b.y,1,re("#6a5a44",.7),30,.6));continue}V||(V=_n(b),M.fx.set(b,V)),Ci(b,V,I)}F.count=W,F.instanceMatrix.needsUpdate=!0;let J=new Set(H.zones);for(let[b,I]of M.zones)J.has(b)||(i.remove(I.obj),M.zones.delete(b));for(let b of H.zones){let I=M.zones.get(b);if(!I){let fe=new B.Mesh($,Wt(b.k==="ice"?"#8fd8ff":"#ff6a20",b.k==="ice"?.9:1.4,kf()));fe.position.set(b.x,2.5,b.y),i.add(fe),I={obj:fe},M.zones.set(b,I)}let V=b.t/b.life,ce=Math.min(1,(1-V)*3);if(I.obj.scale.set(b.r*2.2,1,b.r*2.2),I.obj.rotation.y=M.t*(b.k==="ice"?.2:1.2),I.obj.material.opacity=ce*(.75+Math.sin(M.t*10+b.x)*.15),Math.random()<.35){let fe=Fe(0,St),xe=Fe(0,b.r);u.emit(b.x+Math.cos(fe)*xe,4,b.y+Math.sin(fe)*xe,0,b.k==="ice"?20:90,0,.7,b.k==="ice"?7:9,2,b.k==="ice"?re("#cfefff",1.6):re("#ff8a3a",2.4),b.k==="ice"?10:-40)}}for(let b=M.lvlFx.length-1;b>=0;b--){let I=M.lvlFx[b];if(I.t+=oe,!I.objs){let ye=I.k==="scep"?"#7fb4ff":"#ffd27a",Ce=new B.Mesh(j,Wt(ye,1.8,Ra())),Ue=new B.Mesh(X,Wt(ye,1.6,Ai())),Be=new B.Mesh(Z,Wt("#ffffff",1.2,Ai()));I.objs=[Ce,Ue,Be],I.objs.forEach(vt=>i.add(vt))}let V=I.t/1.2,[ce,fe,xe]=I.objs;ce.position.set(le.x,0,le.y),ce.scale.set(40+V*30,380*Math.min(1,V*5),40+V*30),ce.material.opacity=1-V,fe.position.set(le.x,3,le.y),fe.scale.setScalar(30+Math.sqrt(V)*200),fe.material.opacity=1-V,xe.position.set(le.x,3,le.y),xe.scale.setScalar(20+V*120),xe.material.opacity=(1-V)*.8,Math.random()<.7&&u.emit(le.x+Fe(-30,30),Fe(0,40),le.y+Fe(-30,30),0,Fe(120,260),0,.9,9,2,re(I.k==="scep"?"#9fd4ff":"#ffe0a0",2.6),0,.98),V>=1&&(I.objs.forEach(ye=>i.remove(ye)),M.lvlFx.splice(b,1))}if(M.wx){M.wx.begin();let b=M.weather;for(let I of M.wxp){let V=6,ce=22,fe=0,xe="#ff9a4a",ye=6,Ce=.8;b==="snow"?(V=Math.sin(M.t+I.s*6)*20,ce=-40,xe="#ffffff",ye=7,Ce=.85):b==="rain"?(V=-30,ce=-700,xe="#a8b4ff",ye=4,Ce=.5):b==="petals"?(V=30,ce=-25,xe="#ff9ac0",ye=8):b==="drips"?(V=0,ce=-120,xe="#8ff0ff",ye=4,Ce=.6):b==="ash"?(V=12,ce=-18,xe="#8a8078",ye=7,Ce=.6):b==="motes"?(V=Math.sin(M.t+I.s*9)*10,ce=18,xe="#e19bff",ye=6):b==="bloodmoon"&&(V=6,ce=14,xe="#ff4050",ye=6),I.x+=V*oe*(.5+I.s),I.y+=ce*oe*(.5+I.s),I.z+=V*.3*oe,I.y>420&&(I.y=0),I.y<0&&(I.y=420);let Ue=I.x+M.target.x,Be=I.z+M.target.z;Ue=M.target.x+((Ue-M.target.x+900)%1800+1800)%1800-900,Be=M.target.z+((Be-M.target.z+900)%1800+1800)%1800-900,M.wx.add(Ue,I.y,Be,ye*(b==="rain"?1:1+.4*Math.sin(M.t*3+I.s*10)),re(xe,b==="snow"||b==="ash"?1:1.6),Ce)}M.wx.end()}p.end(),u.update(oe),d.update(oe),se.count=zt,se.instanceMatrix.needsUpdate=!0,o?o.render(oe):t.render(i,n)};function _n(H){let T=[];if(H.k==="slash"){let oe=q(H.arc,.42),le=q(H.arc,.9),_e=new B.Mesh(oe,Wt("#ffd9a0",1.7,Ai())),Pe=new B.Mesh(le,Wt("#fff6e0",2.6,Ai()));for(let ke of[_e,Pe])ke.position.set(H.x,30,H.y),ke.rotation.y=-H.a,ke.scale.setScalar(H.r),i.add(ke),T.push(ke);for(let ke=0;ke<14;ke++){let st=H.a+Fe(-H.arc/2,H.arc/2),Tt=H.r*Fe(.6,1.05);u.emit(H.x+Math.cos(st)*Tt,30,H.y+Math.sin(st)*Tt,Math.cos(st)*120,Fe(20,120),Math.sin(st)*120,.4,8,1,re("#ffe0a0",2.6),200)}}else if(H.k==="nova"||H.k==="ring"){let oe=new B.Mesh(H.k==="nova"?X:Z,Wt(H.col,H.k==="nova"?1.8:1.5,Ai()));if(oe.position.set(H.x,3,H.y),i.add(oe),T.push(oe),H.k==="nova"){let le=new B.Mesh(j,Wt(H.col,1.2,Ra()));le.position.set(H.x,0,H.y),i.add(le),T.push(le);for(let _e=0;_e<26;_e++){let Pe=Fe(0,St);u.emit(H.x+Math.cos(Pe)*20,20,H.y+Math.sin(Pe)*20,Math.cos(Pe)*H.r*2,Fe(20,140),Math.sin(Pe)*H.r*2,.5,10,1,re(H.col,2.4),100,.92)}}}else if(H.k==="quake"){let oe=new B.Mesh($,new B.MeshBasicMaterial({map:zf(),color:"#140a04",transparent:!0,depthWrite:!1}));oe.position.set(H.x,2,H.y),oe.rotation.y=Fe(0,St),i.add(oe),T.push(oe);let le=new B.Mesh(X,Wt("#ffc890",1.1,Ai()));le.position.set(H.x,3,H.y),i.add(le),T.push(le);for(let _e=0;_e<22;_e++){let Pe=Fe(0,St),ke=Fe(80,260);u.emit(H.x,8,H.y,Math.cos(Pe)*ke,Fe(120,300),Math.sin(Pe)*ke,.8,9,6,re("#c8a878",1.1),700,.97)}for(let _e=0;_e<8;_e++){let Pe=Fe(0,St);d.emit(H.x+Math.cos(Pe)*H.r*.5,10,H.y+Math.sin(Pe)*H.r*.5,Math.cos(Pe)*120,20,Math.sin(Pe)*120,1,40,90,re("#8a7258",.6),-10,.94,.5)}M.flashAt(H.x,H.y,"#ffb070",1.2)}else if(H.k==="bolt"){let oe=new B.Mesh(new B.BufferGeometry,Wt("#7fd8ff",2.4)),le=new B.Mesh(new B.BufferGeometry,Wt("#ffffff",3));i.add(oe,le),T.push(oe,le),H.pts.forEach(([_e,Pe],ke)=>{ke&&ve(_e,34,Pe,6,re("#bfefff",2.6),200,.35,8,100)}),M.flashAt(H.pts[H.pts.length-1][0],H.pts[H.pts.length-1][1],"#7fd8ff",1.5)}return{objs:T,regen:0}}function Yt(H,T,oe){let le=[],_e=[];for(let Pe=0;Pe<T.length;Pe++){let[ke,st]=T[Pe],[Tt,zt]=T[Math.min(T.length-1,Pe+1)],[Pi,oi]=T[Math.max(0,Pe-1)],Ut=Tt-Pi,gt=zt-oi,li=Math.hypot(Ut,gt)||1;if(Ut/=li,gt/=li,le.push(ke-gt*oe,36,st+Ut*oe,ke+gt*oe,36,st-Ut*oe),Pe<T.length-1){let ti=Pe*2;_e.push(ti,ti+1,ti+2,ti+1,ti+3,ti+2)}}H.setAttribute("position",new B.Float32BufferAttribute(le,3)),H.setIndex(_e),H.computeBoundingSphere()}function Ci(H,T,oe){if(H.k==="slash"){let[le,_e]=T.objs,Pe=H.r*(.92+oe*.16);le.scale.setScalar(Pe),_e.scale.setScalar(Pe*1.01),le.material.opacity=(1-oe)*.95,_e.material.opacity=1-oe*oe,le.rotation.y=_e.rotation.y=-H.a-(oe-.5)*.35}else if(H.k==="nova"||H.k==="ring"){let le=H.r*(.25+.75*Math.sqrt(oe));T.objs[0].scale.setScalar(le),T.objs[0].material.opacity=1-oe,T.objs[1]&&(T.objs[1].scale.set(le,90*(1-oe)+6,le),T.objs[1].material.opacity=(1-oe)*.9)}else if(H.k==="quake")T.objs[0].scale.set(H.r*2.2,1,H.r*2.2),T.objs[0].material.opacity=1-oe,T.objs[1].scale.setScalar(H.r*(.3+.7*oe)),T.objs[1].material.opacity=(1-oe)*.8;else if(H.k==="bolt"){if(--T.regen<=0){T.regen=2;let le=[];H.pts.forEach(([_e,Pe],ke)=>{if(ke){let[st,Tt]=H.pts[ke-1];for(let zt=1;zt<5;zt++)le.push([st+(_e-st)*zt/5+Fe(-12,12),Tt+(Pe-Tt)*zt/5+Fe(-12,12)])}le.push([_e,Pe])}),Yt(T.objs[0].geometry,le,7),Yt(T.objs[1].geometry,le,2.2)}T.objs[0].material.opacity=1-oe,T.objs[1].material.opacity=1-oe}}return M.dispose=function(){ie(),t.dispose()},M}function Ia(r,e){let t=new B.Color(r);return e<0?t.multiplyScalar(1+e):t.lerp(new B.Color(1,1,1),e),"#"+t.getHexString()}var Md=null;function $f(r,e=256){if(!Md){let c=document.createElement("canvas"),h=new B.WebGLRenderer({canvas:c,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});h.toneMapping=B.ACESFilmicToneMapping,h.outputColorSpace=B.SRGBColorSpace,h.setPixelRatio(1);let u=new B.Scene,d=new B.PMREMGenerator(h);u.environment=d.fromScene(new Pa,.04).texture,u.environmentIntensity=.5,u.add(new B.HemisphereLight("#ffe8d0","#201018",1.2));let p=new B.DirectionalLight("#fff0e0",2.4);p.position.set(60,120,120),u.add(p);let f=new B.DirectionalLight("#9fb8ff",2.2);f.position.set(-120,80,-100),u.add(f);let v=new B.PerspectiveCamera(30,1,10,2e3);Md={r:h,sc:u,cam:v,cv:c}}let{r:t,sc:i,cam:n,cv:s}=Md;t.setSize(e,e,!1);let a=vd(r);a.root.rotation.y=.5,i.add(a.root),_d(a,.4,.6,.15,0,r);let o=new B.PointLight(a.light,9e3,300,1.6);o.position.set(30,60,60),i.add(o),n.position.set(0,62,210),n.lookAt(0,36,0),t.render(i,n);let l=s.toDataURL("image/png");return i.remove(a.root),i.remove(o),l}return dm(v_);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
