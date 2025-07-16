import {SQLiteDatabase} from 'expo-sqlite';

let started = false;

export const setup = async (database: SQLiteDatabase) => {
    try {
        await T_CreateUser(database);
        await T_CreateBook(database);
        await T_CreateAutor(database);
        await T_CreateGenre(database);
        await T_CreateBookAutors(database);
        await T_CreateBookGenres(database);
        
    } catch (error) {
        console.error(error);
        return started
    }

    try{
        await p_Users(database)
    } catch (error) {
        console.error(error);
        return started
    }
    started = true;
    return started
}

const T_CreateUser = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE IF NOT EXISTS Users(
            id_user         VARCHAR(32) NOT NULL PRIMARY KEY,
            password        VARCHAR(16) NOT NULL,
            phone_number    VARCHAR(14) NULL,
            email           VARCHAR(60) NULL
        )`;
    
    await database.execAsync(queery);
}

const T_CreateBook = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE IF NOT EXISTS Books(
            id_book         INTEGER     NOT NULL PRIMARY KEY,
            title           VARCHAR(16) NOT NULL,
            autor           VARCHAR(60) NULL
        )`;
    await database.execAsync(queery);
}

const T_CreateGenre = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE IF NOT EXISTS Genres(
            id_genre    INTEGER     NOT NULL PRIMARY KEY,
            name        VARCHAR(30) NOT NULL
        )`;
    await database.execAsync(queery);
}

const T_CreateAutor = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE IF NOT EXISTS Autors(
            id_autor        INTEGER         NOT NULL PRIMARY KEY,
            name            VARCHAR(150)    NOT NULL,
            nationality     VARCHAR(150)    NOT NULL,
            price           REAL            NOT NULL
        )`;
    await database.execAsync(queery);
}

const T_CreateBookAutors = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE IF NOT EXISTS BookAutors(
            id_book     INTEGER NOT NULL,
            id_autor    INTEGER NOT NULL,
            FOREIGN KEY(id_book)    REFERENCES Books(id_book),
            FOREIGN KEY(id_autor)   REFERENCES Autors(id_autor)
        )`;
    await database.execAsync(queery);
}

const T_CreateBookGenres = async (database: SQLiteDatabase) =>{
    const queery = `
        CREATE TABLE    IF NOT EXISTS BookGenres(
            id_book     INTEGER NOT NULL,
            id_genre    INTEGER NOT NULL,
            FOREIGN KEY(id_book)    REFERENCES Books(id_book),
            FOREIGN KEY(id_genre)   REFERENCES Genres(id_genre)
        )`;
    await database.execAsync(queery);
}

const p_Users = async (database: SQLiteDatabase) =>{
    const queery = `
            DELETE FROM Users;
            INSERT INTO Users (id_user, password, phone_number, email) VALUES
            ('canhadas', '123456789', '11999998888', 'user01@example.com'),
            ('mdias', '9993348', 43999851180, 'matheusdiasmelo@gmail.com'),
            ('user03', '12345678', '11988887777', NULL);
            `;
    await database.execAsync(queery);
}

export async function startDatabase(database: SQLiteDatabase){
    try{
        if (!started)
            await setup(database).catch(console.error)
    } catch(error){
        console.error(error);
    }
    console.log('Database started')
    console.log('Database populated')
    
}