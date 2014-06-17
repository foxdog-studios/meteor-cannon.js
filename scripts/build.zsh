#!/usr/bin/env zsh

setopt ERR_EXIT
setopt NO_UNSET

repo=$(realpath "$(dirname "$(realpath -- $0)")/..")
build=$repo/build

src=$repo/lib/cannon.js/build/cannon.js
dst=$build/$src:t

rm --force --recursive --verbose $build
mkdir --parents --verbose $build
cp --verbose $src $dst

patch $dst < ${dst:t}.patch

