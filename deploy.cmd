@echo off
:: Deploy on GitHub automatic...

git add .
git commit -m "Bug do i18n corrigido"
git push origin master

echo "Comitado com Sucesso!"
