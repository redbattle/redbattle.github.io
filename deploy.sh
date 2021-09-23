#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com:redbattle/redbattle.github.io.git
# else
#   msg='来自github action的自动部署'
#   githubUrl=https://redbattle:${GITHUB_TOKEN}@github.com/redbattle/redbattle.github.io.git
#   git config --global user.name "redbattle"
#   git config --global user.email "894072666@qq.com"
# fi

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:redbattle/redbattle.github.io.git master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
