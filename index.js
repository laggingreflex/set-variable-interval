module.exports = (fn, intervalFn, ...params) => {

  if (typeof intervalFn !== 'function') {
    const interval = intervalFn;
    intervalFn = () => interval;
  }

  let lastTimeout;
  let lastInterval;
  let ended = false;

  const createNextTimeout = () => {
    if (ended) return;
    lastInterval = intervalFn(lastInterval);
    lastTimeout = setTimeout(() => {
      if (ended) return;
      fn(...params);
      createNextTimeout();
    }, lastInterval)
  }

  createNextTimeout();

  return () => {
    clearTimeout(lastTimeout);
    ended = true;
  };
};
