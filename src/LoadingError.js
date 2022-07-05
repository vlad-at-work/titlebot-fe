const LoadingError = () => {
  return <article class="message">
    <div className="message-header">
      <p>Invalid URL!</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body">
      Double check that your URL is properly formatted such as <strong>https://www.google.com</strong>
    </div>
  </article>;
};

export default LoadingError;
