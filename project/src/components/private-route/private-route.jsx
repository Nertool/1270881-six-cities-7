import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthStatus} from '../../const';

function PrivateRoute (props) {
  const { authStatus, path, exact, render } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authStatus === AuthStatus.AUTH ? render(routeProps) : <Redirect to={'/login'} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateInProps = (state) => ({
  authStatus: state.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateInProps)(PrivateRoute);
