import { getQueryParams } from 'utils/misc/queryString';

interface PageParser {
    first: number;
    after: number;
}
export const getCurrentPageNumber = (): number => {
    try {
        const queryParams = getQueryParams();
        const typeCastedPage = typeof queryParams.page === 'string' ? parseInt(queryParams.page, 10) : 1;
        const currentPageNumber = (
            queryParams.page
            && !Number.isNaN(typeCastedPage)
            && typeCastedPage
        ) || 1;
        return currentPageNumber;
      } catch (e) {
        return 1;
      }
};

export const pageParser = (limit = 20): PageParser => (
    {
        first: limit,
        after: (getCurrentPageNumber() - 1) * limit,
    }
);
