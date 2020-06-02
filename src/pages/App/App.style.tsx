import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
      height: 100%;
  }

  .width-100 {
    width: 100%;
  }
  
  // padding styles
  .no-padding {
    padding: 0px;
  }

  .pt-8 {
    padding-top: 8px;
  }

  .pb-8 {
    padding-bottom: 8px;
  }

  // margin styles
  .no-margin {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .m-10 {
    margin: 10px;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mb-30 {
    margin-bottom: 30px;
  }

  .listing-action-icons {
    color: #d4d7de;
    font-size: 1.2rem;
  }
  
  .listing-action-icons:hover {
    color: #1364ce;
    font-size: 1.3rem;
  }

  // listing table
  .listing-table {
    border-radius: 5px
  }
  .listing-table thead > tr > th {
    background: #f0f6fe !important;
  }
  .ant-table-row-closed {
    background: #f4f5f6;
    * {
      color: #6c768d !important;
    }
  }
  .ant-input-search-icon::before {
    border-left: none !important;
  }
  .h-8em {
    height: 8em;
  }

  // listing page buttons
  .car-button button {
    background: #fdda9e !important;
    color: #763704 !important;
    border: none;
    outline: none;
  }
  .ant-btn-link:not([disabled]):hover {
    opacity: 0.5;
    color: inherit;
  }
  .ant-btn:hover, .ant-btn:focus {
    color: #a3a3a3 !important;
  }
  .ncar-button button {
    background: #b4e8bd !important;
    color: #06582d !important;
    border: none;
    outline: none;
  }
  
  .ant-typography-ellipsis-single-line {
    width: 100%;
  }

  // colors
  .color-black {
    color: black
  }
`;

export default GlobalStyle;
