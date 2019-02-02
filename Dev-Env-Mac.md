## Mac开发环境
### 安装 Homebrew
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```  
### 安装 nginx
- 安装命令
    ```
    brew install nginx
    ```   
- 启动命令
    ```
    # 由于类Linux系统下的安全策略设计，通常只有root进程可以绑定80端口，所以要加sudo
    sudo brew services start nginx
    ```
- 加入launchctl启动控制
    ```
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
    # 取消启动
    launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
    ```
- wwww文件目录
    ```
    /usr/local/var/www
    ```
- config文件地址
    ```
    /usr/local/etc/nginx/nginx.conf
    ```
- 打开 `nginx.conf` 文件，更改配置使其支持php
    ```
    # 找到 server 的 location 配置，给 index 加一个 index.php
    location / {
        root   /usr/local/var/www;
        index  index.html index.htm index.php;
    }
    # 去掉 server 下 `location ~.php$` 的注释，并修改 fastcgi_param SCRIPT_FILENAME 配置
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
    # 在 /usr/local/var/www 下新建 一个php 文件，并访问如果有版本信息则说明配置成功
    <?php phpinfo(); ?>
    ```
- 浏览器查看地址（默认8080端口）
    ```
    http://127.0.0.1:8080
    ```
- 修改默认端口为80
    ```
    # 打开 config 文件将 server 下的 
    listen 8080;
    # 改为
    listen 80;
    # 重启 nginx 如果提示 80 端口被占用，需要先kill一下 80 端口进程
    ```
### 安装mysql
- 安装命令
    ```
    brew install mysql
    ```
- 启动命令
    ```
    brew services start mysql
    ```
- 加入launchctl启动控制
    ```
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
    # 取消启动
    launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
    ```
- 设置账号(须先启动)
    ```
    mysql_secure_installation
    ```
- 登陆账号(须先启动)
    ```
    mysql -u <username>
    ```
