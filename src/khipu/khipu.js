

export const getbanks = async () => {


    try {
    const response = await client.getBanks();
    // console.log(response)
      
      return response

    } catch (error) {
      console.log(error)
      console.log('getbanks')
    }
  
}