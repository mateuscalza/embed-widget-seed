require(["cash", "text!converttalk.css", "text!converttalk.html"], function ($, css, html) {
    
    'use strict';

    $(function(){
        var style = $("<style></style>", {type: "text/css"});
        style.text(css);
        $("head").append(style);
        $('body').append(html);
    })
});