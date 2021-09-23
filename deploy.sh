#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:redbattle/redbattle.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://redbattle:${GITHUB_TOKEN}@github.com/redbattle/redbattle.github.io.git
  git config --global user.name "redbattle"
  git config --global user.email "zhaiyu_hb@hotmail.com"
fi

git init
git add .
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
