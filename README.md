**Фильтр по категории**: позволяет отфильтровать продукты по одной или нескольким категориям и сбросить выбор по клику на опцию `All`. Список категорий нужно получить из API.

**Фильтры по статусам**: позволяют отфильтровать продукты по выбранному статусу.

**Поле поиска** позволяет искать в списке продуктов по названию/описанию с учетом фильтров.

*Фильтрация и поиск реализованы на стороне API, нужно только передать правильные параметры. По умолчанию в фильтрах ничего не выбрано*.

## API

Вместе с запуском проекта локально запускается API. С методами API можно ознакомиться на [http://localhost:4000/swagger/](http://localhost:4000/swagger/).

⚠️ Чтобы приблизить работу с API к реальным условиям, запросы иногда будут завершаться с ошибкой. Ответы от API приходят с искусственной задержкой от 100мс до 1000мс. ⚠️

В API два эндпойнта:
#### `GET /api/category` - список категорий
```json
[
  {
    "id": "string",
    "name": "string",
    "type": "string"
  }
]
```
#### `GET /api/product` - список продуктов
```json5
  {
    "results": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "categoryId": "string",
        "categoryName": "string",
        "categoryType": "string", 
        "isLimited": "boolean",
        "isNew": "boolean",
        "price": "number",
        "discount": "number | null"
      }
    ]
  }
```

`GET /api/product` принимает параметры:
- `isNew`  boolean 
- `isLimited`  boolean 
- `category`  [string] 
- `search` string

❕ API ничего не знает про изображения в карточке продукта, поэтому вам нужно сопоставить категорию с картинкой самостоятельно. В макете есть [отдельная секция](https://www.figma.com/file/sOoPi2gOZvfqjOQHa9awMC/Agro.Club-Home-project-Junior-Dev?node-id=740%3A0) со всеми категориями.

## Старт

> Для работы с проектом потребуется [Node.js](https://nodejs.org/en/) версии 14.x.x или выше.

1. Склонировать репозиторий 
```shell
git clone git@github.com:Alqanar/frontend-test.git
```
2. Установить модули
```shell
yarn
```
3. Запустить проект
```shell
yarn start
```

После запуска проект будет доступен на [http://localhost:3000](http://localhost:3000). Внесённые правки будут сразу же отображаться в браузере (перезагружать страницу для этого не нужно).

