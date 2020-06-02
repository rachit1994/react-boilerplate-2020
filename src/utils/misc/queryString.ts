import qsParser, { ParsedQuery } from 'query-string';

export const getQueryParams = (): ParsedQuery<string> => qsParser.parse(
    window
    && window.location
    && window.location.search,
    {
        ignoreQueryPrefix: true,
    } as qsParser.ParseOptions,
);

export const stringifyQueryParams = (
    queryParams: Record<string, any>,
): string => qsParser.stringify(queryParams);

export default getQueryParams;
