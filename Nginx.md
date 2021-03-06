## Nginx配置

- https
    ```
    # 80 重定向到 443
    server {
        listen 80;
        server_name <domain>;
        return 301 https://$server_name$request_uri;
    }
    # 443 配置
    server {
        listen 443;
        server_name <domain>;
        ssl on;
        root <path to project>;
        index index.html index.htm index.php;
        ssl_certificate   /etc/nginx/cert/xxx.pem;
        ssl_certificate_key  /etc/nginx/cert/xxx.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    ```
    
- http
    ```
    server {
        listen 80 ;
        server_name <domain>;
        root <path to project>;
        index index.php index.html index.htm;
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }  
    ```
    
- http-docker
    ```
    server {
        listen       80;
        server_name  <domain>;
        root <path to project>;
        location / {
	        index  index.html index.htm index.php;
            try_files $uri $uri/ /index.php?$args;
        }
        location ~ \.php$ {
	        index index.php;
            #try_files $uri $uri/ /index.php?$args;
            fastcgi_pass   php:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
    ```
    
- 端口转发
    ```
    server
    {
        listen 80;
        server_name <domain>;
        location / 
        {
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://localhost:9000;
        }
        location ~ .*\.(php|jsp|cgi|asp|aspx|flv|swf|xml)?$
        { 
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://localhost:9000;
            
        }
    }
    ```
