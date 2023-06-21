exports.truncate = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};

exports.useQuery=(router)=> {
  const hasQueryParams =
    /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
  const ready = !hasQueryParams || Object.keys(router.query).length > 0;
  if (!ready) return null;
  return router.query;
};
