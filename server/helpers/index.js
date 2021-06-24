'use strict';

const withPagination = (list, page) => {
  return {
    pagination: {
      total: list.length,
      page,
      pageSize: list.length,
    },
    nodes: list,
  };
};

const validateLimit = (filters = {}) => {
  const defaultLimit = 5;
  const { limit } = filters;
  return limit ? (limit > 10 ? 10 : limit) : defaultLimit;
};

const validatepageSize = (pageSize = 10) => {
  return pageSize > 100 ? 100 : pageSize < 1 ? 10 : pageSize;
};

const validatePage = (page = 1) => {
  return page > 0 ? page : 1;
};

module.exports = {
  withPagination,
  validateLimit,
  validatepageSize,
  validatePage,
};
