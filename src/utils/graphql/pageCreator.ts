import { getQueryParams, stringifyQueryParams } from 'utils/misc/queryString';

export const pageCreator = (value: number): Location => {
  let queryParamsObj = { page: 1 };
  try {
    queryParamsObj = {
      ...queryParamsObj,
      ...getQueryParams(),
    };
    queryParamsObj.page = value;
  } catch (e) {
    console.error(
      'pageCreator requires react-router location object to work as expected. Please check your code and ensure your are providing a proper location object; searchCreate(value, location)',
    );
  }
  const stringifiedQueryParams = stringifyQueryParams(queryParamsObj);
  return { ...window.location, search: stringifiedQueryParams };
};

export default pageCreator;
