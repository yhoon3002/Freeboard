import axios from "axios";
import { useEffect, useState } from "react";

export default function RestOpenApi() {
  const [dogApiUrl, setDogApiUrl] = useState("");

  useEffect(() => {
    const dog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogApiUrl(result.data.message);
    };
    dog();
  }, []);

  return (
    <>
      <img src={dogApiUrl} />
    </>
  );
}
