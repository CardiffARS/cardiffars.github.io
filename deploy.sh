#! /bin/bash
set -e # stop at first failing command

hugo -v
cd public

git init
git config user.name "Cardiff ARS"
git config user.email "officers@cardiffars.org.uk"

echo "www.cardiffars.org.uk" > CNAME
cp -r ../.circleci .

git add .
git commit -m "Deploy from CircleCI"

# use --quiet to avoid printing token in build logs
git push --force --quiet "https://${GH_TOKEN}@github.com/cardiffars/cardiffars.github.io.git" master:master
