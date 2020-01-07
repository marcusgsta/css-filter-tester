new Vue({
    el: '#vue-app',
    data: {
        checkedFilters:[],
        blur : 0,
        brightness : 100,
        contrast : 100,
        dropShadow1 : 0,
        dropShadow2 : 0,
        dropShadow3 : 0,
        dropShadow4 : "#000000",
        grayscale : 0,
        hueRotate : 0,
        invert : 0,
        opacity : 1,
        saturate : 150,
        sepia : 0,
        filterStyles : {},
        filterArray : []
    },
    methods: {
        copyCode: function() {
            // let copyText = "img { filter: " + this.filterStyles.filter + "}";
            let copyText = document.getElementsByClassName('filterStyles')[0];
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* for mobile devices */
            /* copy the text inside the textarea */
            document.execCommand("copy");
        }
    },
    computed: {
        compStyles: function() {
            
            // return {filter: this.checkedFilters.join(" ")};
            let blur = "blur(" + this.blur + "px)";
            let brightness = "brightness(" + this.brightness + "%)";
            let contrast = "contrast(" + this.contrast + "%)";
            let dropShadow = "drop-shadow(" + this.dropShadow1 + "px " + this.dropShadow2 + "px " + this.dropShadow3 + "px " + this.dropShadow4 + ")";
            let grayscale = "grayscale(" + this.grayscale + "%)";
            let hueRotate = "hue-rotate(" + this.hueRotate + "deg)";
            let invert = "invert(" + this.invert + "%)";
            let opacity = "opacity(" + this.opacity + ")";
            let saturate = "saturate(" + this.saturate + "%)";    
            let sepia = "sepia(" + this.sepia + "%)";    
            
            this.filterArray = [blur, brightness, contrast, dropShadow, hueRotate, grayscale, invert, opacity, saturate, sepia];
            let filters = this.filterArray.join(" ");
            this.filterStyles = {
                filter : filters
            }
            console.log(this.filterStyles);
            return this.filterStyles;
        },
        
        }
});

// reset button
// user uploaded image
// user uploaded drag and drop image
// next step: do blend modes, animation/keyframes
// mobile version with dropdown menu for the filters

