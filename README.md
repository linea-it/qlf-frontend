# qlf-frontend

Navegue pelo terminal até o diretorio que deseja usar para o projeto e execulte o comando a seguir.
$ git clone https://github.com/linea-it/qlf-frontend

nesse ponto você terá a seguinte estrutura
.../seu-diretorio/qlf-frontend/

em seguida deve, com o apache já instalado, configurar para apontar para seu novo diretorio.
É necessário alterar dois arquivos de configuração do apache:

Arquivo 1:
execulte o seguinte comando no terminal
$ sudo vi /etc/apache2/apache2.conf

Alterar o trecho:
...
Directory /var/www/>
	Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
...

para:
...
Directory .../seu-diretorio/qlf-frontend/>
	Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
...

Arquivo 2:
execulte o seguinte comando no terminal

$ sudo vi /etc/apache2/sites-available/000-default.conf
ou
$ sudo vi /etc/apache2/sites-available/default.conf

Alterar a linha:

    DocumentRoot /var/www

para:

    DocumentRoot .../seu-diretorio/qlf-frontend/

Após as alterações é necessario reiniciar o apache.
com o comando a seguir:

$ sudo service apache2 restart
