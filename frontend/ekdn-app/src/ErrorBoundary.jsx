import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError = (error)=> ({
    hasError: true,
    error,
  })
  componentDidCatch = (error, info) => {
    console.error(error, info);
  };
  render = () => {
    const { children } = this.props;
    const { hasError} = this.state;
    if (hasError) {
      return (
        <>
        <div>error</div>
        </>
      )
    }
    return children
  };
}

export default ErrorBoundary