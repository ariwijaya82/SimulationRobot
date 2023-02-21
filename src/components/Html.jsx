import React from 'react';
import PropTypes from 'prop-types';

export default function Html({
  title,
  description,
  styles,
  scripts,
  app,
  children,
}) {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>
  )
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired
    }).isRequired
  ),
  scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
  app: PropTypes.object,
  children: PropTypes.string.isRequired,
};

Html.defaultProps = {
  styles: [],
  scripts: [],
};