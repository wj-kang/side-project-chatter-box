import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PageNotFound.module.css';

const PageNotFound = () => {
  const [isLoading, setLoading] = useState(true);
  const loader = <div className={styles.loader}></div>;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isLoading ? ( //
          loader
        ) : (
          <>
            <h1 className={styles.notfound}>Error 404 | Page Not Found</h1>
            <h3 className={styles.notfound}>Oops. Something is wrong.</h3>
            <Link to="/">Home</Link>
          </>
        )}
      </div>
    </>
  );
};

export default PageNotFound;
