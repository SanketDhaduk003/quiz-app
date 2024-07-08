import React, { Component } from 'react';

class ErrorBoundary extends Component {

  reloadPage = () => {
    window.location.reload();
  };



  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        
        return (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Something went wrong.</h2>
            <p>We're sorry, an error occurred while loading the quiz. Please try again later.</p>
            <button className='mx-3' onClick={this.reloadPage}>Reload Page</button>
            <button className='mx-3' onClick={() => window.history.back()}>Go Back</button>
          </div>
        );
      }
  
      return this.props.children; 
  }
}

export default ErrorBoundary;
