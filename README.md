# surferMarket
Trabajo de Desafío Latam para el curso FullStack JS

**Integrantes son**
1. Nicolás Soza
2. Pablo Torres

## Las tablas a Crear DataBase

Para crear la base de dato del proyecto se sigue la siguiente directriz

**Nombre de la Base de Dato**: surferMarket
## Tablas a Crear

*Para eliminar las tablas si es que existen*

drop table if exists Categories;
drop table if exists OrderItems;
drop table if exists Orders;
drop table if exists Product;
drop table if exists Users;


CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) CHECK (role IN ('buyer', 'seller', 'admin')) NOT NULL,
    profile_image TEXT
);

/*Esta tabla almacenará los productos, incluyendo una referencia al usuario (vendedor).*/
CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    brand VARCHAR(255),
    image_url TEXT,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
);

/*Esta tabla almacenará las órdenes realizadas por los usuarios compradores.*/
CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10, 2) NOT NULL
);

/*Esta tabla almacenará los artículos individuales en una orden (relación entre Orders y Product).*/
CREATE TABLE OrderItems (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES Product(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

/*Esta tabla almacenará las categorías (e.g., tablas, accesorios) que pueden ser asignadas a los productos.*/
CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


 * Explicación de las Relaciones:
**Users:**
   Cada usuario puede ser un comprador o un vendedor, por eso tiene un role.
   Los vendedores tendrán productos en la tabla Product, mientras que los compradores tendrán órdenes en la tabla Orders.

**Product:**
   Cada producto tiene un user_id que referencia al vendedor.
   Cada producto puede tener muchas categorías a través de la tabla intermedia ProductCategories.

**Orders:**
   Cada orden tiene un user_id que referencia al comprador.
   Cada orden tiene un total (total_amount) y contiene muchos productos individuales a través de OrderItems.

**OrderItems:**
   Esta tabla enlaza una orden con los productos comprados, junto con la cantidad y el precio en el momento de la compra.

**Categories:**
   Esta tabla define las categorías que pueden ser asignadas a productos, como "tablas de surf", "accesorios", etc.

**ProductCategories:**
   Esta tabla intermedia define la relación muchos a muchos entre productos y categorías.

* Consideraciones Adicionales:

    He usado ON DELETE CASCADE para las claves foráneas, lo que significa que si se elimina un usuario, sus productos y órdenes asociadas también se eliminarán automáticamente.
    Las relaciones entre tablas como Orders y OrderItems son relaciones uno a muchos, mientras que la relación entre Product y Categories es una relación muchos a muchos.

