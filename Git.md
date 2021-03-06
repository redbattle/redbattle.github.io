## Git 基本命令
- 生成 ssh key
    ```
    ssh-keygen -t rsa -C "<邮箱>" 
    ```
- git clone 直接克隆
    ```
    git clone <仓库地址>
    ```
- git init 初始化
    ```
    git init
    git remote add origin <仓库地址>
    ```
- 强行pull
    ```
    git fetch --all 
    git reset --hard origin/master 
    ```
- 修改远程仓库地址
    ```
    git remote set-url origin <仓库地址>
    ```
- 查看记录
    ```bash
    git log
    ```
- 回滚操作
    ```
    # 回到上一个版本
    git reset --hard HEAD^
    # 回到指定版本
    git reset --hard <版本号>
    ```
    ```
    # 第一种情况 未运行git add，回滚一个文件
    $ git status -s
     M test.c
    $ git checkout -- test.c   // git revert
    $ git status -s
    
    # 第二种情况 运行了git add，回滚整个工程
    $ echo test >> test.c
    $ git add test.c    // here is the different
    $ git status -s
     M test.c
    $ git reset --hard HEAD  // git revert, clean all tree
    $ git status -s
    
    # 第三种情况 运行了git add，回滚一个文件
    $ git add test.c   main.c 
    $ git status -s
     M test.c
     M main.c
    $ git reset test.c // unstage the change
    $ git checkout test.c //  discard the unstaged change
    $ git status -s
    ```
- 标签tag
    ```
    # 查看标签
    git tag
    
    # 新建标签
    git tag <标签>
    
    # 删除标签
    git tag -d <标签>
    
    # push 标签
    git push origin <标签>
    
    # 推送所有标签
    git push origin --tags
    ```
- 合并指定文件
    ```
    # 切换到A分支
    git checkout A_branch
    
    # 合并B分支上f文件到A分支上，将B分支上 f 文件追加补丁到A分支上 f文件。你可以接受或者拒绝补丁内容。
    git checkout --patch B_branch f.txt
    ```
- 创建分支
    ```
    # 基于远程分支来创建本地分支
    git checkout -b <branchName> origin/develop
    ```
- 设置分支
    ```
    # 设置当前本地分支关联远程分支
    git branch --set-upstream-to=origin/online online
    ```
    