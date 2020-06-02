import { getQueryParams } from 'utils/misc/queryString';

const sorterParser = (
    defaultSort = 'modified__DESC',
): string => (getQueryParams().sort as string) || defaultSort;

export default sorterParser;
