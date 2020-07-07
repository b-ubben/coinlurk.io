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
    <header className="border border-black bg-darker-grey p-4 z-10">
      <div className="flex flex-col sm:flex-row w-full items-center justify-between m-auto" style={{ maxWidth: '72rem' }}>
        <div>
          <span className="font-bold text-xl text-yellow-700">Coin</span>
          <span className="font-bold text-xl text-gray-300">LURK</span>
          <span className="font-bold text-sm">.io</span>
        </div>
        <div className="text-xs mt-4 sm:mt-0">
          <Formik initialValues={searchInitialValues} onSubmit={handleSearch}>
            {({ values, isSubmitting }) => (
              <Form method="post">
                <fieldset disabled={isSubmitting}>
                  <div className="flex">
                    <Field
                      type="text"
                      placeholder="search (DuckDuckGo)"
                      name="searchTerms"
                      className="border border-black bg-dark-grey rounded-r-none rounded-lg p-2"
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="border border-black border-l-0 rounded-lg rounded-l-none bg-grey text-white px-4 py-2"
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
      </div>
    </header>
  );
}
