"use client";

const FilterErrorPage = ({ error }) => {
  return (
    <div className="error-page">
      <h1>Not Found Page</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterErrorPage;
