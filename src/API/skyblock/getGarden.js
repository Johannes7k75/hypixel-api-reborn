module.exports = async function (profileId) {
  const SkyblockGarden = require('../../structures/SkyBlock/SkyblockGarden');
  let res;
  try {
    // eslint-disable-next-line no-underscore-dangle
    res = await this._makeRequest(`/skyblock/garden?profile=${profileId}`);
  } catch (e) {}
  if (res?.raw) return res;
  return new SkyblockGarden(res);
};
