# Exo 1 Création d'un CRUD simple

- Boissons

- Entity : Drink
```ts
id : number
nom : string
type : string
price : number
stock : number
imageurl : string
createdAt : Date
exp : Date
```

#### Dtos
- Create : CreateDrink
```ts
nom : string
type : string
price : number
stock : number
imageurl : string
exp : Date
```

- Update : UpdateDrink
```ts
nom : string
price : number
stock : number
imageurl : string
```
- UpdateStock : UpdateStockDrink
```ts
stock : number
```


#### Endpoints 

- Create
- FindAll
- FindOne
- Update
- Delete

-UpdateStock

