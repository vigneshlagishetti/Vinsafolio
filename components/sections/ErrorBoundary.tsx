"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <section className="py-20 px-6">
            <div className="container mx-auto text-center text-muted-foreground">
              <p>Unable to load this section. Please try again later.</p>
            </div>
          </section>
        )
      );
    }

    return this.props.children;
  }
}
