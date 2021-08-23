@echo off
:: Deploy on GitHub automatic...

rem set /p commit="Digite o nome do commit: "

git add .
git commit -m ""%commit%"
git push origin master

echo "Comitado com Sucesso!"
