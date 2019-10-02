window.onload = init;

function init() {


    function LoadJson(method, url, callback) {
        var xHR = new XMLHttpRequest;
        xHR.open(method, url, true);
        xHR.send();
        xHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var circle = document.getElementsByClassName("circle1")[0];
                circle.style.display = "none";
                var loading = document.getElementsByClassName("loading")[0];
                loading.style.display = "none";
                res = JSON.parse(this.response);
                setTimeout(function() {
                    callback(res);
                }, 1000);


            }
        }
    }


    function build(r, out1, out2) {
        var output1 = document.getElementById(out1);
        var output2 = document.getElementById(out2);
        var html1 = "";
        var html2 = "";
        html1 += '<div class="alert alert-warning mt-3">designed  by me</div>';
        for (var i = 0; i < 5; i++) {
            html1 += '<div class="alert alert-primary mt-3">';
            html1 += '<span class="icon-user icon"></span>';
            html1 += r[i].name;
            html1 += '<button class="alert-design" onclick="cl(this.parentElement)">&times;</button>';
            html1 += '</div>';

        }
        html2 += '<div class="alert alert-warning mt-3">designed  by bootsrap</div>';
        for (var i = 5; i < 10; i++) {
            html2 += '<div class="alert alert-primary mt-3">';
            html2 += '<span class="icon-user icon"></span>';
            html2 += r[i].name;
            html2 += '<button class="close" data-dismiss="alert">&times;</button>';
            html2 += '</div>';

        }
        output1.innerHTML = html1;
        output2.innerHTML = html2;


    }
    LoadJson("GET", "https://jsonplaceholder.typicode.com/users", function(re) {
        build(re, "output1", "output2");
    });



}