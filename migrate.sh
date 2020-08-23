#!/usr/bin/bash
echo -n INPUT_DIR_NAME: 
read dir

echo -n INPUT_REPOSITORY_NAME: 
read repo

cd ../
git clone https://github.com/tyamap/$repo
cd study/

mkdir $dir
touch $dir/.gitkeep 
git add -A $dir/
git commit -m "create $dir dir"
git remote add $dir ../$repo
git fetch $dir

git merge --allow-unrelated-histories -X subtree=$dir $dir/master

rm $dir/.gitkeep
rm -rf ../$repo