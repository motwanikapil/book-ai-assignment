import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'react-feather'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='min-h-screen grid place-items-center bg-[#F3F4F6] dark:bg-[#0F172A] transition-colors duration-500'>
      <div className='shadow-md rounded-lg bg-white dark:bg-[#1E293B] max-w-4xl py-16 px-10 m-6 transition-all duration-500'>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-bold text-[#1E293B] dark:text-[#A5B4FC] transition-colors duration-500'>
            API Pricing
          </p>
          <button
            onClick={toggleTheme}
            aria-label='Toggle Theme'
            className='focus:outline-none transform transition-transform duration-500'
          >
            {theme === 'dark' ? (
              <Sun className='text-[#A5B4FC] rotate-180' />
            ) : (
              <Moon className='text-[#1E293B]' />
            )}
          </button>
        </div>
        <p className='text-[#4B5563] dark:text-[#E2E8F0] mt-2 transition-colors duration-500'>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <section className='border-2 rounded-lg mt-5 border-[#334155] transition-colors duration-500'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#F9FAFB] dark:bg-[#1E293B] transition-colors duration-500'>
            <thead className='text-md text-[#E2E8F0] uppercase bg-[#6366F1]'>
              <tr className='rounded-lg'>
                <th className='px-6 py-5'>API</th>
                <th className='px-6 py-5'>Model</th>
                <th className='px-6 py-5'>Price per 1K Tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors duration-500'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-[#E2E8F0]'
                >
                  OpenAI
                </th>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  GPT-3.5
                </td>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  $0.002
                </td>
              </tr>
              <tr className='bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors duration-500'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-[#E2E8F0]'
                >
                  OpenAI
                </th>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  GPT-4
                </td>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  $0.03
                </td>
              </tr>
              <tr className='bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors duration-500'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-[#E2E8F0]'
                >
                  Together AI
                </th>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  Llama-2-70b
                </td>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  $0.0008
                </td>
              </tr>
              <tr className='bg-white dark:bg-gray-800 transition-colors duration-500'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-[#E2E8F0]'
                >
                  Together AI
                </th>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  Llama-2-13b
                </td>
                <td className='px-6 py-4 text-gray-900 dark:text-[#E2E8F0]'>
                  $0.0006
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className='mt-5'>
          <p className='text-[#1E293B] dark:text-[#A5B4FC] text-lg font-semibold transition-colors duration-500'>
            Token Estimation
          </p>
          <p className='text-[#4B5563] dark:text-[#E2E8F0] mt-2 transition-colors duration-500'>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
          <p className='text-[#1E293B] dark:text-[#A5B4FC] mt-10 text-lg font-semibold transition-colors duration-500'>
            Billing
          </p>
          <p className='text-[#4B5563] dark:text-[#E2E8F0] mt-2 transition-colors duration-500'>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
