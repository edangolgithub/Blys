import axios from "axios";

export const sendVerificationRequest = async (param) => {
  var data = {
    code: param,
  };
  try {
    const resp = await axios.post("https://s8ygumkk09.execute-api.us-east-1.amazonaws.com/blys", data);
    console.log(resp.data);
    return resp.data;
  } catch (err) {
   
    console.error(err);
    return err;
  }
};
