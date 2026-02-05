type ErrorReporter = {
  capture: (error: Error, context?: Record<string, unknown>) => void;
};

class ConsoleReporter implements ErrorReporter {
  capture(error: Error, context?: Record<string, unknown>) {
    const payload = {
      message: error.message,
      name: error.name,
      context: context || {}
    };
    console.error(JSON.stringify(payload));
  }
}

export function getErrorReporter(): ErrorReporter | null {
  const dsn = process.env.ERROR_REPORTING_DSN;
  if (!dsn) {
    return null;
  }
  // Placeholder adapter: swap to a real provider when ready.
  return new ConsoleReporter();
}
