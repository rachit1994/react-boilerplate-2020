/* eslint-disable max-len */
export default {};

// import { getQueryParams } from 'utils/graphql/commonUtils';

// const checkFilterDateString = (dateString: string): boolean => {
//     const dateStringRegex = /^\d{4}([./-])([0]{1}[1-9]{1}|[1]{1}[1-2]{1})\1([0]{1}[1-9]|[1-2]{1}[0-9]{1}|[3]{1}[0-1]{1})((T?)([\d]{2}:)([\d]{2}:)([\d]{2}))?$/;
//     return dateStringRegex.test(dateString);
// };

// const transformUIFilterValues = (values: any, key?: string | undefined): Record<string, any> => {
//     let transformed: object;
//     if (values !== undefined && values !== null && values !== '') {
//       transformed = typeof values === 'boolean' ? values : {};
//     }
//     function transformKeys(obj: any) {
//       if (obj !== undefined && obj !== null && obj !== '') {
//         if (
//           typeof obj === 'string'
//           || typeof obj === 'number'
//           || typeof obj === 'boolean'
//         ) {
//           const isDate = typeof obj === 'string' ? checkFilterDateString(obj) : false;
//           if (key) {
//             transformed[key] = isDate && typeof obj !== 'boolean' ? (moment as any)(obj) : obj;
//           } else {
//             transformed = isDate && typeof obj !== 'boolean' ? (moment as any)(obj) : obj;
//           }
//         } else {
//           const objKeys = Object.keys(obj);
//           for (let i = 0; i < objKeys.length; i += 1) {
//             const current = obj[objKeys[i]];
//             const currentKey = objKeys[i];
//             if (
//               typeof current === 'string'
//               || typeof current === 'number'
//               || typeof current === 'boolean'
//             ) {
//               const isDate = typeof current === 'string'
//                   ? checkFilterDateString(current)
//                   : false;
//               const tempObj = {};
//               tempObj[currentKey] = isDate && typeof current !== 'boolean'
//                   ? (moment as any)(current)
//                   : current;
//               transformed = { ...transformed, ...tempObj };
//             } else if (current instanceof Array) {
//                 transformed[currentKey] = [];
//                 for (let j = 0; j < current.length; j++) {
//                   transformed[currentKey].push(
//                     transformUIFilterValues(current[j]),
//                   );
//                 }
//               } else {
//                 transformed[currentKey] = transformUIFilterValues(
//                   current,
//                   currentKey,
//                 );
//               }
//           }
//         }
//       }
//     }
//     transformKeys(values);
//     return transformed;
//   };


// const transformFilterValues = (values: any, key?: string | undefined) => {
//     let transformed: any;
//     if (values !== undefined && values !== null && values !== '') {
//       transformed = typeof values === 'boolean' ? values : {};
//     }
//     function transformKeysForUI(obj: any) {
//       if (obj !== undefined && obj !== null && obj !== '') {
//         if (
//           typeof obj === 'string'
//           || typeof obj === 'number'
//           || typeof obj === 'boolean'
//         ) {
//           if (key) {
//             transformed[key] = obj;
//           } else {
//             transformed = obj;
//           }
//         } else {
//           const objKeys = Object.keys(obj);
//           for (let i = 0; i < objKeys.length; i++) {
//             if (!objKeys[i].endsWith('__REMOVE')) {
//               const current = obj[objKeys[i]];
//               const currentKey = objKeys[i];
//               if (
//                 typeof current === 'string'
//                 || typeof current === 'number'
//                 || typeof current === 'boolean'
//               ) {
//                 const tempObj = {};
//                 tempObj[currentKey] = current;
//                 transformed = { ...transformed, ...tempObj };
//               } else if (current instanceof Array) {
//                   transformed[currentKey] = [];
//                   for (let j = 0; j < current.length; j++) {
//                     transformed[currentKey].push(
//                       transformFilterValues(current[j]),
//                     );
//                   }
//                 } else {
//                   transformed[currentKey] = transformFilterValues(
//                     current,
//                     currentKey,
//                   );
//                 }
//             } else {
//               continue;
//             }
//           }
//         }
//       }
//     }
//     transformKeysForUI(values);
//     return transformed;
//   };

// export const gqlFilterUIParser = (querystring: string): any | undefined => {
//     let filterObj: any | undefined;
//     try {
//         const queryParams = getQueryParams(querystring);
//         if (typeof queryParams.filter === 'string') {
//         filterObj = JSON.parse(queryParams.filter);
//         }
//         filterObj = transformUIFilterValues(filterObj);
//         console.log('filterObj UI', filterObj);
//     } catch (e) {
//         console.warn(e);
//         filterObj = undefined;
//     }
//     return filterObj;
// };


// export const gqlFilterParser = (queryString: string): Record<string, any> => {
//     let parsedFilterObject = {};
//     try {
//         const queryParams = getQueryParams(queryString);
//         if (typeof queryParams.filter === 'string') {
//         parsedFilterObject = JSON.parse(queryParams.filter);
//         }
//         parsedFilterObject = transformFilterValues(parsedFilterObject);
//         console.log('filterObj for backend', parsedFilterObject);
//     } catch (e) {
//         console.warn(e);
//         parsedFilterObject = {};
//     }
//     return parsedFilterObject;
// };

// export default gqlFilterParser;
