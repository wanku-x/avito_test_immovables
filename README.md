# Тестовое задание Avito

## Условие

- Необходимо получить из JSON API список объектов недвижимости.
У каждого есть заголовок, цена, адрес, превью-изображение и уникальный идентификатор (id).
На главной странице их нужно отобразить списком выведя всю доступную информацию о них.
- При клике на отдельный элемент, так же из JSON API, используя id, нужно получить расширенную информацию о нём и вывести
на отдельной странице. На ней дополнительно будет присутствовать описание, имя продавца, и простая галерея фотографий
с возможностью пролистывания

### Требования
- Проект запускается и работает на `localhost`
- Использовать систему контроля версий `git`
- Зависимости не хранятся в проекте, а инсталятся через `npm`
- Можно использовать любые современные фрэйворки и библиотеки (React, Vue, Angular, TypeScript), либо нативный Javascript

### Методы для получения данных (JSON API)
- Список методов API http://134.209.138.34/
- Список объектов http://134.209.138.34/items
- Расширенная информация об объекте http://134.209.138.34/item/:id (пример http://134.209.138.34/item/1849621339)

## Запуск проекта

### Запуск в режиме разработки

```bash
git clone https://github.com/wanku-x/avito_test_immovables.git
cd avito_test
npm i
npm start
```

### Сборка проекта

```bash
git clone https://github.com/wanku-x/avito_test_immovables.git
cd avito_test
npm i
npm run build
```