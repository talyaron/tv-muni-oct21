import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import Box from "./Box";

interface Dog {
  message: string;
  status: string;
}

const DogJoi = Joi.object({
  message: Joi.string().required(),
  status: Joi.string(),
});

async function getDogAPI(): Promise<Dog | false> {
  try {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    const { error } = DogJoi.validate(data);
    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const GetADog = () => {
  const [dog, setDog] = useState<Dog | false>(false);
  
  async function handleGetDog() {
    console.log("get dog");
    const dog = await getDogAPI();
    console.log(dog);
    setDog(dog);
  }

  return (
    <div>
      {dog ? <Box src={dog.message} text="A random dog" /> : null}
      <button onClick={handleGetDog}>Get a Random Dog</button>
    </div>
  );
};

export default GetADog;
