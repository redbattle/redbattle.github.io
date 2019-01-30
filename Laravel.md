## Laravel 笔记
      
- 安装核心库文件，项目根目录执行
    ```
    composer install
    ```
- 更改`storage`目录权限
    ```
    sudo chmod -R 777 storage
    ```
- 读取上传文件使用命令 `storage:link` 来创建符号链接：
    ```
    php artisan storage:link
    # 根据需要迁移上传文件
    ```
- 修改`.env`文件
    ```
    # 新建 .env 文件
    cp .env.example .env
    # 生成application key
    php artisan key:generate
    
    ```
- 修改配置文件后执行缓存
   ```
   php artisan config:cache
   ```
- 修改seed文件后执行重载
   ```
   composer dump-autoload
   ```