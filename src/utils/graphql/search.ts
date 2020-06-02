import { getQueryParams, stringifyQueryParams } from 'utils/misc/queryString';

export const gqlSearchParser = (): string | string[] | null | undefined => (
    getQueryParams().searchterm
    && typeof getQueryParams().searchterm === 'string'
    ? getQueryParams().searchterm
    : undefined
);

export const searchCreator = (value: string, location: Location = window.location): Location => {
    try {
      const queryParamsObj = getQueryParams();
      const newParamsObj: { searchterm: string | null; page: number } = {
        ...queryParamsObj,
        searchterm: value || null,
        page: 1,
      };
      const stringifiedQueryParams = stringifyQueryParams(newParamsObj);
      return { ...location, search: stringifiedQueryParams };
    } catch (e) {
      return location;
    }
};

export default gqlSearchParser;
