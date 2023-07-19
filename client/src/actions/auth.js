export const signin = async ( formData, navigate) => {
    try{
        const {data} =  await 
        navigate('/')
    }
    catch (err){
        console.log(err)
    }
} 

export const signup = async (formData, navigate) => {
    try {

        navigate('/')
    } catch (err){
        console.log(err)
    }
}