## 服务器
    
- 大文件上传配置
    ```
    // 修改nginx.conf
    client_max_body_size 128M; 
    
    // PHP环境修改php.ini
    memory_limit=128M; 每个PHP页面所吃掉的最大内存
    file_uploads=on; 是否允许通过HTTP上传文件的开关
    upload_tmp_dir=8M; 文件上传至服务器上存储临时文件的地方，如果没指定就会用系统默认的临时文件夹
    upload_max_filesize=8M ;即允许上传文件大小的最大值
    post_max_size=8M; 指通过表单POST给PHP的所能接收的最大值，包括表单里的所有值
    
    ```
    
- 页面无法访问 `telnet ip port`
    - nginx用户组权限是否正确
    - 服务器端口是否开放
    - 防火墙是否限制
