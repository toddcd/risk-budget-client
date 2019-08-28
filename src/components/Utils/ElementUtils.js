import React from 'react'
import {format as formatDate} from 'date-fns'
import CSVReader from "react-csv-reader";
import './ElementUtils.css'

export function NiceDate({date, format = 'Do MMMM YYYY'}) {
    return formatDate(date, format)
}

export function Hyph() {
    return <span className='Hyph'>{' - '}</span>
}

export function Button({className, ...props}) {
    return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({className, ...props}) {
    return (
        <textarea className={['Textarea', className].join(' ')} {...props} />
    )
}

export function Input({className, ...props}) {
    return (
        <input className={['Input', className].join(' ')} {...props} />
    )
}

export function Required({className, ...props}) {
    return (
        <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
    )
}

export function Section({className, list, ...props}) {
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

        data.forEach(row => {
            // build fund objects and add to the porfolio
            const key = row[0].toLowerCase().replace(' ', '_')
            row.forEach((col, col_id) => {
                if (col_id !== 0) {
                    const fundExists = portfolio.funds.some(fund => {
                        return fund.id === col_id
                    })
                    if (!fundExists) {
                        addFund(portfolio, col_id, col)
                    } else {
                        if (!key.includes('/')) {
                            addFundMetaData(key, portfolio, col_id, col)
                        } else {
                            addFundPerfData(key, portfolio, col_id, col)
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

function addFund(portfolio, id, ticker) {
    let fund = new portFund(id, ticker);
    portfolio.funds.push(fund)
}

function addFundMetaData(key, portfolio, col_id, col) {
    let key_name = ''
    if (key === 'expected_return') {
        key_name = 'return'
    } else if (key === 'expected_risk') {
        key_name = 'risk'
    } else {
        key_name = key
    }
    portfolio.funds[col_id - 1][key_name] = (key_name === 'name' ? col : (col * 100).toFixed(3))
}

function addFundPerfData(key, portfolio, col_id, col) {
    portfolio.funds[col_id - 1].fund_perf.push({[key]: col})
}

function getDate() {
    const d = new Date(Date.now());
    return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
}

// fund object
function portFund(id, ticker) {
    this.id = id;
    this.ticker = ticker;
    this.fund_perf = [];
}