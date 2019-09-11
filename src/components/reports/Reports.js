import React from "react";

import { setDocumentTitle } from '../meta';

import './reports.css';

const Reports = () => {
  return (
    <div>
      {setDocumentTitle("Reports")}

      <h1>Reports</h1>
    </div>
  )
};

export default Reports;
