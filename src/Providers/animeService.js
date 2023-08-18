const getNewAnime = async (token) => {
  try {
    const res = await fetch(
      "https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
};

export default getNewAnime;
