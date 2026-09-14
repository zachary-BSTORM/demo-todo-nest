# Création du projet 
- Création d'un nouveau projet

- Paramètres disponible 
  - p = choisir le gestionnaire de packages

  - s = ne pas installer les nodes modules

```bash
nest new nom_projet 
```

# Commande pour lancer l'application

```bash
npm run start
```

```bash
npm run start:dev
```

# Fonctionnement

- Controlleur : Gère les requetes et les réponses
- Service : Gère la logique
- module : Permet de gérer la relation entre plusieurs fichier ainsi que la structure


# Commandes de génération
- Commande pour la génération de controlleur
```bash
nest generate controller nom_controlleur
```

- Commande pour la génération du service
```bash
nest generate service nom_service
```

- Commande pour la génération du module
```bash
nest generate module nom_module
```

# Implémentation 

- Le module permet de faire le liens entre plusieurs éléments 
- il contient un décorateur @Module({}) qui sera le liens entre nos éléments

- app.module.ts
```ts
@Module({
  imports: [TodosModule],       // module externe qui est importé
  controllers: [AppController], // défini le controlleur utilisé
  providers: [AppService],      // défini le service utilisé
})
```

- todos.module.ts
```ts
@Module({
  controllers: [AppController], // défini le controlleur utilisé pour ce module
  providers: [AppService],      // défini le service rendu accessible
})
```

# Models

- Créer les entités et dto nécéssaires pour l'application
    - Todo : Entity
    - CreateTodo : Dto
    - UpdateTodo : Dto

  
# Service 
- Implémentation des methodes utilisé

# Controlleur
- injection d'un ou plusieurs services dans le controlleur :

```ts
    constructor( private readonly todoService : TodosService ){}
```


- Verbe : Get - Post - Put - Patch - Delete => from '@nestjs/common'
```ts
    @Get()
```

- Methode : find - findAll ...
```ts
    @Get()
    findAll() : Todo[]{
    }
```

- Paramètres de methodes
  - Route
  ```ts
   @Get(':id')
    findOne(@Param('id' , ParseIntPipe) id : number) : Todo{
        return this.todoService.findOne(id)
    }
  ```

  - Body
  ```ts
    @Post()
    create(@Body() createTodoDto : CreateTodo) : Todo{
        return this.todoService.create(createTodoDto)
    }
  ```

  - Route & body
    ```ts
    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id : number,
        @Body() updatedTodoDto : UpdateTodo,
    ) : Todo{
       return this.todoService.update(id,updatedTodoDto)
    }
    ```

