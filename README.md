# qlf-frontend

## Requirements for development

Install the sencha cmd:

https://www.sencha.com/products/extjs/cmd-download/


## Building the application

```
git clone https://github.com/linea-it/qlf-frontend.git

```
Após o clone será necessario fazer o build no diretorio do app, com o sencha instalado
vá até o diretodio do quicklook onde foi feito o clone
```
cd qlf-frontend/quicklook
```
e rode o seguinte comando 
```
sencha app build
```
É necessário alterar dois arquivos de configuração do apache:

Arquivo 1:
```
sudo vim /etc/apache2/apache2.conf 
```
Alterar a linha:

   <Directory /var/www/>
Para Fica assim:
```
   <Directory /diretorio_onde_foi_feito_o_clone/>
         Options Indexes FollowSymLinks
         AllowOverride All
         Require all granted
   </Directory>
```
Arquivo 2:
```
   $ sudo vim /etc/apache2/sites-available/000-default.conf
```
   ou
```
   $ sudo vim /etc/apache2/sites-available/default.conf
```
Alterar a linha:
```
    DocumentRoot /var/www
```
para
```
    DocumentRoot /diretorio_onde_foi_feito_o_clone/
```
Não esqueça de reiniciar o apache depois:
```
    $ sudo service apache2 restart
```
no browser entrar com http://localhost/quicklook/

## Development Mode

The simplest way run the app in the browser during development is

``` 
sencha app watch
```
To access the Sencha Cmd web server, use:

http://localhost:1841/