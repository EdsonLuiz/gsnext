import classNames from "classnames";

const ErrorMessage = ({ message }) => {
  return (
    <p className="inline-block px-3 mt-1 text-sm text-red-500">{message}</p>
  );
};

const SuccessMessage = () => {
  return (
    <p className="p-3 text-sm bg-green-100 border rounded-md border-success text-success">
      Success. Please check your inbox and confirm your email.
    </p>
  );
};

export const SignupForm = ({ title }) => {
  const isLoading = false;
  const formClass = classNames({
    "flex items-center p-1 border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4": true,
    "border-gray-100 border-gray-100": isLoading,
  });

  const inputClass = classNames({
    "w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none": true,
    "opacity-50 cursor-not-allowed": isLoading,
  });

  const buttonClass = classNames({
    "flex-shrink-0 px-2 py-1 text-sm text-white bg-red-500 border-4 border-red-500 rounded hover:bg-red-600": true,
    "opacity-50 cursor-not-allowed": isLoading,
  });
  return (
    <>
      <p className="p-1 mb-2">{title}</p>
      <SuccessMessage />
      <form className="max-w-sm">
        <div className={formClass}>
          <input
            className={inputClass}
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button disabled={isLoading} className={buttonClass}>
            {isLoading ? "Processing" : "Sign Up"}
          </button>
        </div>
        <ErrorMessage message="Please enter a valid e-mail" />
      </form>
    </>
  );
};
