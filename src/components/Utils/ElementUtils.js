import React from 'react'
import { format as formatDate } from 'date-fns'
import CSVReader from "react-csv-reader";
import './ElementUtils.css'

export function NiceDate({ date, format='Do MMMM YYYY' }) {
  return formatDate(date, format)
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}

export function Section({ className, list, ...props }) {
  const classes = [
    'Section',
    list && 'Section--list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}

export function FileReader({className, ...props}) {
  
  const uploaded = data => {
    // porfolio object
    const portfolio = {
      id: null,
      name: '',
      date_created: getDate(),
      funds: []
    }

    data.forEach((row, row_id) => {
      // build fund objects and add to the porfolio
      const fund_key = row[0].toLowerCase().replace(' ', '_')

      row.forEach((col, col_id) => {
        if (col_id !== 0) {
          // check to see if fund has been created
          const exists = portfolio.funds.some(fund => {
            return fund.id === col_id
          })

          //if not exist then create the fund and add to the portfolio
          if (!exists) {
            // create new fund with id and ticker
            let fund = new portFund(col_id, col);
            portfolio.funds.push(fund)
          } else {
            // if fund exists and item is not performance related
            // then add to fund
            if (!fund_key.includes('/')) {
              portfolio.funds[col_id - 1][fund_key] = col
            } else {
              // if fund exists and item IS perf related
              // then add to fund performance array
              portfolio.funds[col_id - 1].fund_perf.push({[fund_key]: col})
            }
          }
        }
      })
    })

    props.fileUploaded(portfolio);
  }

  return (
        <CSVReader
            cssClass="react-csv-input"
            cssInputClass="csv-input"
            label="Select Portfolio CSV File"
            onFileLoaded={uploaded}
            inputStyle={{padding: '10px'}}
        />
  );
}

function getDate() {
  const d = new Date(Date.now());
  return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
}

// fund object
function portFund(id, ticker) {
  this.id = id;
  this.ticker = ticker;
  this.name = null;
  this.expected_return = null;
  this.expected_risk = null;
  this.weight = null;
  this.fund_perf = [];
}