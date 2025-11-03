const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  return await Promise.all(
    urls.map(async (url) => {
      try {
        const res = await httpGet(url);
        const data = JSON.parse(res.body);
        if (res.status === 200) {
          return { "Arnie Quote": data.message };
        } else {
          return { FAILURE: data.message };
        }
      } catch (error) {
        return { FAILURE: error.message };
      }
    })
  );
};

module.exports = {
  getArnieQuotes,
};
