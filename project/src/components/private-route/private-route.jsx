import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

function PrivateRoute (props) {
  const { authStatus, path, exact, render } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        // authStatus === AuthStatus.AUTH ? render(routeProps) : <Redirect to={'/login'} />
        render(routeProps)
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

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
