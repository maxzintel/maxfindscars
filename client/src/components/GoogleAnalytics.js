// GoogleAnalytics.js
import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5BPLJYLL4C"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5BPLJYLL4C');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
