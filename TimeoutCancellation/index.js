let cancellable = (fn, args, t) => {
  const cancelFn = () => {
    clearTimeout(timeOutID);
    console.log("Timeout canceled");
  };

  let timeOutID = setTimeout(() => {
    const result = fn(...args); // Call fn with arguments and capture result
    console.log("Function executed:", result); // Log the result
  }, t);

  return cancelFn;
};
const fn1 = (x) => x * 5;
const cancelFn1 = cancellable(fn1, [2], 2000);
setTimeout(cancelFn1, 1000);
