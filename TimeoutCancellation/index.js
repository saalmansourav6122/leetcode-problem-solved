let cancellable = (fn, args, t) => {
  let timeOutID;

  const cancelFn = () => {
    clearTimeout(timeOutID);
  };

  timeOutID = setTimeout(() => {
    fn(...args);
  }, t);

  return cancelFn;
};
const fn1 = (x) => x * 5;
const cancelFn1 = cancellable(fn1, [2], 20);
setTimeout(cancelFn1, 50);
