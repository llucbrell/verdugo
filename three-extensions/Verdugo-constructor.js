 /*                     __
               _ww   _a+"D
         y#,  _r^ # _*^  y`
        q0 0 a"   W*`    F   ____
     ;  #^ Mw`  __`. .  4-~~^^`
    _  _P   ` /'^           `www=.   ┌─┐┬  ┌─┐┌─┐┌─┐
  ,    +F    `                q      │  │  ├─┤└─┐└─┐
  K ]                         ^K`    └─┘┴─┘┴ ┴└─┘└─┘
, #_                . ___ r    ],    
_*.^            '.__dP^^~#,  ,_ *,    
^b    / _         ``     _F   ]  ]_  
 '___  '               ~~^    ]   [
 :` ]b_    ~k_               ,`  yl   * NAME: Verdugo
   #P        `*a__       __a~   z~`   * in: index.js   
   #L     _      ^------~^`   ,/       _______________________
    ~-vww*"v_               _/`                                 
            ^"q_         _x"                                    
             __#my..___p/`mma____    
         _awP",`,^"-_"^`._ L L  #     
       _#0w_^_^,^r___...._ t [],"w                          
      e^   ]b_x^_~^` __,  .]Wy7` x`     
       '=w__^9*-*MF`      ^[_.=
           ^"y   qw/"^_____^~9 t
             ]_l  ,'^_`..===  x'
              ">.ak__awwwwWW###r
                ##WWWWWWWWWWWWWW__
               _WWWWWWMM#WWWW_JP^"~-=w_
     .____awwmp_wNw#[w/`     ^#,      ~b___.
      ` ^^^~^"W___            ]Raaaamw~`^``^^~
                ^~"~---~~~~~~`              
*/

/** 
 * 
 * Builds a new 3d environment.
 * @class Verdugo
 * @param {JavasCript Object} config - Javascript object with the basic scene, camera, renderer and ligths configurations
 * @default { scene: { color: '' } ,camera:  { position: { x: -50, y: 30, z: -90 } } ,renderer: { setSize: { width: window.innerWidth ,height: window.innerHeight },shadowMapEnabled: true} ,spotLight: { color: 0xffffff ,position: { x: -40 ,y:  60 ,z: -90 } ,castShadow: true }  };
 *
 */
function Verdugo ( config ) {
  // default values for config Object
  this.config = config || { scene: { color: '' }
                           ,camera:  { position: { x: -50
                                                  , y: 30
                                                  , z: -90 } 
                                                   
                                                } 
                           ,renderer: { setSize: { width: window.innerWidth
                                                  ,height: window.innerHeight
                                                  }
                                       ,shadowMap: {Enabled: true}             

                           }
                           ,spotLight: { color: 0xffffff
                                        ,position: {
                                          x: -40
                                         ,y:  60
                                         ,z: -90
                                        }
                                        ,castShadow: true 
                                      } 
                          };
   
   /**
   * 
   * @property {THREE.Scene} scene - a scene, that will hold all our elements such as objects, cameras and lights. 
   *
   */
   this.scene= new THREE.Scene();
   /** use scene.background to set the background color*/
   this.scene.background = new THREE.Color( this.config.scene.color );

   /**
   * 
   * @property {THREE.Camera} camera - a camera, which defines where we're looking at.
   * @default 45,window.innerWidth/window.innerHeight,0.1,1000 -- [-50,30,-90]
   *
   */
   this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
   // position and point the camera to the center of the scene
   this.camera.position.x = this.config.camera.position.x;
   this.camera.position.y = this.config.camera.position.y;
   this.camera.position.z = this.config.camera.position.z;
   this.camera.lookAt( this.scene.position );
   
   /**
   * 
   * @property {THREE.Renderer} renderer - a renderer, which renders all the 3d objects.
   * @default setSize-window.innerWidth, window.innerHeight -- shadowMapEnabled-true
   *
   */
   this.renderer = new THREE.WebGLRenderer();
   // set the default values of the renderer
   //this.renderer.setClearColorHex(new THREE.Color(0xEEEEEE, 1.0)); // changed to transparent by default
   this.renderer.setSize( this.config.renderer.setSize.width, this.config.renderer.setSize.height );
   this.renderer.shadowMap.enabled = this.config.renderer.shadowMap.enabled;

   
   /**
   * 
   * @property {THREE.Spotlight} spotlight - add spotlight for the shadows
   * @default position[-40,60,-90] -- castShadow
   *
   */ 
   this.spotLight = new THREE.SpotLight( this.config.spotLight.color );
   this.spotLight.position.set(  this.config.spotLight.position.x, this.config.spotLight.position.y, this.config.spotLight.position.z );
   this.spotLight.castShadow = this.config.spotLight.castShadow;

   //add spotlight to the scene
   this.scene.add( this.spotLight );
} 