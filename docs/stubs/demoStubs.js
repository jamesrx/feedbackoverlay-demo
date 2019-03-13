import * as storageStubs from './storageStubs';

const location = {
  pathname: '',
  get hostname() {
    return /www[.][^\/]+/.exec(this.pathname)[0]; // eslint-disable-line no-useless-escape
  },
};

const chrome = {
  storage: {
    local: {
      get: storageStubs.get,
      set: storageStubs.set,
    },
    onChanged: {
      addListener: storageStubs.onChanged,
    },
  },
};

const queryData = (data, queryString) => {
  const params = new URLSearchParams(queryString);
  const docId = params.get('docId');
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const queriedData = data.data.list.filter((doc) => {
    const hasDocId = doc.docId === parseInt(docId, 10);
    const isAfterFromDate = fromDate === null || doc.created >= parseInt(fromDate, 10);
    const isBeforeToDate = toDate === null || doc.created <= parseInt(toDate, 10);

    return hasDocId && isAfterFromDate && isBeforeToDate;
  });

  return {
    data: {
      list: queriedData,
    },
  };
};

export {
  chrome,
  location,
  queryData,
};
