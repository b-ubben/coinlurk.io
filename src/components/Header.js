import React from 'react';
import { Formik, Form, Field } from 'formik';
import SearchIcon from '../assets/search.svg';

export default function Header() {
  const searchInitialValues = { searchTerms: '' };

  function handleSearch(values, { resetForm }) {
    const { searchTerms } = values;
    const encodedSearchTerms = encodeURIComponent(searchTerms);
    window.open(`https://duckduckgo.com/?q=${encodedSearchTerms}`, '_blank');
    resetForm();
  }

  return (
    <header className="bg-cloudy shadow-md border w-full flex p-4 items-center justify-between z-10">
      <div>
        <span className="font-bold text-xl text-yellow-700">Coin</span>
        <span className="font-bold text-xl text-blue-700">LURK</span>
        <span className="font-bold text-sm">.io</span>
      </div>
      <div className="text-xs">
        <Formik initialValues={searchInitialValues} onSubmit={handleSearch}>
          {({ values, isSubmitting }) => (
            <Form method="post">
              <fieldset disabled={isSubmitting}>
                <div className="flex">
                  <Field
                    type="text"
                    placeholder="search (DuckDuckGo)"
                    name="searchTerms"
                    className="border rounded-r-none rounded-lg p-2"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="rounded-lg rounded-l-none bg-blue-600 text-white px-4 py-2"
                  >
                    <img
                      src={SearchIcon}
                      alt="search"
                      className="object-contain"
                      style={{ maxHeight: '1.1rem' }}
                    />
                  </button>
                </div>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </header>
  );
}
