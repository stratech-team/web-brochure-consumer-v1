Jando Brochure
======================

Removed fonts lines
    <!-- 
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'> 
    -->


The landing is the general page to which the www.jando.com will route.


https://testingbot.com/pricing

https://demo.jando.com
http://jandoconsumer.memberbase.net/
http://jandoapp.memberbase.net/#/login

https://jando.vm.com
https://jando-consumer.vm.com/
https://jandoapp.vm.com/#/login

https://github.com/angular/material/issues/3834
https://www.impressivewebs.com/ie10-css-hacks/

    <!--[if IE 10]><!--><script>if (/@cc_on!@/false) {document.documentElement.className+=' ie10';}<!--<![endif]-->

        .ie10 span[flex] { display: block; }
        .ie10 md-dialog { padding: 0px 20px;}
        .ie10 .ie10FixDivWithSidenav {
            display: inline-block;
            width: calc(100% - 280px);
        }

http://www.joostrap.com/blog/bootstrap-3-supporting-internet-explorer-8-and-9


https://github.com/stowball/Layout-Engine

https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/

    if ($http_user_agent ~* '(MSIE)') {
        rewrite ^ /ieindex.html break;
    }

    if ($http_user_agent ~* '(MSIE|EDGE)') {
        return 301 http://$host/indexie.html; 
    }


    if ($http_user_agent ~* '(MSIE 8.0|MSIE 7.0)') {
        return 301 http://$host$request_uri; 
    }
        if ($http_user_agent ~ "MSIE 8.0") {
                rewrite ^ /ie.html break;
        }
    if ($http_user_agent ~* '(MSIE)') {
        rewrite ^ /ieindex.html break;
    }


server {
        listen *:80;
        server_name jando.com www.jando.com;

    index index.html;

    location / {
        root /home/sites/jando-consumer-brochure;
        #if ($http_user_agent ~* '(MSIE)') {
        #   rewrite ^ /ieindex.html break;
        #}
    }

    location /business/ {
        root /home/sites/jando-business-brochure;
    }

    location /css {
        root /home/sites/jando-consumer-brochure;
        add_header  Content-Type    text/css;
    }


}

