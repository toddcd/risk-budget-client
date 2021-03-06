Risk Budgeting Tool

Demo: https://td3-riskbudget.now.sh/

Client api: https://github.com/toddcd/risk-budget-api

Risk budgeting is a portfolio construction method where capital is allocated based on an individual assets risk and return contributions as it relates to other funds in the portfolio and the over-all investment strategy.

The Risk Budgeting Tool helps provide insight by taking in fund performance along with weight, risk, and return variables that can then be used to analyzed the portfolio and identify potential areas where capital may be redistributed.

![Alt text](./readme-images/rb-landing.png "Screen Shots")&nbsp;&nbsp;&nbsp;&nbsp;
![Alt text](./readme-images/rb-collection-1.png "Screen Shots")&nbsp;&nbsp;&nbsp;&nbsp; 

After using the portfolio template to construct a portfolio, and providing the important performance data for the underlying funds, the portfolio can be imported into the application and persisted to the database. 

![Alt text](./readme-images/rb-collection.png "Screen Shots")&nbsp;&nbsp;&nbsp;&nbsp;
![Alt text](./readme-images/rb-edit-port.png "Screen Shots")&nbsp;&nbsp;&nbsp;&nbsp;

 After the portfolio has been imported, weight, return, and risk variables can be adjusted for each fund and the entire analyzed by the calculation engine.

![Alt text](./readme-images/rb-analysis.png "Screen Shots")

Key Technologies:
React 
CSS
Node
Express
PostgreSQL
