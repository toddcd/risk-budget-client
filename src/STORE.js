function portfolioCollection() {
    return [
        {
            port_id: 1,
            port_name: 'port 1',
            date_create: '2019/8/18',
            funds: [
                {
                    fund_id: 1,
                    ticker: 'EA',
                    name: "Electronic Arts Inc",
                    weight: '0.013754045307443',
                    expected_return: '0.013764705882353',
                    expected_risk: '0.281241476535797'
                },
                {
                    fund_id: 2,
                    ticker: 'BIDU',
                    name: "Baidu Inc",
                    weight: '0.017799352750809',
                    expected_return: '0.023181818181818',
                    expected_risk: '0.330503076314926'
                },
                {
                    fund_id: 3,
                    ticker: 'SPOT',
                    name: "Spotify Technology SA",
                    weight: '0.019902912621359',
                    expected_return: '0.021138211382114',
                    expected_risk: '0.400000000000000'
                },
            ]
        },
        {
            port_id: 2,
            port_name: 'port 2 version 1',
            date_create: '2019/8/18',
            funds: [
                {
                    fund_id: 1,
                    ticker: 'EA',
                    name: "Electronic Arts Inc",
                    weight: '0.013754045307443',
                    expected_return: '0.013764705882353',
                    expected_risk: '0.281241476535797'
                },
                {
                    fund_id: 2,
                    ticker: 'BIDU',
                    name: "Baidu Inc",
                    weight: '0.017799352750809',
                    expected_return: '0.023181818181818',
                    expected_risk: '0.330503076314926'
                },
                {
                    fund_id: 3,
                    ticker: 'SPOT',
                    name: "Spotify Technology SA",
                    weight: '0.019902912621359',
                    expected_return: '0.021138211382114',
                    expected_risk: '0.400000000000000'
                },
            ]
        },
        {
            port_id: 3,
            port_name: 'port 2 version 2',
            date_create: '2019/8/18',
            funds: [
                {
                    fund_id: 1,
                    ticker: 'EA',
                    name: "Electronic Arts Inc",
                    weight: '0.013754045307443',
                    expected_return: '0.013764705882353',
                    expected_risk: '0.281241476535797'
                },
                {
                    fund_id: 2,
                    ticker: 'BIDU',
                    name: "Baidu Inc",
                    weight: '0.017799352750809',
                    expected_return: '0.023181818181818',
                    expected_risk: '0.330503076314926'
                },
                {
                    fund_id: 3,
                    ticker: 'SPOT',
                    name: "Spotify Technology SA",
                    weight: '0.019902912621359',
                    expected_return: '0.021138211382114',
                    expected_risk: '0.400000000000000'
                },
            ]
        }
    ]
}

function portfolio() {
    return [
        {
            id: 1,
            ticker: 'EA',
            name: "Electronic Arts Inc",
            weight: '0.013754045307443',
            expected_return: '0.013764705882353',
            expected_risk: '0.281241476535797',
            fund_perf: [
                {'5/20/2019': '-0.046987455336470'},
                {'5/17/2019': '-0.017575737373737'},
                {'5/16/2019': '0.023044363636800'},
                {'5/15/2019': '0.023263159564344'},
                {'5/14/2019': '0.045896948593164'},
                {'5/13/2019': '-0.036855550815580'},
                {'5/10/2019': '0.006000825117874'},
                {'5/9/2019': '-0.005965030015926'},
                {'5/8/2019': '0.012401530926296'},
                {'5/7/2019': '-0.010985483980685'},
                {'5/6/2019': '0.013621643243243'},
                {'5/3/2019': '-0.020127139404086'},
                {'5/2/2019': '-0.004849240935597'},
                {'5/1/2019': '0.002218689863313'},
                {'4/30/2019': '-0.000844515966077'},
                {'4/29/2019': '0.002752217606095'},
                {'4/26/2019': '0.016024929575449'},
            ]
        },
    ]
}

module.exports = {
    portfolio,
    portfolioCollection
}