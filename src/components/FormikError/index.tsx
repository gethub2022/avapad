import { ErrorMessage } from 'formik';

export function Error(props) {
  return (
    <ErrorMessage {...props}>
      {(msg) => <div className="mt-1 text-xs text-red">{msg}</div>}
    </ErrorMessage>
  );
}
