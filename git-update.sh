#!/bin/sh

# Menjalankan perintah git add
git add .

# Menjalankan perintah git commit
git commit -m "update"

# Menjalankan perintah git push
git push -u origin main

# Menampilkan pesan sebelum menutup jendela
echo "Press any key to close the window"
read -n 1 -s -r
