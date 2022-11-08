import React from "react";

function SearchForm() {
  return (
    <div className="searchForm">
      <div class="mb-3">
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              class="form-control"
              placeholder="Enter your city"
              id="city-input"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="btn btn-primary w-100"
              id="search-button"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Current"
              class="btn btn-success w-100"
              id="current-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
