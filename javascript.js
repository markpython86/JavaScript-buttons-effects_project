//Effects of onClick events:

//grow
//shrink
//pick random color
//color change
//reset
//spin
//fade


//grow effect to make box w=200px and h=200px
document.getElementById("button1").addEventListener("click", function(){
            document.getElementById("box").style.width = "200px";
            document.getElementById("box").style.height = "200px";
        
});

//shink effect make box smaller. w=75x and h=75px
document.getElementById("button2").addEventListener("click", function(){

        document.getElementById("box").style.width = "75px";
        document.getElementById("box").style.height = "75px";

});
//fade gradually until it reach 0.1 opacity
document.getElementById("button3").addEventListener("click", function(){
    var fadeLevels = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3,0.2,0.1]
        //function to pick number for opacity with small delay in each pick
        const printNumbersWithDelay = (n)=>{
          for (let i = 0; i <= n; i++) {
              setTimeout( () =>{
                document.getElementById("box").style.opacity = fadeLevels[i];
              }, i* 200)
            }
        }
printNumbersWithDelay(10);
});



//spin the ox 360 degrees effect 
document.getElementById("button4").addEventListener("click", function(){

    //function to change the rotating angle of the box by 1 increments and almost 5mSec in between each change
        const printNumbersWithDelay = (n)=>{
          for (let i = 1; i <= n; i++) {
              setTimeout( () =>{
                document.getElementById("box").style.transform = "rotate("+i+"deg)";
              }, i * 5)
            }
        }
printNumbersWithDelay(360);
});

