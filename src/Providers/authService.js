import { EMAIL } from "../Common/constants";

const getAuthToken = async () => {
  try {
    const res = await fetch(
      "https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken",
      {
        method: "POST",
        body: JSON.stringify({
          email: EMAIL,
        }),
      }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
};

export default getAuthToken;
