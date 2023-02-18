import axios from "axios";


// log in request
export const checkStatus = async (data) => {
  try {
    // console.log(data);
    const response = await axios.post("http://localhost:3000/check", data);
    
    console.log(response);
    return response.data.gax
  } catch (error) {
   console.log(error);
  }
};
