import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Suspense fallback=""><PageError /></Suspense>
      }
  
      return this.props.children; 
    }
  }

function logErrorToMyService(error: Error, errorInfo: ErrorInfo) {
    throw new Error("Function not implemented.");
}

export default ErrorBoundary