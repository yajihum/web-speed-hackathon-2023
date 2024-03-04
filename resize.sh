#!/bin/bash

for file in ./public/images/avatars/*.jpg
do
  sips --resampleHeight 200 $file
done

for file in ./public/images/products/*/*.jpg
do
  sips --resampleHeight 200 $file
done