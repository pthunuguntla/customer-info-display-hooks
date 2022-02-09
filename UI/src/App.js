import "./App.css";
import ErrorBoundary from './ErrorBoundary';
import CustomerInfo from './components/customer-info'

import qs from "qs";
import { createBrowserHistory } from "history";
import { useState, useEffect } from "react";

function App() {

  const [ pageNumber, setPageNumber] = useState(1)

  const history = createBrowserHistory();

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.pageNumber) {
      setPageNumber(Number(filtersFromParams.pageNumber));
    }
  }, []);


  return (
    <ErrorBoundary>
      <CustomerInfo initialPageNumber={pageNumber}/>
    </ErrorBoundary>
  );
}

export default App;
