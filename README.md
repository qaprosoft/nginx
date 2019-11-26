### Инструкция
Перед началом необходимо:
 - node версии 10 или выше (возможна работа на версии 8);

1. В папке с проектом сделать `npm install` (появиться папка node_modules);
2. Проверить работоспособность можна запустив с помощью команды `npm start` (в браузере открыть localhost:3000);
3. Делаем билд `npm run build` -- появиться папка build;
### Далее инструкция уже связана с [https://github.com/qaprosoft/qps-infra](https://github.com/qaprosoft/qps-infra)
4. В папке nginx заменить папку html на папку build c реакт проекта;
5. В папке nginx/conf.d изменить файл `default.conf.original` указать `путь к папке build вместо папки html`
```location / {
        root   /usr/share/nginx/build;
        index  index.html index.htm;
    }
    
    location = /50x.html {
        root   /usr/share/nginx/build;
    }```