//change gradient color of the box from red to blue
document.getElementById("button6").addEventListener("click", function(){
    //360 gradient colors from red to blue from amazing website https://www.strangeplanet.fr/work/gradient-generator/index.php
        var gradient = ["#FF0000", "#FF0200", "#FF0400", "#FF0600", "#FF0800", "#FF0A00", "#FF0C00", "#FF0E00", "#FF1100", "#FF1300",
                        "#FF1500", "#FF1700", "#FF1900", "#FF1B00", "#FF1D00", "#FF1F00", "#FF2200", "#FF2400", "#FF2600", "#FF2800",
                        "#FF2A00", "#FF2C00", "#FF2E00", "#FF3000", "#FF3300", "#FF3500", "#FF3700", "#FF3900", "#FF3B00", "#FF3D00",
                        "#FF3F00", "#FF4100", "#FF4400", "#FF4600", "#FF4800", "#FF4A00", "#FF4C00", "#FF4E00", "#FF5000", "#FF5200",
                        "#FF5500", "#FF5700", "#FF5900", "#FF5B00", "#FF5D00", "#FF5F00", "#FF6100", "#FF6300", "#FF6600", "#FF6800",
                        "#FF6A00", "#FF6C00", "#FF6E00", "#FF7000", "#FF7200", "#FF7400", "#FF7700", "#FF7900", "#FF7B00", "#FF7D00",
                        "#FF7F00", "#FF8100", "#FF8300", "#FF8500", "#FF8800", "#FF8A00", "#FF8C00", "#FF8E00", "#FF9000", "#FF9200",
                        "#FF9400", "#FF9600", "#FF9900", "#FF9B00", "#FF9D00", "#FF9F00", "#FFA100", "#FFA300", "#FFA500", "#FFA700", 
                        "#FFAA00", "#FFAC00", "#FFAE00", "#FFB000", "#FFB200", "#FFB400", "#FFB600", "#FFB800", "#FFBB00", "#FFBD00", 
                        "#FFBF00", "#FFC100", "#FFC300", "#FFC500", "#FFC700", "#FFC900", "#FFCC00", "#FFCE00", "#FFD000", "#FFD200",
                        "#FFD400", "#FFD600", "#FFD800", "#FFDA00", "#FFDD00", "#FFDF00", "#FFE100", "#FFE300", "#FFE500", "#FFE700",
                        "#FFE900", "#FFEB00", "#FFEE00", "#FFF000", "#FFF200", "#FFF400", "#FFF600", "#FFF800", "#FFFA00", "#FFFC00",
                        "#FFFF00", "#FCFF00", "#FAFF00", "#F8FF00", "#F6FF00", "#F4FF00", "#F2FF00", "#F0FF00", "#EEFF00", "#EBFF00",
                        "#E9FF00", "#E7FF00", "#E5FF00", "#E3FF00", "#E1FF00", "#DFFF00", "#DDFF00", "#DAFF00", "#D8FF00", "#D6FF00",
                        "#D4FF00", "#D2FF00", "#D0FF00", "#CEFF00", "#CCFF00", "#C9FF00", "#C7FF00", "#C5FF00", "#C3FF00", "#C1FF00",
                        "#BFFF00", "#BDFF00", "#BBFF00", "#B8FF00", "#B6FF00", "#B4FF00", "#B2FF00", "#B0FF00", "#AEFF00", "#ACFF00", 
                        "#AAFF00", "#A7FF00", "#A5FF00", "#A3FF00", "#A1FF00", "#9FFF00", "#9DFF00", "#9BFF00", "#99FF00", "#96FF00",
                        "#94FF00", "#92FF00", "#90FF00", "#8EFF00", "#8CFF00", "#8AFF00", "#88FF00", "#85FF00", "#83FF00", "#81FF00",
                        "#7FFF00", "#7DFF00", "#7BFF00", "#79FF00", "#77FF00", "#74FF00", "#72FF00", "#70FF00", "#6EFF00", "#6CFF00",
                        "#6AFF00", "#68FF00", "#66FF00", "#63FF00", "#61FF00", "#5FFF00", "#5DFF00", "#5BFF00", "#59FF00", "#57FF00",
                        "#55FF00", "#52FF00", "#50FF00", "#4EFF00", "#4CFF00", "#4AFF00", "#48FF00", "#46FF00", "#44FF00", "#41FF00",
                        "#3FFF00", "#3DFF00", "#3BFF00", "#39FF00", "#37FF00", "#35FF00", "#32FF00", "#30FF00", "#2EFF00", "#2CFF00",
                        "#2AFF00", "#28FF00", "#26FF00", "#24FF00", "#21FF00", "#1FFF00", "#1DFF00", "#1BFF00", "#19FF00", "#17FF00",
                        "#15FF00", "#13FF00", "#10FF00", "#0EFF00", "#0CFF00", "#0AFF00", "#08FF00", "#06FF00", "#04FF00", "#02FF00",
                        "#00FF00", "#00FC02", "#00FA04", "#00F806", "#00F608", "#00F40A", "#00F20C", "#00F00F", "#00ED11", "#00EB13",
                        "#00E915", "#00E717", "#00E519", "#00E31B", "#00E11E", "#00DE20", "#00DC22", "#00DA24", "#00D826", "#00D628",
                        "#00D42A", "#00D22D", "#00CF2F", "#00CD31", "#00CB33", "#00C935", "#00C737", "#00C539", "#00C33C", "#00C03E",
                        "#00BE40", "#00BC42", "#00BA44", "#00B846", "#00B648", "#00B34B", "#00B14D", "#00AF4F", "#00AD51", "#00AB53",
                        "#00A955", "#00A757", "#00A45A", "#00A25C", "#00A05E", "#009E60", "#009C62", "#009A64", "#009866", "#009669",
                        "#00936B", "#00916D", "#008F6F", "#008D71", "#008B73", "#008975", "#008778", "#00847A", "#00827C", "#00807E",
                        "#007E80", "#007C82", "#007A84", "#007887", "#007589", "#00738B", "#00718D", "#006F8F", "#006D91", "#006B93",
                        "#006996", "#006698", "#00649A", "#00629C", "#00609E", "#005EA0", "#005CA2", "#0059A5", "#0057A7", "#0055A9",
                        "#0053AB", "#0051AD", "#004FAF", "#004DB1", "#004AB4", "#0048B6", "#0046B8", "#0044BA", "#0042BC", "#0040BE",
                        "#003EC0", "#003CC3", "#0039C5", "#0037C7", "#0035C9", "#0033CB", "#0031CD", "#002FCF", "#002DD2", "#002AD4",
                        "#0028D6", "#0026D8", "#0024DA", "#0022DC", "#0020DE", "#001EE1", "#001BE3", "#0019E5", "#0017E7", "#0015E9", 
                        "#0013EB", "#0011ED", "#000FF0", "#000CF2", "#000AF4", "#0008F6", "#0006F8", "#0004FA", "#0002FC", "#0000FF"];
        //function to pick gradient each 15mSec to give gradient color change effect
        const printNumbersWithDelay = (n)=>{
          for (let i = 1; i <= n; i++) {
              setTimeout( () =>{
                document.getElementById("box").style.backgroundColor = gradient[i];
              }, i * 15)
            }
        }
printNumbersWithDelay(360);
        
});

//pick random color effect
document.getElementById("button7").addEventListener("click", function(){
    //formula to create random Hex number 
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box").style.backgroundColor = "#"+randomColor;

});

//change the box to circle
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.borderRadius = "50%";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
   

});

//reset the box to original state
document.getElementById("button8").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.borderRadius = "0%";
    

});




