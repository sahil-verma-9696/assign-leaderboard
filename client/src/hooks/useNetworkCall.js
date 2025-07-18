export default useNetworkCall = (callback, deps) => {
  useEffect(() => {
    callback(deps);
  }, [deps, callback]);
};
