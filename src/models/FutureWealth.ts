interface FutureWealthOptions {
    actualWealth: number,
    annualInvest: number,
    years: number,
    repartitionWealthAB: number,
    repartitionInvestAB: number,
    averageYieldA: number,
    averageYieldB: number,
    taxationA: number,
    taxationB: number,
    withdrawalRate: number,
    inflationRate: number
  }

  interface FutureWealthResults { 
    passiveIncome: number,
    finalBrutCapital: number,
    finalNetCapital: number,
    finalNetCapitalWithInflation: number,
    investments: number,
    taxation: number,
    details: FutureWealthResultsDetails[]
  }

  interface FutureWealthResultsDetails { 
    investmentAnnual: number,
    investmentTotal: number,
    interestsAnnual: number,
    interestsTotal: number,
    valueTotal: number
  }