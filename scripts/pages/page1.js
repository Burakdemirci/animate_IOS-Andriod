const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const System = require("sf-core/device/system");
const View       = require("sf-core/ui/view");
const Color      = require("sf-core/ui/color");
const Animator   = require("sf-core/ui/animator");
const FlexLayout = require("sf-core/ui/flexlayout");
const TextAlignment = require('sf-core/ui/textalignment');

var label;
var score = 0 ;
var life  = 3;
var level = 1 ;
var pagee;
// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
         const page = this;
        
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const page = this;
    superOnShow();
    pagee=page;
   
    Animator.animate(page.flexLayout1, 1000, function() {
       animatedView.width = 300;
       animatedView.height = 300;
       
    }).then(3000, function() {
       animatedView.width = 5;
       animatedView.height = 5;
    }).then(1000, function() {
       animatedView.width = 100;
       animatedView.height = 100;
   }).then(20000,function(){
      
       animatedView.width = 250;
       animatedView.height=250;
       animatedView.backgroundColor = Color.RED;
   });
    
}

var animatedView = new View({
    left:1, top:80, width: 100, height: 100,
    positionType: FlexLayout.PositionType.ABSOLUTE,
    backgroundColor: Color.create("#00A1F1")
});


var rightborderView = new View({
    
    left: 355,top:70, width:5, height:600,
    positionType:FlexLayout.PositionType.ABSOLUTE,
    backgroundColor:Color.RED

});

var upborderView = new View({
    
    left:0,top:70, width:380, height:5,
    positionType:FlexLayout.PositionType.ABSOLUTE,
    backgroundColor:Color.RED

});

var downborderView = new View({
    
    left:0,top:585, width:380, height:8,
    positionType:FlexLayout.PositionType.ABSOLUTE,
    backgroundColor:Color.RED

});

function collisionTime(){
     
    Animator.animate(pagee.flexLayout1, 100, function() {
       setBorderColor(Color.create("#f0ab28"));
    }).then(150, function() {
       setBorderColor(Color.YELLOW);
    }).then(200, function() {
       setBorderColor(Color.GREEN);
    }).then(250,function(){
       setBorderColor(Color.RED);
    }).then(300,function(){
       setBorderColor(Color.create("#f0ab28"));
    }).then(350,function(){
       setBorderColor(Color.YELLOW);
    }).then(400,function(){
       setBorderColor(Color.GREEN);
    }).then(405,function(){
        setBorderColor(Color.RED);
    });

}



function setBorderColor(color){
    downborderView.backgroundColor = color;
    upborderView.backgroundColor=color;
    rightborderView.backgroundColor=color;
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    const page = this;
    superOnLoad();
    page.headerBar.leftItemEnabled = false;
    page.flexLayout1.addChild(rightborderView);
    page.flexLayout1.addChild(upborderView);
    page.flexLayout1.addChild(downborderView);
    page.flexLayout1.addChild(animatedView);
    label = page.label1 ;
    setLabel(score,life);
}



function setLabel(score,life){
    
    label.text = "  SCORE : "+score+ "            LEVEL :"+level+
    "                CHANCE : " + life;
    textAlignment: TextAlignment.MIDLEFT;
    
    if(life ==2)
       label.backgroundColor = Color.create("#f78c52"); //Orange
    if(life== 1)
        label.backgroundColor = Color.create("#f60303"); //darkRed
}  

module.exports = Page1;
