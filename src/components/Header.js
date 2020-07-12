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
    <header className="bg-gray-200 p-4 z-10" style={{ height: 65 }}>
      <div className="flex flex-col sm:flex-row w-full items-center justify-between m-auto">
        <div>
          <span className="font-bold text-xl text-yellow-700">Coin</span>
          <span className="font-bold text-xl text-blue-700">LURK</span>
          <span className="font-bold text-sm">.io</span>
        </div>
        <div className="text-sm mt-4 sm:mt-0">
          <Formik initialValues={searchInitialValues} onSubmit={handleSearch}>
            {({ values, isSubmitting }) => (
              <Form method="post">
                <fieldset disabled={isSubmitting}>
                  <div className="flex">
                    <Field
                      type="text"
                      placeholder="search (DuckDuckGo)"
                      name="searchTerms"
                      className="bg-gray-300 rounded-r-none rounded p-2"
                      autoComplete="off"
                      style={{ width: 225 }}
                    />
                    <button
                      type="submit"
                      className="rounded rounded-l-none bg-blue-700 text-white px-4 py-2"
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
