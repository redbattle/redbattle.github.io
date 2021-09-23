#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

git init
git add -
git commit -m 'deploy'
git push -f git@github.com:redbattle/redbattle.github.io.git master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
