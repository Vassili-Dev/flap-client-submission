import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch, useSelector } from 'react-redux';
import { getSchools } from '../actions/schools';
import { apiInfoSelector, schoolsSelector } from '../selectors/flap';
import { getFlapApiInfo } from '../actions/apiInfo';

// import '../styles/app.sass';

const SchoolsDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchools());
  }, []);

  const schools = useSelector(schoolsSelector);

  return (
    <div>
      <h2>Schools</h2>
      <ul>
        {schools.map(school => (
          <div key={school.CDSCode}>{school.School || school.Website}</div>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const apiInfo = useSelector(apiInfoSelector);

  useEffect(() => {
    dispatch(getFlapApiInfo());
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      {apiInfo &&
        !apiInfo.loading &&
        apiInfo.data &&
        Object.values(apiInfo.data).length && <SchoolsDisplay />}
    </div>
  );
};

export default hot(module)(App);
