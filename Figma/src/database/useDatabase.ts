import { useSQLiteContext } from "expo-sqlite"

export type User = {
    id_user:        string,
    password:       string,
    phone_number:   string,
    email:          string
}

export function useDatabase(){
    const db = useSQLiteContext()
    async function login(data: Omit<User, 'phone_number' | 'email'>){
        const user = `
            SELECT id_user from Users
            WHERE id_user = $id_user
        `
        const validate = `
            SELECT id_user, password from Users
            WHERE
                id_user  = $id_user AND 
                password = $password
        `
        const check_user        = await db.prepareAsync(user)
        const validate_user    = await db.prepareAsync(validate)

        try{
            const user_exists = await check_user.executeAsync({
                $id_user: data.id_user  
            })
            const { value: exists } = await user_exists[Symbol.asyncIterator]().next();

            if(!exists){
                throw ReferenceError('User doesnt exists!')
            }
            
            const user = await validate_user.executeAsync({
                $id_user: data.id_user,
                $password: data.password
            })
            const {value: valid} = await user[Symbol.asyncIterator]().next();

            if(!!valid){
                return true
            }
            return false
        } catch (error) {
            if (error instanceof ReferenceError) {
                throw error;
            } 
            else if (error instanceof RangeError) {
                throw error;
            } 
            else {
                throw new Error('Internal Error');
            }
        }
    }
    return {login}
}