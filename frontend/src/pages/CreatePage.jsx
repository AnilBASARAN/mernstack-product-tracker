import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import  { useState } from 'react'
import { useProductStore } from '../store/product';


const CreatePage = () => {
  const [newProduct,setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });
const toast = useToast();
const {createProduct} = useProductStore();

  const handleAddProduct= async()=>{
    const {success,message} = await createProduct(newProduct)
    if(!success){
      toast({
        "title":"Error",
        description: message,
        status:"error",
        duration: 5000,
        isClosable:true
      })
    }else{
      toast({
        "title":"Success",
        description: message,
        status:"success",
        duration: 5000,
        isClosable:true
      })

    }
    
    console.log(newProduct)
  }

  return (
    <Container maxW={"container.sm"} >
      <VStack
      spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Todo
        </Heading>

    <Box
    w={"full"} bg={useColorModeValue("white","gray.800")}
    p={6} rounded={"lg"} shadow={"md"}
    >
      <VStack spacing={4}>
        <Input
        placeholder='Product Name' name='name' type='text' 
        value={newProduct.name}
        onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
      />

        <Input
        placeholder='Product Price' name='price' type='number' 
        value={newProduct.price}
        onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
      />

        <Input
        placeholder='Product Image URL' name='image' type='text' 
        value={newProduct.image}
        onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
      />

      <Button 
      colorScheme='blue' 
      onClick={handleAddProduct}
      w={"full"}
      >
        Add Product
      </Button>

      </VStack>
    </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage
