let storage = {};
let changeCallback;

const get = (key, callback) => {
  const returnData = key === null ? storage : storage[key];
  callback(returnData);
};

const set = (data, change) => {
  storage = data;

  if (changeCallback) {
    const key = Object.keys(change)[0];

    changeCallback({
      [key]: {
        newValue: key === 'domains' ? data[key] : Object.values(change)[0],
      },
    });
  }
};

const onChanged = (callback) => {
  changeCallback = callback;
};

export {
  get,
  set,
  onChanged,
};
