# qlf-frontend

## Requirements for development

Install the sencha cmd:

https://www.sencha.com/products/extjs/cmd-download/


## Building the application

```
git clone https://github.com/linea-it/qlf-frontend.git

cd qlf-frontend/quicklook

sencha app build production
```
```
sudo vim /etc/apache2/apache2.conf
```
alterar a linha ...Directory /var/www/html/ para o diretorio onde fez o clone

```
sudo service apache2 restart
```

no navegador entrar com http://localhost/quicklook/

## Development Mode

The simplest way run the app in the browser during development is

``` 
sencha app watch
```
To access the Sencha Cmd web server, use:

http://localhost:1841/